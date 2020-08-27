<template>
  <div class="law-data">
    <div v-for="(item,index) in data" :key="index" class="item">
      <div class="icon" />
      <div class="content">
        <div class="title">{{item.title}}</div>
        <div class="numbers">
          <div class="number1">{{item.num1}}件</div>
          <div class="number2">同比{{item.added > 0 ? '新增':'下降'}} {{(item.added*100).toFixed(2)}}%</div>
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
      titles: ['收集总案', '民商事案件数', '刑事案件数', '执行数'],
    }
  },
}
</script>
<style lang="scss" scoped>
.law-data {
  width: 100%;
  height: 598px;
  background-image: url("../../../../../../assets/img/gridSafety/bg4.png");
  background-size: 100% 598px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 50px;
  align-items: center;
  .item{
    background-color: rgba(4, 176, 180,0.2);
    width: 625px;
    height: 224px;
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
    &:nth-child(3){
      .icon::before{
        background-image: url("../../../../../../assets/img/gridSafety/icon4.png");
        width: 74px;
        height: 74px;
      }
    }
    &:nth-child(4){
      .icon::before{
        background-image: url("../../../../../../assets/img/gridSafety/icon6.png");
        width: 74px;
        height: 74px;
      }
    }
  }
}
</style>