<script setup>
import {inject} from 'vue'
// 利用inject 接受来自最顶层组件的值
const themeColor = inject('themeColor')
const count =  inject('count')
const changeCount= inject('changeCount')
const changeFn = () => {
  changeCount(0)
}
</script>


<template>
    <div>
        <h3>我是最底层 {{ themeColor }} {{ count }}</h3>
        <button @click="changeFn">change count</button>
    </div>
</template>


<style></style>