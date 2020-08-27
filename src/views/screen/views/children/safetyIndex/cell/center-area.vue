<template>
  <div class="center-area">
    <div class="focus-people">
      <border-box :title="'关注对象'">
        <div class="count">
          <p>总数：<span>{{count}}</span></p>
          <p>本月新增：<span>{{monthCount}}</span></p>
        </div>
        <focus-people :source="focusPeopleData"></focus-people>
      </border-box>
    </div>
    <div class="hit-controls">
      <border-box :title="'易肇事肇祸精神障碍患者管控'">
         <div class="risk-box">
           <risk :source="riskData" :id="'risk'"></risk>
        </div>
        <div class="control-list">
          <control-list
            :header="scrollListHeader"
            :source="controlListData"
            v-if="true"></control-list>
        </div>
      </border-box>
    </div>
  </div>
</template>
<script>
import FocusPeople from '../components/focus-people'
import Risk from '../components/risk.vue'
import ControlList from '../components/control-list.vue'
// mock数据
import focusPeopleJson from '../../../../../../assets/json/gridWork/focusPeople.json'
import riskDataJson from '../../../../../../assets/json/gridWork/riskData.json'
import controlListJson from '../../../../../../assets/json/gridWork/controlList.json'
export default {
  components: {
    FocusPeople,
    ControlList,
    Risk,
  },
  data() {
    return {
      focusPeopleData: [],
      count: 0,
      monthCount: 0,
      riskData: {},
      scrollListHeader: [
        {
          des: '所属辖区',
          flex: 30,
        },
        {
          des: '患者姓名',
          flex: 20,
        },
        {
          des: '肇事情况',
          flex: 17,
        },
        {
          des: '医师评级',
          flex: 17,
        },
        {
          des: '预警状态',
          flex: 17,
        },
        {
          des: '接管人员',
          flex: 17,
        },
        {
          des: '接管人员电话',
          flex: 30,
        },
        {
          des: '是否服务',
          flex: 17,
        },
      ],
      controlListData: [],
    }
  },
  created() {
    this.getFousPeople()
    this.getRisk()
    this.getControlList()
  },
  methods: {
    getFousPeople() {
      this.http
        .get(
          `/cloudMap/rkCloudMapController/zdsfryjrxzs.action?orgId=1496`,
        )
        .then(res => {
          this.focusPeopleData = res.data.data.filter(item => item.statisticsType !== '合计').map(item => {
            return {
              'name': item.statisticsType,
              'value': item.allCount,
            }
          })
          this.count = this.focusPeopleData.map(
            item => item.value).reduce((prev, next) => prev + next)
        })
        .catch(() => {
          this.focusPeopleData = focusPeopleJson.data.map(item => {
            return {
              'name': item.statisticsType,
              'value': item.allCount,
            }
          })
          this.count = this.focusPeopleData.map(
            item => item.value).reduce((prev, next) => prev + next)
        })
    },
    //易肇事肇祸精神病患者管控
    getRisk() {
      this.http
        .get(
          `/cloudMap/rkCloudMapController/getJsbhzByArea.action?orgId=1496`,
        )
        .then(res => {
          const xData = res.data.map(item => item.orgName)
          const data1 = res.data.map(item => item['低风险'])
          const data2 = res.data.map(item => item['高风险'])
          this.riskData = {
            xData,
            data1,
            data2,
          }
        })
        .catch(() => {
          const xData = riskDataJson.map(item => item.orgName)
          const data1 = riskDataJson.map(item => item['低风险'])
          const data2 = riskDataJson.map(item => item['高风险'])
          this.riskData = {
            xData,
            data1,
            data2,
          }
        })
    },
    // 易肇事肇祸精神病患者管控列表
    getControlList() {
      this.http
        .get(
          `/cloudMap/rkCloudMapController/getJsbhzList.action?orgId=1496&page=1&rows=50`,
        )
        .then(res => {
          const rst = []
          res.data.result.forEach(item => {
            rst.push({
              textArr: [
                item.orgName,
                item.name,
                item.yjzt,
                item.gridMemberName,
                item.gridMemberPhone,
                item.serviceCnt ? '是' : '否',
                item.serviceTime,
              ],
              data: item,
            })
          })
          this.controlListData = rst
        })
        .catch(() => {
          const rst = []
          controlListJson.result.forEach(item => {
            rst.push({
              textArr: [
                item.orgName,
                item.name,
                item.zsqk,
                item.yspj,
                item.yjzt,
                item.gridMemberName,
                item.gridMemberPhone,
                item.serviceCnt ? '是' : '否',
              ],
              data: item,
            })
          })
          this.controlListData = rst
        })
    },
  },

}
</script>
<style  lang="scss" scoped>
.center-area {
  width: 1542px;
  height: 100%;
  display: flex;
  flex-direction: column;
  .focus-people{
    height:540px;
    overflow: hidden;
  }
  .hit-controls{
    height:830px;
    .risk-box{
      height: 370px;
    }
    .control-list{
      height: 360px;
    }
  }
  .count{
      position: absolute;
      right:0px;
      top:0px;
      display: flex;
      height: 60px;
      line-height: 60px;
      font-size:28px;
      font-family:Source Han Sans CN;
      font-weight:400;
      color:rgba(77,166,248,1);
      text-align: right;
      padding-right: 30px;
      box-sizing: border-box;
      span{
        color:#F0BD54;
      }
      p{
        margin-right: 24px;
      }
  }
}
</style>
