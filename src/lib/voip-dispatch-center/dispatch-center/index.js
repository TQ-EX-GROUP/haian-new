import EventBus from '../plugin/EventBus'
import * as io from '../plugin/socket.io'

const InviteType = {
  MEETING: 2,
  AUDIO: 3,
  VIDEO: 4,
}

const InviteState = {
  ACCEPT: 0,
  REFUSE: 1,
}

/**
 * 呼叫调度中心
 */
export default class DispatchCenter extends EventBus {
  constructor(opt) {
    super()
    const { url, namespace, appId, localId, msgApi } = opt
    const socketUrl = `${url}/${namespace}?clientid=${appId}__namespace__${localId}`
    this.io = io.connect(socketUrl, { 'force new connection': true })

    this.option = opt
    this.localId = localId
    this.currentType = ''
    this.namespace = namespace
    this.appId = appId
    this.api = msgApi

    this.InviteType = InviteType
    this.InviteState = InviteState

    this._init()
  }

  _init() {

    this.io.on('connect', () => {
      this.isConnect = true
      this.emit('connect')
    })

    this.io.on('callvideo', (payload) => {
      const data = JSON.parse(payload)
      const { convId: roomId, sourceId: from, status: type, targetId: to } = data
      // type: 2 -> 会议； 3 -> 语音； 4 -> 视频
      const msg = { roomId, from, to, type }
      this.emit('call-video', msg)
    })

    this.io.on('callResp', (payload) => {
      const data = JSON.parse(payload)
      const { status, convId: roomId, sourceId: from, targetId: to } = data
      if (status === this.InviteState.ACCEPT) { // 接受邀请
        this.emit('accept', { roomId, from, to })
      } else {
        this.emit('refuse', { roomId, from, to })
      }
    })

    this.io.on('message', (data) => {
      const obj = JSON.parse(data)
      console.log('message', obj)
      const { type } = obj
      // eslint-disable-next-line default-case
      switch (type) {
        case 'leave':
          this.emit('leave', obj)
          break
      }
    })

    this.io.on('disconnect', () => {
      this.isConnect = false
      this.emit('disconnect')
    })
  }

  reconnect() {
    this.io.removeAllListeners()
    this.io = null
    const { url, namespace, appId, localId } = this.option
    const socketUrl = `${url}/${namespace}?clientid=${appId}__namespace__${localId}`
    this.io = io.connect(socketUrl, { 'force new connection': true })
    this._init()
  }

  /**
   * 断开链接
   */
  disconnect() {
    this.io.disconnect()
  }

  /**
   * 发送Call邀请
   * @param {*} roomId 房间号
   * @param {*} type Call 类型
   * @param {*} to 目标人
   */
  inviteVideoCall(roomId = this._uuid(), type, to) {
    const params = { roomId, type, to }
    this._fireInviteCall(params)
    return roomId
  }

  /**
   * 应答邀请
   * @param {*} roomId 房间号
   * @param {*} from 邀请人
   * @param {*} isAccept 是否接受
   */
  answerInviteCall(roomId, from, isAccept) {
    const params = {
      targetId: from,
      convId: roomId,
      status: isAccept ? 0 : 1,
    }
    this._fireInviteResp(params)
  }

  async _fireInviteCall(payload) {
    const { roomId, type, from = this.localId, to } = payload
    const msgContent = {
      'convId': roomId,
      'status': type,
      'sourceId': from,
      'targetId': to,
    }
    const data = {
      'mgsId': '1',
      'namespace': this.namespace,
      'clientNamespace': this.appId,
      'targetClientId': [to],
      'msgType': 'callvideo',
      'msgContent': JSON.stringify(msgContent),
    }

    return await this._postMsg(data)
  }

  async _fireInviteResp(payload) {
    const msgContent = {
      'convId': payload.convId,
      'status': payload.status,
      'sourceId': this.localId,
      'targetId': payload.targetId,
    }

    this.currentType = 'voip-video'

    const data = {
      'mgsId': '1',
      'namespace': this.namespace,
      'clientNamespace': this.appId,
      'targetClientId': [payload.targetId],
      'msgType': 'callResp',
      'msgContent': JSON.stringify(msgContent),
    }

    return await this._postMsg(data)
  }

  _uuid() {
    const s = []
    const hexDigits = '0123456789abcdef'
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-'

    const uuid = s.join('')
    return uuid
  }

  // async _postMsg(data) {
  //   const headers = new Headers({ 'Content-Type': 'application/json', Accept: 'application/json' })
  //   const res = await fetch(this.api, { method: 'POST', body: JSON.stringify(data), headers: headers })
  //   return await res.json()
  // }
  async _postMsg(data) {
    const headers = new Headers({ 'Content-Type': 'application/json', Accept: 'application/json' })
    console.log(this.api)
    if (this.api instanceof Function) {
      return await this.api(data, {
        conf: {
          headers,
        },
      })
    } else {
      const res = await fetch(this.api, { method: 'POST', body: JSON.stringify(data), headers: headers })
      return await res.json()
    }
  }


  destroy() {
    this.rmAll()
  }

  static install(Vue) {
    Vue.prototype.$dc = DispatchCenter
  }
}