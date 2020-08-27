<template>
  <div class="criminal-distribute-data">
    <div id="criminal-distribute-chart" class="criminal-distribute-chart" />
  </div>
</template>
<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import doAnimation from '../doAnimation'
export default {
  props: {
    data: { type: Array, default: () => [] },
  },
  watch: {
    data() {
      this.$nextTick(() => {
        if (this.data.length > 0) {
          this.generateChart()
        }
      })
    },
  },
  mounted() {
    this.generateChart()
  },
  beforeDestroy() {
    if (this.doAnimate) {
      this.doAnimate.destory()
    }
  },
  methods: {
    generateChart() {
      const titles = this.data.map(item => item.title)
      const arr1 = this.data.map(item => item.num1)
      const max = Math.ceil(arr1.reduce((t, i) => (t > i ? t : i), 0) / 50) * 50
      const arr2 = this.data.map(item => item.num2)
      const myChart = echarts.init(
        document.getElementById('criminal-distribute-chart'),
      )
      const option = {
        color: [
          new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(15, 186, 233,1)',
            },
            {
              offset: 1,
              color: 'rgba(46, 124, 251,1)',
            },
          ]),
          '#F8B40E',
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56',
            },
          },
        },
        legend: {
          data: ['案件数', '破案率'],
          textStyle: {
            fontSize: 29,
            fontFamily: 'Source Han Sans CN',
            fontWeight: 400,
            color: 'rgba(158,169,201,1)',
          },
          top: 30,
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
              textStyle: {
                fontSize: 25,
                fontFamily: 'Source Han Sans CN',
                fontWeight: 400,
                color: 'rgba(162,176,213,1)',
              },
            },
            data: titles,
          },
          {
            type: 'category',
            boundaryGap: true,
            data: titles,
          },
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            max: max,
            min: 0,
            boundaryGap: [0.2, 0.2],
            splitLine: {
              show: false,
            },
            axisLabel: {
              textStyle: {
                fontSize: 34,
                fontFamily: 'FZLTXHK',
                fontWeight: 400,
                color: 'rgba(206, 217, 251, 1)',
              },
              formatter: '{value}',
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(146,193,234,0.3)',
              },
            },
          },
          {
            type: 'value',
            scale: true,
            max: 1,
            min: 0,
            boundaryGap: [0.2, 0.2],
            axisLabel: {
              textStyle: {
                fontSize: 34,
                fontFamily: 'FZLTXHK',
                fontWeight: 400,
                color: 'rgba(206, 217, 251, 1)',
                formatter: '{value}',
              },
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
        ],
        series: [
          {
            name: '案件数',
            type: 'bar',
            barWidth: 46,
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(15, 186, 233,1)',
                },
                {
                  offset: 1,
                  color: 'rgba(46, 124, 251,1)',
                },
              ]),
            },
            data: arr1,
          },
          {
            name: '破案率',
            type: 'line',
            data: arr2,
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle: {
              color: '#F8B40E',
              width: 4,
            },
            itemStyle: {
              normal: {
                borderWidth: 2,
                borderColor: '#F8B40E',
              },
            },
            markPoint: {
              symbolSize: 80,
            },
          },
        ],
      }
      myChart.setOption(option)
      if (this.doAnimate) {
        this.doAnimate.destory()
        this.doAnimate = null
      }
      this.doAnimate = new doAnimation(myChart)
      this.doAnimate.animate()
    },
  },
}
</script>
<style lang="scss" scoped>
.criminal-distribute-data {
  height: 590px;
  width: 100%;
  background-image: url("../../../../../../assets/img/gridSafety/bg8.png");
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
  .criminal-distribute-chart {
    width: 100%;
    height: 100%;
    visibility: hidden;
  }
}
</style>