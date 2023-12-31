// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// 创建一个应用实例
const app = createApp(App)
// 创建一个pinia实例
const pinia = createPinia()
app.use(pinia)// 要先安装使用 pinia 插件 再进行视图的挂载 
app.mount('#app')// 视图的挂载 # 将app组件挂载到id为'app'的DOM元素上