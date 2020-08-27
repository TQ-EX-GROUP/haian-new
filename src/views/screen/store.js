import * as stores from './views/children/*/store.js'

export default () => {
  const modules = {}
  Object.keys(stores).forEach(s => { modules[s] = stores[s] })
  return {
    namespaced: true,
    modules,
  }
}