export default {
  // 此处编写的就是Vue组件实例的配置项，通过一定语法，可以直接混入到组件内部
  // data methods computed生命周期函数...
  // 注意点：
  //   1. 如果此处和组件内，提供了同名的data或methods, 则组件内优先级更高
  //   2.如果编写了生命周期函数，则nixins中的生命周期函数和页面的生命周期函数，会用数组管理
  //    统一执行
  created () {
    // console.log('嘎嘎')
  },
  data () {
    return {
      title: '混入测试title'
    }
  },
  methods: {
    // sayHi () {
    //   console.log('你好')
    // },
    loginConfirm () {
      // 组件内的方法复用 可能其他组件也需要使用该方法 所以要使用mixins
      if (!this.$store.getters.token) {
        this.$dialog.confirm({
          title: '温馨提示',
          message: '请先登录才能加入购物车',
          confirmButtonText: '请登录',
          cancelButtonText: '再逛逛'
        })
          .then(() => {
            this.$router.replace({
              path: '/login',
              query: {
                // 通过查询参数传参传递当前地址
                backUrl: this.$route.fullPath
              }
            })
          })
          .catch(() => {
            // on cancel
          })
        return true
      }
      return false
    }
  }
}
