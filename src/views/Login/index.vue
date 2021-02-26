<template>
  <!-- error-message="手机号格式错误" -->
  <!-- 1标题 -->
  <div class="login">
    <van-nav-bar title="标题" />
    <!-- 输入框 -->
    <van-cell-group>
      <van-field
        v-model="mobile"
        error
        required
        label="手机号"
        placeholder="请输入你的手机号码"
        :error-message="mobile_errmsg"
        @input="validate"
      />
      <van-field
        v-model="code"
        required
        label="验证码"
        placeholder="请输入验证吗"
        :error-message="code_errmsg"
         @input="validate"
      />
    </van-cell-group>
    <!-- 登陆按钮 -->
   <div class="login-btn">
        <van-button
        class="info-btn"
        type="info"
        @click="login"
        >
        登陆按钮
        </van-button>
   </div>
  </div>
</template>

<script>
// 导入请求api方法
import { reqLogin } from '@/api/user'
export default {
  name: 'Login',
  data () {
    return {
      mobile: '13912345678',
      code: '246810',
      mobile_errmsg: '',
      code_errmsg: ''
    }
  },
  methods: {
    // 表单验证飞空input事件只要输入事件就会处罚
    validate () {
    // 手机号码非空验证
      if (this.mobile.trim().length === 0) {
        this.mobile_errmsg = '手机号码不能为空'
        return false
      }
      // 验证吗非空验证
      if (this.code.trim().length === 0) {
        this.code_errmsg = '验证码不能为空'
        return false
      }
      // 合法化验证正则
      if (!/^1[3-9]\d{9}/.test(this.mobile)) {
        this.mobile_errmsg = '亲，请输入正确格式的手机号码'
        return false
      }
      // 验证码合法化
      if (!/^\d{6}/.test(this.code)) {
        this.code_errmsg = '验证码为六位'
        return false
      }
      // 正确时清空报错
      this.mobile_errmsg = ''
      this.code_errmsg = ''
      return true
    },
    // 同过判断手机号码和验证吗是否整错来发送请求
    // 封装登陆请求api
    async login () {
      if (!this.validate()) {
        return
      }
      // 可以使用vant中的toast组件来实现loading的效果--遮罩
      this.$toast.loading({
        duration: 0, // 持续展示 toast,永远不会关闭
        overlay: true, // 整体添加一个遮罩
        message: '加载中...',
        forbidClick: true
      })
      // const res = await this.$http({
      //   method: 'post',
      //   url: 'v1_0/authorizations',
      //   data: {
      //     mobile: this.mobile,
      //     code: this.code
      //   }
      // })
      // 使用封装的登录请求api
      const res = await reqLogin(this.mobile, this.code)
      // 请求成功之后覆盖遮罩  // 一个页面上只有一个toast, 它会把上面的Loading状态覆盖掉
      this.$toast.success('成功登陆')
      console.log(res.data)
    }
  }
}
</script>

<style lang="scss" scoped>
  .login-btn {
      padding: 20px;
      .info-btn {
          border-radius: 5px;
          width: 100%;
          color: #fff;
      }
  }
</style>
