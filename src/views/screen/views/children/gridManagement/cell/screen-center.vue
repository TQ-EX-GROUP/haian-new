<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 10:07:14
 * @LastEditTime: 2020-08-12 10:33:52
-->
<template>
  <div class="screen-center">
    <div class="center-card">
      <ul>
        <li v-for="(item,index) in cardData" :key="index">
          <p>
            <img :src="imgList[index]" alt>
            <span>{{item.value}}</span>
          </p>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="center-card-box">
      <ul>
        <li v-for="(item,index) in cardBoxData" :key="index">
          <p>{{item.name}}</p>
          <p>{{item.value|NumFormat}}</p>
        </li>
      </ul>
    </div>
     <gis-map @loaded="loadHandle">
      <org-choose
        v-if="map"
        org-code=".1.6.8."
        :map="map"
        :gisHttp="gisHttp"
        @change="orgChangeHandle"></org-choose>
        <layer-choose
        :map="map"
        :gisHttp="gisHttp"
        @tab-change="tabChangeHandle"
        @change="layerChangeHandle"></layer-choose>
    </gis-map>
    <components :is="currentModal" ref="gridBase"></components>
</div>
</template>

<script>
import { mapActions } from 'vuex'
// import cardDataJson from '@/assets/mock/grid-center-card.json'
// import cardBoxDataJson from '@/assets/mock/grid-center-box.json'
//gis
// GIS
import LayerChoose from '../gis-components/layer-choose'
import OrgChoose from '../gis-components/org-choose'
import PoiStat from '../mixins/poi-stat-v2'
import RenderPoint from '../mixins/render-point'
//modal
// import Bus from '../../../../bus'
import { loadImages } from '../map-helpers/load-images'
import beginImage from '../../../../../../assets/img/common/track-begin.png'
import overImage from '../../../../../../assets/img/common/track-over.png'
export default {
  components: {
    // BasicData,
    LayerChoose,
    OrgChoose,
    // PoiListPanel,
  },
  // mixins: [RenderPoint, PoiStat, modalHelpers],
  mixins: [RenderPoint, PoiStat],

  data() {
    return {
      imgList: [
        require('@/assets/imgs/grid-01.png'),
        require('@/assets/imgs/grid-02.png'),
        require('@/assets/imgs/grid-03.png'),
        require('@/assets/imgs/grid-04.png'),
      ],
      cardData: [
        {
          'name': '综合网格数',
          'value': 232,
        },
        {
          'name': '专属网格数',
          'value': 246,
        },
        {
          'name': '专职网格员数',
          'value': 1231,
        },
        {
          'name': '兼职网格员数',
          'value': 870,
        },
      ],
      cardBoxData: [
        {
          'name': '实有人口',
          'value': 1,
        },
        {
          'name': '重点人员',
          'value': 1,
        },
        {
          'name': '实有房屋',
          'value': 1,
        },
        {
          'name': '出租房',
          'value': 1,
        },
        {
          'name': '实有单位',
          'value': 1,
        },
      ],
      showModal: false, //网格员信息弹窗
      currentModal: '', //要显示的弹窗
      //gis
      map: null,
      gisHttp: null,
      currentSubject: null,
      subjectTree: null,
      currentClickPoint: {}, // 地图上被点击的poi图标信息, { subjectName, poi }
      modal: false,
      oldManModal: false,
      currentTab: 'layer',
    }
  },
  computed: {
    currentOrg() {
      return this.$store.state.globe.common.org
    },
  },
  // watch: {
  //   'currentClickPoint.subjectName'(subjectName) {
  //     if (subjectName) {
  //       this.$refs.gridBase.show()
  //       // this.$refs.gridBase.showModals = true
  //       this.currentModal = this.getModal(subjectName)
  //       // this.showModal = true
  //       // console.log(this.$refs.llgtfoo)
  //     }
  //   },
  // },
  mounted() {
    // this.cardData = cardDataJson
    // this.cardBoxData = cardBoxDataJson
    this.getCenterTop()
    this.getCenterLeft()
  },
  methods: {
    //中间地图顶部数据
    getCenterTop() {
      const params = {
        orgId: 4583,
      }
      this.centerTop(params).then(res => {
        res.body.forEach(item => {
          this.cardData.forEach(ele => {
            if (item.name === ele.name) {
              ele.value = item.value
            }
          })
        })
      })
    },
    //中间地图左侧数据
    getCenterLeft() {
      const params = {
        orgId: 4583,
      }
      this.centerLeft(params).then(res => {
        Object.entries(res.body).forEach(item => {
          this.cardBoxData.forEach(el => {
            if (item[0] === el.name) {
              // eslint-disable-next-line prefer-destructuring
              el.value = item[1]
            }
          })
        })
      })
    },
    layerChangeHandle(tab, subjectTree, subject) {
      this.currentTab = tab
      this.subjectTree = subjectTree
      if (this.subjectTree.length === 0) { return }
      // this.getStat(this.currentOrg, subjectTree)
      // this.currentSubject = subject
      if (!subject.choosed) {
        // this.$refs.poiListPanel.goBackHandle()
        // Bus.$emit(CLOST_POI_LIST)
        this.currentSubject = null
      }
      if (tab === 'layer') {
        this.changeHandle(this.currentOrg, subject)
      } else {
        this.renderHeatmap(this.currentOrg, subjectTree)
      }
    },
    changeHandle(currentOrg, subject) {
      // console.log(currentOrg, subject, 'changeHandle')
      if (!currentOrg || !subject) {
        return
      }
      if (subject.children) {
        subject.children.forEach(item => {
          this.renderPoi(currentOrg, item)
        })
      } else {
        // console.log(currentOrg, subject, 'lilong ')
        this.renderPoi(currentOrg, subject)
      }
    },
    tabChangeHandle(tab) {
      console.log(tab)
      this.clearAllMarkers()
      this.heatmapLayer && this.heatmapLayer.setData([])
      // Bus.$emit(CHANGE_SUBJECT_TAB)
    },
    loadHandle(object) {
      console.log(object, '=====================')
      const { map, gisHttp } = object
      this.loadMapImages(map).then(() => {
        this.map = map
        this.gisHttp = gisHttp
        // Bus.$emit(GIS_MAP_READY, object)
      })
    },
    orgChangeHandle(org) {
      // console.log(org, '000000000000000000000000000')
      this.$store.commit('globe/common/setCurrentOrg', org)
      // this.poiListPanelisShow = false
      this.clearAllMarkers()
      if (org && this.subjectTree.length !== 0) {
        this.getStat(org, this.subjectTree)
        // console.log(this.currentOrg)
        if (this.currentTab === 'layer') {
          this.subjectTree.forEach(subject => {
            this.changeHandle(this.currentOrg, subject)
          })
        } else {
          this.renderHeatmap(this.currentOrg, this.subjectTree)
        }
      }
    },
    loadMapImages(map) {
      const beginIconInfo = { name: 'my-begin-icon', path: beginImage }
      const overIconInfo = { name: 'my-over-icon', path: overImage }
      const icons = [beginIconInfo, overIconInfo]
      // 加载地图所需图标
      return loadImages(map, icons)
    },
    ...mapActions('screen/gridManagement', ['centerTop', 'centerLeft']),
  },
}
</script>

