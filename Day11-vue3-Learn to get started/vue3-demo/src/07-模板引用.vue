<script setup>
import { onMounted, ref } from 'vue'
import testCom from './components/test-com.vue';
//模板引用（可以获取dom,也可以获取组件）
// 获取dom
const inpRef = ref(null)
const inpForce = () => {
    //获取输入框的引用
    inpRef.value.focus()
}
onMounted(() => {
    // console.log(inpRef.value)

})
//获取组件
const comRef = ref(null)

const getFn = () => {
    // 调用testCom组件的count属性
    console.log(comRef.value.count)
    // 调用comRef的value属性，并调用sayHi方法
    comRef.value.sayHi()
}
</script>


<template>
    <div>
        <input ref="inpRef" type="text" name="" id="">
        <button @click="inpForce">点击让输入框聚焦</button>
        <testCom ref="comRef"></testCom>
        <button @click="getFn">获取组件</button>
    </div>
</template>


<style></style>