<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-24 13:58:38
 * @LastEditTime: 2020-08-24 14:03:56
-->
<template>
  <div class="part-title">
      {{tit}}
  </div>
</template>
<script>
export default {
  props: {
    tit: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.part-title{
    height: 62px;
    color: #fff;
    font-size: 41px;
    font-weight: 400;
    background: url("../../../../../../assets/img/gridSafety/titbg.png") no-repeat center left;
    background-size: 100% 62px;
    padding: 0 100px 0 110px;
    display: inline-block;
    margin-bottom: 20px;
}
</style>


