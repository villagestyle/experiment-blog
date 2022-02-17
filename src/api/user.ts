import axios from './api.config';

export default {
    login: (data: UserLoginCredentials) => {
        return axios.vRequest({
            url: "/user/login",
            method: "post",
            data,
            vConfig: {
                showLoading: true
            }
        })
    }
}

