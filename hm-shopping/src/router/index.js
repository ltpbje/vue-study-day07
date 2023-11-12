import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import layout from '@/views/layout'
import myorder from '@/views/myorder'
import pay from '@/views/pay'
import prodetail from '@/views/prodetail'
import search from '@/views/search'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    { path: '/layout', component: layout },
    { path: '/myorder', component: myorder },
    { path: '/pay', component: pay },
    { path: '/prodetail/:id', component: prodetail },
    { path: '/search', component: search }
  ]
})

export default router
