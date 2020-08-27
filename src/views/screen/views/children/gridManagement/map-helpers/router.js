import { featureCollection, point, lineString } from '@turf/helpers'
import bbox from '@turf/bbox'


export class Router {
  constructor(options) {
    const {
      id = 'tqmapgl-router',
      map,
      beginIcon = 'gis-play',
      overIcon = 'gis-over',
      gridUserIcon = 'gis-user',
    } = options

    this.beginIcon = beginIcon
    this.overIcon = overIcon
    this.gridUserIcon = gridUserIcon


    this.steps = 0 // 总步数
    this.counter = 0 // 计步器
    this.speed = 300 // 速度，毫秒
    this.timer = null // 定时器，用来实现动画

    this.map = map

    this.sourceId = `${id}-source-id`

    this.routerStaticLayerId = `${id}-static-layer-id`

    this.iconSourceId = `${id}-icon-source-id`
    this.iconLayerId = `${id}-icon-layer-id`

    this.gridUserSourceId = `${id}-grid-user-icon-source-id`
    this.gridUserLayerId = `${id}-grid-user-icon-layer-id`

    this.routerCoords = [] // 轨迹坐标数据

    this.addSources()
    this.addLayers()
  }

  // 根据轨迹的点数计算出3s之内播放完成所需的速度
  computeSpeed() {
    this.speed = 1000 * 10 / this.steps
  }


  setData(list) {
    const array = list.map(item => {
      return [Number(item.centerLon), Number(item.centerLat)]
    })
    this.routerCoords = array
    this.steps = array.length - 1

    // 计算速度
    this.computeSpeed()

    // 静态轨迹数据
    const lineFeature = lineString(array)
    this.map.getSource(this.sourceId).setData(lineFeature)

    // 开始图标和结束图标数据
    const beginPoint = point(array[0], { icon: this.beginIcon })
    const overPoint = point(array[array.length - 1], { icon: this.overIcon })
    const pointCollection = featureCollection([beginPoint, overPoint])
    this.map.getSource(this.iconSourceId).setData(pointCollection)

    // 网格员
    const currentPoint = point(array[0], { icon: this.gridUserIcon })
    this.map.getSource(this.gridUserSourceId).setData(currentPoint)

    // 缩放视图
    this.fit(lineFeature)
  }

  // 开始
  start() {
    this.map.setLayoutProperty(this.gridUserLayerId, 'visibility', 'visible')
    if (this.timer === null) {
      this.animate()
    }
  }

  // 暂停
  pause() {
    clearTimeout(this.timer)
    this.timer = null
  }

  // 重置
  reset() {
    this.pause()
    this.counter = 0
    this.map.setLayoutProperty(this.gridUserLayerId, 'visibility', 'none')
    this.fit(lineString(this.routerCoords))
  }

  animate() {
    const lnglat = this.routerCoords[this.counter]
    // TODO:计算bearing
    const currentPoint = point(lnglat, { icon: this.gridUserIcon })
    this.map.getSource(this.gridUserSourceId).setData(currentPoint)
    this.map.easeTo({
      pitch: 60,
      // center: lnglat,
      // bearing: this.currentPoint.properties.bearing
    })
    if (this.counter < this.steps) {
      this.timer = setTimeout(() => {
        this.animate()
      }, this.speed)
    } else {
      // over
      this.counter = 0
      const lineFeature = lineString(this.routerCoords)
      this.map.setLayoutProperty(this.gridUserLayerId, 'visibility', 'none')
      this.timer = null
      this.fit(lineFeature)
      // 运动完了触发事件，通过map.on('router.over', e => {})监听
      this.map.fire('router.over')
    }
    this.counter++
  }


  addSources() {
    // 轨迹数据源
    this.map.addSource(this.sourceId, {
      type: 'geojson',
      data: featureCollection([]),
    })
    // 图标数据源
    this.map.addSource(this.iconSourceId, {
      type: 'geojson',
      data: featureCollection([]),
    })
    // 网格员数据源
    this.map.addSource(this.gridUserSourceId, {
      type: 'geojson',
      data: featureCollection([]),
    })
  }


  addLayers() {
    // 静态路线图层
    this.map.addLayer({
      id: this.routerStaticLayerId,
      type: 'line',
      source: this.sourceId,
      paint: {
        'line-color': '#6CAEFF',
        // 'line-opacity': 0.6,
        'line-dasharray': [2, 2],
        'line-width': 5,
      },
    })
    // 起点和终点图标
    this.map.addLayer({
      id: this.iconLayerId,
      type: 'symbol',
      source: this.iconSourceId,
      layout: {
        'icon-size': 0.25,
        'icon-image': ['get', 'icon'],
        'icon-anchor': 'bottom',
        'icon-ignore-placement': true,
        'icon-allow-overlap': true,
      },
      paint: {},
    })
    // 网格员图标图层
    this.map.addLayer({
      id: this.gridUserLayerId,
      type: 'symbol',
      source: this.gridUserSourceId,
      layout: {
        'visibility': 'none',
        'icon-size': 2,
        'icon-image': ['get', 'icon'],
        'icon-anchor': 'bottom',
        'icon-ignore-placement': true,
        'icon-allow-overlap': true,
      },
      paint: {},
    })
  }
  // 缩放视图
  fit(feature) {
    this.map.fitBounds(bbox(feature), { padding: 900, pitch: 0 })
  }

  destroy() {
    this.map.removeLayer(this.iconLayerId)
    this.map.removeLayer(this.routerStaticLayerId)
    this.map.removeLayer(this.gridUserLayerId)

    this.map.removeSource(this.gridUserSourceId)
    this.map.removeSource(this.iconSourceId)
    this.map.removeSource(this.sourceId)
  }
}
