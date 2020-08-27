<!--
 * @Descripttion: '弹窗外层'
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 14:13:22
 * @LastEditTime: 2020-08-12 15:38:39
-->
<template>
  <transition name="fade">
    <div class="modal-box" v-if="showModal">
      <div class="modal-mask" />
      <div class="modal-content" :style="{width:`${modalScale[0]}px`,height:`${modalScale[1]}px`}">
        <i class="modal-close" @click="closeModal" />
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalPage',
  model: { // 使用model，
    prop: 'showModal',
    event: 'closeM',
  },
  props: {
    modalScale: {
      //弹窗的大小
      type: Array,
      default: () => [3400, 1000],
    },
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // showModal: true,
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeM', false)
      // console.log(this.showModal)
    },
  },
}
</script>

<style lang='scss' scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.5;
  transform: scale(0.5);
}
.fade-enter-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
  transform: scale(1);
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.5;
  transform: scale(0);
}
.modal-box {
  position: fixed;
  width: 100%;
  z-index: 500;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index:999999999;
  .modal-mask {
    width: 110%;
    height: 100%;
    position: fixed;
    background: rgba(0, 9, 23, 0.86);
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index:999999999;
  }
  .modal-content {
    position: fixed;
    left: 50%;
    top: 50%;
    //  width:3400px;
    display: flex;
    align-items: center;
    justify-content: center;
    //  height: 1000px;
    transform: translate(-50%, -50%);
    background: url("../../assets/imgs/modal_bg.png") no-repeat;
    background-size: 100% 100%;
    z-index: 1000000000;
    padding: 100px;
    box-sizing: border-box;
    .modal-close {
      display: inline-block;
      position: absolute;
      cursor: pointer;
      z-index:999999999;
      right: -100px;
      top: 0px;
      width: 102px;
      height: 72px;
      background: url("../../assets/imgs/modal_close.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>