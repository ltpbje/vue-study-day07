const state = {
  userInfo: {
    name: 'zs',
    age: 18
  }
}
const mutations = {}
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
