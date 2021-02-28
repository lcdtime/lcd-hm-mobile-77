// 封装一个token方便管里添加
const tokenKey = 'lcd-hm-mobile'
// 存储token
export const setToken = (objToken) => {
  return localStorage.setItem(tokenKey, JSON.stringify(objToken))
}
// 获取token {}-----
export const getToken = () => {
  return JSON.parse(localStorage.getItem(tokenKey))
}
// 删除token
export const removeItem = () => {
  localStorage.removeItem(tokenKey)
}
