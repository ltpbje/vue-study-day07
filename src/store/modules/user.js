const state = {
  userInfo: {
    name: 'zs',
    age: 18
  }
}
const mutations = {
  changeUserInfo (state, newInfo) {
    state.userInfo.name = newInfo.name
    state.userInfo.age = newInfo.age
  }
}
const actions = {
  UpdateUserSecond (context, newUserInfo) {
    setTimeout(() => {
      context.commit('changeUserInfo', newUserInfo)
    }, 1000)
  }
}
const getters = {
  toUpcase (state) {
    return state.userInfo.name.toUpperCase()
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