<style lang='scss' scoped>
.screen-center {
  position: absolute;
  width: calc(100% - 200px);
  height: calc(100% - 200px);
  box-sizing: border-box;
  .center-card {
    z-index:95;
    position: absolute;
    right: 2000px;
    top: 20px;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 30px;
        width: 518px;
        height: 158px;
        background: url("../../../../../../assets/imgs/01.png") no-repeat;
        background-size: 100% 100%;
        p {
          text-align: left;
          margin-left: 170px;
          &:first-of-type {
            position: relative;
            img {
              width: 64px;
              height: 44px;
              position: absolute;
              left: -100px;
              top: 20px;
            }
            span {
              font-size: 58px;
              font-family: Source Han Sans CN Medium,
                Source Han Sans CN Medium-Medium;
              font-weight: bolder;
              text-align: left;
              color: #ffffff;
            }
          }
          &:last-of-type {
            font-size: 38px;
            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            text-align: left;
            color: #a3c9f0;
          }
        }
        &:nth-of-type(1) {
          p {
            &:first-of-type {
              span {
                background: linear-gradient(#a0d8ff 0%, #2d81ff 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
        }
        &:nth-of-type(2) {
          p {
            &:first-of-type {
              span {
                background: linear-gradient(#a8fce8 0%, #00f0c6 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
        }

        &:nth-of-type(3) {
          p {
            &:first-of-type {
              span {
                background: linear-gradient(#fc9a89 0%, #ff460a 99%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
        }
        &:nth-of-type(4) {
          p {
            &:first-of-type {
              span {
                background: linear-gradient(#fddb8f 0%, #faa900 99%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
        }
      }
    }
  }
  .center-card-box {
    z-index:95;
    position: absolute;
    top: 100px;
    left: 2120px;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      li {
        margin-bottom:40px;
        width: 378px;
        height: 120px;
        background: url("../../../../../../assets/imgs/02.png") no-repeat;
        background-size: 100% 100%;
        padding-left:30px;
        box-sizing: border-box;
        padding-top:10px;
        p {
          &:first-of-type {
            font-size: 34px;
            font-family: Source Han Sans CN Medium,
              Source Han Sans CN Medium-Medium;
            font-weight: 500;
            text-align: left;
            color: #61fff6;
            letter-spacing: 3px;
          }
          &:last-of-type {
            font-size: 40px;
            font-family: Source Han Sans CN Regular,
              Source Han Sans CN Regular-Regular;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
            letter-spacing: 4px;
          }
        }
      }
    }
  }
}
</style>