<template>
    <div class="box">
        <h2>Son1 子组件{{ $store.state.title }}</h2>
        从vuex中获取的值:{{ count }} <label></label>
        <br>
        <button @click="handleAdd(1)">值 + 1</button>
        <button @click="handleAdd(5)">值 + 5</button>
        <button @click="handleAdd(10)">值 + 10</button>
        <button @click="changeTitle">修改标题</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Son1Com',
  computed: {
    ...mapState(['title', 'count'])
  },
  methods: {
    handleAdd (n) {
    //   // 错误代码(vue默认不会监测，监测需要成本)
    //   this.$store.state.count++
      this.$store.commit('handleAdd', n)
    },
    changeTitle () {
      // 传参
      this.$store.commit('changeTitle', '传智播客')
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
