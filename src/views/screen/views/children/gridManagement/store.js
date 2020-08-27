/*
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-05 15:45:47
 * @LastEditTime: 2020-08-17 10:36:56
 */
import * as llgtfoo from './api.js'

const state = {}

const actions = {
  //网格达标率五饼图
  // eslint-disable-next-line no-empty-pattern
  async gridRate({ }, payload) {
    const res = await llgtfoo.gridRate(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //网格达标率折线图
  // eslint-disable-next-line no-empty-pattern
  async gridRateLine({ }, payload) {
    const res = await llgtfoo.gridRateLine(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //中间地图
  // eslint-disable-next-line no-empty-pattern
  async centerLeft({ }, payload) {
    const res = await llgtfoo.centerLeft(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //中间地图
  // eslint-disable-next-line no-empty-pattern
  async centerTop({ }, payload) {
    const res = await llgtfoo.centerTop(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //网格实时工作左边（今日）
  // eslint-disable-next-line no-empty-pattern
  async gridOntimeWorkDay({ }, payload) {
    const res = await llgtfoo.gridOntimeWorkDay(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },
  //网格实时工作左边（今日）
  // eslint-disable-next-line no-empty-pattern
  async gridOntimeWorkMonth({ }, payload) {
    const res = await llgtfoo.gridOntimeWorkMonth(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  // 网格实时工作右边top4
  // eslint-disable-next-line no-empty-pattern
  async gridOntimeWorkTop4({ }, payload) {
    const res = await llgtfoo.gridOntimeWorkTop4(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },
  //网格走访总览（类别）
  // eslint-disable-next-line no-empty-pattern
  async gridVisitAllType({ }, payload) {
    const res = await llgtfoo.gridVisitAllType(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },
  //网格走访总览（区域）
  // eslint-disable-next-line no-empty-pattern
  async gridVisitAllArea({ }, payload) {
    const res = await llgtfoo.gridVisitAllArea(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //网格员弹窗接口


  //网格员基础信息
  // eslint-disable-next-line no-empty-pattern
  async gridMemberMessage({ }, payload) {
    const res = await llgtfoo.gridMemberMessage(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },
  //网格员本月工作情况（统计）
  // eslint-disable-next-line no-empty-pattern
  async gridMemberWork({ }, payload) {
    const res = await llgtfoo.gridMemberWork(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },
  //网格员本月工作情况（列表）
  // eslint-disable-next-line no-empty-pattern
  async gridMemberWorkList({ }, payload) {
    const res = await llgtfoo.gridMemberWorkList(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //网格员本月轨迹情况
  // eslint-disable-next-line no-empty-pattern
  async gridMemberTrails({ }, payload) {
    const res = await llgtfoo.gridMemberTrails(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //网格工作预警
  // eslint-disable-next-line no-empty-pattern
  async gridWorkWarning({ }, payload) {
    const res = await llgtfoo.gridWorkWarning(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //网格工作总览（终端类型）
  // eslint-disable-next-line no-empty-pattern
  async gridWorkAllZ({ }, payload) {
    const res = await llgtfoo.gridWorkAllZ(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //网格工作总览（信息采集）
  // eslint-disable-next-line no-empty-pattern
  async gridWorkAllM({ }, payload) {
    const res = await llgtfoo.gridWorkAllM(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //重点上访人员基础信息
  // eslint-disable-next-line no-empty-pattern
  async keyPetitionMessage({ }, payload) {
    const res = await llgtfoo.keyPetitionMessage(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //重点上访人员业务信息
  // eslint-disable-next-line no-empty-pattern
  async keyPetitionServiceMessage({ }, payload) {
    const res = await llgtfoo.keyPetitionServiceMessage(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //监护/工作人员信息
  // eslint-disable-next-line no-empty-pattern
  async tutelageWorkMessage({ }, payload) {
    const res = await llgtfoo.tutelageWorkMessage(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //关联事件信息
  // eslint-disable-next-line no-empty-pattern
  async relatedEventsMessage({ }, payload) {
    const res = await llgtfoo.relatedEventsMessage(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //服务走访信息
  // eslint-disable-next-line no-empty-pattern
  async serviceVisitMessage({ }, payload) {
    const res = await llgtfoo.serviceVisitMessage(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //上访记录
  // eslint-disable-next-line no-empty-pattern
  async petitionersRecordMessage({ }, payload) {
    const res = await llgtfoo.petitionersRecordMessage(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //本月服务率弹窗
  // eslint-disable-next-line no-empty-pattern
  async monthServiceRate({ }, payload) {
    const res = await llgtfoo.monthServiceRate(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //本月服务率弹窗列表
  // eslint-disable-next-line no-empty-pattern
  async monthServiceList({ }, payload) {
    const res = await llgtfoo.monthServiceList(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //本月服务率弹窗列表
  // eslint-disable-next-line no-empty-pattern
  async monthServiceListR({ }, payload) {
    const res = await llgtfoo.monthServiceListR(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //网格工作预警统计
  // eslint-disable-next-line no-empty-pattern
  async gridWarningType({ }, payload) {
    const res = await llgtfoo.gridWarningType(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //网格工作预警区域
  // eslint-disable-next-line no-empty-pattern
  async gridWarningArea({ }, payload) {
    const res = await llgtfoo.gridWarningArea(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },

  //网格工作预警列表
  // eslint-disable-next-line no-empty-pattern
  async gridWarningList({ }, payload) {
    const res = await llgtfoo.gridWarningList(payload)
    if (res) {
      return res
    } else {
      throw new Error(res.message || res.msg)
    }
  },
}
// 根据commit更新store
const mutations = {}

const getters = {}

// 导出vuex模块
export default {
  // 模块开启命名空间
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}