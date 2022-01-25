import axios from './api.config';

export default {
    login: (data: UserLoginCredentials) => {
        return axios({
            url: "/user/login",
            method: "post",
            data
        })
    }
}

