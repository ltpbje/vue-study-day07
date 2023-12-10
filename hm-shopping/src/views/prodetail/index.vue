<template>
  <div class="prodetail">
    <van-nav-bar fixed title="商品详情页" left-arrow @click-left="$router.go(-1)" />

    <van-swipe :autoplay="3000" @change="onChange">
      <van-swipe-item v-for="(image, index) in goodsDetail.goods_images" :key="index">
        <img :src="image.external_url" />
      </van-swipe-item>

      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }} / {{  images.length }}</div>
      </template>
    </van-swipe>

    <!-- 商品说明 -->
    <div class="info">
      <div class="title">
        <div class="price">
          <span class="now">￥{{goodsDetail.goods_price_max}}</span>
          <span class="oldprice">￥{{goodsDetail.line_price_max}}</span>
        </div>
        <div class="sellcount">已售{{goodsDetail.goods_sales}}件</div>
      </div>
      <div class="msg text-ellipsis-2">
        {{goodsDetail.goods_name}}</div>

      <div class="service">
        <div class="left-words">
          <span><van-icon name="passed" />七天无理由退货</span>
          <span><van-icon name="passed" />48小时发货</span>
        </div>
        <div class="right-icon">
          <van-icon name="arrow" />
        </div>
      </div>
    </div>

    <!-- 商品评价 -->
    <div class="comment">
      <div class="comment-title">
        <div class="left">商品评价 ({{ commentTotal }}条)</div>
        <div class="right">查看更多 <van-icon name="arrow" /> </div>
      </div>
      <div class="comment-list">
        <div class="comment-item" v-for="item in commentList" :key="item.comment_id">
          <div class="top">
            <img :src="item.user.avatar_url || defaultAvatar " alt="">
            <div class="name">{{ item.user.nick_name }}</div>
            <van-rate :size="16" :value="item.score / 2" color="#ffd21e" void-icon="star" void-color="#eee" />
          </div>
          <div class="content">
            {{item.content}}
          </div>
          <div class="time">
          {{item.create_time }}
          </div>
        </div>
      </div>
    </div>

    <!-- 商品描述 -->
    <div class="desc" v-html="goodsDetail.content">
    </div>

    <!-- 底部 -->
    <div class="footer">
      <div @click="$router.push('/')" class="icon-home">
        <van-icon name="wap-home-o" />
        <span>首页</span>
      </div>
      <!-- 购物车图标 -->
     <div @click="$router.push('/cart')" class="icon-cart">
      <span v-if="cartTotal > 0" class="num">{{ cartTotal }}</span>
      <van-icon name="shopping-cart-o" />
      <span>购物车</span>
     </div>
      <div class="btn-add" @click="addFn()">加入购物车</div>
      <div class="btn-buy" @click="buyNow()">立刻购买</div>
    </div>
   <van-action-sheet v-model="showPannel" :title="mode === 'cart' ? '加入购物车' : '立刻购买'">
    <div class="product">
      <div class="product-title">
        <div class="left">
          <img :src="goodsDetail.goods_image">
        </div>
        <div class="right">
          <div class="price">
            <span>¥</span>
            <span class="nowprice">{{goodsDetail.goods_price_min}}</span>
          </div>
          <div class="count">
            <span>库存</span>
            <span>{{goodsDetail.stock_total}}</span>
          </div>
        </div>
      </div>
      <div class="num-box">
        <span>数量</span>
    <countBox v-model="addCount"></countBox>
  </div>
      <div class="showbtn" v-if="goodsDetail.stock_total > 0">
        <div class="btn" @click="addCart" v-if="mode === 'cart'">加入购物车</div>
        <div class="btn now" v-else>立刻购买</div>
      </div>
      <div class="btn-none" v-else>该商品已抢完</div>
    </div>
  </van-action-sheet>
  </div>
</template>

