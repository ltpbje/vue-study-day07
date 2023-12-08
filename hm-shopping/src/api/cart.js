import request from '@/utils/request'

export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const getCartList = () => {
  return request.get('/cart/list')
}
export const changeCount = (goodsNum, goodsId, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsSkuId,
    goodsNum,
    goodsId
  })
}