import './messenger'

class TqMessenger {
  constructor(id) {
    this.gisIframe = null
    this.messenger = null
    this.gisIframeId = id
  }

  init(cb) {
    this.messenger && this.messenger.clear()
    this.messenger = new Messenger('parent')
    this.messenger.listen((msg) => {
      cb && cb(msg)
    })
    cb && cb('testMessage')

    this.gisIframe = document.getElementById(this.gisIframeId)
    if (this.gisIframe) {
      this.messenger.addTarget(this.gisIframe.contentWindow, this.gisIframeId)
    }
  }

  sendMessage(msg) {
    if (this.messenger && this.messenger.targets[this.gisIframeId]) {
      this.messenger.targets[this.gisIframeId].send(msg)
    }
  }

  sendAll(msg) {
    this.messenger && this.messenger.send(msg)
  }
}

export default TqMessenger