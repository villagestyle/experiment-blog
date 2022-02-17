import axios, {
  Axios,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios";
import {
  AxiosRequestConfigExtends,
  AxiosResponseExtends
} from "../../types/axios";

export class VAxios extends Axios {
  private requestQueue: Map<string, AxiosRequestConfigExtends> = new Map();
  public requestInterceptors:
    | ((
        config: AxiosRequestConfigExtends
      ) => AxiosRequestConfigExtends | Promise<AxiosRequestConfigExtends>)
    | null = null;

  public responseInterceptors:
    | ((responseConfig: AxiosResponseExtends) => Promise<AxiosResponseExtends>)
    | null = null;

  private instance: AxiosInstance | null = null;

  constructor(config?: AxiosRequestConfig) {
    super();
    this.createInstance(config);
  }

  createInstance(config?: AxiosRequestConfig) {
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
          return await this.responseInterceptors({
            ...responseConfig,
            vConfig: extendsConfig.vConfig
          });
        }

        return await this.responseInterceptors(responseConfig)
      }
      return responseConfig;
    });
  }

  vRequest<T = any, R = AxiosResponse<T, any>>(
    config: AxiosRequestConfigExtends
  ): Promise<R> {
    if (this.verifyURL(config.url)) {
      this.requestQueue.set(config.url, { ...config });
      delete config.vConfig;
      const request = this.instance?.request<T, R>(config);

      return request ? request : Promise.reject();
    } else {
      return Promise.reject();
    }
  }

  verifyURL(url: unknown): url is string {
    return typeof url === "string";
  }
}
