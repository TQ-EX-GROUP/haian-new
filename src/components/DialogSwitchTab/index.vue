<!--
 * @Descripttion: 'switvh切换'
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 10:24:21
 * @LastEditTime: 2020-08-14 14:12:51
-->
<template>
  <ul class="switch-tab-container">
    <li
    :class="indexTab===key?'active':'activeB'"
     v-for="(item, key) in source"
     :key="key"
     @click="getTab(key, item)">
     {{item.orgName||item.name}}
     <span v-if="item.objectType">
       ({{item.server}})
     </span>
     <span v-else>
       ({{item.value}})
     </span>
</li>
  </ul>
</template>
<script>
export default {
  name: 'DialogSwitchTab',
  model: { // 使用model，
    prop: 'indexTab',
    event: 'tab',
  },
  props: {
    indexTab: {
      type: [Number, String],
      default: 0,
    },
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
    getTab(key, id) {
      this.$emit('tab', key)
      this.tabIndex = key
      this.$emit('getTabValue', id)
    },
  },
}
</script>
<style lang="scss" scoped>
.switch-tab-container {
  height: 100%;
  width: 100%;
  //  overflow: hidden;
   z-index: 5;
   display: flex;
  li{
    height: 60px;
    line-height: 60px;
    cursor: pointer;
    text-align: center;
    list-style: none;
    padding: 0 35px;
    font-size: 28px;
    font-family: FZLanTingHeiS-DB1-GBK Regular, FZLanTingHeiS-DB1-GBK Regular-Regular;
    font-weight: 400;
  }
  .active{
    background: linear-gradient(#72daed 0%, #1eacf6 100%);
    color: #fff;
    border-radius:30px;
  }
  .activeB{
    color: #2FB6F4;
    // border-radius:0px 6px 6px 0px;
  }
}
</style>


