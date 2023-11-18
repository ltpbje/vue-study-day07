<template>
    <div>
      <!-- 头部导航栏 -->
      <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)"/>
      <div class="form">
        <div class="head">
          <h2>手机号登录</h2>
          <p>未注册的手机号登录后将自动注册</p>
        </div>
        <div class="content">
          <div class="item">
            <input type="text" placeholder="请输入手机号">
          </div>
          <div class="item item_withcode">
            <input type="text" placeholder="请输入图形验证码">
            <img v-if="picUrl" :src="picUrl" alt="" @click="getPicCode">
        </div>
          <div class="item getcode">
              <input type="text" placeholder="请输入短信验证码">
              <div class="getcode_btn" @click="getCode">{{totalSecond == Second ? '获取短信验证码' : `重新发送(${Second}s)后` }}</div>
            </div>
            <div class="login_btn">登录</div>
        </div>
      </div>
    </div>
</template>

<script>
// import request from '@/utils/request'
import { getPicCode } from '@/api/login'
export default {
  name: 'logIn',
  data () {
    return {
      picCode: '', // 用户输入的图形验证码
      picKey: '', // 将来请求传递的图形验证码唯一标识
      picUrl: '', // 存储清求渲染的图片地址
      totalSecond: 5,
      Second: 5,
      timer: null
    }
  },
  async created () {
    this.getPicCode()
  },
  methods: {
    async getPicCode () {
      const res = await getPicCode()
      const { data: { base64, key } } = res
      // console.log(res.data)
      // this.picCode =
      this.picKey = key
      this.picUrl = base64
      // this.$toast('验证码获取成功')
      // this.$toast({
      //   message: '验证码获取成功',
      //   position: 'bottom'
      // })
      // this.$toast.loading({
      //   message: '加载中...',
      //   forbidClick: false
      // })
    },
    getCode () {
      if (!this.timer && this.totalSecond === this.Second) { // 设置定时器
        this.timer = setInterval(() => {
          this.Second--
          if (this.Second <= 0) {
            this.Second = this.totalSecond
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    }

  },
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>

<style scoped lang="less">
  .form{
    padding: 40px 20px 20px 20px;
    .head{
      h2{
        margin-bottom: 10px;
        font-weight: 400;
      }
      p{
       color: #b8b8b8;
       font-size: 14px;
       margin-bottom: 30px;
      }
    }
    .content{
      border-bottom: 1px solid #f3f1f2;
      .item{
         border-bottom: 2px solid #f3f1f2;
        input{
          margin-top: 30px;
          padding-bottom: 10px;
          display: block;
          border: none;
          outline: none;
        }
      }
      .getcode{
        display: flex;
        align-items: center;
        .getcode_btn{
          padding-top:10px ;
          font-size: 13px;
          color: #cea26a;
        }
      }
      .item_withcode{
        display: flex;
        align-items: center;
        img{
          height: 45px;
          width: 200px;
        }
      }
    }
    .login_btn{
      margin-top:30px ;
      height: 49px;
      width: 334px;
      text-align: center;
      line-height: 49px;
      color: #f3f1f2;
     background: linear-gradient(90deg, #ecb53c, #ff9211);
     border-radius: 39px;
     box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .1);
     letter-spacing: 2px;
    }
  }
</style>
