<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 10:06:47
 * @LastEditTime: 2020-08-24 09:42:08
-->
<template>
  <div class="screen-right">
    <div class="grid-realTime-operation">
      <header-box title="网格实时工作">
        <switch-tab :source="['今日','本月']" @getTabValue="getTabValue"></switch-tab>
        <div class="clr grid-realTime-div">
          <ul class="fl haian-content">
            <li class="fl" v-for="(item,index) in gridOntimeWorkLeft" :key="index">
              <p class="logo-haian " :class="`logo-haian_${index+1}`" />
              <p class="haian-text">{{item.name}}</p>
              <p class="haian-num">{{item.value}}</p>
            </li>
          </ul>
          <div class="fl politics-status">
            <politics-status :source="source_one" />
          </div>
        </div>
      </header-box>
    </div>
    <div class="grid-work-all">
      <header-box title="网格工作总览">
        <switch-tab :source="['终端登录','信息采集']" @getTabValue="workAll"></switch-tab>
        <div class="grid-overview">
          <grid-overview :source="source_two" />
        </div>
      </header-box>
    </div>
    <div class="grid-visit-all">
      <header-box title="网格走访总览">
        <switch-tab :source="['类别','区域']" @getTabValue="visitAll"></switch-tab>
        <div class="clr grid-visit-div" v-if="visitType===0">
          <ul class="grid-visit-ul fl">
            <li class="grid-visit-li grid-visit-li-o">
            <span class="grid-visit-span fl" />
            <div class="fl">
              <p class="grid-visit-p"><span class="grid-visit-num">{{monthPatrol|NumFormat}}</span><label>次</label></p>
              <p class="grid-visit-msg">本月巡查</p>
            </div>
            </li>
            <li class="grid-visit-li ">
            <span class="grid-visit-span grid-visit2 fl" />
            <div class="fl">
              <p class="grid-visit-p"><span class="grid-visit-num">{{totalPatrol|NumFormat}}</span><label>个</label></p>
              <p class="grid-visit-msg">累计巡查</p>
            </div>
            </li>
          </ul>
          <div class="fl grid-pie-div">
            <grid-pie class="grid-pie" @modal="modalShow" :source="serviceRate" />
          </div>
          <div class="fl grid-bar-div">
            <grid-bar class="grid-bar" :source="source_four" />
          </div>
        </div>
        <area-distribution :source="areaDistributionData" v-if="visitType===1"></area-distribution>
    </header-box>
    </div>
    <!-- //弹窗 -->
      <modal-page :modalScale="[3000,1300]" v-model="showModal">
        <visit-details></visit-details>
      </modal-page>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import gridOverview from '../components/grid-overview'
