/* eslint-disable default-case */
import { http } from '@/lib/http'
export const api = {
  // 'REAL_POPULATION': '/api/fusionApplication/social/getRealPopulationForBigScreen.json', //获取 大屏显示的指数
  // 'SELECT_DEPLOY_WARN': '/api/fusionProduct/issue/getIssueListByOrgIntCode.json', //获取 事件列表
  // 'SELECT_CAMERA_FOR_SCREEN': '/api/fusionApplication/social/getCameraNumForBigScreen.json', //获取滨江大屏右上角6路写死摄像头ID
  // 'SELECT_CAMERA_COUNT': '/api/monitorgrid/camera/getCameraCountByOrgCodes.json', //获取下辖点位数量统计


  // 'FETCH_CAMERA_LIST': `/api/monitorgrid/camera/getCameraListByConditionOpti.json`, // camera 摄像头
  // 'FETCH_GRID_LIST': `/api/fusionProduct/griduser/getGridUserOnlineRect.json`, // 网格员
  // 'FETCH_PLACE_LIST': `/api/fusionProduct/roundresource/getRoundResourcesRect.json`, // 周边资源
  // 'FETCH_COMMAND_LIST': `/api/fusionApplication/social/getGovernCenterList.json`, // 治理中心

  // 'GET_CAMERA_PLAY_URL': '/api/fusionApplication/social/getCameraPlayUrl.json', //视频直播

  // 'FETCH_CAMERA_LIST_CIRCLE': `/api/monitorgrid/permission/getCameraByCircle.json`, //查询指定区域内摄像头列表-圆形
  // 'FETCH_GRID_LIST_CIRCLE': `/api/fusionProduct/griduser/getGridUserOnline.json`, // 查询网格员
  // 'FETCH_PLACE_LIST_CIRCLE': `/api/fusionProduct/roundresource/getRoundResourcess.json`, // 查询指定区域内重点区域 列表-圆形
  // 'FETCH_COMMAND_LIST_CIRCLE': '/api/fusionApplication/social/getGovernCentreListRound.json', // 治理中心 列表-圆形

  'REAL_POPULATION': '/fusionApplication_dev/social/getRealPopulationForBigScreen.action', //获取 大屏显示的指数-
  'SELECT_DEPLOY_WARN': '/Product/issue/getIssueListByOrgIntCode.action', //获取 事件列表-
  'SELECT_CAMERA_FOR_SCREEN': '/fusionApplication_dev/social/getCameraNumForBigScreen.action', //获取全部摄像头
  'SELECT_CAMERA_COUNT': '/monitorgrid/camera/getCameraCountByOrgCodes.action', //获取下辖点位数量统计 - pass


  'FETCH_SIX_CAMERA_LIST': `/fusionApplication_dev/social/getCameraForSixRoad.action`, // camera 获取大屏右上角6路写死摄像头
  'FETCH_CAMERA_LIST': `/monitorgrid/camera/getCameraListByConditionOpti.action`, // camera 摄像头 根据查询条件查询 - pass
  'FETCH_GRID_LIST': `/Product/griduser/getGridUserOnlineRect.action`, // 网格员-
  'FETCH_PLACE_LIST': `/fusionProduct/roundResource/getRoundResourcesRect.action`, // 周边资源-
  'FETCH_COMMAND_LIST': `/fusionApplication_dev/social/getGovernCenterList.action`, // 治理中心-

  'GET_CAMERA_PLAY_URL': '/fusionApplication_dev/social/getCameraPlayUrl.action', //视频直播 - fail-此接口应该只能线上调试

  'FETCH_CAMERA_LIST_CIRCLE': `/monitorgrid/camera/getCameraByCircle.action`, //查询指定区域内摄像头列表-圆形 - pass
  'FETCH_GRID_LIST_CIRCLE': `/Product/griduser/getGridUserOnline.action`, // 查询网格员-圆形
  'FETCH_PLACE_LIST_CIRCLE': `/Product/roundresource/getRoundResourcess.action`, // 查询指定区域内重点区域 列表-圆形
  'FETCH_COMMAND_LIST_CIRCLE': '/fusionApplication_dev/social/getGovernCentreListRound.action', // 治理中心 列表-圆形

  'VIDEO_CONNECT': 'http://32.142.11.145:9010/gateway/local/restService/f2bad0c378cf494fa192f6290f7f8164', // 视频通话
}

const state = {
  eventList: [],
  showFlag: 1, //0 远景  简洁  1 远景 2 近景
  curEvent: {}, // 单前事件
  //以下为 事件详情页 相关 数据
  gridList: [],
  cameraList: [],
  placeList: [],
  commandList: [],
}

