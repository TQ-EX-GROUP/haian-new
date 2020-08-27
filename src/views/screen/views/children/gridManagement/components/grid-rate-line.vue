<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-30 14:03:30
 * @LastEditTime: 2020-08-14 18:27:16
-->
<template>
  <div class="gird-rate-line" ref="girdRateLine" />
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
      handler(newSource) {
        if (this.chart === null) {
          this.initChart()
        }
        this.updateChart(newSource)
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
    this.chart = this.initChart()
    this.updateChart(this.source)
  },
  methods: {
    initChart() {
      const el = this.$refs.girdRateLine
      const _chart = this.$echarts.init(el)
      return _chart
    },
    updateChart(source) {
      this.chart.clear()
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          textStyle: {
            fontSize: 29,
            color: '#fff',
          },
          formatter: '{a}：{c}%',
          // formatter: function (data) {
          //   return `<div>
          //   <span style='display:inline-block;width:20px;height:20px;background: #43b0ff;border-radius:50%'>
          //   </span>
          //   <span style='margin-left:10px;'>${data[0].data}</span>
          //   </div>`
          // },
        },
        grid: {
          top: '5%',
          left: '10%',
          right: '5%',
          bottom: '15%',
          // containLabel: true,
        },
        xAxis: [{
          type: 'category',
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
            // rotate: '45',
          },
          splitLine: {
            show: false,
          },
          boundaryGap: false,
          data: source.xData,

        }],

        yAxis: [{
          type: 'value',
          min: 0,
          max: '100',
          splitNumber: 4,
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
            formatter: function (data) {
              return `${Number(data).toFixed(2)}%`
            },
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
          name: source.name,
          type: 'line',
          smooth: true, //是否平滑
          showAllSymbol: true,
          symbol: 'circle',
          symbolSize: 0,
          cursor: 'pointer',
          lineStyle: {
            normal: {
              color: '#42B0FF',
              shadowColor: 'rgba(0, 0, 0, .3)',
            },
          },

          itemStyle: {
            color: '#6c50f3',
            borderColor: '#fff',
            borderWidth: 2,
          },
          tooltip: {
            show: true,
          },
          areaStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#A0D8FF',
              },
              {
                offset: 1,
                color: '#4897FF',
              },
              ], false),
              shadowColor: 'rgba(108,80,243, 0.9)',
              shadowBlur: 20,
            },
          },
          data: source.valueData,
        },

        ],
      }
      this.chart.setOption(option, true)
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

<style lang='scss' scoped>
.gird-rate-line{
  width:100%;
  height: 100%;
}
</style>