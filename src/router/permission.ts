/* 路由守卫*/

import router from '.'
import store from 'src/store'
import { getToken, getUserInfo } from "src/utils/auth";

const whiteList: string[] = [] // 白名单

// 路由拦截
router.beforeEach(async (to, from, next) => {
  // 设置页面标题
  document.title = '博客'

  let hasToken = true

  const token = getToken()
  const userInfo = getUserInfo()

  store.commit('user/SET_TOKEN', token)
  store.commit('user/SET_USER_INFO', userInfo)

  if (hasToken) {
    next()
  } else {
    /* 没有登录 没有参数的情况*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免费登录白名单中 直接进入
      next()
    } else {
      // 其他没有访问权限的页面将被重定向到登录页面
      next('/404')
    }
  }
})

router.afterEach(() => {
})
