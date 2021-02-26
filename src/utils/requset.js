// 2 创建 axios 实例, 进行基本配置初始化,  使用自定义的方式。
import axios from 'axios'
// 原地址: http://ttapi.research.itcast.cn/app/
// 现地址: http://toutiao-app.itheima.net/，需要去掉/app路径
// 原接口：url: '/app/v1_1/articles'，现在需要删除'app'：url: '/v1_1/articles'
// 创建一个axios实例, 进行基本的配置初始化, http是包含了原有的axios的功能, 并初始化了一些配置
const http = axios.create({
  baseURL: 'http://toutiao-app.itheima.net'
})
// 导出  入口文件上挂载到 vue 原型, 将来所有的组件中, 都可以 this.$http 使用这个方法
export default http
