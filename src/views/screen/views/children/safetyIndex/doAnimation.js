class doAnimation {
  constructor(echartChart) {
    this.chart = echartChart
    this.intervalId = null
    this.showMovie = true
  }
  animate = (cb) => {
    if (this.chart) {
      let i = 0
      const options = this.chart.getOption()
      const { series } = options
      const dom = this.chart._dom
      const length = series.map((item) => item.data.length).reduce((i, t) => (i > t ? i : t), 0)
      console.log(this)
      const _this = this
      this.chart.on('mouseover', _ => {
        console.log(this)
        this.showMovie = false
        for (let f = 0; f < series.length; f++) {
          _this.chart.dispatchAction({
            type: 'downplay',
            seriesIndex: f,
          })
        }
        this.chart.dispatchAction({
          type: 'highlight',
          dataIndex: _.dataIndex,
        })
        i = _.dataIndex
      })
      this.chart.on('mouseout', () => {
        this.showMovie = true
      })
      this.intervalId = setInterval(() => {
        if (!_this.showMovie) { return }
        if (i >= length) {
          i = 0
        }
        if (i === 0) {
          dom.style.transition = 'none'
          dom.style.visibility = 'hidden'
          dom.style.marginLeft = '100%'
          setTimeout(() => {
            dom.style.transition = 'all 1s ease 0.5s'
            setTimeout(() => {
              dom.style.visibility = 'visible'
              dom.style.marginLeft = '0'
            }, 100)
          }, 50)
        }
        for (let f = 0; f < series.length; f++) {
          for (let j = 0; j < length; j++) {
            _this.chart.dispatchAction({
              type: 'downplay',
              seriesIndex: f,
              dataIndex: j,
            })
          }
          _this.chart.dispatchAction({
            type: 'highlight',
            seriesIndex: f,
            dataIndex: i,
          })
          _this.chart.dispatchAction({
            type: 'showTip',
            seriesIndex: f,
            dataIndex: i,
          })
        }
        if (cb) { cb(i) }
        i++
      }, 2500)
    }
  }
  destory = () => {
    clearInterval(this.intervalId)
    this.chart = null
  }
}

export default doAnimation
