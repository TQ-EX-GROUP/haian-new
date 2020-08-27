<template>
  <div class="camera-list-child">
    <div
      class="camera-item"
      v-for="(item,i) in cameraList"
      :key="item.value">
      <!-- 占位 -->
      <div class="seat" />
      <div :class="['player',flag===i?'center':'']" :ref="`player${i}`">
        <screen-player
          @palyClick="flag = flag === i ? -1 : i"
          :id="item.value"
          :index="i"
          :key="item.value" />
      </div>
    </div>
  </div>
</template>
<script>
import $bus from '@/utils/bus.js'
export default {
  name: 'CameraList',
  props: {
    cameraList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      // 展示在center 的camera
      flag: -1,
    }
  },
  computed: {
    showFlag() {
      return this.$store.getters['screen/home/showFlag']
    },
  },
  watch: {
    // 切换场景时 关闭弹窗
    showFlag() {
      this.flag = -1
    },
    // 右侧点击的摄像头 和  近景图 通过左侧列表点击的弹窗 互斥
    flag(f) {
      if (f !== -1) {
        $bus.$emit('rightCamera')
      }
    },
  },
  mounted() {
    // 右侧点击的摄像头 和  近景图 通过左侧列表点击的弹窗 互斥
    $bus
      .$on('leftCamera', () => {
        this.flag = -1
      })
  },
  methods: {
    // move(e) {
    //   const [odiv] = this.$refs.player0
    //   if (odiv.className === 'player') {
    //     return
    //   } else {
    //     odiv.style.left = ''
    //     odiv.style.top = ''
    //   }
    //   const disX = e.clientX - odiv.offsetLeft
    //   const disY = e.clientY - odiv.offsetTop
    //   document.onmousemove = (e) => {
    //     const left = e.clientX - disX + 440
    //     const top = e.clientY - disY + 260
    //     this.positionX = top
    //     this.positionY = left
    //     odiv.style.left = `${left}px`
    //     odiv.style.top = `${top}px`
    //   }
    //   document.onmouseup = () => {
    //     document.onmousemove = null
    //     document.onmouseup = null
    //     odiv.className = 'player center'
    //   }
    // },
  },
}
</script>
<style lang="scss" scoped>
.camera-list-child{
  width:100%;
  // height:100%;
  position: absolute;
  .camera-item{
    position: relative;
    float: left;
    width: 47%;
    height: 210px;
    margin-top:30px;
    // &:nth-of-type(even){
    //   margin-right: 0px;
    // }
    &:nth-of-type(2n+1){
       margin-right:30px;
    }
    .seat{
      width: 100%;
      height: 100%;
      color: #fff;
    }
    .player{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      transition: width .20s  ease,height .20s  ease;
      &.center{
        position: fixed;
        width: 1830px;
        height: 806px;
        left: 50%;
        top:50%;
        transform: translate(-40%,-40%);
      }
    }
  }
}
</style>