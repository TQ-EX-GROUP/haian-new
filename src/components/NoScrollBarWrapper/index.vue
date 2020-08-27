<template>
  <div class="wrapper" ref="outer">
    <div
      class="inner-wrapper"
      :style="innerStyle"
      ref="inner">
      <div class="content" v-venus-resize="resize">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoScrollBarWrapper',
  props: {
    direction: {
      type: String,
      default: 'vertical', // horizontal
    },
  },
  data() {
    return {
      innerStyle: `
        right: 0;
        bottom: 0;
        overflow: hidden;
      `,
      currentStatus: 'none',
      isComputed: false,
    }
  },
  computed: {
    style() {
      return this.innerStyle + this.isComputed ? 'opacity: 0;' : '' // 防止出现闪动问题
    },
  },
  methods: {
    resize([cw, ch]) {
      const { width: iw, height: ih } = this.$refs.inner.getBoundingClientRect()
      console.log(ch, ih)
      if (this.direction === 'vertical' && ch > ih) {
        this.innerStyle = `
            right: -15px;
            bottom: 0;
            overflow-x: hidden;
            overflow-y: scroll;
          `
        this.currentStatus = 'vertical'
      } else if (this.direction === 'horizontal' && cw > iw) {
        this.innerStyle = `
            right: 0;
            bottom: -15px;
            overflow-x: scroll;
            overflow-y: hidden;
          `
        this.currentStatus = 'horizontal'
      } else {
        this.innerStyle = `
          right: 0;
          bottom: 0;
          overflow: hidden;
        `
        this.currentStatus = 'none'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper{
  position: relative;
	overflow: hidden;
  .inner-wrapper{
    position: absolute;
    left: 0;
    top: 0;
    .content{
      position: relative;
    }
  }
}
</style>
