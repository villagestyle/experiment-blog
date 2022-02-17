import { AxiosRequestConfig, AxiosResponse } from "axios";

interface AxiosRequestConfigExtends extends AxiosRequestConfig {
    vConfig?: VConfig
}

interface AxiosResponseExtends extends AxiosResponse {
    vConfig?: VConfig
}

interface VConfig {
    showLoading: boolean;
}