import areaDistribution from '../components/area-distribution'
import gridPie from '../components/grid-pie'
import gridBar from '../components/grid-bar'
import politicsStatus from '../components/politics-status'
import visitDetails from '../components/visit-details'
//mock
import politicsStatusJson from '@/assets/mock/politicsStatus.json'
import gridBarJson from '@/assets/mock/grid-bar.json'
import gridOverviewJson from '@/assets/mock/grid-overview.json'
// import areaDistributionDataJson from '@/assets/mock/area-distribution.json'
export default {
  components: {
    gridOverview,
    gridPie,
    gridBar,
    politicsStatus,
    visitDetails,
    areaDistribution,
  },
  data() {
    return {
      source_one: [],
      source_two: {
        Xdata: [],
        value: [],
        name: '',
      },
      source_four: {
        name: [],
        month: [],
        complement: [],
      },
      showModal: false,
      gridOntimeWorkLeft: [], //网格实时工作左边
      gridOntimeWorkRight: [], //网格实时工作右边
      areaDistributionData: {
        Xdata: [],
        value1: [],
        value2: [],
      },
      visitType: 0, //网格走访总览切换
      monthPatrol: '', //本月巡查
      totalPatrol: '', //累计巡查
      serviceRate: '', //本月服务率
    }
  },
  created() {
    // this.getGridVisit1()
    // this.getGridVisit2()
    // this.getGridVisit4()
    this.getGridOntimeWorkDayLeft()//网格实时工作左边（今日）
    this.getGridOntimeWorkMonthLeft()//网格实时工作左边（本月）
    this.getGridVisitAllType()
    this.getGridVisitAllArea()
    this.getGridOntimeWorkTop4('day') //网格实时工作top4
    this.getGridWorkAllZ()//网格工作总览
  },
  mounted() {},
  methods: {
    getGridOntimeWorkDayLeft() {
      const params = {
        orgId: 4583,
      }
      this.gridOntimeWorkDay(params).then(res => {
        const index = res.findIndex(ele => {
          return ele.name === '事件办理'
        })
        if (index !== -1) {
          res.splice(index, 1)
        }
        this.gridOntimeWorkLeft = res
      })
    },
    getGridOntimeWorkTop4(day) {
      const params = {
        orgId: 4583,
        tab: day,
      }
      this.gridOntimeWorkTop4(params).then(res => {
        this.source_one = res.body.splice(0, 4)
      })
    },
    getGridOntimeWorkMonthLeft() {
      const params = {
        orgId: 4583,
      }
      this.gridOntimeWorkMonth(params).then(res => {
        const index = res.findIndex(ele => {
          return ele.name === '事件办理'
        })//去掉多余的事件办理
        if (index !== -1) {
          res.splice(index, 1)
        }
        this.gridOntimeWorkLeft = res
      })
    },
    //网格走访总览（类别）
    getGridVisitAllType() {
      const params = {
        orgId: 4583,
      }
      this.gridVisitAllType(params).then(res => {
        this.monthPatrol = res.body.monthData //本月巡查
        this.totalPatrol = res.body.totalData//累计巡查
        this.serviceRate = (res.body.rateData) * 100//本月服务率
        const name = res.body.visitTargets.map(item => {
          return item.name
        })
        const month = res.body.visitTargets.map(item => {
          return item.month
        })
        const complement = res.body.visitTargets.map(item => {
          return item.complement
        })
        this.source_four = {
          name,
          month,
          complement,
        }
      })
    },
    //网格走访总览（区域）
    getGridVisitAllArea() {
      const params = {
        orgId: 4583,
      }
      this.gridVisitAllArea(params).then(res => {
        // this.areaDistributionData = res.body
        const Xdata = res.body.map(item => {
          return item.name
        })
        const value1 = res.body.map(item => {
          return item.month
        })
        const value2 = res.body.map(item => {
          return item.complement
        })
        this.areaDistributionData = {
          Xdata,
          value1,
          value2,
        }
      })
    },
    //弹窗显示
    modalShow() {
      this.showModal = true
    },
    visitAll(data) {
      this.visitType = data
    },
    //获取本月本日的回调
    getTabValue(data) {
      if (data === 0) {
        this.getGridOntimeWorkDayLeft()//网格实时工作左边（今日）
        this.getGridOntimeWorkTop4('day') //网格实时工作top4
      } else if (data === 1) {
        this.getGridOntimeWorkMonthLeft()//网格实时工作左边（本月）
        this.getGridOntimeWorkTop4('month') //网格实时工作top4
      }
    },
    //网格工作总览（终端类型）
    getGridWorkAllZ() {
      const params = {
        orgId: 4583,
      }
      this.gridWorkAllZ(params).then(res => {

        const Xdata = res.body.map(item => {
          return item.name
        })
        const value = res.body.map(item => {
          return Number(item.rate).toFixed(2)
        })
        this.source_two = {
          Xdata,
          value,
          name: '终端类型',
        }
      })
    },
    //网格工作总览（信息采集）
    getGridWorkAllM() {
      const params = {
        orgId: 4583,
      }
      this.gridWorkAllM(params).then(res => {

        const Xdata = res.body.map(item => {
          return item.name
        })
        const value = res.body.map(item => {
          return Number(item.rate).toFixed(2)
        })
        this.source_two = {
          Xdata,
          value,
          name: '信息采集',
        }
      })
    },
    workAll(data) {
      if (data === 0) {
        this.getGridWorkAllZ()
      } else if (data === 1) {
        this.getGridWorkAllM()
      }
    },
    getGridVisit1() {
      this.http
        .get(
          `/cloudMap/cloudMapServiceRecord/getRecordObjectServiceNum.action?orgId=1496`,
        )
        .then(res => {
          this.visitData = res.data
        })
        .catch(() => {
          this.source_one = politicsStatusJson
        })
    },
    getGridVisit2() {
      this.http
        .get(
          `/cloudMap/cloudMapServiceRecord/getRecordObjectServiceNum.action?orgId=1496`,
        )
        .then(res => {
          this.visitData = res.data
        })
        .catch(() => {
          this.source_two = gridOverviewJson
          console.log(this.source_two, gridOverviewJson, 88888)

        })
    },
    getGridVisit4() {
      this.http
        .get(
          `/cloudMap/cloudMapServiceRecord/getRecordObjectServiceNum.action?orgId=1496`,
        )
        .then(res => {
          this.visitData = res.data
        })
        .catch(() => {
          this.source_four = gridBarJson
        })
    },
    //获取接口的action集合
    ...mapActions('screen/gridManagement', ['gridOntimeWorkDay',
      'gridOntimeWorkMonth', 'gridVisitAllType',
      'gridOntimeWorkTop4', 'gridVisitAllArea', 'gridWorkAllZ', 'gridWorkAllM',
    ]),
  },
}
</script>

