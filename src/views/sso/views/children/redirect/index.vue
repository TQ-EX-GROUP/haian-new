<template>
  <div class="sso-redirect" />
</template>
<script>
export default {
  name: 'SsoRedirect',
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
      const { u: userName, p: password, wid: token, path = '/' } = this.$route.query
      if (userName && password) {
        await this.$store.dispatch('globe/user/doLogin', {
          userName, password,
        })
        this.$router.replace(path)
      } else if (token) {
        await this.$store.dispatch('globe/user/loginByToken', {
          token,
        })
        this.$router.replace(path)
      }
    },
  },
}
</script>
<style lang="scss" scoped>

</style>
