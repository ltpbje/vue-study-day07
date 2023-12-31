<script setup> 
import { userCounterStore } from '@/stores/counter.js'
const countStore = userCounterStore()
</script>   
<template>
    <h3>我是Son1组件-{{ countStore.count }}   <button @click="countStore.addCount">+</button></h3>
</template>
<style scoped></style>