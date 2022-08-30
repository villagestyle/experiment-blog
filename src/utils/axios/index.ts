import axios, {
  Axios,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";
import {
  AxiosRequestConfigExtends,
  AxiosResponseExtends,
  NullAble,
  VConfig
} from "../../types/axios";

export class VAxios extends Axios {
  private requestQueue: Map<string, AxiosRequestConfigExtends> = new Map();
  public requestInterceptors: NullAble<(
        config: AxiosRequestConfigExtends
      ) => AxiosRequestConfigExtends | Promise<AxiosRequestConfigExtends>> = null


  public responseInterceptors: NullAble<(responseConfig: AxiosResponseExtends) => Promise<AxiosResponseExtends>> = null;

  private instance: NullAble<AxiosInstance> = null;
  private defaultVConfig: VConfig = { showLoading: false };

  constructor(config?: AxiosRequestConfig) {
    super();
    this.createInstance(config);
  }

  createInstance(config?: AxiosRequestConfigExtends) {
    this.defaultVConfig = config?.vConfig || this.defaultVConfig;
    delete config?.vConfig;
    this.instance = axios.create(config);
    this.init();
  }

  init() {
    this.instance?.interceptors.request.use(config => {
      if (this.requestInterceptors && this.verifyURL(config.url)) {
        const extendsConfig = this.requestQueue.get(config.url);

        if (extendsConfig) return this.requestInterceptors(extendsConfig);

        return this.requestInterceptors(config);
      }
      return config;
    });

    this.instance?.interceptors.response.use(async responseConfig => {
      const url = responseConfig.config.url;
      if (this.responseInterceptors && url) {
        const extendsConfig = this.requestQueue.get(url);

        if (extendsConfig) {
          this.requestQueue.delete(url);
        }

        return await this.responseInterceptors({
          ...responseConfig,
          vConfig: extendsConfig?.vConfig
        });
      }
      return responseConfig;
    });
  }

  vRequest<T = any, R = AxiosResponse<T, any>>(
    config: AxiosRequestConfigExtends
  ): Promise<R> {
    if (this.verifyURL(config.url)) {
      this.requestQueue.set(config.url, { ...config, vConfig: Object.assign(config.vConfig || {}, this.defaultVConfig) });
      delete config.vConfig;
      const request = this.instance?.request<T, R>({
        ...config,
        url: config.baseURL ? config.baseURL + config.url : config.url,
      });

      return request ? request : Promise.reject();
    } else {
      return Promise.reject();
    }
  }

  verifyURL(url: unknown): url is string {
    return typeof url === "string";
  }
}
