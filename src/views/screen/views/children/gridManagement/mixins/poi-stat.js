/* eslint-disable */
import { StatDataLayer } from '../map-helpers/stat-data-layer'
import Bus from '../../../../bus'

// 当组织机构和图层选贼器变化时均会触发
export const ORG_CHANGE = 'org-change-event'

export default {
  created () {
    this.statDataLayer = null
  },
  watch: {
    currentOrg () {
      this.getData(this.currentOrg, this.currentSubject)
    },
    currentSubject () {
      this.getData(this.currentOrg, this.currentSubject)
    }
  },
  methods: {
    // 外部调用的接口
    getData (currentOrg, subject) {
      // 初始化图层
      if (this.statDataLayer === null) {
        this.statDataLayer = new StatDataLayer({map: this.map})
      }
      this.statDataLayer.setData([])
      const isTownAndUnder = isTownAndUnderFn(this.currentOrg.orgCode)
      if (subject) {
        this.getStatData(currentOrg, subject).then(data => {
          let statData = []
          if (isTownAndUnder) {
            // 街道及以下
            statData = this.formatStat2Panel(currentOrg, subject, data)
          } else {
            // 街道以上
            const showData = this.formatStat2Map(currentOrg, subject, data)
            this.statDataLayer.setData(showData)
          }
          Bus.$emit(ORG_CHANGE, { isTownAndUnder, chooseSubject: true, data: statData })
        })
      } else {
        Bus.$emit(ORG_CHANGE, { isTownAndUnder, chooseSubject: false, data: [] })
      }
    },
    // 获取专题在每个子区域的统计数据
    getStatData (currentOrg, subject) {
      if (currentOrg.children === undefined || currentOrg.children === []) {
        console.log('无下级组织机构', currentOrg)
        return
      }
      const orgCodes = currentOrg.children.map(org => org.orgCode)
      const subjectList = subject.children ? subject.children : [subject]
      const statParam = subjectList.map(child => {
        const obj = Object.assign({}, child)
        obj.appid = obj.appId
        delete obj.dicts
        delete obj.updateDate
        delete obj.appId
        obj.tableId = obj.tableId ? obj.tableId : 0 // 没有该字段的话，接口会报错
        return obj
      })
      return this.gisHttp.getPoiStat({orgCodes, statParam}).then(res => {
        return res.data || []
      })
    },
    // 返回用于在地图上渲染的数据
    formatStat2Map (currentOrg, subject, stat) {
      const result = []
      currentOrg.children.forEach(org => {
        const obj = Object.assign({}, org, { count: 0 })
        stat.forEach(item => {
          obj.subjectName = subject.name
          // 计算总和
          item.results.forEach(item2 => {
            const key = Object.keys(item2)[0] // 组织机构
            if (key === obj.orgCode) {
              obj.count += item2[obj.orgCode]
            }
          })
        })
        result.push(obj)
      })
      return result
    },
    formatStat2Panel (currentOrg, subject, stat) {
      // console.log('currentOrg', currentOrg)
      // console.log('subject', subject)
      // console.log('stat', stat)

      // 计算每个专题的总数
      const subjectStat = stat.map(item1 => {
        let count = 0
        item1.results.forEach(item2 => {
          const key = Object.keys(item2)[0]
          count += item2[key]
        })
        const obj = Object.assign({ count }, item1)
        delete obj.results
        return obj
      })
      // console.log('subjectStat', subjectStat)

      // 点击了有二级专题的一级专题
      if (subject.children) {
        subject.children.forEach(child => {
          const { tableId, typeCode = 0, appId:appid } = child
          subjectStat.forEach(item => {
            const { tableId: subTableId, typeCode: subTypeCode = 0, appid: subAppid, count } = item 
            if (tableId === Number(subTableId) && typeCode === subTypeCode && appid === subAppid) {
              Object.assign(child, { count })
            }
          })
        })
        // console.log('有二级专题的一级专题:', subject)
        return subject
      } else {
        // 点击了没有二级专题的一级专题
        if (subject.pid === 0) {
          subject.count = subjectStat[0].count
          const obj = Object.assign({ name: subject.name, children: [subject] })
          // console.log('没有二级专题的一级专题', obj)
          return obj
        } else {
          // 点击了二级专题
          subject.count = subjectStat[0].count
          const obj = Object.assign({ name: subject.pName, children: [subject] })
          // console.log('二级专题', obj)
          return obj
        }
      }
    }
  }
}

// 是否为乡镇及以下
function isTownAndUnderFn (orgCode) {
  return orgCode.split('.').length >= 6
}