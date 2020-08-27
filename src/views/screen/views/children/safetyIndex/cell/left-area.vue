<template>
  <div class="left-area">
    <div class="basic-data">
      <part-title :tit="'平安指数总况'" />
      <basic-data :source="basicData"></basic-data>
    </div>
    <div class="civil-air-defense-association">
      <part-title :tit="'工矿商贸企业'" />
      <factory-data :source="factoryData" />
    </div>
  </div>
</template>
<script>
import BasicData from '../components/basic-data'
import FactoryData from '../components/factory-data'
import PartTitle from '../components/part-title'
import PercentCircle from '../components/circle'

// mock数据
import basicDataJson from '../../../../../../assets/json/gridSafety/basicData.json'
import factoryDataJson from '../../../../../../assets/json/gridSafety/factoryData.json'
import lawDataJson from '../../../../../../assets/json/gridSafety/lawData.json'
import procuratoDataJson from '../../../../../../assets/json/gridSafety/procuratoData.json'
export default {
  components: {
    BasicData,
    PartTitle,
    PercentCircle,
    FactoryData,
  },
  data() {
    return {
      basicData: [],
      factoryData: [],
      lawData: [],
      procuratoData: [],
    }
  },
  created() {
    this.getBasicData()
    this.getFactoryData()
    this.getLawDataJson()
    this.getProcuratoDataJson()
  },
  methods: {
    getBasicData() {
      this.http
        .get(
          `/cloudMap/cloudMapBaseInfoManager/getPopulationManager.action?orgId=1496`,
        )
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
          this.basicData = basicDataJson
        })
    },
    getFactoryData() {
      this.http.get(`/cloudMap/cloudMapBaseInfoManager/getHousePopulationBind.action?orgId=1496`).then(res => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
        this.factoryData = factoryDataJson
      })
    },
    getLawDataJson() {
      this.http.get(`/cloudMap/cloudMapBaseInfoManager/getHousePopulationBind.action?orgId=1496`).then(res => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
        this.lawData = lawDataJson
      })
    },
    getProcuratoDataJson() {
      this.http.get(`/cloudMap/cloudMapBaseInfoManager/getHousePopulationBind.action?orgId=1496`).then(res => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
        this.procuratoData = procuratoDataJson
      })
    },
  },

}
</script>
<style  lang="scss" scoped>
.left-area {
  width: 1958px;
  height: 1737px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
}
</style>
