<template>
  <div class="right-area">
    <div class="criminal-distribute-data-container">
      <part-title :tit="'刑事案件分布'" />
      <criminal-distribute-data :data="criminalDistributeData"></criminal-distribute-data>
    </div>
    <div class="petition-info-data-container">
      <part-title :tit="'街道信访情况'" />
      <petition-info-data :data="petitionInfoData"></petition-info-data>
    </div>
  </div>
</template>
<script>
import PartTitle from '../components/part-title'
import CriminalDistributeData from '../components/criminal-distribute-data'
import PetitionInfoData from '../components/petition-info-data'
// mock数据
import criminalDistributeDataJson from '../../../../../../assets/json/gridSafety/criminalDistributeData.json'
import petitionInfoDataJson from '../../../../../../assets/json/gridSafety/petitionInfoData.json'

export default {
  components: {
    PartTitle,
    CriminalDistributeData,
    PetitionInfoData,
  },
  data() {
    return {
      criminalDistributeData: [],
      petitionInfoData: [],
    }
  },
  created() {
    this.getCriminalDistribteData()
    this.getPetitionInfoData()
  },
  methods: {
    getCriminalDistribteData() {
      this.http
        .get(
          `/cloudMap/cloudMapBaseInfoManager/getHousePopulationBind.action?orgId=1496`,
        )
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
          this.criminalDistributeData = criminalDistributeDataJson
        })
    },
    getPetitionInfoData() {
      this.http
        .get(
          `/cloudMap/cloudMapBaseInfoManager/getHousePopulationBind.action?orgId=1496`,
        )
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
          console.log(petitionInfoDataJson)
          this.petitionInfoData = petitionInfoDataJson
        })
    },
  },

}
</script>
<style  lang="scss" scoped>
.right-area {
  width: 1951px;
  height: 1737px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
}
</style>
