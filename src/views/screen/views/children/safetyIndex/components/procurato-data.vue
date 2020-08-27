<template>
  <div class="procurato-data">
    <div class="item" v-for="(item,index) in data" :key="index">
      <div class="icon" />
      <div class="title">{{item.title}}</div>
      <div class="number">{{item.num ? item.num+'人' : (item.percent ? (item.percent * 100).toFixed(2)+'%' : '')}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: { type: Array, default: () => [] },
  },
  data() {
    return {
      titles: ['逮捕人数', '逮捕率', '起诉案件', '起诉人数'],
    }
  },
}
</script>
<style lang="scss" scoped>
.procurato-data{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 374px;
  background-image: url("../../../../../../assets/img/gridSafety/bg5.png");
  background-size: 100% 100%;
  .item{
    display: flex;
    width: 285px;
    height: 318px;
    background-color: rgba(4, 176, 180,0.2);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
      font-size:29px;
      font-family:PingFang SC;
      font-weight:300;
      color:rgba(255,255,255,1);
      margin-top: 20px;
    }
    .number{
      font-size:39px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(254,254,255,1);
      background:linear-gradient(180deg,rgba(255,255,255,1) 0%, rgba(113,215,255,1) 100%);
      background-clip:text;
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
    }
    .icon{
      width: 100px;
      height: 115px;
      position: relative;
      &::before{
        content:' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-size: 100% 100%;
      }
    }
    &:nth-child(1) .icon{
      &::before{
        background-image: url("../../../../../../assets/img/gridSafety/icon8.png");
        width: 74px;
        height: 74px;
      }
    }
    &:nth-child(2) .icon{
      &::before{
        background-image: url("../../../../../../assets/img/gridSafety/icon8.png");
        width: 74px;
        height: 74px;
      }
    }
    &:nth-child(3) .icon{
      &::before{
        background-image: url("../../../../../../assets/img/gridSafety/icon9.png");
        width: 74px;
        height: 74px;
      }
    }
    &:nth-child(4) .icon{
      &::before{
        background-image: url("../../../../../../assets/img/gridSafety/icon10.png");
        width: 74px;
        height: 74px;
      }
    }
  }
}
</style>