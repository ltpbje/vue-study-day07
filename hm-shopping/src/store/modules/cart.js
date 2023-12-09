import { getCartList, changeCount, delSelect } from '@/api/cart'
export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  getters: {
    // 商品总数
    cartTotal (state) {
      return state.cartList.reduce((sum, item) => {
        return sum + item.goods_num
      }, 0)
    },
    // 选中的商品列表
    selCartList (state) {
      return state.cartList.filter(item => item.isChecked)
    },
    // 选中的商品总数
    selCount (state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num
      }, 0)
    },
    selPrice (state, getters) {
      return getters.selCartList.reduce((sum, item) => {
        return sum + item.goods_num * item.goods.goods_price_min
      }, 0)
    },
    // 是否全选
    isAllChecked (state) {
      return state.cartList.every(item => item.isChecked)
    }

  },
  mutations: {
    setCartList (state, newCartList) {
      state.cartList = newCartList
    },
    toggleChecked (state, goodsId) {
      const goods = state.cartList.find(item => item.id === goodsId)
      goods.isChecked = !goods.isChecked
    },
    // 实现全选反选
    toggleAllChecked (state, isAllChecked) {
      state.cartList.forEach(item => { item.isChecked = isAllChecked })
    },
    changeCount (state, obj) {
      const { goodsNum, goodsId } = obj
      const goods = state.cartList.find(item => item.goods_id === goodsId)
      // console.log(1, goods)
      goods.goods_num = goodsNum
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      // 后台返回的数据中，不包含复选框的选中状态，为了实现将来的功能
      // 需要手动维护数据，给每一项，添加一个isChecked状态（标记当前商品是否选中）
      data.list.forEach(item => {
        item.isChecked = true
      })
      console.log(1, data)
      context.commit('setCartList', data.list)
    },
    // 修改商品数量
    async changeCount (context, obj) {
      const { goodsNum, goodsId, goodsSkuid } = obj
      // 先修改界面数据
      context.commit('changeCount', obj)

      // 再将数据同步到后台
      await changeCount(goodsNum, goodsId, goodsSkuid)
      // console.log(res)
    },
    // 删除选中的商品
    async delSelect (context) {
      const selectId = context.getters.selCartList.map(item => item.id)
      console.log('context', context)
      console.log(2, selectId)
      // 修改后台的数据
      await delSelect(selectId)
      // 修改界面中的数据
      // 重新拉取最新的购物车数据(重新渲染)
      context.dispatch('getCartAction')
    }
  }

}
