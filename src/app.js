/*
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 10:24:20
 * @LastEditTime: 2020-08-18 15:08:08
 */
import Vue from 'vue'
import echarts from 'echarts'
// 第三方组件
import { sync } from 'vuex-router-sync'
// !css 根据是否依赖 iview 放开注释
// import iview from 'iview'

import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

// 文件目录
import views from './views' // 视图
import components from './components' // 全局组件注册入口
import directives from './directives' // 全局指令注册入口
import utils from './utils' // 全局工具注册入口
// http 框架
import Http, { http } from './lib/http'
// 路由
import router from './router'
// 状态管理框架
import store from './store'
// reset css
import 'normalize.css'
import './assets/css/init.css'
import './assets/css/reset-1.3.3.css'
// 入口组件
import App from './components/App/index.vue'
// import ViewUI from 'view-design'
// import 'view-design/dist/styles/iview.css'

import llgtfooComponentsBox from 'llgtfoo-components-box'
import 'llgtfoo-components-box/dist/llgtfoo-components-box.css'
// 设置cookie
import VueCookies from 'vue-cookies'
// 视频通话
import VoipDispatchCenter from './lib/voip-dispatch-center'

import VueSuperSlide from 'vue-superslide'
import scroll from 'vue-seamless-scroll'

Vue.use(VueCookies)
Vue.use(scroll)
Vue.use(VueSuperSlide)
Vue.use(llgtfooComponentsBox)
Vue.use(ViewUI)
Vue.use(components)
Vue.use(directives)
Vue.use(utils)
Vue.use(Http)
Vue.use(views, store, router, http)
Vue.use(VoipDispatchCenter)
sync(store, router)
import 'tq-map-ui/dist/tqmapui.css'
import TqMapUI from 'tq-map-ui'
import countTo from 'vue-count-to'
Vue.use(countTo)

Vue.use(TqMapUI)
Vue.prototype.$echarts = echarts

import animate from 'animate.css'
Vue.use(animate)

Vue.filter('NumFormat', function (value) {
  const intPart = Number(value).toFixed(0)
  const intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  return intPartFormat
})
const app = new Vue({
  router,
  store,
  ...App,
})

export default app
