<script setup>
//注意：由于写了setup,所以无法直接配置props选项
//所以：此处需要借助于"编译器宏"函数接收子组件传递的数据
// props 父传子
const props=  defineProps({
    car:String,
    money:Number,
 })
 console.log(props.car)
// 子传父
 const emit = defineEmits(['changeMoney'])
const changeMoney =()=>{
    //触发changeMoney事件，传入参数1
    emit('changeMoney',1)
}
</script>
<template>
<div class="son">
        子组件---{{ car }}----{{ money }}
        <button @click="changeMoney">花钱</button>
    </div>
</template>
<style>
   .son{
        height: 70px;
        width: 300px;
        border:3px solid blue;
        padding: 10px;
        color: black;
        background-color: wheat;
    }
</style>