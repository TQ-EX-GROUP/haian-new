/*
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 10:24:20
 * @LastEditTime: 2020-08-25 17:18:28
 */
/* eslint-disable indent */
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  pluginOptions: {
    PROJ_TYPE: 'screen', // 项目类型
  },
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://csjcsj.e1.luyouxia.net:29217',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
      // '/api': {
      //   // target: 'http://2.82.4.201:8080/api',
      //   target: 'http://biangsi001.e2.luyouxia.net:24465/api', // 雷诺
      //   // target: 'http://loper.e1.luyouxia.net:25479/api', // 杨涛
      //   // target: 'http://a3081d6444.zicp.vip:51942/api', // 雷诺备用
      //   changeOrigin: true,
      //   pathRewrite: { '/api': '' },
      // },
    },
  },
  productionSourceMap: false,
}
