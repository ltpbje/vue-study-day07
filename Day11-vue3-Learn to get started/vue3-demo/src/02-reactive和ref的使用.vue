<script setup>
// // 1. reactive
// //reactive:接收一个对象类型的数据，返回一个响应式的对象
// import { reactive } from 'vue'
// const state = reactive({
//   count : 10,
// })
// const countAdd = ()=>{
//   state.count++
// }


// 2. ref
// 2.ref:接收简单类型或复杂类型，返回一个响应式的对象
//       本质：是在原有传入数据的基础上，外层包了一层对象，包成了复杂数据类型
//       底层，包成复杂类型之后，再借助reactive实现的响应式
// 注意点:
//    1, 脚本中访问数据，需要通过 .value
//    2.在template中，.value不需要加（帮我们扒了一层）
// 推荐：以后声明数据，统一用ref =>统一了编码规范
import { ref } from 'vue'
const count = ref(10)
const countAdd = () => {
    count.value++
}
</script>


<template>
    <div>
        <div>{{ count }}</div>
        <button @click="countAdd">按钮</button>
    </div>
</template>


<style></style>