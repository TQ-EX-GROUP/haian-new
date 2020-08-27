<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-14 14:48:19
 * @LastEditTime: 2020-08-26 15:28:44
-->
<template>
<div class="content">
  <p class="header" v-if="source.length>0">实时工作TOP4</p>
  <div class="politics-status" ref="politicsStatus" />
</div>
</template>

<script>
export default {
  props: {
    source: {
      type: [Array, Object],
      default: () => [],
    },
  },
  data() {
    return {
      charts: null,
      option: '',
    }
  },
  watch: {
    source: {
      handler() {
        this.setCharts(this.source)
      },
      deep: true,
      //immediate: true,
    },
  },
  mounted() {
    this.charts = this.initCharts()

    //this.setCharts(this.source)
  },
  methods: {
    initCharts() {
      const myChart = this.$echarts.init(this.$refs.politicsStatus)
      return myChart
    },
    setCharts(source) {
      this.charts.clear()
      //const vm = this
      this.option = {
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: function (params) {
            return `${params.name} <br/> 
                    服务走访数： ${source[params.dataIndex].value} <br/> 
                    服务走访率：${source[params.dataIndex].rate}%`
          },
          textStyle: {
            fontSize: 28,
          },
        },
        grid: {
          left: '0%',
          right: '0%',
          top: '5%',
          bottom: '5%',
          containLabel: true,
        },
        series: [
          {
            // name: '政治面貌',
            type: 'funnel',
            left: -80,
            top: 50,
            bottom: 60,
            width: '110%',
            height: '70%',
            min: 0,
            max: 100,
            // minSize: '0%',
            // maxSize: 410,
            sort: 'descending',
            gap: 8,
            label: {
              normal: {
                fontSize: 24,
                show: true,
                position: 'inside',
                formatter: function (params) {
                  return `${source[params.dataIndex].value}`
                },
                color: '#fefeff',
              },
            },
            itemStyle: { normal: { borderWidth: 0 }},
            // data: source,
            data: [
              { 'value': 40, 'name': source[0].name },
              { 'value': 30, 'name': source[1].name },
              { 'value': 20, 'name': source[2].name },
              { 'value': 10, 'name': source[3].name },
            ],
            color: [
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#568DF6', // 0% 处的颜色
                }, {
                  offset: 1, color: '#226DF3', // 100% 处的颜色
                }],
              },
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#72DAED', // 0% 处的颜色
                }, {
                  offset: 1, color: '#1EACF6', // 100% 处的颜色
                }],
              },
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#85FB7C', // 0% 处的颜色
                }, {
                  offset: 1, color: '#08F08B', // 100% 处的颜色
                }],
              },
              {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#F8CC60', // 0% 处的颜色
                }, {
                  offset: 1, color: '#EB7829', // 100% 处的颜色
                }],
              },
            ],
          },
          {
            name: '政治面貌',
            type: 'funnel',
            // right: 0,
            // top: 50,
            // bottom: 40,
            width: '110%',
            height: '70%',
            min: 0,
            max: 100,
            minSize: 0,
            maxSize: 0,
            sort: 'descending',
            gap: 8,
            z: 1,
            label: {
              normal: {
                fontSize: 24,
                color: '#fefeff',
                position: 'right',
                // width: 50,
                formatter: (params) => {
                  // console.log(params, '000000000')
                  return `${params.data.name}：${params.data.rate}%`
                },
                // formatter: '{b}：{d}%',
              },
            },
            labelLine: {
              normal: {
                length: 100,
                lineStyle: {
                  width: 1,
                  type: 'dash',
                },
              },
            },
            itemStyle: {
              normal: {
                borderColor: '#fff',
                borderWidth: 1,
              },
            },
            data: source,
          },
        ],
        color: ['#5A59EB', '#63A6F8', '#EF9E4E'],
      }
      this.charts.setOption(this.option)
    },
  },
}
</script>

<style lang='scss' scoped>
.politics-status{
  width:100%;
  height:450px;
}
.content{
  width:100%;
  height:100%;
  position: relative;
.header{
   position: absolute;
   left:100px;
   top:-30px;
   font-size: 20px;
    font-family: FZLanTingHei-M-GBK Regular, FZLanTingHei-M-GBK Regular-Regular;
    font-weight: 400;
    text-align: left;
    color: #ffffff;
    background: #005ba6;
    padding:10px 40px;
    letter-spacing: 5px;
    border-radius: 5px;
}
}

</style>