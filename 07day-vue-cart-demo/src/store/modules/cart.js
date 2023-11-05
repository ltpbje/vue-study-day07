import axios from 'axios'
export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  mutations: {
    updateList (state, newList) {
      state.list = newList
    },
    changeCount (state, obj) {
      const good = state.list.find(item => item.id === obj.id)
      good.count = obj.newCount
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.count * item.price, 0)
    }
  },
  actions: {
    async getList (context) {
      const res = await axios.get('http://localhost:3000/cart')
      // console.log(res.data)
      context.commit('updateList', res.data)
    },
    async changeCount (context, obj) {
      await axios.patch(`http://localhost:3000/cart/${obj.id}`, {
        count: obj.newCount
      })
      // console.log(res)
      context.commit('changeCount', obj)
    }
  }
}
