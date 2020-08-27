<template>
  <div class="item">
    <div :class="`detail ${type}`" @click="flyto">
      <template v-if="type==='grid'">
        <p :title="info.name">姓名 {{info.name}}</p>
        <p :title="info.telephone">电话 {{info.telephone}}</p>
       </template>

      <template v-if="type==='camera'">
        <p :title="info.name">点位名称 {{info.name}}</p>
        <!-- <p :title='info.abilityNames?info.abilityNames:"暂无能力"'>点位能力 {{info.abilityNames?info.abilityNames:'暂无能力'}}</p> -->
      </template>

      <template v-if="type==='command'">
        <p :title="info.name">治理中心名称 {{info.name}}</p>
        <p :title="info.areaName">所属区域 {{info.areaName}}</p>
      </template>

      <template v-if="type==='place'">
        <p :title="info.name">名称 {{info.name}}</p>
        <p :title="info.areaName">所属区域 {{info.areaName}}</p>
      </template>
</div>
    <div :class="`call ${type}`" @click="$emit('call')" v-if="isCall">
      {{type==='camera'?"视频播放":'视频通话'}}
    </div>
  </div>
</template>
<script>
import $bus from '@/utils/bus.js'
export default {
  nane: 'item',
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    type: String,
  },
  computed: {
    isCall() {
      //  || this.type === 'command'
      return this.type === 'grid' || (this.type === 'camera' && /实时播放/.test(this.info.abilityNames))
    },
  },
  methods: {
    flyto() {
      $bus.$emit('flyto', this.info.location)
    },
  },
}
</script>
<style lang="scss" scoped>
.item{
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  .detail{
    width: 225px;
    height: 70px;
    background: url('../../../../../../../assets/img/circle-grid.png') no-repeat left center ;
    color: #afccd0;
    font-size: 14px;
    padding-left: 70px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    &.camera{
      background: url('../../../../../../../assets/img/circle-camera.png') no-repeat left center ;
      width:310px;
      p{
        line-height: 50px;
      }
    }
    &.command{
      background: url('../../../../../../../assets/img/circle-command.png') no-repeat left center ;
      width:310px ;
    }
    &.place{
      background: url('../../../../../../../assets/img/circle-place.png') no-repeat left center ;
      width:310px ;
    }

    >p{
      line-height: 25px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:nth-child(1){
        margin-top:10px;
      }
    }
  }
  .call{
    width: 83px;
    height: 25px;
    background: url('../../../../../../../assets/img/call-bg.png') no-repeat  ;
    font-size: 13px;
    color: #64ebff;
    text-align: center;
    line-height: 25px;
    padding-left: 8px;
    margin-top:22px;
    cursor: pointer;
    &.camera {
       background: url('../../../../../../../assets/img/video-bg.png') no-repeat  ;
    }
    &.place{
      display: none;
    }
  }
}
</style>