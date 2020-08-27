<template>
  <div class="petition-info-data">
    <div id="petition-info-data-chart" class="petition-info-data-chart" />
    <div class="legends">
      <div class="item" v-for="(item,index) in titles" :key="index">
        <div class="icon" />
        <div class="content">
          <div class="title">{{item}}</div>
          <div class="number">{{currentNums[index]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import doAnimation from '../doAnimation'
export default {
  props: {
    data: { type: Array, default: () => [] },
  },
  data() {
    return {
      titles: ['来访总数', '来信数', '来访数', '集体上访', '越级上访'],
      colors: ['#5DA0FF', '#854DFF', '#F87E3D', '#FBCD71', '#53FFDF'],
      currentNums: [0, 0, 0, 0, 0],
    }
  },
  mounted() {
    if (this.data.length > 0) {
      this.generateChart()
    }
  },
  beforeDestroy() {
    if (this.doAnimate) {
      this.doAnimate.destory()
    }
  },
  methods: {
    generateChart() {

      const titles = this.data.map((item) => item.title)
      const arr1 = this.data.map((item) => item.num1)
      const arr2 = this.data.map((item) => item.num2)
      const arr3 = this.data.map((item) => item.num3)
      const arr4 = this.data.map((item) => item.num4)
      const arr5 = this.data.map((item) => item.num5)

      const myChart = echarts.init(
        document.getElementById('petition-info-data-chart'),
      )
      window.charttt = myChart
      const option = {
        color: this.colors,
        title: {
          show: false,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {
          data: ['来访总数', '来信数', '来访数', '集体上访', '越级上访'],
          show: false,
        },
        grid: {
          top: '150px',
          left: '60px',
          right: '60px',
          bottom: '30px',
          containLabel: true,
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              fontSize: 34,
              fontFamily: 'FZLTXHK',
              fontWeight: 400,
              color: 'rgba(206, 217, 251, 1)',
            },
            formatter: '{value}',
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(146,193,234,0.3)',
            },
          },
        },
        xAxis: {
          type: 'category',
          data: titles,
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(146,193,234,0.3)',
            },
          },
          axisLabel: {
            textStyle: {
              fontSize: 25,
              fontFamily: 'Source Han Sans CN',
              fontWeight: 400,
              color: 'rgba(162,176,213,1)',
            },
          },
        },
        series: [
          {
            name: '来访总数',
            type: 'bar',
            data: arr1,
            barWidth: 10,
            barGap: '80%',
          },
          {
            name: '来信数',
            type: 'bar',
            data: arr2,
            barWidth: 10,
            barGap: '80%',
          },
          {
            name: '来访数',
            type: 'bar',
            data: arr3,
            barWidth: 10,
            barGap: '80%',
          },
          {
            name: '集体上访',
            type: 'bar',
            data: arr4,
            barWidth: 10,
            barGap: '80%',
          },
          {
            name: '越级上访',
            type: 'bar',
            data: arr5,
            barWidth: 10,
            barGap: '80%',
          },
        ],
      }
      myChart.setOption(option)
      if (this.doAnimate) {
        this.doAnimate.destory()
        this.doAnimate = null
      }
      this.doAnimate = new doAnimation(myChart)
      this.doAnimate.animate((index) => {
        const currentItem = this.data[index] || {}
        const cNum1 = currentItem.num1 || 0
        const cNum2 = currentItem.num2 || 0
        const cNum3 = currentItem.num3 || 0
        const cNum4 = currentItem.num4 || 0
        const cNum5 = currentItem.num5 || 0

        this.currentNums = [cNum1, cNum2, cNum3, cNum4, cNum5]
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.petition-info-data {
  height: 800px;
  width: 100%;
  background-image: url("../../../../../../assets/img/gridSafety/bg8.png");
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  .petition-info-data-chart {
    width: 100%;
    height: 100%;
    visibility: hidden;
  }
  .legends {
    position: absolute;
    right: 60px;
    top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 310px;
    width: 340px;
    z-index: 10;
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        width: 29px;
        height: 15px;
      }
      &:nth-child(1) .icon {
        background-color: #5da0ff;
      }
      &:nth-child(2) .icon {
        background-color: #854dff;
      }
      &:nth-child(3) .icon {
        background-color: #f87e3d;
      }
      &:nth-child(4) .icon {
        background-color: #fbcd71;
      }
      &:nth-child(5) .icon {
        background-color: #53ffdf;
      }
      .content {
        border-bottom: 1px dashed rgba(206, 217, 251, 1);
        width: 280px;
        display: flex;
        justify-content: space-between;
        .title {
          font-size: 29px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(158, 169, 201, 1);
        }
        .number {
          font-size: 27px;
          font-family: Source Han Sans CN;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          width: 100px;
          text-align: right;
        }
      }
    }
  }
}
</style>