<template>
    <div class="box">
        <h2>Son2 子组件</h2>
        从vuex中获取的值:{{ this.$store.state.count }}<label></label>
        <br />
        <button @click="handleSub(1)">值 - 1</button>
        <button @click="handleSub(5)">值 - 5</button>
        <button @click="handleSub(10)">值 - 10</button>
        <button @click="setAsyncCount('辅助函数映射')">1S后修改标题为辅助函数映射</button>
        <div>{{ filterList }}</div>
        <!-- 辅助函数映射modules中的数据 -->
        <!--    默认根级别的映射mapState(['xXx'])   -->
        <!-- <div>{{ user.userInfo.name }}</div> -->
        <!-- 子模块的映射mapState('模块名'，['xx']·需要开启命名空间 -->
        <div>{{ userInfo.name }}</div>
        <div>{{ theme }}</div>
        <hr>
        <!-- 辅助函数映射modules中的getters -->
        <div>{{ user.mapGetters.toUpcase }}</div>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex'
export default {
  name: 'Son2Com',
  computed: {
    ...mapGetters(['filterList']),
    // ...mapState(['user'])
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme']),
    ...mapGetters(['user/toUpcase'])
  },
  methods: {
    // 辅助函数- mapMutations 映射方法
    ...mapMutations(['handleSub', 'changeTitle']),
    ...mapActions(['setAsyncCount'])
    //
    // changeTitle (n) {
    //   this.$store.dispatch('setAsyncCount', n)
    // }
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
