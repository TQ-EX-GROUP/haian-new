<template>
  <!-- -->
  <!-- width: 7670, height: 2168 -->
  <div v-auto-scale="{ width: 7670, height: 2168 }" style="width: 100%; height: 100%">
    <!-- <div class="router-wrapper" style="width: 100%; height: 100%">
      <div class="title-bg">
        <span class="title">海安市市域治理现代化指挥中心·{{header}}</span>
        <p class="title-time">
          <date-time :styleObj="styleObj"></date-time>
        </p>
    </div> -->

    <div style="width: 100%; height: 100%" class="wrapper">
      <div class="title-bg">
        <span class="title">海安市市域治理现代化指挥中心·{{header}}</span>
        <p class="title-time">
          <date-time :styleObj="styleObj"></date-time>
        </p>
      </div>
      <!-- <div style='width: 2240px; height: 1080px'> -->
      <router-view />
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      date: new Date(),
      timer: null,
      nowWeek: '',
      nowDate: '',
      nowTime: '',
      styleObj: {
        fontSize: 45,
        color: ['#dcedff', '#5ca9ff'],
      },
      header: '',
    }
  },
  watch: {
    $route(newVal) {
      // eslint-disable-next-line default-case
      switch (newVal.path) {
        case '/screen/gridManagement':
          this.header = '网格管理'
          break
        case '/screen/safetyIndex':
          this.header = '平安指数'
          break
        // case '/screen/visual':
        //   this.header = '可视化调度'
        //   break
        default:
          this.header = '网格管理'
      }
    },
  },
  mounted() {
    const _this = this
    this.timeId = setInterval(() => {
      _this.setNowTimes()
    }, 1000)
  },
  beforeDestroy() {
    if (this.timeId) {
      clearInterval(this.timeId)
    }
  },
  methods: {
    setNowTimes() {
      const myDate = new Date()
      const wk = myDate.getDay()
      const yy = String(myDate.getFullYear())
      const mm = myDate.getMonth() + 1
      const dd = String(
        myDate.getDate() < 10 ? `0${myDate.getDate()}` : myDate.getDate(),
      )
      const hou = String(
        myDate.getHours() < 10 ? `0${myDate.getHours()}` : myDate.getHours(),
      )
      const min = String(
        myDate.getMinutes() < 10 ?
          `0${myDate.getMinutes()}` :
          myDate.getMinutes(),
      )
      const sec = String(
        myDate.getSeconds() < 10 ?
          `0${myDate.getSeconds()}` :
          myDate.getSeconds(),
      )
      const weeks = [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六',
      ]
      const week = weeks[wk]
      this.nowDate = `${yy}/${mm}/${dd}`
      this.nowTime = `${hou}:${min}:${sec}`
      this.nowWeek = week
    },
  },
}
</script>
<style lang="scss">
:global {
  html,
  body {
    height: 100%;
    overflow-y: hidden;
    overflow-x: auto;
  }
  #app {
    height: 100%;
    overflow-x: auto;
  }
  body {
    margin: 0;
    // font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
      helvetica, "helvetica neue", Ubuntu, "segoe ui", arial, sans-serif;
  }
  .page {
    text-align: center;
  }
  code {
    background-color: #f0f0f0;
    padding: 3px 5px;
    border-radius: 2px;
  }
}
.title-bg {
  position: absolute;
  top: 0;
  width: 7828px;
  height: 183px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  text-align: center;
  background: url("../../assets/imgs/title_bg_new.png");
  background-size: 100% 100%;
  .title {
    font-size: 80px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 10px;
    line-height: 150px;
  }
  .title-time {
    position: absolute;
    right: 187px;
    top: 70px;
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    span {
      &:nth-child(2) {
        margin: 0 40px;
      }
    }
  }
}
div {
  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  }
  ::-webkit-scrollbar-track:hover {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.05);
    -webkit-border-radius: 3px;
  }
  ::-webkit-scrollbar-track:active {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.1);
    -webkit-border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
  }
  :hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: inset 1px 1px 0 rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.6);
  }
  ::-webkit-scrollbar-track-piece,
  ::-webkit-scrollbar-track-piece {
    -webkit-border-radius: 0;
    -webkit-border-bottom-right-radius: 3px;
    -webkit-border-bottom-left-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:vertical,
  ::-webkit-scrollbar-thumb:vertical {
    height: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:horizontal,
  ::-webkit-scrollbar-thumb:horizontal {
    width: 50px;
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 3px;
  }

  .ivu-menu::-webkit-scrollbar {
    display: none;
  }
}
</style>
