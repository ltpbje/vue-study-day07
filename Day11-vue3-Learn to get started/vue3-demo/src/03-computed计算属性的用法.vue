<script setup>
import { computed, ref } from 'vue'

const list = ref([1, 2, 3, 4, 5, 6, 7])
const filterList = computed(() => {
    return list.value.filter(item => item > 2)
})
const addFn = () => {
    list.value.push(666)
}
const count = computed({
    get: () => count,
    set: (val) => {
        list.value.push(val)
    }
})
const modifyListFn = () => {
    count.value = 555
}
</script>


<template>
    <div>
        <div>原始的list {{ list }}</div>
        <div>计算属性过滤后的list {{ filterList }}</div>
        <button @click="addFn">按钮</button>
        <button @click="modifyListFn">设置计算属性的值</button>
    </div>
</template>


<style></style>