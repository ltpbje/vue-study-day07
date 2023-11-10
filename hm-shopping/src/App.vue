<template>
  <div id="app">
    <van-switch v-model="checked" loading />
    <van-switch v-model="checked" active-color="#2c313c" inactive-color="#dcdee0"/>
    <van-button type="primary">主要按钮</van-button>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>
<style lang="less">

</style>
