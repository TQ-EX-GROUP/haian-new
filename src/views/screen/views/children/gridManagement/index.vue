<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 09:59:16
 * @LastEditTime: 2020-08-17 16:07:14
-->
<template>
  <div class="haian-screen-container">
     <div class="module-title">网格管理</div>
      <screen-left></screen-left>
      <screen-center></screen-center>
      <screen-right></screen-right>
    <div class="router-footer">
      <footer-button :itemIndex="0"></footer-button>
    </div>
  </div>
</template>

<script>
import screenLeft from './cell/screen-left'
import screenRight from './cell/screen-right'
import screenCenter from './cell/screen-center'

export default {
  components: {
    screenLeft,
    screenRight,
    screenCenter,
  },
}
</script>

<style lang='scss' scoped>
.haian-screen-container {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 190px 100px 30px 100px;
  box-sizing: border-box;
  background: url("../../../../../assets/imgs/linkage_disposal_bg.png")no-repeat;
  background-size: 100% 100%;
  .router-footer {
    position: absolute;
    width: 7400px;
    left: 50%;
    transform: translateX(-50%);
    bottom:50px;
  }
  .module-title{
      position: absolute;
      top:58px;
      left:170px;
      font-family:JDLangZhengTi;
      font-weight:bold;
      text-shadow:0px 4px 4px rgba(0, 0, 0, 0.4);
      z-index:99;
      letter-spacing: 5px;
      color: #87e1e9;
      font-size: 60px;
      font-weight: 600;
      text-shadow: 0.2rem 0rem 1rem #87e1e9;
      cursor: pointer;
    }
}
</style>