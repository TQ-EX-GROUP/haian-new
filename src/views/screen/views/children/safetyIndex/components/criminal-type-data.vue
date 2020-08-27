<template>
  <div class="criminal-type-data">
    <div class="tabs">
      <div class="tab-item" v-for="(item,index) in data" :key="index">
        <div class="title">{{item.title}}</div>
        <div class="number1">
          总数
          <span>{{item.number}}</span>件
        </div>
      </div>
    </div>
    <div class="bars-outer">
      <div class="bars">
        <div class="bar-item" v-for="(item,index) in ((data[0] || {}).types || [])" :key="index">
          <div class="title">{{item.title}}</div>
          <div class="process-outer">
            <div class="process-inner" style="width:50%" />
          </div>
          <div class="number">{{item.number}}件</div>
        </div>
      </div>
      <div class="bars">
        <div class="bar-item" v-for="(item,index) in ((data[1] || {}).types || [])" :key="index">
          <div class="title">{{item.title}}</div>
          <div class="process-outer">
            <div class="process-inner" style="width:50%" />
          </div>
          <div class="number">{{item.number}}件</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: { type: Array, default: () => ([]) },
  },
  data() {
    return {
      tabs: ['刑事案件', '民商事案件'],
      titles: ['盗窃', '危险驾驶', '故意伤害案件', '其他'],
      currentIndex: 0,
    }
  },
}
</script>
<style lang="scss" scoped>
.criminal-type-data {
  width: 100%;
  height: 770px;
  background-image: url("../../../../../../assets/img/gridSafety/bg7.png");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 35px 0;
  .tabs {
    display: flex;
    margin: 0 auto;
    width: 1255px;
    justify-content: space-between;
    .tab-item {
      background-color: rgba(4, 176, 180, 0.2);
      border-radius: 5px;
      width: 610px;
      height: 245px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 45px 0;
      .title,
      .number1 {
        font-size: 29px;
        font-family: PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
      .number1 span {
        color: #83c2ee;
      }
      .number2 {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 300;
        color: rgba(40, 217, 226, 1);
      }
    }
  }
  .bars-outer{
    display: flex;
    justify-content: space-between;
    width: 1225px;
    margin: 0 auto;
  }
  .bars {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 274px;
    margin: 0 auto;
    width: 1255px;
    .bar-item {
      align-items: center;
      display: flex;
      justify-content: space-between;
      .title {
        width: 170px;
        font-size: 24px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(254, 254, 255, 1);
      }
      .process-outer {
        width: 325px;
        background-color: #24415f;
        height: 34px;
        position: relative;
        .process-inner {
          height: 34px;
        }
      }
      &:nth-child(1) .process-inner {
        background: -webkit-gradient(
          linear,
          0 0,
          100% 100%,
          from(#a3d8ff),
          to(#3681ff)
        );
      }
      &:nth-child(2) .process-inner {
        background: -webkit-gradient(
          linear,
          0 0,
          100% 100%,
          from(#b5f4e4),
          to(#52ffdf)
        );
      }
      &:nth-child(3) .process-inner {
        background: -webkit-gradient(
          linear,
          0 0,
          100% 100%,
          from(#c2aeff),
          to(#7c38eb)
        );
      }
      &:nth-child(4) .process-inner {
        background: -webkit-gradient(
          linear,
          0 0,
          100% 100%,
          from(#f37070),
          to(#e45845)
        );
      }
      .number {
        font-size: 24px;
        font-family: FZLanTingHeiS-DB1-GBK;
        font-weight: 400;
        color: rgba(83, 166, 248, 1);
        line-height: 17px;
        width: 95px;
      }
    }
  }
}
</style>