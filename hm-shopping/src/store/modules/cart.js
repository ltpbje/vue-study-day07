import { getCartList } from '@/api/cart'
export default {
  namespaced: true,
  state () {
    return {
      cartList: []
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
        item.isChecked = false
      })
      context.commit('setCartList', data.list)
    }
  }

}
