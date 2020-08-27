<template>
  <div class="right-far">
<!-- 重点区域监控 -->
  <div class="camera-list">
    <!-- <div class="camera-title"> -->
      <title-box title="重点区域监控"></title-box>
      <!-- <span>重点区域监控</span> -->
    <!-- </div> -->
    <div class="camera">
      <camera-list :cameraList="cameraList" />
    </div>
  </div>

  <!-- 监控接入数量 -->
  <div class="monitor-num">
    <!-- <div class="monitor-title">监控接入数量</div> -->
    <title-box title="监控接入数量"></title-box>
    <ul class="monitor-ul">
      <li
      v-for="(item,index) in cameraCountList"
      :key="item.orgId"
      @click="getCurrAreaCamrea(item.orgCode,index)"
      :class="{active:currentAreaIndex===index}">
        <p>
          <img src="@/assets/img/virtual/creama.png" alt="">
          <span>{{item.orgName}}</span>
        </p>
        <i>{{item.total|NumFormat}}</i>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
import CameraList from '../cameraList'
export default {
  name: 'RightFar',
  components: {
    CameraList,
  },
  data() {
    return {
      cameraCountList: [],
      cameraList: [],
      currentAreaIndex: -1,
    }
  },
  computed: {
    userOrg() {
      return {
        id: '4583',
        orgCode: '.1.6.4.',
      }
      // return this.$store.getters['globe/user/userOrg']
    },
  },
  mounted() {
    // 获取下辖 统计数据
    this.getCameraCountByOrgCodes()
    // 获取写死6路视频
    this.getCameraNumForBigScreen(this.userOrg.orgCode)
  },
  methods: {
    getCurrAreaCamrea(data, index) {
      this.currentAreaIndex = index
      this.getCameraNumForBigScreen(data)
    },
    // 获取下辖 统计数据
    async getCameraCountByOrgCodes() {
      const rst =  await this.$store.dispatch('screen/home/getCameraCountByOrgCodes', {
        'orgId': this.userOrg.id,
      })
      this.cameraCountList = rst.data || []
    },
    // 获取写死6路视频
    async getCameraNumForBigScreen(orgCode) {
      const params = {
        orgCode: orgCode,
      }
      const rst =  await this.$store.dispatch('screen/home/getSixCameras', params)
      console.log(rst, '摄像')
      const data = rst.data && rst.data.length > 6 ? rst.data.splice(0, 6) : rst.data
      this.cameraList = data || []
    },
  },
}
</script>
<style lang="scss" scoped>
.right-far{
  width: 1650px;
  height: calc(100% - 110px);
  position: absolute;
  top: 38px;
  right: 0px;
  transition: all .4s linear;
  .camera-list{
    width:100%;
    height: 850px;
    padding:30px;
    padding-right: 50px;
    box-sizing: border-box;
    position: relative;
    &:before{
   content:'';
   position: absolute;
    background: url('../../../../../../../assets/img/virtual/right-bg.png') no-repeat;
    background-size: 100% 100%;
   opacity:0.3;
   top:0;
   left:0;
   bottom:0;
   right:0;
    }
    // margin-right:20px;

    .camera-title{
      height: 75px;
      background: url('../../../../../../../assets/img/camera-top.png') no-repeat top left;
      >span{
        display: inline-block;
        font-size: 20px;
        color: #87f5ff;
        margin:35px 0 0 4px;
        padding-left:35px;
        background: url('../../../../../../../assets/img/event-icon.png') no-repeat left;
      }
    }
    .camera{
      width: 100%;
      height: calc(100% - 62px);
      overflow-y: scroll;

    }
  }
  .monitor-num{
    width: 100%;
    height: 940px;
    margin-top:50px;
    box-sizing: border-box;
    padding:30px;
    // margin: 30px 30px 0 0 ;
    position: relative;
     z-index: 5;
    &:before{
      content:'';
      position: absolute;
      background: url('../../../../../../../assets/img/virtual//right-bg.png') no-repeat;
      background-size: 100% 100%;
      opacity:0.3;
      top:0;
      left:0;
      bottom:0;
      right:0;
      z-index: 1;
    }
    .monitor-title{
      height: 56px;
      color: #87f5ff;
      font-size: 20px;
      background: url('../../../../../../../assets/img/monitor-num.png') no-repeat top left;
      padding-left: 35px;
    }
    .monitor-ul{
       z-index: 5;
      background: #13172a80;
      height: calc(100% - 62px);
      width:100%;
      overflow-y: scroll;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      // align-items: center;
      .active{
          background: rgba(6, 110, 247, 0.6);
          span{
            font-weight: bolder;
            letter-spacing: 5px;
            font-size:32px ;
          }
          i{
             font-weight: bolder;
             letter-spacing: 5px;
             font-size:32px ;
          }
      }
      >li{
        z-index: 5;
        letter-spacing: 5px;
        width:31%;
        height:130px;
        text-align: left;
        cursor: pointer;
        background: rgba(14,49,96,0.4);
        margin:5px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-right:30px;
        &:nth-of-type(3n){
          margin-right: 0px;
        }
        &:hover{
          background: rgba(6, 110, 247, 0.6);
          span{
            font-weight: bolder;
            letter-spacing: 5px;
            font-size:32px ;
          }
          i{
             font-weight: bolder;
             letter-spacing: 5px;
             font-size:32px ;
          }
        }
        >p{
          >span{
           display: inline-block;
           width:200px;
          }
          >img{
           margin-right:20px;
          }
          display: inline-block;
          color: #067c8d;
          display: flex;
          align-items: center;
          // padding: 10px 0 0 10px;
          font-size: 28px;
          font-family: FZLanTingHei-L-GBK Regular, FZLanTingHei-L-GBK Regular-Regular;
          font-weight: 400;
          color: #ffffff;
        }
        >i{
          // display: block;
          font-size: 30px;
          color: #02ffde;
          // padding-top: 10px;
          // line-height: 44px;
          // text-align: center;
          // height: 32px;
          background: linear-gradient(#ffffff 0%, #71d7ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 32px;
          font-family: FZLanTingHei-M-GBK Regular, FZLanTingHei-M-GBK Regular-Regular;
          font-weight: 400;
          color: #fefeff;
        }
      }
      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-thumb {
        background: #212843;
      }
    }
  }
}
</style>