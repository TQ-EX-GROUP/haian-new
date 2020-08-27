/*
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-03 14:54:21
 * @LastEditTime: 2020-08-03 14:56:59
 */

const state = {
  org: {},
}

// 异步操作放到action handler里
const actions = {

}

// 根据commit更新store
const mutations = {
  setCurrentOrg(state, info) {
    state.org = info
  },

}

const getters = {
  currentOrg(state) {
    return state.org
  },
}

// 导出vuex模块
export default {
  // 模块开启命名空间
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
