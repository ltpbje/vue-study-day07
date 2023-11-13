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
            <img src="@/assets/code.png" alt="">
        </div>
          <div class="item ">
              <input type="text" placeholder="请输入图形验证码">
            </div>
        </div>
        <button>登录</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'logIn'
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
          padding-bottom: 4px;
          display: block;
          border: none;
          outline: none;
        }
        .item_withcode{
          img{
            display: block;
            height: 10px;
            width: 100px;
          }
        }
        }
    }
  }
</style>
