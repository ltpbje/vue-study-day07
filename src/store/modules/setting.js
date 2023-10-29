const state = {
  theme: 'blue',
  desc: '测试demo'
}
const mutations = {
  changeTheme (state, NewTheme) {
    state.theme = NewTheme
  }
}
const actions = {}
const getters = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
