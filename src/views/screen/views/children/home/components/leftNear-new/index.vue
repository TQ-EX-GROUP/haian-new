<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-18 11:16:53
 * @LastEditTime: 2020-08-20 14:47:35
-->
<template>
  <div class="left-near-new" v-if="itemArrs.length>0">
    <ul>
      <li v-for="(item,index) in itemArrs" :key="index">
         <header-box-toggle
         :key="index"
         :title="item.name"
         :dataIndex="index"
         :currentIndex="currentIndex"
         @change="changeIndex">
           <scroll-list
            :llgtfoo="true"
            :duration="3000"
            :data="listObj[item.key]"
            :renderItem="(h, data)=>renderItem(h, data,item.key)" />
         </header-box-toggle>
      </li>
    </ul>
</div>
</template>

<script>
const ITEM_ARR  = [
  { name: '网格员', key: 'grid' },
  { name: '摄像头', key: 'camera' },
  { name: '治理中心', key: 'command' },
  { name: '周边资源', key: 'place' },
]
import Item from './item'
import $bus from '@/utils/bus.js'
export default {
  data() {
    return {
      currentIndex: 0,
      itemArr: ITEM_ARR,
      active: -1,
      isCenter: false,
      cameraId: '',
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
  watch: {
    // 监听场景切换
    showFlag() {
      this.isCenter = false
    },
    // 视频播放 和 右侧互斥
    isCenter(v) {
      if (v) {
        $bus.$emit('leftCamera')
      }
    },
  },
  mounted() {
    // 视频播放 和 右侧互斥
    $bus
      .$on('rightCamera', () => {
        this.isCenter = false
      })
  },
  methods: {
    renderItem(h, data, type) {
      return h(Item, {
        props: { info: data, type },
        on: {
          call: () => this.call(data, type),
        },
      })
    },
    call(data, type) {
      this.isCenter = false
      this.cameraId = ''
      if (type === 'camera') {
        // this.$nextTick(() => {
        //   this.isCenter = true
        //   this.cameraId = data.value
        // })
      } else {
        this.callVideo(data)
      }
    },
    // 唤起视频通话
    async callVideo(itm) {
      console.log('itm--', itm)
      // -----将系统的用户id和name转成视频服务的用户的id和name
      // const { userId } = this.user.userInfo
      // const result = await this.$store.dispatch('screen/home/transferUserInfo', userId)
      const inviteInfo = await this.$store.dispatch('screen/home/transferUserInfo', itm.userId)
      console.log('inviteInfo----', inviteInfo)
      // const { UserId, NickName } = result
      const inviteId = inviteInfo.UserId
      const inviteName = inviteInfo.NickName
      // console.log('--------------', UserId, NickName, inviteId, inviteName)
      window.open(
        // 'https://2.82.4.218/?userId=7ed2e71a15d34dde90d351d801b561e3&username=%E9%92%B1%E5%8D%8E&isone=1&inviteuid=0bbb755b4b684f88aa66e8f5ad3a02a1&invitename=董志斌'
        `https://2.82.4.218/?userId=45126211f0bd404eb4229175d0b66fb2&username=管理员&isone=1&inviteuid=${inviteId}&invitename=${inviteName}`,
      )

      // if (!this.vdc.roomId) {
      //   this.vdc.createVoip(() => {
      //     this.vdc.invite(this.vdc.InviteType.MEETING, itm.id, {
      //       name: itm.name,
      //       sub: itm.areaName || '暂无数据',
      //       id: itm.id,
      //     })
      //   })
      // } else {
      //   this.vdc.invite(this.vdc.InviteType.MEETING, itm.id, {
      //     name: itm.name,
      //     sub: itm.areaName || '暂无数据',
      //     id: itm.id,
      //   })
      // }
    },
    palyClick() {
      this.isCenter = false
      this.cameraId = ''
    },
    changeIndex(index) {
      this.currentIndex = index
    },
  },
}
</script>

<style scoped lang='scss'>

.left-near-new{
  width: 1650px;
  height: calc(100% - 110px);
  position: absolute;
  padding:40px 80px;
  top: 38px;
  left: 0px;
  // background: url('../../../../../../../assets/img/virtual/left-bg.png') no-repeat;
  // background-size: 100% 100%;
  transition: all .4s linear;
   &:before{
      content:'';
      position: absolute;
      background: url('../../../../../../../assets/img/virtual/left-bg.png') no-repeat;
      background-size: 100% 100%;
      opacity:0.3;
      top:0;
      left:0;
      bottom:0;
      right:0;
      // z-index: 1;
    }
  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    // height: 100%;
    box-sizing: border-box;
    li{
        // height:calc(100% - 300px);
        margin-bottom:20px;
        &:last-of-type{
          margin-bottom: 0px;
        }
    }
  }
}
</style>