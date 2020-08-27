import defaultTheme from '../theme/default.useable.less'
import redTheme from '../theme/red.useable.less'
import blueTheme from '../theme/blue.useable.less'

let lastTheme = null

export default (type) => {

  const themes = {
    defaultTheme,
    redTheme,
    blueTheme,
  }
  lastTheme && lastTheme.unuse()
  lastTheme = themes[`${type}Theme`]
  lastTheme.use()
}
