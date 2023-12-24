<script setup>
import { ref } from 'vue';
// 默认情况下在<script setup:>语法糖下组件内部的属性和方法是不开放给父组件访问的，
// 可以通过defineExpose编译宏指定哪些属性和方法允许访问
const count = ref(99)
const sayHi = () => {
    console.log('你好')
}
defineExpose({
    // 定义一个count变量
    count,  
    // 定义一个sayHi函数
    sayHi
})
</script>
<template>
    <div>我是测试用的组件 --{{ count }}</div>
</template>
<style>
</style>