import { setToken, removeToken, setUserInfo, removeUserInfo } from "src/utils/auth";

const state = {
  token: '',
  info: {}
};

const mutations = {
  SET_TOKEN: (state: any, value: any) => {
    state.token = value
  },

  SET_USER_INFO: (state: any, value: any) => {
    state.info = value
  }
};

const actions = {
  // 登录
  login({ commit }: any, userInfo: UserLoginCredentials) {
    userInfo.username = userInfo.username.trim()
    return new Promise((resolve, reject) => {
      if (userInfo.username === 'admin' && userInfo.password === '12345567') {
        setToken('0123456789')
        setUserInfo(userInfo)

        commit('SET_TOKEN', '0123456789')
        commit('SET_USER_INFO', userInfo)

        resolve(true)
      } else {
        reject()
      }
    })
  },

  // 退出登录
  logout({ commit }: any) {
    return new Promise((resolve, reject) => {
      removeToken()
      removeUserInfo()

      commit('SET_TOKEN', '')
      commit('SET_USER_INFO', {})

      resolve(true)
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};