// 封装获取文章列表信息
// 导入axios实例
import http from '@/utils/requset'
// 发送请求
export const reqGetArticles = (channelId, timestamp) => {
  return http({
    method: 'get',
    url: '/v1_1/articles',
    params: {
      with_top: 1, // 包含置顶文章
      channel_id: channelId,
      timestamp // 时间戳
    }
  })
}
