<template>
  <img ref="img" :src="targetSrc" :alt="alt">
</template>

<script>
export default {
  name: 'AutoErrorImg',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: 'img',
    },
    errorImg: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      targetSrc: this.src || this.errorImg,
    }
  },
  mounted() {
    this.$refs.img.onerror = () => {
      this.targetSrc = this.errorImg
    }
  },
}
</script>
