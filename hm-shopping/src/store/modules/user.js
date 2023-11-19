export default {
  namespaced: true,
  state () {
    return {
      // 个人权证相关
      userInfo: {
        token: '',
        userId: ''
      }
    }
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userInfo = obj
    }
  },
  getters: {},
  actions: {}

}
