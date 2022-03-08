const state = {
  info: {}
};

const mutations = {
};

const actions = {
  // 登录
  login({ commit }: any, userInfo: UserLoginCredentials) {
    userInfo.username = userInfo.username.trim()
    return new Promise((resolve, reject) => {
      if (userInfo.username === 'admin' && userInfo.password === '12345567') {
        resolve(true)
      } else {
        reject()
      }
    })
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};