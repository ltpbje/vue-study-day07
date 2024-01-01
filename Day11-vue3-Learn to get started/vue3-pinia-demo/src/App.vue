<script setup>
  import son1Com from '@/components/son1-com.vue'
  import son2Com from '@/components/son2-com.vue'
  import { userCounterStore } from '@/stores/counter.js' 
  import { getChannelStore } from '@/stores/channel.js'
  import { storeToRefs } from 'pinia';
  const channelStore = getChannelStore() 
  const countStore =  userCounterStore()
  //此时，直接解构，不处理，数据会丢失响应式
  // const {count,msg} = countStore    
  const {count,msg} = storeToRefs(countStore)
  //作为action的increment可以直接解构
   const { addCount }  = countStore 
</script>

<template>
  <h1>我是父组件-{{ count }} -{{ msg }}   <button @click="addCount">+</button></h1>
  <son1Com></son1Com>
  <son2Com></son2Com>
  <button @click="channelStore.getChannelList">获取频道列表</button>
  <ul>
    <li v-for="item in channelStore.channelList" :key="item.id">{{ item.name }}</li>
  </ul>
</template>

<style scoped>
</style>
