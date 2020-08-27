<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-17 08:42:06
 * @LastEditTime: 2020-08-20 14:57:37
-->
<template>
  <article class="infomation-visual">
     <div class="module-title" @click="setShowFlag(1)">综合可视化调度</div>
       <div class="screen-wrapper">
    <!-- 地图 -->
    <tq-map @mapLoad="mapLoad" ref="tqMap" class="tq-map"></tq-map>

    <!-- 背景 -->
    <!-- <div class='bg' /> -->

    <!-- 头部固定 -->
    <!-- <screen-top @leftClick="setShowFlag(1)" /> -->

    <!-- 远景 左侧 -->
    <transition name="fade-left" appear>
      <left-far v-show="showFlag===1" />
    </transition>

    <!-- 远景 右侧 -->
    <transition name="fade-right" appear>
      <right-far v-show="showFlag===1" />
    </transition>

    <!-- 近景 左侧 -->
    <!-- <transition name="fade-left" appear>
      <left-near v-if="showFlag===2" />
    </transition> -->
    <transition name="fade-left" appear>
      <left-near-new v-if="showFlag===2" />
    </transition>

    <!-- 近景 右侧 -->
    <transition name="fade-right" appear>
      <right-near v-if="showFlag===2" />
    </transition>

    <!-- 底部 组织机构 -->
    <transition name="fade-bottom" appear>
      <bottom-org v-show="showFlag!==2" @bottomClick="bottomClick" />
    </transition>
      </div>
     <div class="router-footer">
      <footer-button :itemIndex="2"></footer-button>
    </div>
  </article>
</template>

<script>
import $bus from '@/utils/bus.js'
import TqMap from './components/tqMap'
import LeftFar from './components/leftFar'
import LeftNear from './components/leftNear'
import LeftNearNew from './components/leftNear-new/index'
import RightFar from './components/rightFar'
import RightNear from './components/rightNear'
import ScreenTop from './components/screenTop'
import BottomOrg from './components/bottomOrg'
import CameraList from './components/cameraList'
export default {
  name: 'ScreenWrapper',
  components: {
    TqMap,
    LeftFar,
    LeftNear,
    RightFar,
    RightNear,
    ScreenTop,
    BottomOrg,
    CameraList,
    LeftNearNew,
  },
  data() {
    return {
    }
  },
  computed: {
    // 控制 远景 近景 及近景简洁  0 远景  简洁  1 远景 2 近景
    showFlag() {
      // console.log(this.$store.getters['screen/home/showFlag'], '------------')
      return this.$store.getters['screen/home/showFlag']
      // return 1
    },
  },
  mounted() {
    console.log('showFlag-----', this.showFlag)
  },
  methods: {
    mapLoad() {
      // this.showSide = true
    },
    setShowFlag(flag) {
      this.$store.commit('screen/home/updateShowFlag', flag)
    },
    // 点击底部图标
    bottomClick() {
      $bus.$emit('setMapCenter')
      this.setShowFlag(1 - this.showFlag)
    },
  },
}
</script>

<style lang="scss" scoped>
.infomation-visual{
 position: relative;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 190px 80px 30px 50px;
  box-sizing: border-box;
  background: url("../../../../../assets/imgs/linkage_disposal_bg.png")no-repeat;
  background-size: 100% 100%;
  .router-footer {
    position: absolute;
    width: 7400px;
    left: 50%;
    transform: translateX(-50%);
    bottom:50px;
  }
   .module-title{
      position: absolute;
      top:58px;
      left:170px;
      font-family:JDLangZhengTi;
      font-weight:bold;
      text-shadow:0px 4px 4px rgba(0, 0, 0, 0.4);
      z-index:99;
      letter-spacing: 5px;
      color: #87e1e9;
      font-size: 60px;
      font-weight: 600;
      text-shadow: 0.2rem 0rem 1rem #87e1e9;
      cursor: pointer;
    }
}
.screen-wrapper{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #0C0E15;
  .bg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    // background: url('../../../../../assets/img/bg.png') ;
    background-size: 100% 100%;
  }
  .tq-map{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }

}


.fade-left-enter, .fade-left-leave-to {
  transform: translate3d(-100%, 0, 0)
}
.fade-left-leave, .fade-left-enter-to {
  transform: translate3d(0, 0, 0)
}
.fade-left-enter-active{
  transition: all .6s ease-in-out .5s;
}
.fade-left-leave-active {
  transition: all .6s ease-in-out;
}


.fade-right-enter, .fade-right-leave-to {
  transform: translate3d(100%, 0, 0)
}
.fade-right-leave, .fade-right-enter-to {
  transform: translate3d(0, 0, 0)
}
.fade-right-enter-active{
  transition: all .6s  ease-in-out .5s;
}
.fade-right-leave-active {
  transition: all .6s  ease-in-out;
}

.fade-bottom-enter, .fade-bottom-leave-to {
  opacity:0 ;
}
.fade-bottom-leave, .fade-bottom-enter-to {
  opacity:1 ;
}
.fade-bottom-enter-active{
  transition: all .6s  ease-in-out .5s;
}
.fade-bottom-leave-active {
  transition: all .6s  ease-in-out;
}
</style>
