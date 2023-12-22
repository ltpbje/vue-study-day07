<script setup>
import { computed, ref } from 'vue'

const list = ref([1,2,3,4,5,6,7])
const filterList= computed(()=>{
  return list.value.filter(item =>item > 2)
})
const addFn=()=>{
  list.value.push(666)
}
// const val =ref(555)
// const modifyList = computed({
//   set:()=> list.value.filter(item => item > 2),
//   get:(val.value) => {
//     list.value.push(val.value) 
//   }
// })
</script>


<template>
  <div>
    <div>原始的list {{ list }}</div>
    <div>计算属性过滤后的list {{ filterList }}</div>
    <button @click="addFn">按钮</button>
    <button @click="addFn">按钮</button>
  </div>
</template>


<style>

</style>