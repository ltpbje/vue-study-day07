import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login'
import layout from '@/views/layout/index'
import myorder from '@/views/myorder'
import pay from '@/views/pay'
import prodetail from '@/views/prodetail'
import search from '@/views/search'

import home from '@/views/layout/home'
import category from '@/views/layout/category'
import cart from '@/views/layout/cart'
import user from '@/views/layout/user'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: login },
    {
      path: '/',
      component: layout,
      redirect: '/home',
      children: [
        { path: '/home', component: home },
        { path: '/category', component: category },
        { path: '/cart', component: cart },
        { path: '/user', component: user }
      ]
    },
    { path: '/myorder', component: myorder },
    { path: '/pay', component: pay },
    { path: '/prodetail/:id', component: prodetail },
    { path: '/search', component: search }
  ]
})

export default router