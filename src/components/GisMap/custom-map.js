/* eslint-disable */
export function customMap(map) {
  const config = JSON.parse(localStorage.getItem('border-set'))
  if (config) {
    config.children.forEach(item => {
      const { level, choosed } = item
      // map.setLayoutProperty(`${level}_boundary`, 'visibility', choosed ? 'visible' : 'none')
    })
  }
}