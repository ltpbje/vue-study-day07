<script setup>
import { ref, watch } from 'vue'
const count = ref(10)
const name = ref('张三')
const changeCount = () => {
    count.value++
}
const changeName = () => {
    name.value = '李四'
}
// 1.监听一个数据的变化 用ref对象
// watch(ref对象，(newValue, oldValue) => {:: })
// watch(count,(newCount,oldValue)=>{
//   console.log(newCount,oldValue)
// })
// watch(name,(newName,oldName)=>{
//   console.log(newName,oldName)
// })

// 2.监视多个数据的变化 用arr数组
watch([count, name], (newArr, oldArr) => {
    console.log(newArr, oldArr);
})

// 3.immediate 立即执行
// watch([count, name], (newArr, oldArr) => {
//   console.log(newArr, oldArr);
// },{
//   immediate:true
// })


// 4.deep 深度监视 默认的watch是浅层监视
// const ref1 = ref(简单类型)可以直接监视
// const ref2 = ref(复杂类型)监视不到复杂类型内部数据的变化
const userInfo = ref({
    name: 'zs',
    age: 18
})
const changeUserInfo = () => {
    userInfo.value.age++
}
//  默认浅层监视
//   修改了userInfo.value修改了对象的地址，才能监视到
//   userInfo.value ={name:'ls',age:50}
//  
// watch(userInfo, (newObject, oldObject) => {
//   console.log(newObject, oldObject);
// },{
//   deep:false
// })

// 深层监视
// watch(userInfo, (newObject, oldObject) => {
//   console.log(newObject, oldObject);
// },{
//   deep:true,
//   immediate:true
// })

// 5.对于对象中的属性，进行监视 (不使用deep)
watch(() => userInfo.value.age, (newAge, oldAge) => {
    console.log(newAge, oldAge)
})

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


<style></style>