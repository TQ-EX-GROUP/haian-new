
if (Hls.isSupported()) {

  const video = document.querySelector('.video')
  const hls = new Hls()

  const messenger = new window.Messenger()
  messenger.listen(function (msg) {
    const parentWin = window
    if (parentWin === parentWin.parent) {
      return
    }
    const data = JSON.parse(msg)
    if (data.src) {
      hls.loadSource(data.src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        video.play()
        video.addEventListener('playing', function () {
          messenger.targets['parent'].send(`playing`)
        })
        video.addEventListener('error', function () {
          messenger.targets['parent'].send(`error`)
        })
      })
    }
  })

  messenger.addTarget(window.parent, 'parent')
  messenger.targets['parent'].send(`ready`)

}
