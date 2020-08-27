<template>
  <div class="screen-player" @click="$emit('palyClick')">
    <!-- 透明模板 -->
    <div class="mask" />

    <!-- 包裹部分 -->
    <div class="cont">
      <!-- 视频播放 -->
      <iframe
        v-if="!errorMsg&&url"
        class="iframe"
        ref="iframe"
        src="./camera/index.html"
        @load="() => {iframeLoading = false}"
        frameborder="0" />

      <!-- 错误提示 -->
      <div class="svp-error-msg-wrapper" v-if="errorMsg">
        <img class="svp-error-msg-img" src="./img/errorImg.png">
        <span class="svp-error-msg-span">加载失败,请稍后再试！</span>
      </div>

      <!-- 加载中 -->
      <div class="svp-loading-container" v-if="!isPlaying&&!errorMsg">
        <div class="svp-loading-gearbox">
          <div class="svp-loading-overlay" />
          <div class="svp-loading-gear svp-loading-one">
            <div class="svp-loading-gear-inner">
              <div class="svp-loading-bar" />
              <div class="svp-loading-bar" />
              <div class="svp-loading-bar" />
            </div>
          </div>
          <div class="svp-loading-gear svp-loading-two">
            <div class="svp-loading-gear-inner">
              <div class="svp-loading-bar" />
              <div class="svp-loading-bar" />
              <div class="svp-loading-bar" />
            </div>
          </div>
          <div class="svp-loading-gear svp-loading-three">
            <div class="svp-loading-gear-inner">
              <div class="svp-loading-bar" />
              <div class="svp-loading-bar" />
              <div class="svp-loading-bar" />
            </div>
          </div>
          <div class="svp-loading-gear svp-loading-four svp-loading-large">
            <div class="svp-loading-gear-inner">
              <div class="svp-loading-bar" />
              <div class="svp-loading-bar" />
              <div class="svp-loading-bar" />
              <div class="svp-loading-bar" />
              <div class="svp-loading-bar" />
              <div class="svp-loading-bar" />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import TqMessenger from './js/gis'
export default {
  name: 'ScreenPlayer',
  props: {
    id: [String, Number],
    default: '',
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      url: 'dd',
      iframeLoading: true,
      videoMsger: null,
      isPlaying: false, //是否播放
      errorMsg: '', //错误提示
    }
  },
  watch: {
    id(v) {
      console.log('watch--id----', v)
      if (v && !this.iframeLoading) {
        this.getCameraPlayUrl()
      }
    },
    iframeLoading(v) {
      console.log('watch--iframeLoading----', v)
      if (!v && this.id) {
        this.getCameraPlayUrl()
      }
    },
  },
  mounted() {
    this.$refs.iframe.setAttribute('id', `iframe-${new Date().getTime()}`)
    const id = this.$refs.iframe.getAttribute('id')
    this.videoMsger = new TqMessenger(id)
    this.videoMsger.init(msg => {
      if (msg === 'playing') {
        this.isPlaying = true
        this.errorMsg = ''
      } else if (msg === 'error') {
        this.isPlaying = false
        this.errorMsg = '视频播放失败'
      }
    })
  },
  methods: {
    async getCameraPlayUrl() {
      console.log('getCameraPlayUrl----')
      const url =  await this.$store.dispatch('screen/home/getCameraPlayUrl', {
        'id': this.id,
        'protocol': '0',
        'playType': '2',
        'actionId': 'getCameraPlayUrl',
      })
      console.log(url, '摄像url')
      if (url) {
        console.log(url)
        this.isPlaying = true
        this.errorMsg = ''
        setTimeout(() => {
          this.videoMsger.sendMessage(
            JSON.stringify({ src: url }),
          )
        }, 500 * this.index)
      } else {
        this.isPlaying = false
        this.errorMsg = '视频播放失败'
      }
    },
  },

}
</script>
<style lang="scss" scoped>
.mask{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: 999;
  cursor: pointer;
  background: url('../../assets/img/camera-bg.png') ;
  background-size: 100% 100%;
}

.screen-player{
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .cont{
    width: 98%;
    height: 98%;
    position: absolute;
    top:0.5%;
    left: 0.5%;
    overflow: hidden;
    background: #111111;
  }
 .iframe {
    width: 100%;
    height: 100%;
  }
}


/* errorMsg */
.svp-error-msg-wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #999;
    background: #333333;
    z-index: 999;
    >img{
       width: 154px!important;
    height: 100px!important;
    }
}

.svp-error-msg-wrapper .svp-error-msg-span{
    margin-top: 20px;
    font-size: 30px;
}

//加载动画
.svp-loading-container {
  position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -113px;
    height: 140px;
    width: 226px;
    margin-top: -70px;
    box-sizing: border-box;
    z-index: 0;
}

.svp-loading-gearbox {
    background: #111111;
    height: 140px;
    width: 226px;
    position: relative;
    border: none;
    overflow: hidden;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    // -moz-box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
    // -webkit-box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
    // box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.1);
}

.svp-loading-gearbox .svp-loading-overlay {
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    border-radius: 6px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    // -moz-box-shadow: inset 0px 0px 20px black;
    // -webkit-box-shadow: inset 0px 0px 20px black;
    // box-shadow: inset 0px 0px 20px black;
    -moz-transition: background 0.2s;
    -o-transition: background 0.2s;
    -webkit-transition: background 0.2s;
    transition: background 0.2s;
}

