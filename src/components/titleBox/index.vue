<!--
 * @Descripttion: '面板框标题'
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 10:56:03
 * @LastEditTime: 2020-08-20 14:53:17
-->
<template>
  <div class="title-box">
    <div class="title-header">
      <!-- <img src="../../assets/imgs/title_icon.png" alt class="img_icon"> -->
      {{title}}
    </div>
    <div class="content">
       <slot />
    </div>
</div>
</template>

<script>
export default {
  name: 'TitleBox',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang='scss' scoped>
.title-box {
  // width: 100%;
  // height: 100%;
   z-index: 5;
  position: relative;
  .title-header {
    // position: absolute;
    // top: 0px;
    width: 90%;
    height: 62px;
    display: flex;
    align-items: center;
    left: 0px;
    font-size: 40px;
    letter-spacing: 5px;
    font-family: Source Han Sans CN Regular, Source Han Sans CN Regular-Regular;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    padding-left: 80px;
    background: url('../../assets/imgs/tip_title_bg.png') no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    .img_icon{
      width:50px;
      height:50px;
      margin-right: 30px;
    }
  }
  .content{
    // height: calc(100% - 62px);
    width:100%;
  }
}
</style>