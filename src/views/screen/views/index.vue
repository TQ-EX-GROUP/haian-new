<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 10:24:21
 * @LastEditTime: 2020-08-21 15:58:54
-->
<template>
  <router-view />
</template>

<script>
export default {
  name: 'Screen',
  computed: {
    user() {
      return this.$store.getters['globe/user/userInfo']
    },
    config() {
      return this.$store.getters['globe/user/conf']
    },
  },
  mounted() {
    this.$cookies.set('sid', 'd89aa452-a851-4665-a2cc-cc3b6de7bcb8')
  },
}
</script>
