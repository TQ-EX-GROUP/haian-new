/* eslint-disable */
import { featureCollection, point } from '@turf/helpers'
import bbox from '@turf/bbox'
import nearbyCity from './nearby-city'

/**
 * 在地图上渲染当前组织机构的边界
 */
export class RenderBorder {
  constructor(options) {
    const { map, id = 'render-border', padding = 780 } = options
    this.map = map
    this.padding = padding
    this.sourceId = id + '-source-id'
    this.borderLayerId = id + '-border-id'
    this.fillLayerId = id + '-fill-id'
    this.childrenSourceId = id + '-children-source-id'
    this.childrenBorderLayerId = id + '-children-border-id'
    this.childrenTextSourceId = id + '-children-text-source-id'
    this.childrenTextLayerId = id + '-children-text-layer-id'
    this.addSources()
    this.addLayers()
  }

  setData(currentFeature, childrenFeatures) {
    this.map.getSource(this.sourceId).setData(currentFeature)
    this.map.fitBounds(bbox(currentFeature), { padding: this.padding })
    if (childrenFeatures) {
      this.setChildrenData(childrenFeatures)
      this.setChildrenNameData(currentFeature, childrenFeatures)
    }
  }

  setChildrenData(childrenFeatures) {
    const features = []
    childrenFeatures.forEach(item => {
      item.features.forEach(feature => {
        features.push(feature)
      })
    })
    const collection = featureCollection(features)
    this.map.getSource(this.childrenSourceId).setData(collection)
  }

  setChildrenNameData(currentFeature, childrenFeatures) {
    const textCenterArray = []
    childrenFeatures.forEach(item => {
      item.features.forEach(feature => {
        const { name, center, color = '#479AFF' } = feature.properties
        const centerFeature = point([center.lng, center.lat], { name })
        textCenterArray.push(centerFeature)
      })
    })
    if (currentFeature.properties.name === '徐州市') {
      nearbyCity.forEach(item => {
        const { name, center } = item
        const centerFeature = point(center, { name, nearby: true })
        textCenterArray.push(centerFeature)
      })
    }
    const textCollection = featureCollection(textCenterArray)
    this.map.getSource(this.childrenTextSourceId).setData(textCollection)
  }

  addSources() {
    this.map.addSource(this.sourceId, {
      type: 'geojson',
      data: featureCollection([])
    })
    this.map.addSource(this.childrenSourceId, {
      type: 'geojson',
      data: featureCollection([])
    })
    this.map.addSource(this.childrenTextSourceId, {
      type: 'geojson',
      data: featureCollection([])
    })
  }

  addLayers() {
    this.map.addLayer({
      id: this.borderLayerId,
      type: 'line',
      source: this.sourceId,
      paint: {
        'line-color': '#84EFFF',
        // 'line-dasharray': [2, 2],
        'line-opacity': 0.3,
        'line-width': 1
      },
      layout: {
        // visibility: 'none'  // visible
      }
    })
    this.map.addLayer({
      id: this.fillLayerId,
      type: 'fill',
      source: this.sourceId,
      layout: {},
      paint: {
        'fill-color': '#6DCAFF', // #479AFF
        'fill-opacity': 0.3
      }
    })
    this.map.addLayer({
      id: this.childrenBorderLayerId,
      type: 'line',
      source: this.childrenSourceId,
      paint: {
        'line-color': '#84EFFF',
        // 'line-dasharray': [2, 2],
        'line-opacity': 0.3,
        'line-width': 1,
      },
      layout: {
        'line-join': 'round'
        // visibility: 'none'  // visible
      }
    })
    this.map.addLayer({
      id: this.childrenTextLayerId,
      type: 'symbol',
      source: this.childrenTextSourceId,
      layout: {
        'text-field': '{name}',
        'text-font': ['Microsoft YaHei Regular'],
        'text-size': ['case', ['==', ['get', 'nearby'], true], 20, 16],
        'text-allow-overlap': true
      },
      paint: {
        'text-color': ['case', ['==', ['get', 'nearby'], true], '#f8f8f8', '#fff'],
        // 'text-halo-width': 2,
        // 'text-halo-color': 'rgba(255, 255, 255, 0.9)'
      }
    })
  }

  remove() {
    this.removeLayers()
    this.removeSources()
  }

  removeSources() {
    this.map.removeSource(this.sourceId)
    this.map.removeSource(this.childrenSourceId)
    this.map.removeSource(this.childrenTextSourceId)
  }

  removeLayers() {
    this.map.removeLayer(this.borderLayerId)
    this.map.removeLayer(this.fillLayerId)
    this.map.removeLayer(this.childrenBorderLayerId)
    this.map.removeLayer(this.childrenTextLayerId)
  }
}