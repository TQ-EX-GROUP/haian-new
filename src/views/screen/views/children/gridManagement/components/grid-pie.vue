<template>
  <div class="grid-active-container">
    <div class="active-chart" id="active-chart-pie" @click="showModal" />
  </div>
</template>
<script>
//import echarts from 'echarts'
export default {
  props: {
    source: {
      type: [Number, String],
      default: () => [],
    },
  },
  data() {
    return {
      chart: null,
      timer: null,
      dataIndex: 0,
    }
  },
  watch: {
    source: {
      handler() {
        this.updateCharts()
      },
      deep: true,
    },
  },
  mounted() {
    this.chart = this.initCharts()
    this.updateCharts()
  },
  methods: {
    initCharts() {
      const myChart = this.$echarts.init(
        document.getElementById('active-chart-pie'),
      )
      return myChart
    },
    updateCharts() {
      const _that = this
      const datas = {
        value: _that.source ? _that.source : 0,
        company: '%',
        ringColor: [{
          offset: 0,
          color: '#02d6fc', // 0% 处的颜色
        }, {
          offset: 1,
          color: '#367bec', // 100% 处的颜色
        }],
      }
      const title = '本月服务率'
      const option = {
        title: {
          text: `${title}\n${datas.value}%`,
          // text: datas.value + datas.company,
          x: 'center',
          y: 'center',
          textStyle: {
            fontWeight: 'normal',
            color: '#fff',
            fontSize: '31',
          },
        },
        color: ['#282c40'],
        legend: {
          show: false,
          data: [],
        },

        series: [{
          name: 'Line 1',
          type: 'pie',
          clockWise: true,
          radius: ['70%', '90%'],
          center: ['50%', '50%'],
          itemStyle: {
            normal: {
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          },
          hoverAnimation: false,
          data: [{
            cursor: 'pointer',
            value: datas.value,
            name: '',
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: datas.ringColor,
                },
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
          }, {
            name: '',
            value: 100 - datas.value,
          }],
        }],
      }
      this.chart.setOption(option)
      // this.chart.on('click', function () {
      //   _that.$emit('modal')
      // })
    },
    showModal() {
      this.$emit('modal')
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
  cursor: pointer;
  // display: flex;
  // justify-content: space-between;
  .active-chart {
    flex: 1;
    height: 100%;
    cursor: pointer;
  }
}
</style>


