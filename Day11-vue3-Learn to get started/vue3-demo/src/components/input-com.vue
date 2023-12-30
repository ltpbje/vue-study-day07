<script setup>
    import {defineModel} from 'vue'
const modelValue = defineModel()
</script>
<template>
    <div>
        <input type="text"
         :value="modelValue" 
        @input="e => modelValue = e.target.value"
         name="" id="">
    </div>
</template>
<style>
.son {
    height: 70px;
    width: 300px;
    border: 3px solid blue;
    padding: 10px;
    color: black;
    background-color: wheat;
}
</style>