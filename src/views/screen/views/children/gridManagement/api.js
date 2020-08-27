/*
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-05 15:45:38
 * @LastEditTime: 2020-08-14 14:02:26
 */
// eslint-disable-next-line no-unused-vars
import { http } from '@/lib/http'
//网格达标率五饼图
export const gridRate = async (proLoad) => {
  return await http.get(`/cloudMap/gridTeamController/findFiveUnifyNew`, proLoad)
}
//网格达标率折线图
// eslint-disable-next-line no-unused-vars
export const gridRateLine = async (proLoad) => {
  return await http.get(`/cloudMap/gridTeamController/getFiveUnifyByArea`, proLoad)
}
//中间地图
export const centerTop = async (proLoad) => {
  return await http.get(`/cloudMap/cloudMapGridMember/getGridConstruction`, proLoad)
}
//中间地图
export const centerLeft = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getBaseInfoTarget`, proLoad)
}

//网格实时工作左边（今日）
export const gridOntimeWorkDay = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getTodayPerformanceInDistrict`, proLoad)
}

//网格实时工作左边（本月）
export const gridOntimeWorkMonth = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getMonthPerformanceInDistrict`, proLoad)
}

//网格实时工作右边top4
export const gridOntimeWorkTop4 = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getWorkRankTopFour`, proLoad)
}

//网格走访总览（类别）
export const gridVisitAllType = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getVisitViewResultByCategory`, proLoad)
}

//网格走访总览（区域）
export const gridVisitAllArea = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getVisitViewResultByArea`, proLoad)
}

//网格员弹窗api

//网格员基础信息
export const gridMemberMessage = async (proLoad) => {
  return await http.get(`/cloudMap/cloudMapGridMember/getGridMemberBaseInfo`, proLoad)
}
//网格员本月工作情况（统计）
export const gridMemberWork = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getGridPerformanceDetail`, proLoad)
}


//网格员本月工作情况（列表）
export const gridMemberWorkList = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/listServiceRecordByType`, proLoad)
}

//网格员本月登录情况
export const gridMemberLogin = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/listServiceRecordByType`, proLoad)
}


//网格员本月轨迹情况
export const gridMemberTrails = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/listGridMemberUserTrack`, proLoad)
}

//网格工作预警
export const gridWorkWarning = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getWorkPreWarning`, proLoad)
}

//网格工作总览（终端类型）
export const gridWorkAllZ = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getLoginRate`, proLoad)
}

//网格工作总览（信息采集）
export const gridWorkAllM = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getInformationRate`, proLoad)
}

//重点上访人员基础信息
export const keyPetitionMessage = async (proLoad) => {
  return await http.get(`/cloudMap/person/getBaseInfoById`, proLoad)
}
//重点上访人员业务信息
export const keyPetitionServiceMessage = async (proLoad) => {
  return await http.get(`/cloudMap/person/getPersonInfoByObjectId`, proLoad)
}

//监护/工作人员信息
export const tutelageWorkMessage = async (proLoad) => {
  return await http.get(`/cloudMap/person/findServiceMembersByIdAndType`, proLoad)
}

//关联事件信息
export const relatedEventsMessage = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/listIssueReportForModel`, proLoad)
}

//服务走访信息
export const serviceVisitMessage = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/listServiceRecordForModel`, proLoad)
}

//上访记录
export const petitionersRecordMessage = async (proLoad) => {
  return await http.get(`/cloudMap/person/findSuperiorvisitsRecordList`, proLoad)
}

//本月服务率弹窗
export const monthServiceRate = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getThisMonthServerInfo`, proLoad)
}

//本月服务率弹窗列表
export const monthServiceList = async (proLoad) => {
  return await http.get(`/cloudMap/person/getPersonListByObjectType`, proLoad)
}

//本月服务率弹窗列表
export const monthServiceListR = async (proLoad) => {
  return await http.get(`/cloudMap/cloudMapHouseManager/getCzfList`, proLoad)
}

//网格工作预警统计
export const gridWarningType = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getWorkPreWarningDetail`, proLoad)
}

//网格工作预警区域
export const gridWarningArea = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getWorkPreWarningInDistrict`, proLoad)
}

//网格工作预警列表
export const gridWarningList = async (proLoad) => {
  return await http.get(`/cloudMap/performanceController/getWorkPreWarningList`, proLoad)
}