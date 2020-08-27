<template>
  <div class="right-near">
    <!-- 重点区域监控 -->
    <div class="camera-list" v-if="cameraList.length">
      <camera-list :cameraList="cameraList" />
    </div>

    <!-- 事件详情 -->
    <div class="event-info">
      <span>{{curEvent.issueName}}</span>
      <div class="event-detail">
        <p>发生时间：{{curEvent.occurDate}}   {{curEvent.occureTime}}</p>
        <p>事件类型：{{curEvent.domainName}}</p>
        <p>所在网格：{{curEvent.occureGird}}</p>
        <p>描述：{{curEvent.content}}</p>
      </div>
    </div>

    <!-- 事件联动示意图 -->
    <div class="unite-sketch">
      <span>事件联动示意图</span>
      <div class="unite-bg" />
    </div>
</div>
</template>
<script>
import CameraList from '../cameraList'
export default {
  name: 'RightNear',
  components: {
    CameraList,
  },
  computed: {
    curEvent() {
      return this.$store.getters['screen/home/curEvent']
    },
    showFlag() {
      return this.$store.getters['screen/home/showFlag']
    },
    cameraList() {
      // tudo
      // const list = []
      const allList = this.$store.getters['screen/home/cameraList']
      // console.log(allList, 'allListallListallListallList')
      // allList.some(v => {
      //   if (/实时播放/.test(v.abilityNames)) {
      //     list.push(v)
      //   }
      //   return list.length > 5
      // })
      return allList && allList.length > 6 ? allList.slice(0, 6) : ''
    },
  },
  mounted() {
    console.log(this.curEvent, 'curEvent')
  },
}
</script>
<style lang="scss" scoped>
.right-near{
 width: 1650px;
  height: calc(100% - 110px);
  position: absolute;
  padding:20px 40px;
  top: 38px;
  right: 0px;
  transition: all .4s linear;
  z-index:1;
  &:before{
  content:'';
    position: absolute;
     background: url('../../../../../../../assets/img/virtual/left-bg.png') no-repeat;
     background-size: 100% 100%;
      opacity:0.3;
      top:0;
      left:0;
      bottom:0;
      right:0;
      // z-index: 1;
    }
  .camera-list{
    width: 100%;
    height: 750px;
    overflow-y: scroll;
    // margin-right:20px;
  }
  .event-info{
    margin-top:20px;
    margin-right:20px;
    z-index:5;
    >span{
      display: inline-block;
      padding-left:80px;
      position: relative;
      font-size: 40px;
      font-family: FZLanTingHei-M-GBK Regular, FZLanTingHei-M-GBK Regular-Regular;
      font-weight: bold;
      color: #3494d4;
      &:before{
        position: absolute;
        content:'';
        top:10px;
        left:10px;
        width:50px;
        height:40px;
        background:url('../../../../../../../assets/img/event-icon.png') no-repeat ;
        background-size: 100% 100%;
      }
    }
    .event-detail{
      z-index:50;
      margin-left:60px;
      margin-top:10px;
      // background: #13172a80;
      padding: 15px 25px;
      color: #fff;
      font-size: 34px;
      line-height: 55px;
      max-height: 390px;
      overflow-y: auto;
    }
  }

  .unite-sketch{
    z-index:50;
      margin-top:20px;
      margin-right:20px;
    >span{
      display: inline-block;
      font-size: 20px;
      padding-left:80px;
      margin-bottom: 10px;
      font-size: 40px;
      font-family: FZLanTingHei-M-GBK Regular, FZLanTingHei-M-GBK Regular-Regular;
      font-weight: bold;
      color: #3494d4;
      position: relative;
      &:before{
        content: '';
        position: absolute;
         top:10px;
        left:10px;
        width:50px;
        height:40px;
        background: url('../../../../../../../assets/img/monitor-num.png') no-repeat;
        background-size: 100% 100%;
      }
    }
    .unite-bg{
      height: 490px;
      width:100%;
      background:#13172a80 url('../../../../../../../assets/img/unite-bg-new.png') no-repeat left;
      background-size: 100% 100%;
    }
  }

}
</style>