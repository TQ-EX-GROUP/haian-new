<template>
  <div class="i-radio-label" :class="{ checked: checked }" @click="checked=!checked">
    <span class="i-radio-inner" />
    <span class="i-radio-text">
      <i :style="{ opacity: checked ? 0 : 1 }">显示</i>
      <i :style="{ opacity: checked ? 1 : 0 }">关闭</i>点位</span>
  </div>
</template>
<script>
export default {
  name: 'IRadio',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      checked: true,
    }
  },
  watch: {
    value(newVal) {
      this.checked = newVal
    },
    checked(newVal) {
      this.$emit('input', newVal)
      this.$emit('change', newVal)
    },
  },
}
</script>
<style lang="scss" scoped>
.i-radio-label{
  display: inline-block;
  height: 28px;
  line-height: 28px;
  cursor: pointer;
  user-select: none;
  .i-radio-inner{
    display: inline-block;
    width: 42px;
    height: 20px;
    border-radius: 10px;
    background: #1a3d33;
    position: relative;
    vertical-align: middle;
    &::before{
      content: '';
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 9px;
      background: #75AA8F;
      position: absolute;
      top: 1px;
      right: 0px;
      transition: all 0.2s ease-in-out;
    }
  }
  .i-radio-text{
    vertical-align: middle;
    margin-left: 10px;
    display: inline-block;
    height: 100%;
    position: relative;
    padding-left: 40px;
    i{
      transition: all 0.2s ease-in-out;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  &.checked{
    .i-radio-inner::before{
      right: 24px;
      background: #50F19E;
    }
    .i-radio-text{

    }
  }
}
</style>
