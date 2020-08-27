<template>
  <div>
    <tq-base-map
      id="tqBaseMap"
      ref="baseMap"
      :center="[120.45852, 32.54514]"
      :minZoom="8"
      :zoom="14"
      :pitch="60"
      en-name="jiangsu-nt_vec_bigscreen"
      :host ="mapConfig.host"
      :port ="mapConfig.port"
      :appKey ="mapConfig.appKey"
      @loaded="loadedHandle">
    </tq-base-map>
    <div
      v-for="(item, i) in mapCameras"
      :key="i">
      <div v-if="flag === i" class="seat" />
      <div
        v-if="flag == i"
        :class="['player',flag===i?'center':'']">
        <screen-player
          @palyClick="flag = flag === i ? -1 : i"
          :id="item.value"
          :index="i"
          :key="item.value" />
      </div>
    </div>
  </div>
</template>

<script>
import { RenderPointLayer } from './render-point-layer'
import $bus from '@/utils/bus.js'
export default {
  name: 'TqMap',
  data() {
    return {
      icons: ['camera', 'grid', 'place'],
      map: null,
      renderPointLayer: null,
      commandList: [],
      commandMarkers: [], //治理中心
      eventMarkers: [], // 事件
      eventMarkersPopup: [], // 事件 popup
      mapCameras: [], // 地图上所有的摄像头数据
      cameraMarkers: [], // 摄像头图标集
      // 展示在center 的camera
      flag: -1,
    }
  },
  computed: {
    userOrg() {
      return {
        id: '4583',
        orgInternalCode: '.1.6.4.',
      }
      // return this.$store.getters['globe/user/userOrg']
    },
    eventList() {
      return this.$store.getters['screen/home/eventList']
    },
    showFlag() {
      return this.$store.getters['screen/home/showFlag']
    },
    curEvent() {
      return this.$store.getters['screen/home/curEvent']
    },
    mapConfig() {
      // 线上地址
      if (process.env.MAP_ENV === 'production') {
        return { host: '2.82.4.200', port: '8182', appKey: '030fa88eba584357840ad086369008cc' }
      } else {
        // 测试、开发
        // return { host: '2.82.4.200', port: '8182', appKey: '030fa88eba584357840ad086369008cc' }
        return { host: 'tianque.oicp.net', port: '28182', appKey: 'b26270efe5d54e5b9fdaa56187b9d304' }
      }
    },
  },
  watch: {
    eventList(v) {
      if (v.length > 0 && this.map) {
        this.setEventPoint(v)
      }
    },
    map(m) {
      if (this.eventList.length > 0 && m) {
        console.log('this.eventList----', this.eventList)
        this.setEventPoint(this.eventList)
      }
    },
    // 切换场景时 数据变化
    showFlag(n, o) {
      // console.log('showFlag-----', n, o)
      // 切换场景时 关闭弹窗
      this.flag = -1
      if (n === 2) {
        this.toggleLayer(false)
        // console.log('this.curEvent.lon, this.curEvent.lat----', this.curEvent)
        if (this.curEvent.lon) {
          this.map.flyTo({ center: [this.curEvent.lon, this.curEvent.lat], zoom: 18 })
          this.initDetail([this.curEvent.lon, this.curEvent.lat])
        }
      } else if (n === 1 && o === 2) {
        this.map.flyTo({ zoom: 13 })
        this.toggleLayer(true)
        this.renderPointLayer.addCommand(this.commandList, this.commandMarkers)
        this.setEventPoint(this.eventList)
        // 清空 详情 数据
        this.$store.commit('screen/home/clearDetailInfo')
      }
    },
  },
  mounted() {
    console.log('process.env---', process.env)
    // 用户监听 点击近景图 item 的flyto 指令
    $bus
      .$on('flyto', (location) => {
        this.map.flyTo({ center: location.split(',').map(item => Number(item)), zoom: 31 })
      })
      .$on('setMapCenter', () => {
        const location = [121.17868621, 31.8713332997] // 海门市中心点
        this.map.flyTo({ center: location, zoom: 12 })
      })
  },
  methods: {
    loadedHandle(object) {
      // console.log(object, 'object')
      // this.map = object.mapbox
      this.map = object
      this.$emit('mapLoad')
      this.renderPointLayer = new RenderPointLayer(this.map, { icons: this.icons })
      this.init()
      this.reSize()
    },
    // 初始化 获取数据
    init() {
      // 获取摄像头数据
      this.getCameraNumForBigScreen()
      // 获取全部 摄像头数据 根据查询条件查询
      // this.getCameraList()
      // 获取全部 网格员
      this.getGridList()
      // 获取全部 周边资源
      this.getPlaceList()
      // 治理中心 数据
      this.getCommandList()
    },
    // 获取摄像头数据
    async getCameraNumForBigScreen() {
      const rst =  await this.$store.dispatch('screen/home/getCameraNumForBigScreen', {
        'actionId': 'getCameraNumForBigScreen',
        'orgCode': '.1.6.4.',
      })
      // console.log(rst, '-------------11111111------')
      const resultList = rst.data.map(v => {
        return {
          value: v.value,
          name: v.name,
          lon: v.longitude,
          lat: v.latitude,
          type: 'camera',
        }
      })
      this.mapCameras = resultList
      this.renderPointLayer.addEvent(resultList, this.cameraMarkers, null, this.cameraEvent)
      // eslint-disable-next-line no-unused-vars
      const list = rst.data.map(v => {
        return {
          name: v.name,
          location: `${v.longitude},${v.latitude}`,
          // abilityNames: v.abilityNames,
          type: 'camera',
        }
      })
      this.renderPointLayer.init('camera', '#2de4ff')
      this.renderPointLayer.setData(list, 'camera')
    },
    async cameraEvent(point) {
      // console.log('cameraEvent--------', point)
      this.mapCameras && this.mapCameras.forEach((item, index) => {
        if (item.value === point.value) {
          this.flag = index
        }
      })
    },
    // async getCameraList() {
    //   const rst =  await this.$store.dispatch('screen/home/getCameraList', {
    //     orgId: this.userOrg.id,
    //     pageIndex: '1',
    //     pageSize: '2000',
    //     claimStatus: '2',
    //   })
    //   console.log('getCameraList------', rst)
    //   // this.renderPointLayer.init('camera', '#2de4ff')
    //   this.renderPointLayer.setData(rst, 'camera')
    // },
    // 获取全部 网格员
    async getGridList() {
      const rst =  await this.$store.dispatch('screen/home/getGridList', {
        orgCode: this.userOrg.orgInternalCode,
        // orgCode: '.1.6.1.',
        configTypeName: 'griduseronline',
        actionId: 'getGridUserOnlineRect',
        isNeedPage: '0',
      })
      this.renderPointLayer.init('grid', '#69b3ff')
      this.renderPointLayer.setData(rst, 'grid')
    },
    // 获取全部 周边资源
    async getPlaceList() {
      const rst =  await this.$store.dispatch('screen/home/getPlaceList', {
        orgCode: this.userOrg.orgInternalCode,
        configTypeName: 'roundresource',
        actionId: 'getRoundResourcesRect',
        isNeedPage: '0',
      })
      this.renderPointLayer.init('place', '#2bc2b2')
      this.renderPointLayer.setData(rst, 'place')
    },
    // 治理中心 数据
    async getCommandList() {
      const rst =  await this.$store.dispatch('screen/home/getCommandList', {
        orgId: this.userOrg.id,
        actionId: 'getGovernCenterList',
        isNeedPage: '0',
      })
      this.commandList = rst
      console.log(rst, 'this.commandList 治理中心')
      this.renderPointLayer.addCommand(rst, this.commandMarkers)
    },

    setEventPoint(list) {
      this.renderPointLayer.addEvent(list, this.eventMarkers, this.eventMarkersPopup, this.eventClick)
    },
    eventClick(point) {
      this.$store.commit('screen/home/updateShowFlag', 2)
      this.$store.commit('screen/home/updateCurEvent', point)
    },
    // 切换近景页
    toggleLayer(visible) {
      if (visible) { //远景
        // this.renderPointLayer.setVisibility('visible') // 放开会报错
        this.renderPointLayer.removeDetailSource()
        this.commandMarkers.forEach(v => v.remove())
        this.eventMarkers.forEach(v => v.remove())
        this.eventMarkersPopup.forEach(v => v.remove())
        this.commandMarkers = []
        this.eventMarkers = []
        this.eventMarkersPopup = []
      } else { //近景
        // this.renderPointLayer.setVisibility('none') // 放开会报错
        this.commandMarkers.forEach(v => v.remove())
        this.eventMarkers.forEach(v => v.remove())
        this.eventMarkersPopup.forEach(v => v.remove())
        this.commandMarkers = []
        this.eventMarkers = []
        this.eventMarkersPopup = []
      }
    },

    // 详情页获取数据
    initDetail(center) {
      // 摄像头参数
      const pCamera = {
        orgId: this.userOrg.id,
        lon: center[0],
        lat: center[1],
        radius: 1000,
      }
      // 除摄像头外 其他参数
      const pCommon = {
        lon: center[0],
        lat: center[1],
        // lon: 120.12653,
        // lat: 30.2755730,
        radius: 1000,
        orgCode: this.userOrg.orgInternalCode,
      }
      this.getCameraListCircle(pCamera)
      this.getGridListCircle(pCommon)
      this.getPlaceListCircle(pCommon)
      this.getCommandListCircle(pCommon)
      this.renderPointLayer.addEvent([this.curEvent], this.eventMarkers, this.eventMarkersPopup)
    },
    async getCameraListCircle(params) {
      const rst =  await this.$store.dispatch('screen/home/getCameraListCircle', params)
      this.renderPointLayer.init('camera-circle', '#2de4ff', 'camera')
      this.renderPointLayer.setData(rst, 'camera-circle')
    },
    async getGridListCircle(params) {
      const rst =  await this.$store.dispatch('screen/home/getGridListCircle', { ...params, actionId: 'getGridUserOnline', isNeedPage: '0', configTypeName: 'griduseronline' })
      this.renderPointLayer.init('grid-circle', '#69b3ff', 'grid')
      this.renderPointLayer.setData(rst, 'grid-circle')
    },
    async getPlaceListCircle(params) {
      const rst =  await this.$store.dispatch('screen/home/getPlaceListCircle', { ...params, actionId: 'getRoundResources', configTypeName: 'roundresource', isNeedPage: '0' })
      this.renderPointLayer.init('place-circle', '#2bc2b2', 'place')
      this.renderPointLayer.setData(rst, 'place-circle')
    },
    async getCommandListCircle(params) {
      // console.log('getCommandListCircle---开始请求----')
      const rst =  await this.$store.dispatch('screen/home/getCommandListCircle', {
        ...params,
        issueOrgId: this.curEvent.issueOrgId,
        actionId: 'getGovernCentreListRound',
        configTypeName: 'governcentre',
        source: '1',
        page: '1',
        size: '100',
      })
      // console.log('getCommandListCircle---', rst)
      this.renderPointLayer.addCommand(rst, this.commandMarkers)
    },
    // 地图方向放大  同时在自定义指令中 也加入相关代码 反向恢复地图的缩放
    reSize() {
      const wrapper = document.querySelector('.wrapper')
      const [wScale, hScale ] = wrapper.style.transform.replace(/[scalceXY()]/g, '').split(' ')
      const mapDom = document.querySelector('#tqBaseMap')
      mapDom.style.transform = `scaleX(${1 / wScale}) scaleY(${1 / hScale})`
    },
  },
}
</script>
<style lang="scss">
// 治理中心动态
@keyframes circle{
  0% {transform: rotateX(70deg)  rotate(0deg);}
    50% {transform:rotateX(70deg)  rotate(180deg);}
    100% {transform:rotateX(70deg) rotate(360deg);}
 }
 @-webkit-keyframes circle{
  0% {-webkit-transform:rotateX(70deg) rotate(0deg);}
  50% {-webkit-transform:rotateX(70deg) rotate(180deg);}
  100% {-webkit-transform:rotateX(70deg) rotate(360deg);}
 }

 @keyframes reversalCircle{
  0% {transform: rotateX(70deg)  rotate(0deg);}
  50% {transform:rotateX(70deg)  rotate(-180deg);}
  100% {transform:rotateX(70deg) rotate(-360deg);}
 }
 @-webkit-keyframes reversalCircle{
  0% {-webkit-transform:rotateX(70deg) rotate(0deg);}
  50% {-webkit-transform:rotateX(70deg) rotate(-180deg);}
  100% {-webkit-transform:rotateX(70deg) rotate(-360deg);}
 }
  .govern-wrap{
    width: 160px;
    height: 160px;
    position: absolute;
    &.main{
      .govern-circle-out{
       background: url('../../../../../../../assets/img/govern-circle-out-main.png') no-repeat center;
      }
      .govern-circle-in{
        background: url('../../../../../../../assets/img/govern-circle-in-main.png') no-repeat center;
      }
      .govern-build{
        background: url('../../../../../../../assets/img/govern-build-main.png') no-repeat center;
        margin-left:-66px;
        margin-top:-100px;
        width: 132px;
        height: 149px;
      }
    }
  }
  .govern-circle-out{
    width: 160px;
    height: 160px;
    background: url('../../../../../../../assets/img/govern-circle-out.png') no-repeat center;
    background-size: 100%;
    -webkit-animation:circle 4s infinite linear;
    animation:circle 4s infinite linear;
  }
  .govern-circle-in{
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 160px;
    background: url('../../../../../../../assets/img/govern-circle-in.png') no-repeat center;
    background-size: 100%;
    -webkit-animation:reversalCircle 4s infinite linear;
    animation: reversalCircle 4s infinite linear;
  }
  .govern-build{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left:-28px;
    margin-top:-36px;
    width: 56px;
    height: 36px;
    background: url('../../../../../../../assets/img/govern-build.png') no-repeat center;
    background-size: 100%;
  }

  .event-map{
    // width: 164px;
    // height: 139px;
    width: 328px;
    height: 278px;
    position: absolute;
    background: url('../../../../../../../assets/img/event1.png') no-repeat center;
    background-size: 100%;
  }
  .event-map-in{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../../../../../../../assets/img/event2.png') no-repeat center;
    background-size: 100%;
    animation: showPop 2s infinite linear;
  }
  .camera-map{
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0);
    position: absolute;
  }

  // 事件popup
  .map-container{
  & /deep/ .mapboxgl-popup{
    .mapboxgl-popup-tip{
      display: none;
    }
    .mapboxgl-popup-content{
      background: transparent;
      padding: 0px;
      .map-popup-wrapper{
        width: 267px;
        min-height: 100px;
        background: url('../../../../../../../assets/img/event-bg.png') no-repeat;
        background-size: 100% 100%;
        // background: #ffdfe277;
        // border-bottom:1px solid #ccc
      }
      .map-popup-title{
        height: 65px;
      }
      .map-popup-img{
        float: left;
        opacity: 0.2;
        animation: showPop 2s infinite linear;
      }
      .map-popup-title >span{
        font-size: 22px;
        font-weight: 600;
        line-height: 65px;
        color: #fff;
      }
      .map-popup-info{
        font-size: 16px;
        padding:0 15px 10px;
        color: #fff;
      }
    }
  }
}

.player{
  position: absolute;
  top:0;
  left: 0;
  width: 0px;
  height: 0px;
  transition: width .20s  ease,height .20s  ease;
  &.center{
    position: fixed;
   width: 1830px;
    height: 706px;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
}

@keyframes showPop {
  0%{
    opacity: 0.2;
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0.2;
  }
}

</style>