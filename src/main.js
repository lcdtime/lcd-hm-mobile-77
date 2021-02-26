import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 公共头样式
import '@/styles/index.scss'
// 它会根据的手机尺寸来调整rem的基准值：html标签上的font-size。
import 'amfe-flexible'
// 导入组件模块
import '@/utils/vant-ui'
// 创建 axios 实例, 进行基本配置初始化,  使用自定义的方式
import http from './utils/requset.js'
Vue.prototype.$http = http
//  Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
// 按需导入如将并注册(自动导入yarn add babel-plugin-import -D)
// import { Button, Icon } from 'vant'
// Vue.use(Button, Icon, Switch) // 错误的写法
// 链式操作
// Vue
// .use(Button)
// V.use(Icon)
// .use(Switch)
// Vue.use(Button)
// Vue.use(Icon)
// Vue.use(Switch)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
