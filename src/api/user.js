// 为什么要封装 api 接口模块 ? 不封装有以下两个缺点
// - 不方便 代码复用。
// - 不方便修改, 集中管理更易维护
// 导入登录请求模块
import http from '@/utils/requset.js'
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
