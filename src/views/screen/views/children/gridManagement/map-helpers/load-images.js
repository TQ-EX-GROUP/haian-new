/**
 * 加载地图图标
 * @param map
 * @param icons
 * @return {Promise<any[]>}
 */

export function loadImages(map, icons) {
  const loadFns = icons.map(icon => {
    return new Promise((resolve, reject) => {
      map.loadImage(icon.path, (err, iconData) => {
        if (err) {
          reject(err)
        }
        if (!map.hasImage(icon.name)) {
          map.addImage(icon.name, iconData)
        }
        resolve(iconData)
      })
    })
  })
  return Promise.all(loadFns)
}
