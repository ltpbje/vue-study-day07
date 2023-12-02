<template>
<div class="countBox">
    <button class="minus" @click="minus()">-</button>
    <input @change="changeInp" :value="value" class="inp" type="text">
    <button class="add" @click="add()">+</button>
    <!-- <input type="text" name="" id=""> -->

</div>
</template>

<script>
export default {
  name: 'countBox',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    minus () {
      if (this.value <= 1) return
      this.$emit('input', this.value - 1)
    },
    add () {
      this.$emit('input', this.value + 1)
    },
    changeInp (e) {
    //   console.log(e.target.value)
      e.target.blur()
      const num = +e.target.value // 转数字处理 结果为 数字 或 NaN
      if (isNaN(num) || num < 1) {
        // this.$emit('input', this.value)
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }
  }
}
</script>

<style scoped lang="less">
    .countBox{
        height: 30px;
        width: 110px;
        display: flex;
        .minus,.add{
            height: 30px;
            width: 30px;
            outline: none;
            border: none;
            background-color: #efefef;
        }
        .inp{
            width: 40%;
            height: 30px;
            outline: none;
            border: none;
            text-align: center;
            background-color: #efefef;
            margin:  0 10px;
        }
    }
</style>
