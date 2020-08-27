<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-05 18:00:00
 * @LastEditTime: 2020-08-06 10:43:14
-->
]<template>
    <div class="area-distribution-grid" ref="gridAreaDistribution" />
</template>
<script>
import doAnimation from '../../../../../../utils/doAnimation'
export default {
  props: {
	  source: {
      type: Object,
    },
  },
  data() {
    return {
      chart: null,
      animate: null,
    }
  },
  watch: {
    source: {
      handler() {
        this.updateCharts(this.source)
      },
      deep: true,
    },
  },
  beforeDestroy() {
    if (this.animate) {
      this.animate.destory()
    }
  },
  mounted() {
    this.chart = this.initCharts()
    this.updateCharts(this.source)
  },
  methods: {
    initCharts() {
      const myChart = this.$echarts.init(
        this.$refs.gridAreaDistribution,
      )
      return myChart
    },
    updateCharts(data) {
      const _that = this
      const option = {
        grid: {
          left: '5%',
          right: '5%',
          bottom: '8%',
          top: '20%',
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          show: true,
          textStyle: {
            fontSize: 40,
          },
        },
        dataZoom: [
          {
            type: 'slider',
            show: data.Xdata.length > 6,
            disabled: data.Xdata.length > 6,
            zoomLock: true,
            start: 0,
            end: 6 / data.Xdata.length * 100,
            height: 20,
            bottom: 20,
            borderColor: 'rgba(255,255,255,0.2)',
          },
        ],
        yAxis: [{
          type: 'value',
          axisLabel: {
            interval: 0,
            color: 'rgba(255,255,255,0.8)',
            fontSize: 40,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#196baa',
            },
          },
          axisTick: {
            show: false,
          },
        }],
        xAxis: [{
          type: 'category',
          data: data.Xdata,
          axisLabel: {
            interval: 0,
            color: 'rgba(255,255,255,0.8)',
            fontSize: 40,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#196baa',
            },
          },
          splitArea: {
            show: false,
          },
        }],
        series: [
          {
            name: '完成情况',
            type: 'pictorialBar',
            symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z',
            data: data.value1,
            barWidth: '50%',
            symbolOffset: [-35, -15],
            z: 99,
            label: {
              show: false,
              position: 'top',
              color: '#66DDFF',
              fontSize: 40,
            },
            itemStyle: {
              normal: {
                color: function () {
                  return new _that.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(59,137,255,0.7)',
                  }, {
                    offset: 1,
                    color: 'rgba(59,137,255,0.7)',
                  }])
                },
                opacity: 1,
              },
            },
          },
          {
            name: '月度情况',
            type: 'pictorialBar',
            symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z',
            data: data.value2,
            barWidth: '50%',
            symbolOffset: [55, -15],
            z: 99,
            label: {
              show: false,
              position: 'top',
              color: '#66DDFF',
              fontSize: 40,
            },
            itemStyle: {
              normal: {
                color: function () {
                  return new _that.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: ' rgba(109,193,253,0.7)',
                  }, {
                    offset: 1,
                    color: ' rgba(109,193,253,0.7)',
                  }])
                },
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
.area-distribution-grid{
  width: 100%;
  height:100%;
  z-index: 666;
  box-sizing: border-box;
  padding: 0px 0px 0 26px;
  overflow: hidden;
}
</style>


