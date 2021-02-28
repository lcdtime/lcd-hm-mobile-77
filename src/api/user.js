// 为什么要封装 api 接口模块 ? 不封装有以下两个缺点
// - 不方便 代码复用。
// - 不方便修改, 集中管理更易维护
// 导入登录请求模块
import http from '@/utils/requset.js'
// 导入库的实例获取库
import store from '@/store'
export const reqLogin = (mobile, code) => {
  return http({
    method: 'post',
    url: 'v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
// 获取用户当前信息
// 通过库store中的token来请求token
export const reqGetProfile = () => {
  const token = store.state.user.tokenInfo.token
  // console.log(token)
  return http({
    method: 'get',
    url: '/v1_0/user/profile',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
