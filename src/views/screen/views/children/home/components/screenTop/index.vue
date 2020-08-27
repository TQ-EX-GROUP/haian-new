<template>
  <div class="screen-top">
    <!-- 点击 切换到远景页面 -->
    <div class="left-part" @click="$emit('leftClick')">
      综合可视化调度指挥
    </div>
    <div class="right-part">
      <div class="text">
        <span>{{date}}</span>
        <span>{{week}}</span>
        <!-- <span>24-12℃</span> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScreenTop',
  data() {
    return {
      date: '',
      week: '',
    }
  },
  mounted() {
    const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    this.date = new Date().toLocaleDateString()
      .replace(/\//g, '-')
    this.week = week[new Date().getDay()]
  },
}
</script>

<style lang="scss" scoped>
.screen-top{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 76px;
  position: absolute;
  top: 0;
  left: 0px;
  .left-part{
    width: 563px;
    height: 76px;
    background: url('../../../../../../../assets/img/top-left.png') no-repeat;
    color: #87e1e9;
    font-size: 33px;
    font-weight: 600;
    line-height: 76px;
    padding-left: 76px;
    text-shadow: .2rem 0rem 1rem #87e1e9;
    cursor: pointer;
  }
  .right-part{
    color: #fff;
    font-size: 16px;
    width: 900px;
    height: 50px;
    background: url('../../../../../../../assets/img/time-left.png') no-repeat left bottom;
    .text{
      margin:30px 0 0 600px;
      >span{
        padding: 0 20px;
      }
    }
  }
}
</style>