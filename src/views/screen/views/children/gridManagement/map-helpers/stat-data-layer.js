import { featureCollection, point } from '@turf/helpers'
// eslint-disable-next-line no-unused-vars
import circle from '@turf/circle'

export class StatDataLayer {
  constructor(props) {
    const { map, id = 'stat-data-layer' } = props

    this.map = map
    this.fillSourceId = `${id}-fill-source`
    this.fillLayerId = `${id}-fill-layer`
    this.textLayerId = `${id}-text-layer`

    this.addSources()
    this.addLayers()
  }

  setData(list) {
    const collection = this.formatGeojson(list)
    this.map.getSource(this.fillSourceId).setData(collection)
  }

  formatGeojson(list) {
    const featureList = list.map(item => {
      const { orgCode, orgName, subjectName, count, center } = item
      const text = `${orgName}\n${subjectName}:${count}`
      return point(center, { orgCode, orgName, text })
    })
    return featureCollection(featureList)
  }

  getFillLayerId() {
    return this.fillLayerId
  }

  addSources() {
    // 填充数据源
    this.map.addSource(this.fillSourceId, {
      type: 'geojson',
      data: featureCollection([]),
    })
  }

  addLayers() {
    // 填充图层
    this.map.addLayer({
      id: this.fillLayerId,
      type: 'circle',
      source: this.fillSourceId,
      layout: {},
      paint: {
        'circle-radius': 200,
        'circle-color': '#21426A',
        'circle-opacity': 0.8,
      },
    })
    // 文字图层
    this.map.addLayer({
      id: this.textLayerId,
      type: 'symbol',
      source: this.fillSourceId,
      layout: {
        'text-field': '{text}',
        'text-font': ['Microsoft YaHei Regular'],
        'text-size': 50,
      },
      paint: {
        'text-color': '#fff',
      },
    })
  }

  hide() {
    this.map.setLayoutProperty(this.fillLayerId, 'visibility', 'none')
    this.map.setLayoutProperty(this.textLayerId, 'visibility', 'none')
  }

  show() {
    this.map.setLayoutProperty(this.fillLayerId, 'visibility', 'visible')
    this.map.setLayoutProperty(this.textLayerId, 'visibility', 'visible')
  }

  remove() {
    this._removeLayers()
    this._removeSources()
  }

  _removeLayers() {
    this.map.removeLayer(this.fillLayerId)
    this.map.removeLayer(this.textLayerId)
  }

  _removeSources() {
    this.map.removeSource(this.fillSourceId)
  }

}
