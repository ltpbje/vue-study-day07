// 这里面存放的就是vuex相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'
// 插件安装
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true,
  state: {
    title: '仓库大标题',
    count: 12
  },
  mutations: {
    handleAdd (state, n) {
      state.count += n
    },
    // addFive (state) {
    //   state.count += 5
    // },
    changeTitle (state, newTitle) {
      state.title = newTitle
    },
    handleSub (state, n) {
      state.count -= n
    },
    changeCount (state, newCount) {
      state.count = newCount
    }
  },
  actions: {
    setAsyncCount (context, newTitle) {
      setTimeout(() => {
        context.commit('changeTitle', newTitle)
      }, 1000)
    }
  }
})
export default store
