const Sso = () => import('./views')
const SsoRedirect = () => import('./views/children/redirect')
const SsoLogon = () => import('./views/children/logon')

export default {
  path: '/outer',
  name: '单点处理逻辑',
  component: Sso,
  redirect: '/outer/redirect',
  children: [
    {
      path: '/outer/redirect',
      name: '单点跳转',
      component: SsoRedirect,
    },
    {
      path: '/outer/logon',
      name: '单点登录',
      component: SsoLogon,
    },
  ],
}
