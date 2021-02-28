import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登陆组件、
import Login from '@/views/Login'
// layout组件
import LayoutIndex from '@/views/layout'
// 导入内容tabbar组件
import Homeindex from '@/views/layout/Home'
import Questionindex from '@/views/layout/Question'
import Videoindex from '@/views/layout/Video'
import Userindex from '@/views/layout/User'
// 搜索组件
import SearchIndex from '@/views/Search'
Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/search', component: SearchIndex },
  {
    path: '/',
    component: LayoutIndex,
    children: [
      { path: '', component: Homeindex },
      { path: '/question', component: Questionindex },
      { path: '/video', component: Videoindex },
      { path: '/user', component: Userindex }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
