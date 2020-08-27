<template>
  <ul
    :class="['list-wrapper', horizontal ? 'horizontal' : '']"
    v-venus-resize="resize"
    @mouseover="isAllowScroll=false"
    @mouseout="isAllowScroll=true">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'ListWrapper',
  props: {
    step: {
      type: Number,
      default: 100,
    },
    duration: {
      type: Number,
      default: 5000,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timer: null,
      cursor: 0,
      isAllowScroll: false,
    }
  },
  computed: {
  },
  watch: {
    isAllowScroll(f) {
      if (f) {
        this.timer = setInterval(this.doScrollStep, this.duration)
      } else {
        this.timer && clearInterval(this.timer)
      }
    },
  },
  mounted() {
    const { scrollHeight, clientHeight, scrollWidth, clientWidth } = this.$el
    if (this.horizontal) {
      this.isAllowScroll = scrollWidth - clientWidth >= this.step
    } else {
      this.isAllowScroll = scrollHeight - clientHeight >= this.step
    }
  },
  methods: {
    resize() {
      const { scrollHeight, clientHeight, scrollWidth, clientWidth } = this.$el
      if (this.horizontal) {
        this.isAllowScroll = scrollWidth - clientWidth >= this.step
      } else {
        this.isAllowScroll = scrollHeight - clientHeight >= this.step
      }
    },
    doScrollStep() {
      let isTouchEnd = false
      const {
        scrollLeft,
        scrollTop,
        scrollHeight,
        clientHeight,
        scrollWidth,
        clientWidth,
      } = this.$el
      if (this.horizontal) {
        isTouchEnd = scrollLeft + clientWidth >= scrollWidth
      } else {
        isTouchEnd = scrollTop + clientHeight >= scrollHeight
      }

      if (isTouchEnd) {
        this.backToTop()
        return
      }

      this.animation(this.horizontal ? scrollLeft : scrollTop, this.step)
    },
    backToTop() {
      const { scrollLeft, scrollTop } = this.$el
      this.animation(
        this.horizontal ? scrollLeft : scrollTop,
        this.horizontal ? -scrollLeft : -scrollTop,
      )
    },
    animation(currentCursor, distance, condition = () => true, duration = 500) {
      const start = new Date().getTime()
      const loop = () => {
        const current = new Date().getTime()
        const dT = current - start
        const dDistance = (dT > duration ? duration : dT) / duration * distance
        if (this.horizontal) {
          this.$el.scrollLeft = currentCursor + dDistance
        } else {
          this.$el.scrollTop = currentCursor + dDistance
        }
        if (dT < duration) {
          condition() && requestAnimationFrame(loop)
        }
      }
      requestAnimationFrame(loop)
    },
  },
}
</script>

<style lang="scss" scoped>
// .list-wrapper{
//   height: 100%;
//   width: 100%;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
// }
.list-wrapper{
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}
.list-wrapper::-webkit-scrollbar {
  width: 3px;
}
.list-wrapper::-webkit-scrollbar-thumb {
  background: #212843;
}
.horizontal{
  flex-direction: row;
}
</style>
