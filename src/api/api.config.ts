import axios from "axios";
import { ElMessage } from "element-plus";

const instance = axios.create({
    baseURL: "http://localhost:5050"
});

// 请求拦截
instance.interceptors.request.use(config => {
  // TODO: 携带token
  config.headers = { ...config.headers, token: "" };
  return config;
});

// 返回拦截
instance.interceptors.response.use(res => {
    if (res?.data?.code === 200) {
        // 成功回调
        return Promise.resolve(res.data);
    } else {
        // 失败拦截
        ElMessage.error(res.data.msg);
        return Promise.reject(res.data);
    }
})

export default instance;
