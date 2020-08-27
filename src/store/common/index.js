import * as modules from './modules/*.js'

const state = {}

const mutations = {}

const actions = {
  async getCameraPlayManyUrl({ state }, payload) {// eslint-disable-line
    const rst = await api.getCameraPlayManyUrl(payload)
    if (rst.code === 200 || rst.code === '200') {
      return rst
    } else {
      throw rst.msg
    }
  },
  async getCameraPlayUrl({ state }, payload) {// eslint-disable-line
    const rst = await api.getCameraPlayUrl(payload)
    if (rst.code === 200 || rst.code === '200') {
      return rst
    } else {
      throw rst.msg
    }
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  modules,
}
