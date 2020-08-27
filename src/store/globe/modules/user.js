import { http } from '../../../lib/http'

// 指定对应api
export const api = {
  'USER_LOGIN_BY_SESSION': `/api/fusionUser/user/loginBySession.json`, // 登录
  'GET_APP_CONFIG': `/api/fusionApplication/social/getAllConfigInfo.json`, // 获取配置项
  'FETCH_USERS_INFO_BY_ID': '/api/fusionUser/userInfo/selectUserInfoById.json', // 获取用户信息

}
// 初始化store对象
const state = {
  userInfo: {},
  organization: null,
  config: {},
}

// 异步操作放到action handler里
const actions = {
  async ssoLogin({ commit, dispatch }, payload) { //eslint-disable-line
    try {
      const rst = await http
        .post(api['USER_LOGIN_BY_SESSION'], {
          ...payload,
          'actionId': 'login',
          'channel': '002',
        })
      const { sessionId, user } = rst.data
      commit('SET_SID', sessionId)
      await dispatch('getAppConfig')
      commit('SET_USER_INFO', user)
      commit('SET_ORG_INFO', user.organization)
    } catch (error) {
      throw error
    }
  },

  // 获取 配置项 标品的
  async getAppConfig({ state, commit }) {// eslint-disable-line
    try {
      const rst = await http.post(api['GET_APP_CONFIG'], { actionId: 'getAllConfigInfo' })
      console.log(rst, 98)
      commit('SET_CONFIG', rst.data)
    } catch (error) {
      throw error
    }
  },

  // 获取 获取用户信息
  async fetchUsersInfo({ state, commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['FETCH_USERS_INFO_BY_ID'], {
          actionId: 'selectUserInfo',
          userId: payload.ids,
          channel: '301',
        })
        resolve(rst)
      } catch (error) {
        reject(error)
      }
    })
  },

}

// 根据commit更新store
const mutations = {
  SET_SID(state, sid) {
    state.sid = sid
    const setCookie = (name, value, days) => {
      let expires = ''
      if (days) {
        const date = new Date()
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
        expires = `; expires=${date.toUTCString()}`
      }
      document.cookie = `${name}=${value || ''}${expires};  path=/;`
    }
    document && setCookie('sid', sid)
  },
  SET_ORG_INFO(state, info) {
    state.organization = info
  },
  SET_USER_INFO(state, info) {
    state.userInfo = info
  },
  SET_CONFIG(state, conf) {
    state.config = conf
  },
}

const getters = {
  userOrg(state) {
    return state.organization
  },
  userInfo(state) {
    return state.userInfo
  },
  conf(state) {
    return state.config
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
