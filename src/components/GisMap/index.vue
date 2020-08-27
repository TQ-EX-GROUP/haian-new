<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-03 11:23:40
 * @LastEditTime: 2020-08-21 16:08:33
-->
<template>
  <div class="gis-map">
    <tq-base-map
      ref="map"
      id="tqBaseMapGrid"
      :en-name="mapConfig.ENNAME"
      :host="mapConfig.HOST"
      :port="mapConfig.PORT"
      :app-key="mapConfig.APP_KEY"
      :center="[121.196, 31.886]"
      :zoom="12"
      :pitch="60"
      :min-zoom="10"
      :max-zoom="20"
      @loaded="loadHandle">
        <slot />
      </tq-base-map>
  </div>
</template>

<script>
import { ENNAME, HOST, PORT, APP_KEY } from './config'
import { customMap } from './custom-map'

export default {
  name: 'GisMap',
  data() {
    return {
      mapConfig: { ENNAME, HOST, PORT, APP_KEY },
    }
  },
  methods: {
    loadHandle(map) {
      customMap(map)
      const gisHttp = this.$refs.map.getServerApi()
      this.$emit('loaded', { map, gisHttp })
      this.resetMapSize()
    },
    // 地图组件因缩放指令发生了变形，在点击事件中发生错位，所以需要重置为原来的尺寸
    resetMapSize() {
      const wrapper = document.querySelector('.wrapper')
      const [wScale, hScale ] = wrapper.style.transform.replace(/[scalceXY()]/g, '').split(' ')
      const mapDom = document.querySelector('#tqBaseMapGrid')
      mapDom.style.transform = `scaleX(${1 / wScale}) scaleY(${1 / hScale})`
    },
  },
}
</script>

<style>

</style>