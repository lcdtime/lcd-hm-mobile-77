<template>
  <div class="layout-container">
    <!-- 头部标题Navber导航栏 -->
    <van-nav-bar fixed>
      <template #left>
        <div class="logo"></div>
      </template>
      <template #right>
       <van-button type="info" round class="search-btn" size="small" icon="search" @click="search">搜索</van-button>
      </template>
    </van-nav-bar>
    <!-- 二级内容区域路由出口 -->
    <router-view></router-view>
    <!-- tabber栏 -->
          <!-- replace是替换的意思 在路由中默认路由地址记录会被缓存, 添加了replace属性不会进行路由记录缓存 -->
    <van-tabbar v-model="active">
      <van-tabbar-item to='/' icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to='/question' icon="chat-o">问答</van-tabbar-item>
      <van-tabbar-item to='/video' icon="video-o">视频</van-tabbar-item>
      <van-tabbar-item to='/user' icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    // 搜索页面
    search () {
      this.$router.push('search')
    }
  }
}
</script>

<style lang='scss' scoped>
  .layout-container {
    padding-top: 50px;
    .logo {
      background: url('../../assets/logo.png') no-repeat;
      background-size: cover;
      width: 100px;
      height: 30px;
    }
    .search-btn {
      width: 100px;
      background-color: #5babfb;
      font-size: 14px;
      .van-icon {
        color: #fff;
      }
    }
  }
</style>
