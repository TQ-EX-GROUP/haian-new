/*
 * @Descripttion: '海安大屏路由'
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 09:27:22
 * @LastEditTime: 2020-08-25 17:13:36
 */
const Screen = () => import(/* webpackChunkName: "screen" */'./views')
// const ScreenHome = () => import(/* webpackChunkName: "screen-home" */'./views/children/home')

export default () => ({
  path: '/screen',
  component: Screen,
  redirect: '/screen/gridManagement',
  children: [
    {
      path: '/screen/gridManagement',
      component: () => import(/* webpackChunkName: "gridManagement" */'./views/children/gridManagement/index.vue'),
    },
    // {
    //   path: '/screen/visual',
    //   component: () => import(/* webpackChunkName: "visual" */'./views/children/home/index.vue'),
    // },
    {
      path: '/screen/safetyIndex',
      component: () => import(/* webpackChunkName: "safetyIndex" */'./views/children/safetyIndex/index.vue'),
    },
  ],
})
