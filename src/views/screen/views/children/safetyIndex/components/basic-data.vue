<template>
  <div class="basic-data-container">
    <div class="item" v-for="(item,index) in source" :key="index">
      <percent-circle :percent="item.value" :width="244" :borderWidth="20" />
      <div class="title">{{item.name}}</div>
    </div>
  </div>
</template>
<script>
import PercentCircle from './circle'
export default {
  components: {
    PercentCircle,
  },
  props: {
    source: {
      type: Array,
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.basic-data-container {
  width: 100%;
  height: 100%;
  padding-top: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-image: url("../../../../../../assets/img/gridSafety/bg2.png");
  width: 100%;
  height: 612px;
  background-size: 100% 612px;
  padding: 0 60px;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title{
  width:172px;
  height:28px;
  font-size:29px;
  font-family:PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  text-align: center;
  margin-top: 25px;
}
</style>


