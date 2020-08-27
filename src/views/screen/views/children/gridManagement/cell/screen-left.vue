<!--
 * @Descripttion: '左侧区域'
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 10:06:04
 * @LastEditTime: 2020-08-17 10:20:54
-->
<template>
  <div class="screen-left">
    <div class="grid-compliance-rate">
      <header-box title="网格达标率">
        <!-- <switch-tab :source="['今日','本月']"></switch-tab> -->
        <!-- 年月选择 -->
        <div class="date-select">
          <select-date @getDate="getDate" :initYear="2020"></select-date>
          <!-- <select-box @getSelect="getSelect" :Inityear="2020"></select-box> -->
        </div>
        <div class="compliance-card">
          <grid-rate :source="gridComplianceRateData" @changeLine="changeLine"></grid-rate>
        </div>
        <div class="compliance-line">
          <grid-rate-line :source="gridComplianceLineData"></grid-rate-line>
        </div>
       </header-box>
    </div>
    <div class="grid-work-warning">
      <header-box title="网格工作预警">
        <switch-tab :source="['今日','本月']" @getTabValue="changeTab"></switch-tab>
        <grid-work-warning :source="gridWork" @modal="modalShow"></grid-work-warning>
      </header-box>
    </div>
      <!-- //弹窗 -->
      <modal-page :modalScale="[3000,1300]" v-model="showModal">
        <visit-details-warning
        :tabOneValue="tabList"
        :currentIndex="selectIndex"
        :monthType="monthType">
        </visit-details-warning>
      </modal-page>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import visitDetailsWarning from '../components/visit-details-warning'
import gridRate from '../components/grid-rate'
import gridRateLine from '../components/grid-rate-line'
import gridWorkWarning from '../components/grid-work-warning'
// json
import gridComplianceRateJson from '@/assets/mock/grid-compliance-rate.json'
// import gridCompliancelineJson from '@/assets/mock/grid-compliance-line.json'
import gridWorkJson from '@/assets/mock/grid-work.json'
export default {
  components: {
    gridRate,
    gridRateLine,
    gridWorkWarning,
    visitDetailsWarning,
  },
  data() {
    return {
      showModal: false,
      year: '',
      month: '',
      monthType: 'day',
      gridComplianceRateData: {}, //网格达标率pie
      gridComplianceLineData: {
        xData: [],
        valueData: [],
      }, //网格达标率line
      gridWork: [], //网格工作预警
      tabList: [
        {
          value: '无数据采集网格',
        },
        {
          value: '未登陆网格员',
        },
        {
          value: '轨迹时长未达标网格员',
        },
      ], //网格预警
      selectIndex: 0,
      gridComplianceLineDataAll: [], //五种类型数据集合
      cuurentLinedata: [],
    }
  },
  mounted() {
    this.gridComplianceRateData = gridComplianceRateJson
    this.gridWork = gridWorkJson
  },
  created() {
    this.getGridWorkWarning('day')
  },
  methods: {
    //饼图
    getGridRate() {
      const params = {
        orgId: 4583,
        yyyyMM: `${this.year}-${this.month}`,
      }
      this.gridRate(params).then(res => {
        this.gridComplianceRateData = res.body
        this.getGridRateLine()
        // this.getlineData(res[0].name)
      })
    },
    //折线图
    getGridRateLine() {
      const params = {
        orgId: 4583,
        yyyyMM: `${this.year}-${this.month}`,
      }
      this.gridRateLine(params).then(res => {
        this.gridComplianceLineDataAll = res.body
        this.getlineData(this.gridComplianceRateData[0].name)
      })
    },

    //回调改变折线图数据
    changeLine(data) {
      this.getlineData(data)
    },
    //筛选数据值
    getlineData(string) {
      this.cuurentLinedata = []
      this.gridComplianceLineDataAll.forEach(item => {
        const dataBox = item.data.filter(el => {
          return el.name === string
        })
        const obj = {
          orgName: item.orgName,
          ...dataBox[0],
        }
        this.cuurentLinedata.push(obj)
      })
      this.gridComplianceLineData.xData = this.cuurentLinedata.map(item => {
        return item.orgName
      })
      this.gridComplianceLineData.valueData = this.cuurentLinedata.map((item) => {
        return Number(item.per).toFixed(2)
      })
      this.gridComplianceLineData.name = string
    },
    //显示网格工作预警弹窗
    modalShow(index) {
      this.showModal = true
      this.selectIndex = Number(index) + 1
    },
    //获取年月
    getDate(data) {
      this.year = data.year
      this.month = data.month
      this.getGridRate()
      // this.getGridRateLine()
    },
    //网格工作预警
    getGridWorkWarning(day) {
      const params = {
        orgId: 4583,
        tab: day,
      }
      this.gridWorkWarning(params).then(res => {
        this.gridWork = res.body
      })
    },
    //网格工作预警tab切换
    changeTab(data) {
      console.log(data)
      if (data === 0) {
        this.monthType = 'day'
        this.getGridWorkWarning('day')
      } else if (data === 1) {
        this.getGridWorkWarning('month')
        this.monthType = 'month'
      }
    },
    //获取接口的action集合
    ...mapActions('screen/gridManagement',
      ['gridRate', 'gridRateLine', 'gridWorkWarning']),
  },
}
</script>

<style lang='scss' scoped>
.screen-left {
  width: 1957px;
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  z-index: 99999999!important;
  .grid-compliance-rate {
    height: 1210px;
    width: 100%;
    position: relative;
    .date-select {
      display: flex;
      align-items: center;
      margin-left:100px;
      left: 100px;
      top: 100px;
      height:100px;
      z-index: 8;
    }
    .compliance-card{
      width:100%;
      height:400px;
    }
    .compliance-line{
      width:100%;
      height:600px;
    }
  }
  .grid-work-warning {
    height: 635px;
    width: 100%;
    position: relative;
  }
}
</style>