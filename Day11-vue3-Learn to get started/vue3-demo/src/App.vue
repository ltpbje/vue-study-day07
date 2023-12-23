<script setup>
// 父传子
import { ref } from 'vue'
import sonCom from '@/components/son-com.vue'
const money= ref(1000)
const getMoney=()=>{
  money.value+=200
}
const changeMoney = (newMoney)=>{
  money.value = newMoney
}
</script>


<template>
  <div>
    <div class="father">
      父组件
      <button @click="getMoney">挣钱</button>
    </div>
    <sonCom 
    car="梅赛德斯奔驰" 
    :money="money"
    @changeMoney="changeMoney"
    ></sonCom>
  </div>
</template>


<style>
/* 为类名为father的元素添加一个正常大小的边框 */
.father {
  width: 100px;
  height: 50px;
  color: white;
}
</style>