<script>
import { getProDetail, getComment } from '@/api/product'
import defaultAvatar from '@/assets/default-avatar.png'
import countBox from '@/components/countBox.vue'
import { addCart } from '@/api/cart'
import { Toast } from 'vant'
// import { cartTotal } from 'vuex'
export default {
  name: 'ProDetail',
  components: {
    countBox
  },
  data () {
    return {
      images: [],
      current: 0,
      goodsId: this.$route.params.id,
      goodsDetail: '',
      limit: 3,
      commentList: [],
      commentTotal: 0,
      defaultAvatar,
      showPannel: false,
      mode: 'cart',
      addCount: 1, // 添加数量
      cartTotal: this.$store.getters.cartTotal// 购物车中商品的数量
    }
  },
  methods: {
    // 加入购物车 如果未登录跳转到登录页面
    async addCart () {
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '请先登录才能加入购物车',
          confirmButtonText: '请登录',
          cancelButtonText: '再逛逛'
        })
          .then(() => {
            this.$router.replace({
              path: '/login',
              query: {
                // 通过查询参数传参传递当前地址
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {
            // on cancel
          })
      }
      // 如果有token 则发送请求 更新后台购物车数据 并更新显示到页面中
      const res = await addCart(this.goodsId, this.addCount,
        this.goodsDetail.skuList[0].goods_sku_id)
      console.log(res)
      this.cartTotal = res.data.cartTotal
      this.showPannel = false
      Toast('添加购物车成功')
      // console.log('成功')
    },
    addFn () {
      this.showPannel = true
      this.mode = 'cart'
    },
    buyNow () {
      this.showPannel = true
      this.mode = 'buynow'
    },
    onChange (index) {
      this.current = index
    },
    async getProDetail () {
      const { data: { detail } } = await getProDetail(this.goodsId)
      // console.log(detail)
      console.log(1, detail)
      this.goodsDetail = detail
      this.images = detail.goods_images
    },
    async getComment () {
      // const res = getComment(this.goodsId, this.limit)
      const { data: { list, total } } = await getComment(this.goodsId, this.limit)
      // console.log(list, total)
      // console.log(res)
      // console.log(list)
      // console.log(1, list, total)
      this.commentList = list
      this.commentTotal = total
      // console.log(total)
    }
  },
  async  created () {
    this.getProDetail()
    this.getComment()
  }
}
</script>

<style lang="less" scoped>
.prodetail {
  padding-top: 46px;

  ::v-deep .van-icon-arrow-left {
    color: #333;
  }
.footer .icon-cart {
  position: relative;
  padding: 0 6px;
  .num {
    z-index: 999;
    position: absolute;
    top: -2px;
    right: 0;
    min-width: 16px;
    padding: 0 4px;
    color: #fff;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 50%;
  }
}
  img {
    display: block;
    width: 100%;
  }

  .custom-indicator {
    position: absolute;
    right: 10px;
    bottom: 10px;
    padding: 5px 10px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }

  .desc {
    width: 100%;
    overflow: scroll;

    ::v-deep img {
      display: block;
      width: 100% !important;
    }
  }

  .info {
    padding: 10px;
  }

  .title {
    display: flex;
    justify-content: space-between;

    .now {
      color: #fa2209;
      font-size: 20px;
    }

    .oldprice {
      color: #959595;
      font-size: 16px;
      text-decoration: line-through;
      margin-left: 5px;
    }

    .sellcount {
      color: #959595;
      font-size: 16px;
      position: relative;
      top: 4px;
    }
  }

  .msg {
    font-size: 16px;
    line-height: 24px;
    margin-top: 5px;
  }

  .service {
    display: flex;
    justify-content: space-between;
    line-height: 40px;
    margin-top: 10px;
    font-size: 16px;
    background-color: #fafafa;

    .left-words {
      span {
        margin-right: 10px;
      }

      .van-icon {
        margin-right: 4px;
        color: #fa2209;
      }
    }
  }

  .comment {
    padding: 10px;
  }

  .comment-title {
    display: flex;
    justify-content: space-between;

    .right {
      color: #959595;
    }
  }

  .comment-item {
    font-size: 16px;
    line-height: 30px;

    .top {
      height: 30px;
      display: flex;
      align-items: center;
      margin-top: 20px;

      img {
        width: 20px;
        height: 20px;
      }

      .name {
        margin: 0 10px;
      }
    }

    .time {
      color: #999;
    }
  }

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 55px;
    background-color: #fff;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .icon-home,
    .icon-cart {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 14px;

      .van-icon {
        font-size: 24px;
      }
    }

    .btn-add,
    .btn-buy {
      height: 36px;
      line-height: 36px;
      width: 120px;
      border-radius: 18px;
      background-color: #ffa900;
      text-align: center;
      color: #fff;
      font-size: 14px;
    }

    .btn-buy {
      background-color: #fe5630;
    }
  }
}
.product {
  .product-title {
    display: flex;
    .left {
      img {
        width: 90px;
        height: 90px;
      }
      margin: 10px;
    }
    .right {
      flex: 1;
      padding: 10px;
      .price {
        font-size: 14px;
        color: #fe560a;
        .nowprice {
          font-size: 24px;
          margin: 0 5px;
        }
      }
    }
  }

  .num-box {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }

  .btn, .btn-none {
    height: 40px;
    line-height: 40px;
    margin: 20px;
    border-radius: 20px;
    text-align: center;
    color: rgb(255, 255, 255);
    background-color: rgb(255, 148, 2);
  }
  .btn.now {
    background-color: #fe5630;
  }
  .btn-none {
    background-color: #cccccc;
  }
}
.tips {
  padding: 10px;
}</style>
