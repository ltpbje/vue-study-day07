<script setup>
    import {userCounterStore}   from '@/stores/counter'
    const countStore = userCounterStore()
</script>
<template>
    <h3>我是Son2组件-{{ countStore.count }}   <button @click="countStore.subCount">-</button></h3>
</template>
<style scoped></style>