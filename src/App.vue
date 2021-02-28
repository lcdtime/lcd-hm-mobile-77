<template>
  <div id="app">
    <!-- <van-switch v-model="checked" /> -->
    <!-- 路由输出位置一级路由 -->
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true
    }
  },
  created () {
    this.$http.get('/').then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="scss">
// scss 是新语法  sass是旧语法(旧语法书写不能加;不能加{} 和 styules类似)
// scss 和 less类似,变量的定义($变量名),函数的定义有些不一样....
// $color: green;
// #app {
//   #box {
//     width: 200px;
//     height: 200px;
//     background-color: pink;
//     p {
//       color: $color;
//     }
//   }
// }
// sass就写法
// #app
//   p
//     background-color: pink
//     width: 200px
//     height: 200px
</style>
