import { getCartList } from '@/api/cart'
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
    }

  },
  mutations: {
    setCartList (state, newCartList) {
      state.cartList = newCartList
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
    }
  }

}
