import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//  Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
// 按需导入如将并注册(自动导入yarn add babel-plugin-import -D)
import { Button, Icon, Switch } from 'vant'
// Vue.use(Button, Icon, Switch) // 错误的写法
// 链式操作
// Vue
// .use(Button)
// .use(Icon)
// .use(Switch)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Switch)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
