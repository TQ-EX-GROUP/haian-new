<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-24 10:16:54
 * @LastEditTime: 2020-08-24 14:48:38
-->
<template>
  <div class="grid-work">
    <div class="module-title">平安指数</div>
    <left-area></left-area>
    <center-left-area></center-left-area>
    <center-right-area></center-right-area>
    <right-area></right-area>
    <div class="router-footer">
      <footer-button :itemIndex="1"></footer-button>
    </div>
  </div>
</template>
<script>
import LeftArea from './cell/left-area'
import CenterLeftArea from './cell/center-left-area'
import CenterRightArea from './cell/center-right-area'
import RightArea from './cell/right-area'
import FooterButton from '../../../../../components/FooterButton'
export default {
  name: 'GriSocial',
  components: {
    LeftArea,
    CenterLeftArea,
    CenterRightArea,
    RightArea,
    FooterButton,
  },
}
</script>
<style lang="scss">
.grid-work {
  position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 230px 100px 50px 80px;
  box-sizing: border-box;
  background: url(../../../../../assets/img/common/bg_hm.png) no-repeat;
  background-size: 100% 100%;
//   margin-bottom: 20px;
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
  .router-footer {
    position: absolute;
    width: 7400px;
    left: 50%;
    transform: translateX(-50%);
    bottom:50px;
  }
}
</style>
