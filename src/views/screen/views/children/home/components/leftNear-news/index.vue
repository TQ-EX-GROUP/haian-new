<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-19 09:20:19
 * @LastEditTime: 2020-08-19 11:21:18
-->
<template>
  <div class="left-near-news">111111</div>
</template>

<script>
const ITEM_ARR  = [
  { name: '网格员', key: 'grid' },
  { name: '摄像头', key: 'camera' },
  { name: '治理中心', key: 'command' },
  { name: '周边资源', key: 'place' },
]
export default {
  data() {
    return {
      currentIndex: 0,
      itemArr: ITEM_ARR,
    }
  },
  computed: {
    listObj() {
      return {
        camera: this.$store.getters['screen/home/cameraList'],
        grid: this.$store.getters['screen/home/gridList'],
        command: this.$store.getters['screen/home/commandList'],
        place: this.$store.getters['screen/home/placeList'],
      }
    },
    itemArrs() {
      console.log(this.listObj, 'listObjlistObjlistObj')
      return this.itemArr.filter(v => {
        return this.listObj[v.key].length > 0
      })
    },
    showFlag() {
      return this.$store.getters['screen/home/showFlag']
    },
    user() {
      return this.$store.getters['globe/user/userInfo']
    },
  },
}
</script>

<style lang='scss' scoped>
.left-near-news{

}
</style>