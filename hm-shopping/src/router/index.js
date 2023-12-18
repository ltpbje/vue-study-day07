import Vue from 'vue'
import VueRouter from 'vue-router'

import layout from '@/views/layout/index'
import home from '@/views/layout/home'
import cart from '@/views/layout/cart'
import user from '@/views/layout/user'
import category from '@/views/layout/category'
import store from '@/store'

const login = () => import('@/views/login')
const myorder = () => import('@/views/myorder')
const prodetail = () => import('@/views/prodetail')
const pay = () => import('@/views/pay')
const search = () => import('@/views/search')
const searchlist = () => import('@/views/search/list.vue')
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
    { path: '/search', component: search },
    { path: '/searchlist', component: searchlist }
  ]
})
// 路由导航守卫
const authUrl = ['/pay', '/myorder']
router.beforeEach((to, from, next) => {
  if (!authUrl.includes(to.path)) {
    // 非权限页面直接放行
    next()
    return
  }
  // 权限页面判断token
  const token = store.getters.token
  // console.log(token)
  if (token) {
    next()
  } else {
    next('/login')
  }
})

export default router
