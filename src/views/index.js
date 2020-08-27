import * as modules from './*/index.js'

export default (Vue, store, router, http) => {

  const array = []
  Object.keys(modules).forEach(key => {
    Vue.use(modules[key], store, router, http)
    array.push({
      name: key,
      type: 'Module',
    })
  })

  router.addRoutes(
    [
      {
        path: '/',
        name: 'root',
        redirect: '/screen',
      },
      {
        path: '/403', // 此处需特别注意至于最底部
        component: () => import('../components/PermissionDenied'),
      },
      {
        path: '/404', // 此处需特别注意至于最底部
        component: () => import('../components/NotFound'),
      },
      {
        path: '*',
        redirect: '/404',
      },
    ],
  )

  console.group(`系统模块`)
  console.table(array)
  console.groupEnd(`系统模块`)
}
