/**
 * 将数据存储在 缓存 中的方法
 */
const TokenKey = 'EXPEROMENT—BLOG-TOKEN'
const UserInfoKey = 'EXPEROMENT—BLOG-USERINFO'

export const getToken = () => {
  const data = localStorage.getItem(TokenKey) || ''
  const res = JSON.parse(data)
  return res || ''
}
export const setToken = (data: any) => {
  localStorage.setItem(TokenKey, JSON.stringify(data))
}
export const removeToken = () => {
  localStorage.removeItem(TokenKey)
}

export const getUserInfo = () => {
  const data = localStorage.getItem(UserInfoKey) || ''
  const res = JSON.parse(data)
  return res || {}
}
export const setUserInfo = (data: any) => {
  localStorage.setItem(UserInfoKey, JSON.stringify(data))
}
export const removeUserInfo = () => {
  localStorage.removeItem(UserInfoKey)
}