.svp-loading-gearbox.turn .svp-loading-overlay {
    background: transparent;
}

.svp-loading-gear {
    position: absolute;
    height: 60px;
    width: 60px;
    -moz-box-shadow: 0px -1px 0px 0px #888888, 0px 1px 0px 0px black;
    -webkit-box-shadow: 0px -1px 0px 0px #888888, 0px 1px 0px 0px black;
    box-shadow: 0px -1px 0px 0px #888888, 0px 1px 0px 0px black;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    border-radius: 30px;
}

.svp-loading-gear.svp-loading-large {
    height: 120px;
    width: 120px;
    -moz-border-radius: 60px;
    -webkit-border-radius: 60px;
    border-radius: 60px;
}

.svp-loading-gear.svp-loading-large:after {
    height: 96px;
    width: 96px;
    -moz-border-radius: 48px;
    -webkit-border-radius: 48px;
    border-radius: 48px;
    margin-left: -48px;
    margin-top: -48px;
}

.svp-loading-gear.svp-loading-one {
    top: 12px;
    left: 10px;
}

.svp-loading-gear.svp-loading-two {
    top: 61px;
    left: 60px;
}

.svp-loading-gear.svp-loading-three {
    top: 110px;
    left: 10px;
}

.svp-loading-gear.svp-loading-four {
    top: 13px;
    left: 128px;
}

.svp-loading-gear:after {
    content: "";
    position: absolute;
    height: 36px;
    width: 36px;
    -moz-border-radius: 36px;
    -webkit-border-radius: 36px;
    border-radius: 36px;
    background: #111111;
    top: 50%;
    left: 50%;
    margin-left: -18px;
    margin-top: -18px;
    z-index: 3;
    -moz-box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1), inset 0px 0px 10px rgba(0, 0, 0, 0.1), inset 0px 2px 0px 0px #080808, inset 0px -1px 0px 0px #888888;
    -webkit-box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1), inset 0px 0px 10px rgba(0, 0, 0, 0.1), inset 0px 2px 0px 0px #080808, inset 0px -1px 0px 0px #888888;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1), inset 0px 0px 10px rgba(0, 0, 0, 0.1), inset 0px 2px 0px 0px #080808, inset 0px -1px 0px 0px #888888;
}

.svp-loading-gear-inner {
    position: relative;
    height: 100%;
    width: 100%;
    background: #555555;
    animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.svp-loading-large .svp-loading-gear-inner {
    -moz-border-radius: 60px;
    -webkit-border-radius: 60px;
    border-radius: 60px;
}

.svp-loading-gear.svp-loading-one .svp-loading-gear-inner {
    animation: counter-clockwise 3s infinite linear;
    -webkit-animation: counter-clockwise 3s infinite linear;
    -moz-animation: counter-clockwise 3s infinite linear;
}

.svp-loading-gear.svp-loading-two .svp-loading-gear-inner {
    animation: clockwise 3s infinite linear;
    -webkit-animation: clockwise 3s infinite linear;
    -moz-animation: clockwise 3s infinite linear;
}

.svp-loading-gear.svp-loading-three .svp-loading-gear-inner {
    animation: counter-clockwise 3s infinite linear;
    -webkit-animation: counter-clockwise 3s infinite linear;
    -moz-animation: counter-clockwise 3s infinite linear;
}

.svp-loading-gear.svp-loading-four .svp-loading-gear-inner {
    animation: counter-clockwise 6s infinite linear;
    -webkit-animation: counter-clockwise 6s infinite linear;
    -moz-animation: counter-clockwise 6s infinite linear;
}

.svp-loading-gear-inner .svp-loading-bar {
    background: #555555;
    height: 16px;
    width: 76px;
    position: absolute;
    left: 50%;
    margin-left: -38px;
    top: 50%;
    margin-top: -8px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.svp-loading-large .svp-loading-gear-inner .svp-loading-bar {
    margin-left: -68px;
    width: 136px;
}

.svp-loading-gear-inner .svp-loading-bar:nth-child(2) {
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
}

.svp-loading-gear-inner .svp-loading-bar:nth-child(3) {
    -moz-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    -webkit-transform: rotate(120deg);
    transform: rotate(120deg);
}

.svp-loading-gear-inner .svp-loading-bar:nth-child(4) {
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

.svp-loading-gear-inner .svp-loading-bar:nth-child(5) {
    -moz-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
}

.svp-loading-gear-inner .svp-loading-bar:nth-child(6) {
    -moz-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    -webkit-transform: rotate(150deg);
    transform: rotate(150deg);
}

.svp-loading-msg{
    position: absolute;
    font-family: "Helvetica";
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    color: #888888;
    font-size: 16px;
    display: inline-block;
    margin-top: 12px;
    left: 50%;
    transform: translateX(-50%);
    text-shadow: 1px 1px 0px #111111;
}

/* iframe */

.svp-iframe{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    opacity: 1;
}

.svp-iframe.hide{
    opacity: 0;
}

/* errorMsg */
.svp-error-msg-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #999;
}

.svp-error-msg-wrapper .svp-error-msg-span{
    margin-top: 20px;
}

@keyframes clockwise {
    0% {
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-webkit-keyframes clockwise {
    0% {
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-moz-keyframes clockwise {
    0% {
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes counter-clockwise {
    0% {
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}

@-webkit-keyframes counter-clockwise {
    0% {
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}

@-moz-keyframes counter-clockwise {
    0% {
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    100% {
        -moz-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg);
    }
}
</style>