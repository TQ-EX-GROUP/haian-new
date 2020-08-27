/* eslint-disable default-case */
import EventBus from './plugin/EventBus'
import DC from './dispatch-center'
import BM from './bridge-massager'

const DC_NAME_SPACE = 'com.tianque.message.user'
// const APP_ID = '1234567890abcdefg'
const APP_ID = '05de67702fdd424b89de8fd8b7c229e6'

class VoipDispatchCenter extends EventBus {
  constructor(opt) {
    super()
    const { id, dcUrl, appId = APP_ID, namespace = DC_NAME_SPACE, msgApi, voipUrl, host } = opt
    // const { id, dcUrl, appId = APP_ID, namespace = DC_NAME_SPACE, msgApi, host } = opt
    // const voipUrl = 'https://0.0.0.0:8008'
    this.host = host
    this.localId = id
    this.roomId = ''
    this._isMeeting = false
    this._isDisconnect = false
    Object.defineProperty(this, 'isMeeting', {
      set(v) {
        this._isMeeting !== v && this.emit('isMeetingChange', v)
        this._isMeeting = v
      },
      get() {
        return this._isMeeting || false
      },
    })

    Object.defineProperty(this, 'isDisconnect', {
      set(v) {
        this._isDisconnect !== v && this.emit('isDisconnectChange', v)
        this._isDisconnect = v
      },
      get() {
        return this._isDisconnect || false
      },
    })

    this.dc = new DC({ localId: id, url: dcUrl, namespace, appId, msgApi })
    this.bm = new BM(voipUrl, { localId: id })
    this.InviteType = this.dc.InviteType
    this.resetFunc = null
    this.pingLoop = null
    this._init()
  }

  _init() {
    this.bm.on('bmLoaded', () => {
      this.sendMsg({
        type: 'ping',
      })
    })

    // 通过bridge获取消息的事件 不做处理 直接抛出到业务场景
    this.bm.on('receive', data => {
      const { type, data: payload } = data
      if (type === 'pingRst') {
        const { room: roomId } = payload
        if (roomId) {
          this.roomId = roomId
          this.isMeeting = true
        } else {
          this.isMeeting = false
          this.roomId = ''
        }
        this.isDisconnect = false
        this.resetFunc && clearTimeout(this.resetFunc)
        this.pingLoop && clearInterval(this.pingLoop)
      } else {
        const { data: { id }} = data
        switch (type) {
          case 'userJoined':
            this.userJoined(data)
            break
          case 'reinvite':
            this.reinvite(data)
            break
          case 'recreate':
            this.recreate(this.InviteType.MEETING, id, (roomId) => {
              this.roomId = roomId
            })
            break
          case 'out':
            this.out(data)
            break
        }
      }
      this.emit('receive', data)
    })

    // voip 通话页面成功加载的事件 一般意味着会议开始
    this.bm.on('loaded', () => {
      this.emit('loaded')
    })

    // voip 通话页面关闭的事件
    this.bm.on('unload', () => {
      this.emit('unload')
      // 若会议没有结束则 断开标识为true 且设置50秒计时器 计时器结束时 重置会议标示和断开标示
      if (this.isMeeting) {
        this.isDisconnect = true
        this.pingLoop = setInterval(() => {
          this.sendMsg({
            type: 'ping',
          })
        }, 1000)
        this.resetFunc = setTimeout(() => {
          this.isMeeting = false
          this.isDisconnect = false
          this.roomId = ''
          clearInterval(this.pingLoop)
        }, 50000)
      } else {
        this.isDisconnect = false
      }
    })

    // voip 停止了会议
    this.bm.on('end', () => {
      this.emit('end')
      this.resetFunc = null
      this.isMeeting = false
      this.isDisconnect = false
      this.roomId = ''
    })

    // 接收到调度中心的视频邀请 转发到voip
    this.dc.on('call-video', data => {
      // if (this.isMeeting || this.isDisconnect) {
      //   return
      // }
      this.bm.sendMsg({
        type: 'call-video',
        payload: data,
      })
      this.emit('call-video', data)
    })

    this.dc.on('leave', (data) => {
      if (!this.isMeeting && !this.isDisconnect) {
        return
      }
      this.sendMsg({
        type: 'forceLeave',
        data: data.msg || '会议结束',
      })
      this.emit('leave', data)
    })


    // 接收到调度中心的用户接收邀请的消息 转发到 voip
    this.dc.on('accept', data => {
      this.bm.sendMsg({
        type: 'accept',
        payload: data,
      })
      this.emit('accept', data)
    })

    // 接收到调度中心的用户拒绝邀请的消息 转发到 voip
    this.dc.on('refuse', data => {
      this.bm.sendMsg({
        type: 'refuse',
        payload: data,
      })
      this.emit('refuse', data)
    })

    // voip 通信注册
    this.bm.register()
  }

