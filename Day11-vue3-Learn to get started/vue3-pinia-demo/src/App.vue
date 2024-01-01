<script setup>
  import son1Com from '@/components/son1-com.vue'
  import son2Com from '@/components/son2-com.vue'
  import { userCounterStore } from '@/stores/counter.js' 
  import { getChannelStore } from '@/stores/channel.js'
  const channelStore = getChannelStore() 
  const countStore =  userCounterStore()
</script>

<template>
  <h1>我是父组件-{{ countStore.count }} -{{ countStore.msg }}   <button @click="countStore.addCount">+</button></h1>
  <son1Com></son1Com>
  <son2Com></son2Com>
  <button @click="channelStore.getChannelList">获取频道列表</button>
  <ul>
    <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<style scoped>
</style>