<style lang='scss' scoped>
.screen-right {
  position: relative;
  width: 1957px;
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  // z-index: 99!important;
  .grid-realTime-operation {
    width: 100%;
    height: 563px;
  }
  .grid-work-all {
    width: 100%;
    height: 563px;
  }
  .grid-visit-all {
    width: 100%;
    height: 700px;
  }
  .fl {
    float: left;
  }
  .logo-haian {
    width: 116px;
    height: 90px;
    background-size: 100% 100%;
    margin:70px 72px;
  }
  .logo-haian_1 {
    background: url("../../../../../../assets/imgs/logo-haian_1.png") no-repeat;
  }
  .logo-haian_2 {
    background: url("../../../../../../assets/imgs/logo-haian_2.png") no-repeat;
  }
  .logo-haian_3 {
    background: url("../../../../../../assets/imgs/logo-haian_3.png") no-repeat;
  }
  .grid-visit-span{
    margin:61px 62px;
    width: 72px;
    height:72px;
    background: url("../../../../../../assets/imgs/grid-visit1.png") no-repeat;
  }
  .grid-visit2{
    width: 72px;
    height:72px;
    background: url("../../../../../../assets/imgs/grid-visit2.png") no-repeat;
  }
  .haian-content{
    padding-left:33px;

  }
  .grid-realTime-div{
    width:1889px;
    margin:auto 36px;
  }
  .haian-content li{
    width: 260px;
    height: 408px;
    background: rgba(75,109,165,0.12);
    margin:44px 22px 27px 0px;
  }

  .haian-text,.haian-num{
    font-size: 30px;
    font-family: FZZhengHeiS-M-GB Regular, FZZhengHeiS-M-GB Regular-Regular;
    font-weight: 400;
    text-align: center;
    color: #7ee2ff;
    line-height: 29px;
  }
  .haian-text{
    margin:81px 70px 0px 70px;
  }
  .haian-num{
    color: #ffffff;
    margin:47px 103px;
  }
  .grid-visit-li-o{
    margin-bottom:18px;
  }
  .grid-visit-div{
    width:1879px;
    margin:auto 36px;
          height: 100%;
    display: flex;
    align-items: center;
  }
  .grid-visit-li{
    width: 420px;
    height: 194px;
    background: rgba(75,109,165,0.12);
    border-radius: 6px;
  }
  .grid-visit-p{
    height: 37px;
    font-size: 40px;
    font-family: Arial Regular, Arial Regular-Regular;
    font-weight: 400;
    text-align: left;
    color: #4e90e1;
    line-height: 14px;
    letter-spacing: 2px;
    margin:66px 0 24px 0;
  }
  .grid-visit-msg{
    font-size: 28px;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    line-height: 14px;
    letter-spacing: 1px;
  }
  .grid-overview{
    padding:20px 40px;
    height:100%;
  }
  .grid-pie-div{
    width:445px;
    height:318px;
   padding:77px 0 0 86px;
  }
  .grid-bar-div{
    width:1000px;
    height:100%;
  }
  .grid-pie{
    height:100%;
    width:100%;
  }
  .politics-status{
    margin-top: 40px;
    width:1000px;
    height:calc(100% - 40px);
  }
}
</style>