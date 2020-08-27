<template>
  <div class="petition-data">
    <div class="item" v-for="(item,index) in data" :key="index">
      <div class="title">{{item.title}}</div>
      <div class="number">
        {{item.num}}
        <span>{{index == 0 ? '件' : '次'}}</span>
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
      titles: [
        '来信数',
        '来访批次',
        '集体访批次',
        '集体访人次',
        '去京上访批次',
        '去京上访人次',
        '赴省上访批次',
        '赴省上访人次',
        '到南通上访批次',
        '到南通上访人次',
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.petition-data {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 599px;
  background-image: url("../../../../../../assets/img/gridSafety/bg6.png");
  background-size: 100% 100%;
  padding: 20px 75px;
  .item {
    width: 606px;
    height: 101px;
    background-color: rgba(4, 176, 180, 0.2);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    align-items: center;
    .title {
      font-size: 27px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
    .number {
      font-size: 39px;
      font-family: Source Han Sans CN;
      font-weight: 400;
      color: rgba(83, 166, 248, 1);
      line-height: 73px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(113, 215, 255, 1) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      span {
        font-size: 30px;
        margin-left: 10px;
      }
    }
  }
}
</style>