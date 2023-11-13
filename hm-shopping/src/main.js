import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入vant 组件库
// import Vant from 'vant'
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
// 自动按需引入vant组件
// import { Button, Switch } from 'vant'
// Vue.use(Button)
// Vue.use(Switch)
import '@/utils/vant-ui'
import '@/styles/common.less'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
