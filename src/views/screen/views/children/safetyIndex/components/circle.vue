<template>
  <div class="container">
    <div class="percent">{{calcPercent}}</div>
    <canvas ref="canvas" />
  </div>
</template>
<script>
export default {
  props: {
    percent: { type: Number, default: 0.5 },
    width: { type: Number, default: 100 },
    backColor: { type: String, default: '#23458E' },
    foreColor: { type: String, default: '#07A9B2' },
    borderWidth: { type: Number, default: 10 },
  },
  computed: {
    calcPercent() {
      return `${((this.percent > 1 ? 1 : this.percent) * 100).toFixed(2)}%`
    },
  },
  watch: {
    percent() {
      this.drawCircle()
    },
  },
  mounted() {
    this.drawCircle()
  },
  methods: {
    drawCircle() {
      this.$nextTick(() => {
        console.log(this.width)
        const { canvas } = this.$refs
        canvas.width = this.width
        canvas.height = this.width
        canvas.style.width = `${this.width}px`
        canvas.style.height = `${this.width}px`
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, this.width, this.width)
        ctx.beginPath()
        ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width / 2 - this.borderWidth / 2,
          0,
          Math.PI * 2,
        )
        ctx.strokeStyle = this.backColor
        ctx.lineWidth = this.borderWidth - 2
        ctx.closePath()
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(
          this.width / 2,
          this.width / 2,
          this.width / 2 - this.borderWidth / 2,
          (Math.PI / 11) * 6,
          (Math.PI / 11) * 6 + Math.PI * 2 * this.percent,
        )
        ctx.strokeStyle = this.foreColor
        ctx.lineWidth = this.borderWidth
        ctx.stroke()
      }, 20)
    },
  },
}
</script>
<style scoped>
.container {
  position: relative;
}
.percent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 39px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  background:linear-gradient(180deg,rgba(255,255,255,1) 0%, rgba(113,215,255,1) 100%);
  background-clip:text;
  -webkit-background-clip:text;
  -webkit-text-fill-color:transparent;
}
</style>