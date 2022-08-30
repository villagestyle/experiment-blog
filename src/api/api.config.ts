import axios from "axios";
import { ElMessage } from "element-plus";
import { AxiosRequestConfigExtends, AxiosResponseExtends } from "../types/axios";
import { VAxios } from '../utils/axios';

const instance = new VAxios({
    baseURL: "http://localhost:5050"
});

instance.requestInterceptors = (config: AxiosRequestConfigExtends) => {
    console.log(config.vConfig?.showLoading);
    if (config.vConfig?.showLoading) {
        console.log('获取到showLoading');
    }
    return config;
}

instance.responseInterceptors = (config: AxiosResponseExtends) => {
    console.log('responseInterceptors', config);
    return Promise.resolve(config);
}

const data = await instance.vRequest<{ key: string }>({
    method: 'get',
    url: "/",
    params: {
        a: 1
    }
})

data.config.data

export default instance;
