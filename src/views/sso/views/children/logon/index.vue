<template>
  <div class="sso-logon" />
</template>
<script>
export default {
  name: 'SsoLogon',
  data() {
    return {
    }
  },
  computed: {
    user() {
      return this.$store.getters['globe/user/userInfo']
    },
  },
  mounted() {
    this.logon()
  },
  methods: {
    async logon() {
      const { u: userName, p: password } = this.$route.query
      await this.$store.dispatch('globe/user/doLogin', {
        userName, password,
      })
      this.$router.replace('/')
    },
  },
}
</script>
<style lang="scss" scoped>
  .sso-logon{
    width: 100%;
    height: 100%;
  }
</style>
