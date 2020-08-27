<template>
  <div class="container">
    <div class="item" v-for="(item,index) in source" :key="index">
      <div class="left">
        <div class="icon" />
        <div class="content">
          <div class="title">{{item.title}}</div>
          <div class="number">{{item.num}}件</div>
        </div>
      </div>
      <div class="right">
        <div class="title">死亡人数</div>
        <div class="number">{{item.num2}}人</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { source: { type: Array, default: () => [] }},
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 905px;
  background-image: url("../../../../../../assets/img/gridSafety/bg3.png");
  background-size: 100% 905px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 30px;
  align-items: center;
}
.item {
  width: 1804px;
  height: 244px;
  background-color: rgba(35, 69, 142, 0.2);
  border-radius: 5px;
  display: flex;
}
.item .left {
  width: 630px;
  height: 244px;
  border-radius: 5px;
  background: -webkit-gradient(
    linear,
    0 0,
    100% 100%,
    from(#78a4fe),
    to(#356dff)
  );
  display: flex;
  align-items: center;
  padding: 0 90px;
  justify-content: space-between;
}
.item:nth-child(2) .left {
  background: -webkit-gradient(
    linear,
    0 0,
    100% 100%,
    from(#f37070),
    to(#db632f)
  );
}
.item:nth-child(3) .left {
  background: -webkit-gradient(
    linear,
    0 0,
    100% 100%,
    from(#48c2dc),
    to(#1082ab)
  );
}
.item .icon {
  width: 150px;
  height: 150px;
  position: relative;
}
.item .icon::before {
  position: absolute;
  content: " ";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.item:nth-child(1) .icon::before {
  background-image: url("../../../../../../assets/img/gridSafety/icon3.png");
  width: 89px;
  height: 88px;
  background-size: 89px 88px;
}
.item:nth-child(2) .icon::before {
  background-image: url("../../../../../../assets/img/gridSafety/icon2.png");
  width: 87px;
  height: 87px;
  background-size: 87px 87px;
}
.item:nth-child(3) .icon::before {
  background-image: url("../../../../../../assets/img/gridSafety/icon1.png");
  width: 87px;
  height: 86px;
  background-size: 87px 86px;
}
.item .left .content {
  width: 250px;
}
.item .left .content .title {
  font-size: 29px;
  font-family: PingFang SC;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
}
.item .left .content .number {
  font-size: 41px;
  font-family: PingFang SC;
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
}
.right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.right .title {
  font-size: 29px;
  font-family: PingFang SC;
  font-weight: 300;
  color: #fff;
}
.right .number {
  font-size: 41px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(131, 194, 238, 1);
}
</style>