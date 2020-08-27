
import mapbox from 'mapbox-gl'
export class RenderPointLayer {
  constructor(map, options = {}) {
    const { icons = [] } = options //eslint-disable-line
    this.map = map
    this.icons = icons
    this.limit = 10
    // 新增几个图标
    icons.forEach(i => {
      // console.log('=====', `./icon/${i}.png`)
      this.map.loadImage(
        `./icon/${i}.png`,
        (error, image) => {
          if (error) { throw error }
          this.map.addImage(i, image)
        },
      )
    })
    // 监听事件
    this.initListeners(icons)
    this.extraCameraMarker = [] // 点击聚合数据时 额外的摄像头图层
  }

  // 初始化图层
  init(sourceName, color, icon = '') {
    this.addSources(sourceName)
    this.addLayers(sourceName, color, icon)
  }

  addSources(sourceName) {
    this.map.addSource(sourceName, {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [],
      },
      cluster: true,
      clusterMaxZoom: 16,
      clusterRadius: 150,
    })
  }

  addLayers(sourceName, color, icon) {
    // 聚合的圆形
    this.map.addLayer({
      id: `clusters-${sourceName}`,
      type: 'circle',
      source: sourceName,
      filter: ['has', 'point_count'],
      paint: {
        'circle-color': color, // 聚合圆形的颜色
        'circle-radius': [
          'step',
          ['get', 'point_count'],
          15, // 点位数量小于100时半径为20
          100, // 点位数量设置
          18, // 点位数量在[100, 750]之间时半径为30
          750, // 点位数量设置
          20, // 点位数量大于750时半径为40
          // 45, // 点位数量小于100时半径为20
          // 150, // 点位数量设置
          // 45, // 点位数量在[100, 750]之间时半径为30
          // 750, // 点位数量设置
          // 50, // 点位数量大于750时半径为40
        ],
      },
    })
    // 聚合的数字
    this.map.addLayer({
      id: `cluster-count-${sourceName}`,
      type: 'symbol',
      source: sourceName,
      filter: ['has', 'point_count'],
      layout: {
        'text-field': '{point_count_abbreviated}',
        'text-font': ['Microsoft YaHei Regular'],
        'text-size': 12,
      },
    })
    // 裂变到最后的点

    this.map.addLayer({
      id: `unclustered-point-${sourceName}`,
      type: 'symbol',
      source: sourceName,
      filter: ['!', ['has', 'point_count']],
      layout: {
        'icon-image': icon ? icon : sourceName,
        'icon-size': 0.5,
        'icon-ignore-placement': true,
      },
    })
  }

  setData(list, sourceName) {
    // console.log('list--, sourceName--', list, sourceName)
    const features = list.map(poi => {
      // console.log('poi.location----', poi.location)
      return {
        type: 'Feature',
        properties: poi,
        geometry: {
          type: 'Point',
          coordinates: poi.location.split(',').map(item => Number(item)),
        },
      }
    })
    const featureCollection = {
      type: 'FeatureCollection',
      features: features,
    }
    this.map.getSource(sourceName).setData(featureCollection)
  }

  // 监听 事件
  initListeners() {
    // getClusterLeaves
    // 点击裂变到最后的单个图标获取点位信息，可以通过事件派发或者传入回调的方法使用
    this.map.on('click', (e) => {
      const features = this.map.queryRenderedFeatures(e.point, {
        // layers: ['clusters-camera','clusters-camera-circle '],  //clusters-camera-circle 未渲染
      })
      const f = features.filter(v => {
        return ['clusters-camera', 'clusters-camera-circle'].includes(v.layer.id)
      })
      // 任何点击事件 都会清除 extraCameraMarker
      this.extraCameraMarker.forEach(v => v.remove())
      this.extraCameraMarker = []
      if (f.length) {
        const [{ source }] = f
        const { cluster_id, point_count } = f[0].properties
        if (point_count > this.limit) { return }
        this.map.getSource(source).getClusterLeaves(cluster_id, this.limit, 0, (err, arr) => {
          if (err) { return }
          const list = arr.map(v => {
            return v.geometry.coordinates
          })
          this.animateCameraMarker(50, f[0].geometry.coordinates, list)
        })
      }

      this.map.on('zoom', (e) => {//eslint-disable-line
        // 缩放 清除 extraCameraMarker
        this.extraCameraMarker.forEach(v => v.remove())
        this.extraCameraMarker = []
      })
    })
  }
  // 设置图层是否可见 none 不可见   visible 可见
  setVisibility(visible) {
    this.icons.forEach(v => {
      this.map.setLayoutProperty(`unclustered-point-${v}`, 'visibility', visible)
      this.map.setLayoutProperty(`clusters-${v}`, 'visibility', visible)
      this.map.setLayoutProperty(`cluster-count-${v}`, 'visibility', visible)
    })
  }

  // 添加治理中心
  addCommand(list, markers) {
    list.forEach(v => {
      const el = document.createElement('div')
      el.className = `govern-wrap ${v.isMain ? 'main' : ''}`
      el.innerHTML = `<div class="govern-circle-out"></div><div class="govern-circle-in"></div><div class="govern-build"></div>`
      const marker = new mapbox.Marker({ element: el }).setLngLat(v.location.split(',').map(item => Number(item)))
        .addTo(this.map)
      markers.push(marker)
    })
  }
  // 添加事件
  addEvent(list, markers, mapPopup, cb) {
    // console.log('addEvent----list----', list)
    list.forEach(v => {
      // console.log('v.type----', v)
      if (v.type === 'camera') { // 摄像头点位添加点击事件
        // console.log('点击摄像头点位1111----')
        const el = document.createElement('div')
        el.className = `camera-map`
        const marker = new mapbox.Marker({ element: el }).setLngLat([v.lon, v.lat])
          .addTo(this.map)
        markers.push(marker)

        if (cb) {
          el.onclick = () => { cb(v) }
        }
      } else {
        // console.log('2222----', v)
        const el = document.createElement('div')
        el.className = `event-map`
        el.innerHTML = `<div class="event-map-in"></div>`
        if (v.lon) {
          const marker = new mapbox.Marker({ element: el }).setLngLat([v.lon, v.lat])
            .addTo(this.map)

          if (cb) {
            el.onclick = () => { cb(v) }
          }
          markers.push(marker)
          mapPopup.push(
            new mapboxgl.Popup({ closeButton: false, closeOnClick: false, maxWidth: '707px', anchor: 'bottom', offset: 90 })
              .setLngLat([v.lon, v.lat])
              .setHTML(`<div class="map-popup-wrapper">
                  <div class="map-popup-title">
                    <img src="${require('@/assets/img/event-map-icon.png')}" class="map-popup-img">
                    <span></span>
                  </div>
                  <p class="map-popup-info">${v.issueName}</p>
                </div>`)
              .addTo(this.map),
          )
        }
      }
    })
  }
  // 清除详情页图层
  removeDetailSource() {
    this.icons.forEach(v => {
      if (this.map.getLayer(`clusters-${v}-circle`)) {
        this.map.removeLayer(`clusters-${v}-circle`)
        this.map.removeLayer(`cluster-count-${v}-circle`)
        this.map.removeLayer(`unclustered-point-${v}-circle`)
        this.map.removeSource(`${v}-circle`)
      }
    })
  }

  // 初始化 额外摄像头图层
  initExtraCamera() {
    this.map.addSource('point', {
      'type': 'geojson',
      'data': pointOnCircle(0),
    })

    this.map.addLayer({
      'id': 'point',
      'source': 'point',
      'type': 'circle',
      'paint': {
        'circle-radius': 10,
        'circle-color': '#007cbf',
      },
    })
  }
  getExtraCameraMarkerData(perc, center, list) {
    list.forEach(v => {
      const marker = new mapbox.Marker().setLngLat([center[0] + (v[0] - center[0]) * perc * 0.01, center[1] + (v[1] - center[1]) * perc * 0.01])
        .addTo(this.map)
      this.extraCameraMarker.push(marker)
    })
  }

  // 移动 额外的摄像头
  animateCameraMarker(perc, center, list) {
    this.extraCameraMarker.forEach(v => v.remove())
    this.extraCameraMarker = []
    const p = perc + 10
    this.getExtraCameraMarkerData(p, center, list)
    if (p <= 100) {
      requestAnimationFrame(() => {
        this.animateCameraMarker(p, center, list)
      })
    }
  }

}
