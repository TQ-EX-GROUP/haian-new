<template>
  <div class="left-near">
    <div
      :class="['circle', `top${i}`,active===i?'active':'']"
      @click="active=i"
      v-for="(item,i) in itemArrs"
      :key="i">
      <div :class="['icon',active===i?'':'active-disable']">
        <span>{{item.name}}</span>
        <i />
      </div>
      <transition name="fade-right">
        <div class="bg" v-if="active===i">
          <span>所在区域{{item.name}}</span>
          <div class="bg-content">
            <scroll-list
            :duration="3000"
            :data="listObj[item.key]"
            :renderItem="(h, data)=>renderItem(h, data,item.key)" />
          </div>
        </div>
      </transition>
    </div>

    <!-- 视频播放 -->
    <screen-player
      :class="['player',isCenter?'isCenter':'']"
      @palyClick="palyClick"
      :id="cameraId"
      v-if="isCenter" />
    <!-- 视频通话 -->
    <!-- <iframe
      ref='lookLive'
      src='https://2.82.4.218/?userId=7ed2e71a15d34dde90d351d801b561e3&username=%E9%92%B1%E5%8D%8E&isone=1&inviteuid=0bbb755b4b684f88aa66e8f5ad3a02a1&invitename=董志斌'
      frameborder='0'
      allow='microphone;camera;midi;encrypted-media;'
    ></iframe> -->
</div>
</template>
<script>
const ITEM_ARR  = [
  { name: '网格员', key: 'grid' },
  { name: '摄像头', key: 'camera' },
  { name: '治理中心', key: 'command' },
  { name: '周边资源', key: 'place' },
]
import $bus from '@/utils/bus.js'
import Item from './item'
export default {
  name: 'LeftNear',
  data() {
    return {
      itemArr: ITEM_ARR,
      active: -1,
      isCenter: false,
      cameraId: '',
    }
  },
  // inject: ['vdc'],
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
  },
}
</script>
<style lang="scss" scoped>
.left-near{
  width: 510px;
  height: calc(100% - 100px);
  position: absolute;
  top: 100px;
  left: 0px;
  transition: all .4s linear;
  .circle{
    position: absolute;
    height: 253px;
    width: 510px;
    overflow: hidden;
    &.top0{top:0}
    &.top1{top:200px}
    &.top2{top:400px}
    &.top3{top:600px}
    &.active{z-index: 2;}
    .icon{
      position: absolute;
      width: 160px;
      height: 160px;
      margin-left: 10px;
      background: url('../../../../../../../assets/img/circle-icon-check.png') no-repeat ;
      text-align: center;
      &.active-disable{
        background: url('../../../../../../../assets/img/circle-icon.png') no-repeat  center 30px;
        >i{
          display: none;
        }
        >span{
        font-weight: 300;
        font-size: 16px;
        color: #dde7ed;
        line-height: 160px;
      }
      }
      >span{
        color: #82efff;
        font-size: 18px;
        font-weight: 600;
        line-height: 160px;
      }
      >i{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top:0;
        background: url('../../../../../../../assets/img/circle-icon-pack.png') no-repeat ;
        animation:circle 3s infinite linear;
      }
    }
    .bg{
      position: absolute;
      width: 388px;
      height: 253px;
      top:10px;
      right: 0;
      background: url('../../../../../../../assets/img/circle-bg.png') no-repeat ;
      >span{
        display: inline-block;
        font-size: 16px;
        color: #64ebff;
        padding: 5px 0 0 55px;
      }
      .bg-content{
        margin:5px 0 0 50px;
        height: 210px;
      }
    }
  }
}

.fade-right-enter, .fade-right-leave-to {
  transform: translate3d(0, -100%, 0)
}
.fade-right-leave, .fade-right-enter-to {
  transform: translate3d(0, 0, 0)
}
.fade-right-leave-active,.fade-right-enter-active{
  transition: all .2s ease-in-out ;
}

@keyframes circle{
  0% {transform:rotate(0deg);}
  100% {transform:rotate(360deg);}
}

.player{
  display: none;
  transition: all .20s  ease;
  &.isCenter{
    position: fixed;
    width: 630px;
    height: 406px;
    left: 50%;
    top:50%;
    margin-left: -315px;
    margin-top:-203px;
    display: block;
  }
}
</style>