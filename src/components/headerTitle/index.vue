<!--
 * @Descripttion: '区域面板外层'
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 14:57:15
 * @LastEditTime: 2020-07-30 11:25:40
-->
<template>
  <div class="title-box-header">
    <div class="title-header">
      {{title}}
    </div>
    <div class="scetion">
      <slot />
    </div>
</div>
</template>

<script>
export default {
  name: 'HeaderBox',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang='scss' scoped>
.title-box-header {
  width: 100%;
  height: 100%;
  position: relative;
   padding-top:70px;
   box-sizing: border-box;
  .title-header {
    position: absolute;
    top: 0px;
    width: 400px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../assets/imgs/title-bg.png') no-repeat;
    background-size:100% 100%;
    left: 0px;
    font-size: 39px;
    font-family: Source Han Sans CN Regular, Source Han Sans CN Regular-Regular;
    font-weight: 400;
    color: #ffffff;
    // padding-left: 50px;
    box-sizing: border-box;
  }
  .scetion{
    height:calc(100% - 0px);
    width: 100%;
    background: url('../../assets/imgs/kuang-bg.png') no-repeat;
    background-size: 100% 100%;
     display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  }
}
</style>