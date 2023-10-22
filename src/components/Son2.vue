<template>
    <div class="box">
        <h2>Son2 子组件</h2>
        从vuex中获取的值:{{ this.$store.state.count }}<label></label>
        <br />
        <button @click="handleSub(1)">值 - 1</button>
        <button @click="handleSub(5)">值 - 5</button>
        <button @click="handleSub(10)">值 - 10</button>
    </div>
</template>

<script>
export default {
  name: 'Son2Com',
  methods: {
    handleSub (n) {
      this.$store.commit('handleSub', n)
    }
  }
}
</script>

<style lang="css" scoped>
.box {
    border: 3px solid #ccc;
    width: 400px;
    padding: 10px;
    margin: 20px;
}

h2 {
    margin-top: 10px;
}
</style>