const mutations = {
  updateEventList(state, list) {
    state.eventList = list
  },
  updateShowFlag(state, flag) {
    state.showFlag = flag
  },
  updateCurEvent(state, obj) {
    state.curEvent = obj
  },

  //以下为 事件详情页 相关 数据
  updateCameraList(state, list) {
    state.cameraList = list
  },
  updateGridList(state, list) {
    state.gridList = list
  },
  updatePlaceList(state, list) {
    state.placeList = list
  },
  updateCommandList(state, list) {
    state.commandList = list
  },
  clearDetailInfo(state) {
    state.gridList = []
    state.cameraList = []
    state.placeList = []
    state.commandList = []
  },
}

const actions = { // eslint-disable-line
  //左侧基础数据
  getRealPopulationForBigScreen({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['REAL_POPULATION'], { ...payload })
        resolve(rst)
      } catch (error) {
        reject(error)
      }
    })
  },
  //获取左侧预警事件接口
  getIssueListByOrgIntCode({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['SELECT_DEPLOY_WARN'], { ...payload })
        console.log(rst, '预警事件')
        commit('updateEventList', rst.data && rst.data.list)
        resolve(rst)
      } catch (error) {
        reject(error)
      }
    })
  },
  getCameraNumForBigScreen({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['SELECT_CAMERA_FOR_SCREEN'], { ...payload })
        resolve(rst)
      } catch (error) {
        reject(error)
      }
    })
  },
  getSixCameras({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['FETCH_SIX_CAMERA_LIST'], { ...payload })
        resolve(rst)
      } catch (error) {
        reject(error)
      }
    })
  },
  getCameraCountByOrgCodes({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.get(api['SELECT_CAMERA_COUNT'], { ...payload })
        resolve(rst)
      } catch (error) {
        reject(error)
      }
    })
  },

  getCameraList({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        //第一次请求 数据
        const { data = {}, } = await http.post(api['FETCH_CAMERA_LIST'], { ...payload }) // eslint-disable-line
        const { total, rows = [], size } = data
        let list = [...rows]
        //请求 所有数据  并发6个 会超时
        const actions = []
        const num = Math.ceil(total / size)
        for (let i = 2; i <= num; i++) {
          actions.push(http.post(api['FETCH_CAMERA_LIST'],
            { ...payload, pageIndex: i, pageSize: size }))
        }
        const allList = await Promise.all(actions)
        allList.forEach(v => {
          if (v && v.data && v.data.rows) {
            list = list.concat(v.data.rows)
          }
        })

        list = list.map(v => {
          return {
            name: v.name,
            location: `${v.centerLon},${v.centerLat}`,
            abilityNames: v.abilityNames,
            type: 'camera',
          }
        })
        resolve(list)
        // const list = [{
        //   name: 'dadss',
        //   location: '120.19731339128,30.18',
        //   type: 'camera',
        // }, {
        //   name: 'sadca',
        //   location: '120.186512339128,30.18',
        //   type: 'camera',
        // }, {
        //   name: '2341234',
        //   location: '120.19591849128,30.18',
        //   type: '12341234',
        // }, {
        //   name: 'dadss',
        //   location: '120.19161239128,30.18',
        //   type: '1234123',
        // }]
        // resolve(list)
      } catch (error) {
        reject(error)
      }
    })
  },
  getGridList({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['FETCH_GRID_LIST'], { ...payload })
        const data = rst ? (rst.data ? rst.data : []) : []
        const list = data.map(v => {
          return {
            name: v.name,
            location: `${v.lon},${v.lat}`,
          }
        })
        resolve(list)
      } catch (error) {
        reject(error)
      }
    })
  },
  getPlaceList({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['FETCH_PLACE_LIST'], { ...payload })
        const data = rst ? (rst.data ? (rst.data.list ? rst.data.list : []) : []) : []
        const list = data.map(v => {
          return {
            name: v.centreName,
            location: `${v.lon},${v.lat}`,
          }
        })
        resolve(list)
      } catch (error) {
        reject(error)
      }
    })
  },
  getCommandList({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['FETCH_COMMAND_LIST'], { ...payload })
        const list = rst.data.list.map(v => {
          return {
            name: v.centreName,
            location: `${v.centerX},${v.centerY}`,
            isMain: v.currOrUnder === 'curr',
          }
        })
        resolve(list)
      } catch (error) {
        reject(error)
      }
    })
  },
  getCameraPlayUrl({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['GET_CAMERA_PLAY_URL'], { ...payload })
        const url = rst ? (rst.data ? (rst.data.url ? rst.data.url : '') : '') : ''
        // 人为  减少 请求海康 的视频流的并发
        resolve(url)

        // setTimeout(() => {
        //   console.log('.......')
        //   resolve(url)
        // }, Math.ceil(Math.random() * 4000))
        // if (Math.random() > 0.5) {
        //   resolve('https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8')
        // } else {
        //   resolve(url)
        // }
        // resolve('https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8') // 视频播放本地测试
      } catch (error) {
        reject(error)
      }
    })
  },

  //事件详情页 相关
  getCameraListCircle({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        //第一次请求 数据
        const { data = {}, } = await http.post(api['FETCH_CAMERA_LIST_CIRCLE'],// eslint-disable-line
          { ...payload, pageIndex: 1, pageSize: 500 })// eslint-disable-line
        const { total, list = [], size } = data
        let lists = [...list]
        //请求 所有数据  并发6个 会超时
        const actions = []
        const num = Math.ceil(total / size)
        for (let i = 2; i <= num; i++) {
          actions.push(http.post(api['FETCH_CAMERA_LIST_CIRCLE'],
            { ...payload, pageIndex: i, pageSize: size }))
        }
        const allList = await Promise.all(actions)
        allList.forEach(v => {
          if (v && v.data && v.data.rows) {
            lists = lists.concat(v.data.rows)
          }
        })

        lists = lists.map(v => {
          return {
            name: v.name,
            location: `${v.longitude},${v.latitude}`,
            abilityNames: v.abilityNames, // 暂时没有这个字段
            type: 'camera',
            value: `${v.id}`,
          }
        })
        resolve(lists)
        commit('updateCameraList', lists)
      } catch (error) {
        reject(error)
      }
    })
  },
  getGridListCircle({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {// eslint-disable-line
      try {
        const rst = await http.post(api['FETCH_GRID_LIST_CIRCLE'], { ...payload })
        const data = rst ? (rst.data ? rst.data : []) : []
        const list = data.map(v => {
          return {
            name: v.name,
            location: `${v.lon},${v.lat}`,
            telephone: v.telephone,
            id: v.id,
            areaName: v.orgName,
            type: 'grid',
            userId: v.userId,
          }
        })
        resolve(list)
        commit('updateGridList', list)

      } catch (error) {
        reject(error)
      }
    })
  },
  getPlaceListCircle({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['FETCH_PLACE_LIST_CIRCLE'], { ...payload })
        const data = rst ? (rst.data ? (rst.data.list ? rst.data.list : []) : []) : []
        const list = data.map(v => {
          return {
            name: v.name,
            location: `${v.lon},${v.lat}`,
            areaName: v.orgName,
          }
        })
        resolve(list)
        commit('updatePlaceList', list)
      } catch (error) {
        reject(error)
      }
    })
  },
  getCommandListCircle({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['FETCH_COMMAND_LIST_CIRCLE'], { ...payload })
        const list = rst.data.list.map(v => {
          return {
            name: v.centreName,
            location: `${v.centerX || ''},${v.centerY || ''}`,
            areaName: v.areaName,
            // id: v.userId,
            type: 'command',
          }
        })
        resolve(list)
        commit('updateCommandList', list)
      } catch (error) {
        reject(error)
      }
    })
  },
  // 视频通话用户id和name转换
  transferUserInfo({ commit }, payload) {// eslint-disable-line
    return new Promise(async (resolve, reject) => {
      try {
        const rst = await http.post(api['VIDEO_CONNECT'],
          {
            'pageSize': '0', 'page': '1', 'conditions': { 'NickId': payload },
          })
        const { success, data } = rst
        if (success) {
          const [a] = data
          resolve(a)
        }
      } catch (error) {
        reject(error)
      }
    })
  },

}

const getters = {
  eventList(state) {
    return state.eventList
    // console.log(state)
    // return []
  },
  showFlag(state) {
    return state.showFlag
  },
  curEvent() {
    return state.curEvent
  },
  cameraList(state) {
    return state.cameraList
  },
  gridList(state) {
    return state.gridList
  },
  placeList(state) {
    return state.placeList
  },
  commandList(state) {
    return state.commandList
  },
}

// export default (http) => ({
//   namespaced: true,
//   state,
//   actions: actions(http),
//   mutations,
//   getters,
// })
// 导出vuex模块
export default {
  // 模块开启命名空间
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}