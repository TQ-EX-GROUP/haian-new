
/* eslint-disable */
import Bus from '../../../../bus'
import { HeatmapLayer } from '../map-helpers/heatmap'
// import { OPEN_POI_LIST } from '../gis-components/poi-stat-panel'
// import { CLOST_POI_LIST } from '../gis-components/poi-list-panel'

export const STAT_UPDATE_EVENT = 'stat-update-event'

export default {
  // created() {
  //   this.heatmapLayer = null
  //   Bus.$on(OPEN_POI_LIST, event => {
  //     this.heatmapLayer && this.heatmapLayer.hide()
  //   })
  //   Bus.$on(CLOST_POI_LIST, event => {
  //     this.heatmapLayer && this.heatmapLayer.show()
  //   })
  // },
  beforeDestroy() {
    this.heatmapLayer && this.heatmapLayer.remove()
  },
  methods: {
    getStat(org, subjectTree) {
      if (!org || !subjectTree) { return }
      const orgCodes = org.children.map(org => org.orgCode)
      const statParam = this.getSubjectParams(subjectTree)
      if (statParam.length === 0) {
        // Bus.$emit(STAT_UPDATE_EVENT, { data: null })
      } else {
        this.gisHttp.getPoiStat({ orgCodes, statParam }).then(res => {
          const result = this.formatStatResult(org, subjectTree, res.data)
          console.log('result', result)
          // Bus.$emit(STAT_UPDATE_EVENT, { data: result })
        })
      }
    },
    getSubjectParams(subjectTree) {
      const subjectArray = []
      const getSubject = (subject) => {
        const { appId, tableId = 0, typeCode } = subject
        return { appid: appId, tableId, typeCode }
      }
      subjectTree.forEach(first => {
        if (first.children) {
          first.children.forEach(second => {
            if (second.choosed) {
              subjectArray.push(getSubject(second))
            }
          })
        } else {
          if (first.choosed) {
            subjectArray.push(getSubject(first))
          }
        }
      })
      return subjectArray
    },
    formatStatResult(org, subjectTree, data) {
      const orgList = org.children.map(item => {
        const { orgCode, orgName, center, bizId } = item
        return { orgCode, orgName, center, bizId, subjects: [] }
      })
      const flatData = this.flatStatData(data)
      this.groupByOrgCode(orgList, subjectTree, flatData)
      return orgList
    },
    // 将统计数据扁平化为一张表
    flatStatData(data) {
      const flat = []
      data.forEach(item => {
        const { appid, tableId, typeCode, results } = item
        results.forEach(item => {
          const key = Object.keys(item)[0]
          const value = item[key]
          flat.push({ orgCode: key, count: value, appId: appid, tableId: Number(tableId), typeCode })
        })
      })
      return flat
    },
    // 根据orgCode将专题分组
    groupByOrgCode(orgList, subjectTree, flatList) {
      orgList.forEach(org => {
        const currentOrgSubject = []
        flatList.forEach(item => {
          if (item.orgCode === org.orgCode) {
            currentOrgSubject.push(item)
          }
        })
        org.subjects = this.getCountTree(currentOrgSubject, subjectTree)
      })
    },
    // 获取一棵树，只包含当前选择的节点
    getCountTree(subjectList, subjectTree) {
      const result = []
      subjectTree.forEach(item => {
        let subject = null
        if (item.children) {
          let children = null
          let count = 0
          item.children.forEach(item2 => {
            if (item2.choosed) {
              const obj = this.getCountSubject(subjectList, item2)
              count += obj.count
              children === null ? children = [obj] : children.push(obj)
            }
          })
          if (children !== null) {
            subject = { children, name: item.name, count }
          }
        } else {
          if (item.choosed) {
            subject = this.getCountSubject(subjectList, item)
          }
        }
        if (subject !== null) {
          result.push(subject)
        }
      })
      return result
    },
    // 根据专题查询该专题的统计
    getCountSubject(subjectList, subject) {
      let obj = null
      const { appId, tableId, typeCode, name, poiImageUrl } = subject
      subjectList.forEach(item => {
        if (appId === item.appId && tableId === item.tableId && typeCode === item.typeCode) {
          obj = { appId, tableId, typeCode, name, count: item.count, poiImageUrl }
        }
      })
      return obj
    },
    renderHeatmap(org, subjectTree) {
      if (!org || !subjectTree) { return }

      const orgCodes = [org.orgCode]
      const statParam = this.getSubjectParams(subjectTree)

      if (statParam.length === 0) {
        this.heatmapLayer && this.heatmapLayer.setData([])
        // Bus.$emit(STAT_UPDATE_EVENT, { data: null })
        return
      }

      this.getHotData(orgCodes, statParam).then(data => {
        if (this.heatmapLayer === null) {
          this.heatmapLayer = new HeatmapLayer(this.map)
        }
        this.heatmapLayer.setData(data)
      })
    },
    getHotData(orgCodes, statParam) {
      return this.getHotDataApi({ orgCodes, statParam }).then(res => {
        const { data } = res
        const result = data[0].results
        if (data.length > 1) {
          result.forEach(item => {
            const key = Object.keys(item)[0]
            for (let i = 1; i < data.length; i++) {
              const element = data[i]
              element.results.forEach(item2 => {
                if (item2[key] !== undefined) {
                  item[key] += item2[key]
                }
              })
            }
          })
        }
        return result.map(element => {
          const lontat = Object.keys(element)[0]
          const count = element[lontat]
          let location = lontat.split(',').map(item => Number(item))
          return { location, count }
        })
      })
    },
    getHotDataApi(data) {
      return this.gisHttp.request.post('/gis_data/poistat/hotStat', data)
    },
  },
}