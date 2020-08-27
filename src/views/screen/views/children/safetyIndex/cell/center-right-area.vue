<template>
  <div class="center-right-area">
    <div class="petition-data-container">
      <part-title :tit="'全市信访情况'" />
      <petition-data :data="petitionData"></petition-data>
    </div>
    <div class="criminal-type-data-container">
      <part-title :tit="'社会矛盾纠纷'" />
      <criminal-type-data :data="criminalTypeData"></criminal-type-data>
    </div>
  </div>
</template>
<script>
import PartTitle from '../components/part-title'
import PetitionData from '../components/petition-data'
import CriminalTypeData from '../components/criminal-type-data'
// mock数据
import petitionDataJson from '../../../../../../assets/json/gridSafety/petitionData.json'
import criminalTypeDataJson from '../../../../../../assets/json/gridSafety/criminalTypeData.json'

export default {
  components: {
    PartTitle,
    PetitionData,
    CriminalTypeData,
  },
  data() {
    return {
      petitionData: [],
      criminalTypeData: [],
    }
  },
  created() {
    this.getPetitionData()
    this.getCriminalTypeData()
  },
  methods: {
    getPetitionData() {
      this.http
        .get(
          `/cloudMap/rkCloudMapController/getTsrqCountByType.action?orgId=1496`,
        )
        .then(res => {
          console.log(res)
        })
        .catch(() => {
          this.petitionData = petitionDataJson
        })
    },
    getCriminalTypeData() {
      this.http
        .get(
          `/cloudMap/rkCloudMapController/getTsrqCountByType.action?orgId=1496`,
        )
        .then(res => {
          console.log(res)
        })
        .catch(() => {
          this.criminalTypeData = criminalTypeDataJson
        })
    },
  },
}
</script>
<style  lang="scss" scoped>
.center-right-area {
  width: 1404px;
  height: 1601px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
}
</style>
