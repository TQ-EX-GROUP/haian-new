<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-24 13:58:38
 * @LastEditTime: 2020-08-24 14:06:34
-->
<template>
  <div class="center-left-area">
    <div class="law-data-container">
      <part-title :tit="'法院收集情况'" />
      <law-data :data="lawData"></law-data>
    </div>
    <div class="procurato-data-container">
      <part-title :tit="'检查院情况'" />
      <procurato-data :data="procuratoData"></procurato-data>
    </div>
    <div class="criminal-data-container">
      <part-title :tit="'刑事发案情况'" />
      <criminal-data :data="criminalData"></criminal-data>
    </div>
  </div>
</template>
<script>
import PartTitle from '../components/part-title'
import LawData from '../components/law-data'
import ProcuratoData from '../components/procurato-data'
import CriminalData from '../components/criminal-data'

// mock数据
import lawDataJson from '@/assets/json/gridSafety/lawData.json'
import procuratoDataJson from '@/assets/json/gridSafety/procuratoData.json'
import criminalDataJson from '@/assets/json/gridSafety/criminalData.json'

export default {
  components: {
    PartTitle,
    LawData,
    ProcuratoData,
    CriminalData,
  },
  data() {
    return {
      lawData: [],
      procuratoData: [],
      criminalData: [],
    }
  },
  created() {
    this.getLawData()
    this.getProcuratoData()
    this.getCriminalData()
  },
  methods: {
    // 特殊群体
    getLawData() {
      this.http
        .get(
          `/cloudMap/rkCloudMapController/getTsrqCountByType.action?orgId=1496`)
        .then(res => {
          console.log(res)
        })
        .catch(() => {
          this.lawData = lawDataJson
        })
    },
    getProcuratoData() {
      this.http
        .get(
          `/cloudMap/rkCloudMapController/getTsrqCountByType.action?orgId=1496`)
        .then(res => {
          console.log(res)
        })
        .catch(() => {
          this.procuratoData = procuratoDataJson
        })
    },
    getCriminalData() {
      this.http
        .get(
          `/cloudMap/rkCloudMapController/getTsrqCountByType.action?orgId=1496`)
        .then(res => {
          console.log(res)
        })
        .catch(() => {
          this.criminalData = criminalDataJson
        })
    },
  },
}
</script>
<style  lang="scss" scoped>
.center-left-area{
  width: 1395px;
  height: 1601px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
}
</style>
