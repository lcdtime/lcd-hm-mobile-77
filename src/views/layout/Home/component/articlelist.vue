<template>
  <div class="articleList">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
  <van-cell v-for="(item, index) in list" :key="index" :title="item.aut_name" />
</van-list>
  </div>
</template>

<script>
// 导入请求方法
import { reqGetArticles } from '@/api/article'
export default {
  name: 'ArticleList',
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      timestamp: null // 时间戳
    }
  },
  methods: {
    // onLoad () {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1)
    //     }
    //     // 加载状态结束
    //     this.loading = false
    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true
    //     }
    //   }, 1000)
    // }
    async onLoad () {
      // 异步更新数据
      console.log('当前数据的条数', this.list.length, '数据更新')
      // 通过时间戳，更新时间戳
      if (!this.timestamp) {
        // 默认当前时间, 表示拉取最新的数据
        this.timestamp = +new Date()
      }
      // 大数据问题还没有处理
      const { data } = await reqGetArticles(this.channel.id, this.timestamp)
      // 保存时间戳, 以便下一次传入
      this.timestamp = data.data.pre_timestamp
      console.log(data)
      // 手动关闭
      // this.loading = false
      // 请求数据追加列表中展开是一个数据
      this.list = data.data.results
      console.log(this.list)
    }
  }
}
</script>

<style>

</style>
