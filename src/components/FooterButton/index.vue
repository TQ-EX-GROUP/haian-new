<!--
 * @Descripttion: '底部按钮'
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 14:57:15
 * @LastEditTime: 2020-08-26 11:18:34
-->
<template>
<div class="center-content">
  <div class="center-list" :class="{showClass:widthSc}">
    <p
    :class="tabIndex==key?'center-list-item item-active':'center-list-item'"
      v-for="(value, key) in centerlist"
    :key="key"
    @click="getTab(key)">
    {{value}}
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'FooterButton',
  props: {
    itemIndex: {
      type: Number,
      default: 0,
    },
    widthSc: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      centerlist: ['网格管理', '平安指数', '可视化调度'],
      tabIndex: this.itemIndex,
    }
  },
  watch: {
    tabIndex() {
      this.getRoute()
    },
  },
  methods: {
    getRoute() {
      // // eslint-disable-next-line no-alert
      // alert(1)
      switch (this.tabIndex) {
        case 0:
          this.$router.push('/screen/gridManagement')
          break
        case 1:
          this.$router.push('/screen/safetyIndex')
          break
        case 2:
          // this.$router.push('/screen/visual')
          window.open('http://2.82.4.201:8080/sessionManage/singleLoginCjdbh.action?target=nthaKshdd&cid=25123')
			  break
        default:
      }
    },
    async getTab(key) {
      this.tabIndex = key
      this.getRoute()

    },
  },
}
</script>

<style lang='scss' scoped>
.center-content{
    width:100%;
    text-align: center;
    background: url('../../assets/imgs/footer_bg.png') no-repeat;
    background-size: 100% 79px;
    background-position: 0 20px;
}
.center-list {
    margin:0 auto;
    width: 1807px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index:99;
    .center-list-item{
      width:410px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      margin:0 20px;
      background: url(../../assets/imgs/center-list-bg.png) no-repeat;
      background-size: 100% 100%;
      position: relative;
      font-size:40px;
      font-family:Source Han Sans CN;
      font-weight:500;
      color:rgba(146,193,234,1);
      cursor: pointer;
      letter-spacing: 5px;
      box-sizing: border-box;
      &::after{
        position: absolute;
        content:'';
        left: 15px;
        top: 8px;
        width:40px;
        height: 40px;
      }
    }
    .item-active{
      background: url(../../assets/imgs/center-list-bg-active.png) no-repeat;
      background-size: 100% 100%;
      color:#fff;
    }
  }
</style>