import mapbox from 'mapbox-gl'
// import { OPEN_POI_LIST } from '../gis-components/poi-stat-panel'
// import { CLOST_POI_LIST } from '../gis-components/poi-list-panel'
// import Bus from '../../../../bus'
// import { modalFormat } from '@/utils/modalFormat.js'
import modals from '../mixins/getModal'
export default {
  data() {
    return {
      markers: {}, // 根据专题id存放poi图标
      poiObject: {}, // 根据专题id存放poi列表
      query: {
        size: 500,
        page: 1,
      },
      poiListPanelisShow: false, // 当前poi列表是否打开
    }
  },
  mixins: [modals],
  created() {
    // eslint-disable-next-line no-unused-vars
    // Bus.$on(OPEN_POI_LIST, event => {
    //   // this.clearAllMarkers()
    //   this.poiListPanelisShow = true
    //   this.hideAllMarkers()
    // })
    // // eslint-disable-next-line no-unused-vars
    // Bus.$on(CLOST_POI_LIST, event => {
    //   this.poiListPanelisShow = false
    //   this.showAllMarkers()
    // })
  },
  watch: {
    currentOrg() {
      this.renderPoi(this.currentOrg, this.currentSubject)
    },
    currentSubject() {
      this.renderPoi(this.currentOrg, this.currentSubject)
    },
  },
  methods: {
    renderPoi(org, subject) {
      if (!org || !subject) { return }
      this.clearMarkers(subject)
      if (subject.choosed) {
        this.getPoiList(org, subject).then(list => {
          this.showMarkers(subject, list)
        })
      }
    },
    getPoiList(org, subject) {
      const { tableId, typeCode, appId } = subject
      const { orgCode } = org
      const params = {
        orgCode,
        subjects: [{ tableId, typeCode, appId }],
      }
      Object.assign(params, this.query)
      return this.gisHttp.getPoiList(params).then(res => {
        // eslint-disable-next-line no-unused-vars
        const { rows = [], total } = res.data
        const { poiImageUrl } = subject
        rows.forEach(item => {
          item.image = poiImageUrl
        })
        this.poiObject[subject.id] = rows
        return rows
      })
    },
    showMarkers(subject, list) {
      const markerList = []
      list.forEach(poi => {
        const { image, location, businessId } = poi
        if (location) {
          const lngLat = location.split(',').map(item => Number(item))
          const imgDom = document.createElement('img')
          imgDom.src = image
          imgDom.dataset.subjectId = subject.id
          imgDom.dataset.subjectName = subject.name
          imgDom.dataset.businessId = businessId
          imgDom.addEventListener('click', this.clickPoiHandle)
          const marker = new mapbox.Marker({
            element: imgDom,
            offset: [0, 0],
          }).setLngLat(lngLat).addTo(this.map)
          markerList.push(marker)
        }
      })
      this.markers[subject.id] = markerList
    },
    clearMarkers(subject) {
      if (!this.markers[subject.id]) { return }
      this.markers && this.markers[subject.id].forEach(marker => {
        marker.getElement().removeEventListener('click', this.clickPoiHandle)
        marker.remove()
      })
      this.markers[subject.id] = null
    },
    // 清除所有marker对象
    clearAllMarkers() {
      Object.keys(this.markers).forEach(subjectId => {
        this.clearMarkers({ id: subjectId })
      })
    },
    // 隐藏所有markers，但是不清除
    hideAllMarkers() {
      Object.keys(this.markers).forEach(subjectId => {
        if (this.markers[subjectId]) {
          this.markers[subjectId].forEach(marker => {
            marker.remove()
          })
        }
      })
    },
    // 显示所有已有的markers
    showAllMarkers() {
      Object.keys(this.markers).forEach(subjectId => {
        if (this.markers[subjectId]) {
          this.markers[subjectId].forEach(marker => {
            marker.addTo(this.map)
          })
        }
      })
    },
    clickPoiHandle(event) {

      const { subjectId, subjectName, businessId } = event.target.dataset
      const poi = this.poiObject[subjectId].find(item => item.businessId === businessId)
      // this.showModal = true
      this.currentClickPoint = { subjectName, poi }
      this.currentModal = this.getModal(subjectName)
      console.log(this.currentClickPoint, 'event')
      if (this.getModal(subjectName)) {
        this.$nextTick(() => {
          this.$refs.gridBase.show(poi)
        })
      } else {
        this.$Message.info('弹窗待开发！')
      }
    },
  },
}