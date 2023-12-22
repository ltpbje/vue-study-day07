<script setup>
// export default {
//   setup(){
//     const message = 'this is a message'
//     const logMessage  = ()=>{
//         console.log(message)
//     }
//     return {
//       message,
//       logMessage
//     }
//   }
// }
const message = 'this is a message'
const logMessage = () => {
    console.log(message);
}
</script>



<template>
    <div>
        <div>{{ message }}</div>
        <button @click="logMessage">按钮</button>
    </div>
</template>


<style></style>