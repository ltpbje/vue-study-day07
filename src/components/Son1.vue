<template>
    <div class="box">
        <h2>Son1 子组件{{ $store.state.title }}</h2>
        从vuex中获取的值:{{ count }} <label></label>
        <br>
        <button @click="handleAdd(1)">值 + 1</button>
        <button @click="handleAdd(5)">值 + 5</button>
        <button @click="handleAdd(10)">值 + 10</button>
        <button @click="changeTitle">修改标题</button>
        <div>{{ $store.state.list }}</div>
        <!-- 1.原生 访问getters中的数据 -->
        <div>{{ $store.getters.filterList }}</div>
        <hr>
        <!-- 原生 访问 模块 中的state -->
        <div>{{ $store.state.user.userInfo.name }}</div>
        <!-- 原生 访问 模块 中的getters -->
        <div>{{ $store.getters['user/toUpcase']}}</div>
        <div>{{ $store.state.setting.theme }}</div>
        <!-- 原生 利用mutation 修改 模块中的 state（数据） -->
        <button @click="UpdateTheme">修改主题</button>
        <div>{{ $store.state.user.userInfo.name }}</div>
        <button @click="UpdateUserInfo">更新个人信息</button>
        <!-- 原生 利用action 异步 修改 模块中的 state（数据） -->
        <div>{{ $store.state.user.userInfo }}</div>
        <button @click="UpdateUserSecond({name:'xiaoming',age:30})">1s后更新个人信息</button>
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
    UpdateUserSecond (newUseInfo) {
      this.$store.dispatch('user/UpdateUserSecond', newUseInfo)
    },
    UpdateUserInfo () {
      this.$store.commit('user/changeUserInfo', { name: 'pink', age: 18 })
    },
    UpdateTheme () {
      this.$store.commit('setting/changeTheme', 'pink')
    },
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
