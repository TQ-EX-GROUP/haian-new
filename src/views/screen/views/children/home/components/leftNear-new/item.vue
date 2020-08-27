<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-18 15:26:34
 * @LastEditTime: 2020-08-19 15:14:52
-->
<template>
  <div class="item">
    <div :class="`detail ${type}`" @click="flyto">
      <template v-if="type==='grid'">
        <p :title="info.name">姓名： {{info.name}}</p>
        <p :title="info.telephone">电话： {{info.telephone}}</p>
       </template>

      <template v-if="type==='camera'">
        <p :title="info.name">点位名称：{{info.name}}</p>
        <!-- <p :title='info.abilityNames?info.abilityNames:"暂无能力"'>点位能力 {{info.abilityNames?info.abilityNames:'暂无能力'}}</p> -->
      </template>

      <template v-if="type==='command'">
        <p :title="info.name">治理中心名称： {{info.name}}</p>
        <p :title="info.areaName">所属区域： {{info.areaName}}</p>
      </template>

      <template v-if="type==='place'">
        <p :title="info.name">名称： {{info.name}}</p>
        <p :title="info.areaName">所属区域： {{info.areaName}}</p>
      </template>
   </div>
   <div class="box-call">
    <div :class="`call ${type}`" @click="$emit('call')" v-if="isCall">
      {{type==='camera'?"视频播放":'视频通话'}}
    </div>
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
  // height: 120px;
  // margin-bottom: 20px;
  .detail{
    flex:1;
    height: 140px;
    background: #0E1D3B;
    // background: url('../../../../../../../assets/img/circle-grid.png') no-repeat left center ;
    color: #afccd0;
    font-size: 34px;
    padding-left: 200px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    margin-bottom:20px;
    position: relative;
    &.grid{
    &:before{
     content: '';
     position: absolute;
     width:150px;
     height:80px;
     background: url('../../../../../../../assets/img/circle-grid.png') no-repeat;
     background-size: 100% 100%;
     top:31px;
     left: 20px;
    }
      p{
        line-height: 70px;
      }
    }
    &.camera{
      // background: url('../../../../../../../assets/img/circle-camera.png') no-repeat left center ;
      // width:100%;
      // height:140px;
      &:before{
     content: '';
     position: absolute;
     width:150px;
     height:80px;
     background: url('../../../../../../../assets/img/circle-camera.png') no-repeat;
     background-size: 100% 100%;
     top:31px;
     left: 20px;
    }
      p{
        line-height: 140px;
      }
    }
    &.command{
      // background: url('../../../../../../../assets/img/circle-command.png') no-repeat left center ;
      // width:310px ;
      &:before{
        content: '';
        position: absolute;
        width:150px;
        height:80px;
        background: url('../../../../../../../assets/img/circle-command.png') no-repeat;
        background-size: 100% 100%;
        top:31px;
        left: 20px;
        }
      p{
        line-height: 70px;
      }
    }
    &.place{
      // background: url('../../../../../../../assets/img/circle-place.png') no-repeat left center ;
      // width:310px ;
        &:before{
        content: '';
        position: absolute;
        width:150px;
        height:80px;
        background: url('../../../../../../../assets/img/circle-place.png') no-repeat;
        background-size: 100% 100%;
        top:31px;
        left: 20px;
        }
      p{
        line-height: 70px;
      }
    }

    >p{
      line-height: 100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      // &:nth-child(1){
      //   margin-top:10px;
      // }
    }
  }
  .box-call{
    height: 140px;
    width:200px;
    background: #0E1D3B;
    display:flex;
    align-items: center;
  }
  .call{
    width: max-content;
    height: 55px;
    background: url('../../../../../../../assets/img/call-bg.png') no-repeat  ;
    font-size: 33px;
    color: #64ebff;
    text-align: center;
    line-height: 55px;
    padding:0px 10px;
    cursor:pointer;
    &.camera {
       background: url('../../../../../../../assets/img/video-bg.png') no-repeat;
       background-size: 100% 100%;
    }
    &.grid {
       background: url('../../../../../../../assets/img/video-bg.png') no-repeat;
       background-size: 100% 100%;
    }
    &.place{
      display: none;
    }
  }
}
</style>