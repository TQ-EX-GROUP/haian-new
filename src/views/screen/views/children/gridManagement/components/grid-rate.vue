<!--
 * @Descripttion: '网格达标率'
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 13:56:00
 * @LastEditTime: 2020-08-07 13:53:32
-->
<template>
  <div class="pie-container">
    <div class="chart-container" ref="pie3" />
    <div class="label-container">
      <span
      :class="currentName===item.name?'selectCard':''"
      v-for="item in initData(source)"
      :key="item.name">
      {{item.name}}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PieStyle3',
  props: {
    sid: {
      type: String,
      default: () => 'pie3',
    },
    source: {
      type: [Array, Object],
      default: () => {
        return {
          '受理率': '65%',
          '办理率': '85%',
          '办结率': '95%',
          '采用率': '95%',
          '采用率1': '95%',
        }
      },
    },
    colorDic: {
      type: Object,
      default: () => {
        return {
          fillColor: [
            '#2D81FF',
            '#47FFDF',
            '#E07857',
            '#F96400',
            '#FAA900',
          ],
        }
      },
    },
  },
  data() {
    return {
      currentName: '',
      chart: null,
      option: {},
    }
  },
  watch: {
    source(newSource) {
      if (this.chart === null) {
        this.initChart()
      }
      this.updateChart(newSource)
    },
  },
  mounted() {
    this.chart = this.initChart()
    this.updateChart(this.source)
  },
  methods: {
    initChart() {
      const el = this.$refs.pie3
      const _chart = this.$echarts.init(el)
      return _chart
    },
    initData(source) {
      if (source && Object.prototype.toString.call(source) === '[object Object]') {
        const _rst = []
        Object.entries(source).forEach(([key, value]) => {
          _rst.push({
            name: key,
            per: this.getPercentFormat(value),
          })
        })
        return _rst
      }
      return source
    },
    getTextFormat(str) {
      const startIndex = 0
      const maxStrLen = 8
      if (str.length > maxStrLen) {
        return `${str.slice(startIndex, maxStrLen)}...`
      }
      return str
    },
    getPercentFormat(str) {
      if (typeof str === 'string' && str.indexOf('%') !== -1) {
        return Number(str.replace('%', ''))
      } else if (typeof str === 'number') {
        return str
      }
    },
    getSeries(source) {
      const data = this.initData(source)
      this.currentName = data.length > 0 ? data[0].name : ''
      // this.$emit('changeLine', this.currentName)
      const _series = []
      data.forEach((item, index) => {
        _series.push({
          name: `${item.per}%`,
          type: 'pie',
          radius: ['35%', '45%'],
          center: [`${10.5 + index * 20}%`, '45%'],
          hoverAnimation: false,
          cursor: 'pointer',
          label: {
            normal: {
              show: false,
            },
          },
          data: [{
            value: item.per,
            name: item.name,
            label: {
              normal: {
                show: true,
                position: 'center',
                formatter: '{d}%',
                textStyle: {
                  fontSize: '36',
                  fontWeight: 'bold',
                },
              },
            },
            itemStyle: {
              normal: {
                color: this.colorDic.fillColor[index],
                shadowBlur: 10,
                shadowColor: this.colorDic.fillColor[index],
              },
            },
          }, {
            value: 100 - item.per,
            name: item.name,
            itemStyle: {
              normal: {
                color: '#3D3E4B',
                shadowBlur: 10,
                shadowColor: '#3c227b',
              },
            },
          }],
        })
      })
      return _series
    },
    updateChart(source) {
      const _that = this
      const series = this.getSeries(source)
      this.option = {
        tooltip: {
          show: false,
          textStyle: {
            fontSize: 36,
          },
        },
        series: series,
      }

      this.chart.setOption(this.option)
      this.chart.on('click', function (params) {
        // console.log(params)
        _that.$emit('changeLine', params.name)
        _that.currentName = params.name
      })
    },
  },
}
</script>
<style lang='scss' scoped>
.pie-container{
  width: 100%;
  height: 100%;
  position: relative;
  .chart-container{
    width: 100%;
    height: 100%;
  }
  .label-container{
    cursor: pointer;
    width: 100%;
    height: 30px;
    bottom: 15%;
    position: absolute;
    display: flex;
    letter-spacing: 3px;
    .selectCard{


      border-bottom:3px solid #cef7ff;
      border-radius: 5px;
    }
    & > span{
       margin:0 60px;
        box-sizing: border-box;
      line-height: 60px;
      height:60px;
      flex: 1;
      text-align: center;
      font-size: 29px;
      font-family: FZLanTingHeiS-R-GB Regular, FZLanTingHeiS-R-GB Regular-Regular;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
    }
  }
}
</style>

