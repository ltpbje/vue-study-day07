// 这里面存放的就是vuex相关的核心代码
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'
// 插件安装
Vue.use(Vuex)
const store = new Vuex.Store({
  strict: true,
  // 1.通过state可以提供数据（所有组件共享的数据）
  state: {
    title: '仓库大标题',
    count: 12,
    list: [0, 12, 323, 2, 3, 4, 5, 23, 16, 12]
  },
  // 2. 通过mutation 修改 state（也就是数据）
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
  // 3.actions处理异步
  actions: {
    setAsyncCount (context, newTitle) {
      setTimeout(() => {
        context.commit('changeTitle', newTitle)
      }, 2000)
    }
  },
  // 4.getters类似于计算属性
  getters: {
    filterList (state) {
      return state.list.filter((item) => item > 5)
    }
  },
  // modules 模块
  modules: {
    user,
    setting
  }
})
export default store
