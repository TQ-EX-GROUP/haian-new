<template>
  <div class="criminal-data">
    <div class="item" v-for="(item,index) in data" :key="index">
      <div class="icon" />
      <div class="content">
        <div class="title">{{item.title}}</div>
        <div class="numbers">
          <div class="number1">{{item.num}}件</div>
          <div class="number2">同比{{item.num2 > 0 ? '增加' : '降低'}} {{(item.num2 * 100).toFixed(2)}}%</div>
        </div>
      </div>
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
      titles: ['刑事案件立案数', '八类案件立案数'],
    }
  },
}
</script>
<style lang="scss" scoped>
.criminal-data{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 260px;
  background-image: url("../../../../../../assets/img/gridSafety/bg5.png");
  background-size: 100% 100%;
  .item{
    background-color: rgba(4, 176, 180,0.2);
    width: 625px;
    height: 200px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    .content{
      width: 345px;
      .title{
        font-size:29px;
        font-family:PingFang SC;
        font-weight:300;
        color:rgba(255,255,255,1);
      }
      .numbers{
        margin-top: 10px;
        display: flex;
        align-items: baseline;
        .number1{
          width: 180px;
          font-size:39px;
          font-family:Source Han Sans CN;
          font-weight:400;
          color:rgba(254,254,255,1);
          background:linear-gradient(180deg,rgba(255,255,255,1) 0%, rgba(113,215,255,1) 100%);
          background-clip:text;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }
        .number2{
          flex: 1;
          font-size:18px;
          font-family:PingFang SC;
          font-weight:300;
          color:rgba(40,217,226,1);
          line-height:11px;
        }
      }
    }
    .icon{
      width: 110px;
      height: 120px;
      position: relative;
      display: block;
      &::before{
        content:' ';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-size: 100% 100%;
      }
    }
    &:nth-child(1){
      .icon::before{
        background-image: url("../../../../../../assets/img/gridSafety/icon7.png");
        width: 74px;
        height: 74px;
      }
    }
    &:nth-child(2){
      .icon::before{
        background-image: url("../../../../../../assets/img/gridSafety/icon5.png");
        width: 74px;
        height: 74px;
      }
    }
  }
}
</style>