  out({ data: { id, msg }}) {
    const content = {
      type: 'leave',
      msg: msg || '会议结束！',
    }
    this.noticeUser([id], JSON.stringify(content))
  }

  userJoined({ data: { id }}) {
    this.emit('fetchUserInfoById', id)
  }

  sendUserInfo(info) {
    console.log(77)
    this.sendMsg({
      type: 'userInfo',
      data: info,
    })
  }

  reinvite({ data: { id }}) {
    this.invite(this.InviteType.MEETING, id, {
      name: 'aaa',
      sub: `org${id}`,
      id,
    })
  }

  sendMsg(data) {
    this.bm.sendMsg(data)
  }

  noticeUser(ids, msg) {
    const params = {
      clientNamespace: APP_ID,
      mgsId: '1',
      msgContent: msg,
      msgType: 'message',
      namespace: DC_NAME_SPACE,
      targetClientId: ids,
    }

    this.dc._postMsg(params)
  }

  invite(type = this.InviteType.MEETING, id, user) {
    this.sendMsg({
      type: 'invite',
      data: user,
    })
    this.dc.inviteVideoCall(this.roomId, type, id)
  }

  createVoip(cb) {
    this.roomId = `${this.localId}_room_${performance.now()}`
    this.once('loaded', () => {
      this.isMeeting = true
      this.sendMsg({
        type: 'create',
        data: {
          id: this.localId,
          room: this.roomId,
          host: this.host,
        },
      })
      cb && cb(this.roomId)
    })
    this.bm.openVoip(this.roomId)
  }

  reopenVoip() {
    this.bm.openVoip(this.roomId)
  }

  answerVoip(room, from, isAccept, cb) {
    if (isAccept && !this.isMeeting) {
      this.once('loaded', () => {

        this.isMeeting = true
        this.sendMsg({
          type: 'answer',
          data: {
            id: this.localId,
            room,
            user: this.host,
          },
        })
        this.dc.answerInviteCall(room, from, isAccept)
        cb && cb()
      })
      this.bm.openVoip(room)
    } else {
      this.dc.answerInviteCall(room, from, isAccept)
      cb && cb()
    }
  }

  recreate(type = this.InviteType.MEETING, id, cb) {
    this.roomId = `${this.localId}_room_${performance.now()}`
    this.isMeeting = true
    this.sendMsg({
      type: 'recreate',
      data: {
        id: this.localId,
        room: this.roomId,
        host: this.host,
      },
    })
    this.dc.inviteVideoCall(this.roomId, type, id)
    cb && cb(this.roomId)
  }

  destroy() {
    this.rmAll()
    this.dc.destroy()
    this.bm.destroy()
  }

  static install(Vue) {
    Vue.prototype.$VoipDispatchCenter = VoipDispatchCenter
  }
}

if (window) {
  window.VoipDispatchCenter = VoipDispatchCenter
}

export default VoipDispatchCenter