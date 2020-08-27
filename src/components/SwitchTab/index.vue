<!--
 * @Descripttion: 'switvh切换'
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 10:24:21
 * @LastEditTime: 2020-08-05 16:07:00
-->
<template>
  <ul class="switch-tab-container">
    <li
    :class="tabIndex==key&&key==0?'active':(tabIndex==key&&key==1?'activeB':'')"
     v-for="(value, key) in source"
     :key="key"
     @click="getTab(key)">
     {{value}}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SwitchTab',
  props: {
    source: {
      type: Array,
    },
  },
  data() {
    return {
      tabIndex: 0,
      timer: null,
    }
  },
  mounted() {
    // this.timer = setInterval(() => {
    //   this.getTab(!this.tabIndex)
    // }, 2500)
  },
  methods: {
    getTab(key) {
      this.tabIndex = key
      this.$emit('getTabValue', this.tabIndex)
    },
  },
}
</script>
<style lang="scss" scoped>
.switch-tab-container {
   position: absolute;
   right:0px;
   top:10px;
   overflow: hidden;
   z-index: 5;
   display: flex;
  li{
      height: 40px;
      line-height: 40px;
      color: #528AF6;
      font-size: 24px;
      border: 1px solid #4E91E2;
      cursor: pointer;
      text-align: center;
      list-style: none;
      padding: 0 27px;
  }
  .active{
    background: rgba(95,145,220,1);
    color: #fff;
    border-radius:6px 0 0 6px;
  }
  .activeB{
    background: rgba(95,145,220,1);
    color: #fff;
    border-radius:0px 6px 6px 0px;
  }
}
</style>


