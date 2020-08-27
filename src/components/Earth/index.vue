<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-17 10:04:20
 * @LastEditTime: 2020-08-17 13:48:41
-->
<template>
  <div :class="['earth', 'earth'+flag]">
     <img src="./img/circle.png">
  </div>
</template>
<script>
export default {
  name: 'Earth',
  data() {
    return {
      interval: null,
      flag: 1,
    }
  },
  created() {
    // 特别快
    // const loop = () => {
    //   this.flag = (this.flag + 1) % 125
    //   requestAnimationFrame(loop)
    // }
    // requestAnimationFrame(loop)

    this.interval = setInterval(() => {
      this.flag = (this.flag + 1) % 125
    }, 50)
  },
  destroyed() {
    clearInterval(this.interval)
  },
}
</script>
<style lang="scss" scoped>
.earth{
  width: 100%;
  height: 100%;
  // padding-top:30px;
  @for $i from 0 to 125 {
  &.earth#{$i} {
      background: url("./img/earth_#{$i}.png");
      background-size: 100% 100%;
    }
  }
  >img{
    width: 100%;
    height: 100%;
  }
}
</style>