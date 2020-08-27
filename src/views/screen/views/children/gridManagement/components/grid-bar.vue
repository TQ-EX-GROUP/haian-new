<template>
  <div class="grid-active-container">
    <div
      class="active-chart"
      id="active-chart-bar" />
  </div>
</template>
<script>
//import echarts from 'echarts'
//import tools  from '../../../../../../utils/toolss.js'
import doAnimation from '../../../../../../utils/doAnimation'
export default {
  props: {
    source: {
      type: Object,
      default: () => '{}',
    },
  },
  data() {
    return {
      chart: null,
      timer: null,
      animate: null,
      dataIndex: 0,
    }
  },
  watch: {
    source: {
      handler(newVal) {
        this.updateCharts(newVal)
      },
      deep: true,
      //immediate: true,
    },
  },
  mounted() {
    this.chart = this.initCharts()
    this.updateCharts(this.source)
    // this.setAnimateChart()
  },
  beforeDestroy() {
    if (this.animate) {
      this.animate.destory()
    }
  },
  methods: {
    initCharts() {
      const myChart = this.$echarts.init(
        document.getElementById('active-chart-bar'),
      )
      return myChart
    },
    updateCharts(data) {
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            fontSize: 25,
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [{
          type: 'category',
          data: data.name,
          axisLine: {
            show: true,
            lineStyle: {
              color: ' #196baa',
            },
          },
          splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
              color: '#f00',
            },
          },
          axisLabel: {
            color: '#a2b0d5',
            fontSize: 28,
            fontWeight: 'bold',
            rotate: '45',
          },
          splitLine: {
            show: false,
          },
        }],
        yAxis: [{
          type: 'value',
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)',
            },
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#196baa',
            },
          },
          axisLabel: {
            show: true,
            margin: 20,
            textStyle: {
              color: '#a2b0d5',
              fontSize: 28,
              fontWeight: 'bold',
            },
          },
          axisTick: {
            show: true,
          },
        }],
        series: [{
          name: '完成情况',
          type: 'bar',
          // barWidth: '15%',
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#3ba2e8',
              }, {
                offset: 1,
                color: '#3ba2e8',
              }]),
              // barBorderRadius: [11, 11, 0, 0],
            },
          },
          data: data.month,
        },
        {
          name: '月度指标',
          type: 'bar',
          // barWidth: '15%',
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#53FFDF',
              }, {
                offset: 1,
                color: '#53FFDF',
              }]),
              // barBorderRadius: [11, 11, 0, 0],
            },

          },
          data: data.complement,
        },

        ],
      }
      this.chart.setOption(option)

      if (this.animate) {
        this.animate.destory()
        this.animate = null
      }
      this.animate = new doAnimation(this.chart)
      this.animate.animate()
    },
  },
}
</script>
<style lang="scss" scoped>
.grid-active-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  // flex-wrap: wrap;
  padding: 0px 0px 0 0px;
  // display: flex;
  // justify-content: space-between;
  .active-chart {
    flex: 1;
    height: 100%;
  }
}
</style>


