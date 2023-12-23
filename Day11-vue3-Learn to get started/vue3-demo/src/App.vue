<script setup>
import { onMounted } from 'vue'

// 生命周期函数
//beforeCreate和created的相关代码 
//一律放在setup中执行
  const getList =()=>{
    //设置一个延迟1秒的定时器
    setTimeout(()=>{
        //打印出获取数据的信息
        console.log('发送请求,获取了数据');
    } ,1000)
   }
  //调用getList函数
  // 一进入页面的请求
  getList()

  // 如果有些代码需要在mounted生命周期中执行
 onMounted(()=>{
    console.log('mounted生命周期函数 逻辑一');
 })
 onMounted(()=>{
    console.log('mounted生命周期函数 逻辑二');
 })
// 写成函数的调用方式，可以调用多次


</script>


<template>
  <div>
    <div>{{ count }}</div>
    <button @click="changeCount">修改count</button>
    <div>{{ name }}</div>
    <button @click="changeName">修改name</button>
    <div>{{ userInfo }}</div>
    <button @click="changeUserInfo">修改userInfo</button>
  </div>
</template>


<style>

</style>