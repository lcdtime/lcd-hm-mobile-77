<template>
  <div class="home-container">
    <van-tabs v-model="active">
    <van-tab v-for="item in channels" :title="item.name" :key="item.id">
      <articlelist :channel="item"></articlelist>
      <p v-for="num in 30" :key="num">{{item.name}}</p>
    </van-tab>
  </van-tabs>
  </div>
</template>

<script>
import { reqGetChannels } from '@/api/channels'
import articlelist from './component/articlelist.vue'
export default {
  name: 'Homeindex',
  components: { articlelist },
  data () {
    return {
      active: 0,
      channels: []
    }
  },
  created () {
    this.loadChannels()
  },
  methods: {
    async loadChannels () {
      console.log('hahh')
      const { data } = await reqGetChannels()
      console.log(data.data.channels, 'channels')
      // 频道列表赋值---
      this.channels = data.data.channels
    }
  }
}
</script>

<style lang='scss' scoped>
  .home-container {
    // tab固定定位已经脱标--加一个pading-top将内容蹭下来
    padding-top: 44px;
    // 设置一下home的位置
    height: calc(100vh - 46px - 50px);
    box-sizing: border-box;
    // height: 100%;
    // background-color: skyblue;
    ::v-deep {
      .van-tabs {
        height: 100%;
        .van-tabs__line {
          background-color: #3196fa;
        }
      }
      .van-tabs__wrap {
        position: fixed;
        top: 46px;
        left: 0;
        width: 100%;
      }
      .van-tabs__content {
        height: 100%;
        .van-tab__pane {
          height: 100%;
          overflow: auto;
        }
      }
    }
  }
</style>
