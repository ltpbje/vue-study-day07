<template>
  <div id="app">
    <!-- <div class="box"></div>
    <van-switch v-model="checked" loading />
    <van-switch v-model="checked" active-color="#2c313c" inactive-color="#dcdee0"/>
    <van-button type="primary">主要按钮</van-button> -->
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
.box{
  height: 300px;
  width: 300px;
  background-color: pink;
}
</style>
