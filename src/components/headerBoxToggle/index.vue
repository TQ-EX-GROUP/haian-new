<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-18 11:30:57
 * @LastEditTime: 2020-08-19 17:27:25
-->
<template>
  <div class="header-box-toggle">
    <div class="title-tab" @click="toggleContent(dataIndex)">
      <div class="title-header">
      {{title}}
      </div>
      <div class="toggle" :class="{active:dataIndex===currentIndex}">
      <Icon type="ios-arrow-down" size="60" color="#489EE6" />
      </div>
    </div>
    <transition name="fade" appear>
    <div class="scetion" v-if="dataIndex===currentIndex">
      <slot />
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HeaderBoxToggle',
  // model: {
  //   prop: 'currentIndex',
  //   event: 'change',
  // },
  props: {
    dataIndex: {
      type: [Number, String],
      default: 0,
    },
    currentIndex: {
      type: [Number, String],
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // currentIndex: 0,
    }
  },
  methods: {
    toggleContent(data) {
      this.$emit('change', data)
    },
  },
}
</script>

<style lang='scss' scoped>
.fade-enter-active {
  transition: all 2s ease;
  transform-origin: 0 0;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  height:400px;
  opacity: 0.5;
  transform: scaleY(0.1);
  transform-origin: 0 0;
}
.fade-enter-to /* .fade-leave-active below version 2.1.8 */ {
  height:800px;
  opacity: 1;
  transform: scaleY(1);
  transform-origin: 0 0;
}
.fade-leave /* .fade-leave-active below version 2.1.8 */ {
  // height:400px;
  height:0px;
  opacity: 0;
  // opacity: 0.5;
  // transform: scaleY(0.4);
  transform-origin: 100% 100%;
}
.fade-leave-active{
  height:0px;
  opacity: 0;
  transform-origin: 100% 100%;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
 opacity: 0;
  height:0px;
//  transform: scaleY(0);
 transform-origin: 100% 100%;
}

.active{
  transform: rotate(180deg);
  transition: all .3s linear;
}
.header-box-toggle {
  width: 100%;
  height: 100%;
  position: relative;
  //  padding-top:70px;
   box-sizing: border-box;
   .title-tab{
     position: relative;
     width:100%;
     height:70px;
   }
  .title-header {
    position: absolute;
    top: 0px;
    width: 400px;
    height: 60px;
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
  .toggle{
    cursor: pointer;
    background: #2D3345;
    width:85px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right:10px;
    top:10px;
  }
  .scetion{
    height:800px;
    // height: 100%;
    width: 100%;
    padding:50px;
    box-sizing: border-box;
    transition: all .4s linear;
    background: url('../../assets/imgs/kuang-bg.png') no-repeat;
    background-size: 100% 100%;
    display: flex;
    overflow: auto;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
  }
}
.llgtfoo{
      height:100%!important;
    }
</style>