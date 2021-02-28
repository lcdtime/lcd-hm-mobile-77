// 频道列表模块
import http from '@/utils/requset'
// 按需导出请求
export const reqGetChannels = () => {
  return http({
    method: 'get',
    url: '/v1_0/user/channels'
  })
}
