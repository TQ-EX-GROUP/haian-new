const Tpl = () => import(/* webpackChunkName: "tpl" */'./views')
const TplHome = () => import(/* webpackChunkName: "tpl-home" */'./views/children/home')

import layout from './views/components/layout'
export default () => ({
  path: '/tpl',
  component: Tpl,
  redirect: '/tpl/home',
  meta: { layout },
  children: [
    {
      path: '/tpl/home',
      component: TplHome,
    },
  ],
})
