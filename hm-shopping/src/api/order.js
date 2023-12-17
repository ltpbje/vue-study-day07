// 订单结算确认
// mode:cart= >obj {cartIds}
// mode: buyNow => obj{ goodsId goodsNum goodsskuId}
import request from '@/utils/request'
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode,
      delivery: 10, // 快递方式10表示快递配送，20门店自提
      shopId: 0, // 自提门店ID
      isUsePoints: 0, // 积分 传0 不使用积分
      couponId: 0, // 优惠券ID
      ...obj
    }
  })
}
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    params: {
      mode,
      delivery: 10, // 物流方式 10
      couponId: 0, // 优惠券id,默认：0
      isUsePoints: 0, // 是否使用积分1-使用，0-不使用
      payType: 10, // 支付方式，10：余额支付
      ...obj
    }
  })
}
