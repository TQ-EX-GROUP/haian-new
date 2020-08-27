<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-17 08:51:57
 * @LastEditTime: 2020-08-20 14:27:34
-->
<template>
  <div class="item" @click="$emit('click')">
    <div class="text" :title="info.name">
      <i>{{info.index}}</i>
      <span>{{info.issueName}}</span>
    </div>
    <span class="time">
      {{info.occurDate}} {{info.occureTime}}
    </span>
  </div>
</template>
<script>
export default {
  nane: 'item',
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
<style lang="scss" scoped>
.item{
  box-sizing: border-box;
  height: 94px;
  margin-bottom:6px;
  background: rgba(14, 29, 59,0.5);
  display: flex;
  justify-content: space-between;

  cursor: pointer;
  .text{
    width: 820px;
    color:#fff ;
    display: flex;
    >i{
      font-size: 50px;
      color: #87f5ff;
      padding: 0 42px;
      font-weight: bold;
       line-height: 94px;
      font-style: italic;
    }
    >span{
      color:#fff ;
      font-size: 34px;
      line-height: 94px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .time{
    color: #e8eaea;
    font-size: 32px;
    line-height: 94px;
    padding-right: 14px;
  }
}
</style>