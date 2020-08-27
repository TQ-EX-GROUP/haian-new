import EventBus from '../plugin/EventBus'
import uuid from '../plugin/uuid'

const BRIDGE_PATH = '/static/bridge.html'
const VERSION = 'v1.0.0'
const UUID = uuid

class BridgeMassager extends EventBus {
  constructor(url, opt = {}) {
    super()
    this.voipUrl = url
    this.options = opt
    this.isLoaded = false
    this.iframe = null
    this.uuid = UUID()
    this._appendBridge()
  }

  _appendBridge() {
    if (this.voipUrl && window) {
      const { body } = document
      this.iframe = document.createElement('iframe')
      this.iframe.style.cssText = `
        position: fixed;
        width: 0;
        height: 0;
      `
      this.iframe.setAttribute('id', `iframe_${this.uuid}`)
      this.iframe.src = `${this.voipUrl}${BRIDGE_PATH}`
      body.appendChild(this.iframe)
      this.iframe.onload = () => {
        this.isLoaded = true
        this.emit('bmLoaded', this)
      }
    } else {
      throw new Error('bridge url 无效')
    }
  }

  openVoip(room, type = 'default') {
    const uuid = UUID(room)
    const { location: { origin }} = window
    const windowWidth = window.screen.width // 屏幕宽度
    const windowHeight = window.screen.height // 屏幕高度
    const pageWidth = 1080 // 弹出窗口的宽度
    const pageHeight = 667 // 弹出窗口的高度
    const pageTop = (windowHeight - pageHeight) / 2 // 窗口的垂直位置
    const pageLeft = (windowWidth - pageWidth) / 2 // 窗口的水平位置;
    window.open(`${this.voipUrl}/#/${VERSION}/${type}?target=${origin}&uuid=${uuid}`, '_blank', `width=${pageWidth},height=${pageHeight},top=${pageTop},left=${pageLeft}`)
  }

  register() {
    const { location: { origin }} = window
    window.addEventListener('message', (e) => {
      const { data } = e
      let payload = ''
      if (!data) { return }
      if (typeof data === 'string') {
        try {
          payload = JSON.parse(data)
        } catch (e) {
          throw new Error(`信息格式错误:[${data}]`)
        }
      } else {
        payload = data
      }
      const { target } = payload
      console.log(payload)
      if (target === '*' || target === origin) {
        if (payload.data === 'loaded') {
          return this.emit('loaded')
        } else if (payload.data === 'unload') {
          return this.emit('unload')
        } else if (payload.data === 'end') {
          return this.emit('end')
        } else {
          this.emit('receive', payload.data || null)
        }
      } else {
        console.warn('无效信息')
      }
    })
  }

  sendMsg(data) {
    const { localId } = this.options
    const payload = {
      data,
      target: 'voip',
      remoteId: localId,
    }
    this.iframe.contentWindow.postMessage(JSON.stringify(payload), '*')
  }


  destroy() {
    this.rmAll()
    document.body.removeChild(this.iframe)
  }
}

export default BridgeMassager
