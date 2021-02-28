// 2 创建 axios 实例, 进行基本配置初始化,  使用自定义的方式。
import axios from 'axios'
// 导入库的实例
import store from '@/store'
// 原地址: http://ttapi.research.itcast.cn/app/
// 现地址: http://toutiao-app.itheima.net/，需要去掉/app路径
// 原接口：url: '/app/v1_1/articles'，现在需要删除'app'：url: '/v1_1/articles'
// 创建一个axios实例, 进行基本的配置初始化, http是包含了原有的axios的功能, 并初始化了一些配置
const http = axios.create({
  baseURL: 'http://toutiao-app.itheima.net'
})
// 导出  入口文件上挂载到 vue 原型, 将来所有的组件中, 都可以 this.$http 使用这个方法
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  const token = store.state.user.tokenInfo.token
  // 判断有无token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // 错误做些什么
  return Promise.reject(error)
})
// 响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么,可以简化取响应式数据response.data
  return response
}, function (error) {
  this.Promise.reject(error)
})
export default http
