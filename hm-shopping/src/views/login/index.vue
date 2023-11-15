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
            <div class="login_btn">登录</div>
        </div>
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
          padding-bottom: 10px;
          display: block;
          border: none;
          outline: none;
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
