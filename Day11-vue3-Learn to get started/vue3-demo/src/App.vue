<script setup>
// 引入CenterCom组件
import CenterCom from '@/components/center-com.vue'
import inputCom from '@/components/input-com.vue';
 import { provide,ref} from 'vue'
// 1. provide  跨层传递普通数据
provide('themeColor','pink')
// const count = ref(99)

//2. provide  跨层传递响应式数据
const count = ref(99)
const inpValue = ref('123345')
provide('count',count)
// 3. provide  跨层传递方法
provide('changeCount',(newCount)=>{
  count.value = newCount
})
</script>


<template>
  <div>
    <h1>我是最高层</h1>
    <CenterCom></CenterCom>
    {{ inpValue }}
    <inputCom v-model="inpValue"></inputCom>
  </div>
</template>


<style>

</style>