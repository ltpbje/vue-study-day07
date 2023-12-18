import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      // 个人权证相关
      userInfo: getInfo()
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userInfo = obj
      setInfo(obj)
    }
  },
  getters: {
  },
  actions: {
    logout (context) {
      // 清除用户信息
      context.commit('setUserInfo', {})
      // 清除购物车信息 (跨模块调用mutation) cart/setCartList
      context.commit('cart/setCartList', [], { root: true })
    }
  }

}
