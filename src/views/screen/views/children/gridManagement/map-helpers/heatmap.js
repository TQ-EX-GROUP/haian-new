import { featureCollection, point } from '@turf/helpers'
// eslint-disable-next-line no-unused-vars
import bbox from '@turf/bbox'

/**
 * 绘制下级组织机构区域的图层
 * 需要安装两个库
 * npm install @turf/helpers --save
 * npm install @turf/bbox --save
 */

export class HeatmapLayer {
  constructor(map, options = {}) {
    this.defaultPaint = {
      // Increase the heatmap weight based on frequency and property magnitude
      'heatmap-weight': [
        'interpolate',
        ['linear'],
        ['get', 'mag'],
        0,
        0,
        6,
        1,
      ],
      // Increase the heatmap color weight weight by zoom level
      // heatmap-intensity is a multiplier on top of heatmap-weight
      'heatmap-intensity': [
        'interpolate',
        ['linear'],
        ['zoom'],
        0,
        1,
        9,
        3,
      ],
      // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
      // Begin color ramp at 0-stop with a 0-transparancy color
      // to create a blur-like effect.
      'heatmap-color': [
        'interpolate',
        ['linear'],
        ['heatmap-density'],
        0,
        'rgba(33,102,172,0)',
        0.2,
        'rgb(103,169,207)',
        0.4,
        'rgb(209,229,240)',
        0.6,
        'rgb(253,219,199)',
        0.8,
        'rgb(239,138,98)',
        1,
        'rgb(178,24,43)',
      ],
      // Adjust the heatmap radius by zoom level
      'heatmap-radius': [
        'interpolate',
        ['linear'],
        ['zoom'],
        0,
        2,
        9,
        20,
      ],
      // Transition from heatmap to circle layer by zoom level
      // 'heatmap-opacity': [
      //   'interpolate',
      //   ['linear'],
      //   ['zoom'],
      //   7,
      //   1,
      //   9,
      //   0
      // ]
      'heatmap-opacity': 0.8,
    }
    const {
      id = 'heatmap', layerOptions = {
        'fitBoundsPadding': 0, 'paint': this.defaultPaint,
      }, click_callback,
    } = options
    this.map = map

    // 图层绘制参数
    this.layerOptions = layerOptions
    this.sourceId = id
    this.layerId = `${id}_layer`

    this.addSource()
    this.addLayer()
    this.addListener(click_callback)

  }

  setData(data) {
    const array = data.map(item => point(item.location, { mag: item.count }))
    const featureCollections = featureCollection(array)
    this.setCurrentData(featureCollections)
  }

  setCurrentData(currentFeature) {
    if (!currentFeature) { return }
    this.map.getSource(this.sourceId).setData(currentFeature)
    // this.map.fitBounds(bbox(currentFeature), {
    //   'padding': this.validFitOffset()
    // });
  }

  validFitOffset() {
    if (this.layerOptions && this.layerOptions.fitBoundsPadding > 0 && window.screenWidth && window.screenHeight) {
      const { fitBoundsPadding } = this.layerOptions
      if (window.screenWidth <= fitBoundsPadding * 2 || window.screenHeight <= fitBoundsPadding * 2) {
        console.log(`===fitBoundsPadding 值太大，超出屏幕大小,设置无效:${fitBoundsPadding}`)
        return 0
      }
      return this.layerOptions.fitBoundsPadding
    }
    return 0
  }
  addSource() {
    // 热力区域填充数据
    this.map.addSource(this.sourceId, {
      type: 'geojson',
      data: featureCollection([]),
    })
  }

  addLayer() {
    const paint = this.layerOptions.paint || this.defaultPaint
    this.map.addLayer({
      id: this.layerId,
      type: 'heatmap',
      source: this.sourceId,
      paint: paint,
    })
  }

  hide() {
    this.map.setLayoutProperty(this.layerId, 'visibility', 'none')
  }

  show() {
    this.map.setLayoutProperty(this.layerId, 'visibility', 'visible')
  }

  // 删除图层，建议在组件的beforeDestroy中调用一下
  remove() {
    this.rmListener()
    this.removeLayers()
    this.removeSources()
  }

  removeLayers() {
    this.map.removeLayer(this.layerId)
  }

  removeSources() {
    this.map.removeSource(this.sourceId)
  }

  addListener(click_callback) {
    if (!click_callback) { return }
    this.map.on('click', this.fillLayerId, this.callback = (e) => {
      const features = this.map.queryRenderedFeatures(e.point, { layers: [this.fillLayerId] })
      if (features.length > 0) {
        click_callback(features[0].properties)
      }
    })
  }
  rmListener() {
    this.callback && this.map.off('click', this.fillLayerId, this.callback)
  }
}
