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
const actions = {}
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
