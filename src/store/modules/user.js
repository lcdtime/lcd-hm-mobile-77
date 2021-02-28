// 用户数据库状态模块

import { getToken, setToken } from '@/utils/storage'

const state = {
  tokenInfo: {} || getToken()
}
const mutations = {
  getTokenInfo (state, newobjToken) {
    state.tokenInfo = newobjToken
    // 通过封装的获取token 一更新token, 就往本地存一份, 本地就可以实时的同步到vuex的数据
    setToken(newobjToken)
  }
}
const actions = {}
// const getters = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
