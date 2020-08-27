/**
 * 单点登录模块
 */
import moduleRouters from './router'
import modulesStores from './store'

export default (Vue, store, router, http) => { // eslint-disable-line
  router.addRoutes([moduleRouters])
  store.registerModule('sso', modulesStores(http))
}
