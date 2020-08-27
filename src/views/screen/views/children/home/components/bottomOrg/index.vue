<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-17 08:51:57
 * @LastEditTime: 2020-08-17 16:14:19
-->
<template>
  <div class="bottom-org" @click="$emit('bottomClick')">
   海安市
  </div>
</template>
<script>
export default {
  name: 'BottomOrg',
  computed: {
    // userOrg() {
    // return this.$store.getters['globe/user/userOrg']
    // },
  },
}
</script>
<style lang="scss" scoped>
.bottom-org{
  width: 340px;
  height:107px;
  position: absolute;
  bottom:144px;
  left: 50%;
  transform: translateX(-50%);
  background: url('../../../../../../../assets/img/area-bg.png') no-repeat;
  background-size: 100% 100%;
  font-size: 38px;
  color: #02ffde;
  line-height: 107px;
  padding-left: 140px;
  cursor: pointer;
}
</style>
