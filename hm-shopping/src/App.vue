<template>
  <div id="app">
    <van-switch v-model="checked" />
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
