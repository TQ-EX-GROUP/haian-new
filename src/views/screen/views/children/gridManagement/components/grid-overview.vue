<template>
  <div class="grid-active-container">
    <div class="active-chart" id="active-chart" />
  </div>
</template>
<script>
import echarts from 'echarts'
import doAnimation from '../../../../../../utils/doAnimation'

export default {
  props: {
    source: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      chart: null,
      timer: null,
      dataIndex: 0,
      animate: null,
    }
  },
  watch: {
    source: {
      handler() {
        this.updateCharts(this.source)
      },
      //deep: true,
      //immediate: true,
    },
  },
  beforeDestroy() {
    if (this.animate) {
      this.animate.destory()
    }
  },
  mounted() {
    this.chart = this.initCharts(this.source)
    this.updateCharts(this.source)
  },
  methods: {
    initCharts() {
      const myChart = this.$echarts.init(
        document.getElementById('active-chart'),
      )
      return myChart
    },
    updateCharts(res) {
      this.chart.clear()
      const option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
          textStyle: {
            fontSize: 30,
          },
          formatter: '{a}：{c}%',
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            data: res.Xdata,
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: { //这是x轴文字颜色
              lineStyle: {
                color: '#2D386C',
                width: 2,
              },
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: '#A2B0D5',
                fontSize: 28,
              },
              // rotate: 30,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: '100',
            splitLine: {
              show: false,
            },
            axisLine: { //这是y轴文字颜色
              lineStyle: {
                color: '#2D386C',
                width: 2,
              },
            },
            axisLabel: {
              interval: 0,
              formatter: function (data) {
                return `${Number(data).toFixed(2)}%`
              },
              textStyle: {
                color: '#CED9FB',
                fontSize: 28,
              },
              // rotate: 30,
            },
          },


        ],
        series: [
          {
            name: res.name,
            type: 'bar',
            barWidth: '20%',
            data: res.value,
            itemStyle: { //
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#00D6E0' },
                    { offset: 1, color: '#336DFF' },
                  ],
                ),
                opacity: 1,
              },
            },
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


