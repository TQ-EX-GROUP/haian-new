/*
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-27 10:24:21
 * @LastEditTime: 2020-08-24 14:19:29
 */
// eslint-disable-next-line no-unused-vars
import Http, { HttpError } from '@ourea/fetch'
let baseUrl = '/api'
if (process.env.NODE_ENV === 'production') {
  baseUrl = '/'
}

const buildTarget = process.env.build_target || '' //海门不走网关

const FORMAT_APP_CODE = (s) => {
  // const suffix = isDev ? '_dev' : `_${buildTarget}`
  // return `${s}${suffix}`
  return `${s}${buildTarget}`
}
export const http = Http({
  config: {
    credentials: 'include',
    baseUrl: baseUrl || '/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 5000,
  },
})

export default (Vue, opt = {}) => {

  // const CUSTOM_HTTP_ERROR_STATUS = 602 // 前端项目内自定义错误码

  http.setOption(opt)
  http.injectBefore(({ url, opt }) => {

    // 格式化网关参数
    // 环境判断 设置 AppCode
    const urlPathArr = url.split('/')
    const rstUrl = urlPathArr.map((s, index) => index === 2 ? FORMAT_APP_CODE(s) : s)
      .join('/')
    opt.params = {
      // appKey: 'fusion',
      // ...(Object.keys(opt.params).length > 0 ? { bizContent: JSON.stringify(opt.params) } : {}),
      ...opt.params,
    }
    if (opt.method === 'POST') {
      opt.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
      if (url.includes('http://32.142.11.145:9010/gateway/local/restService/f2bad0c378cf494fa192f6290f7f8164')) { // 视频通话
        opt.headers['Content-Type'] = 'application/json;charset=utf-8'
      }
    }
    return { url: rstUrl, opt }
  })
  http.injectAfter(rsp => {// eslint-disable-line
    try {
      //     const { success, code, message, msg } = rsp

      //     if (!success || code === 40101) {
      //       if (code === 40101) { // 根据项目判断状态码
      //         return new HttpError({
      //           code,
      //           httpStatus: HttpError.TOKEN_EXPIRE, // 登录超时
      //           message: message || msg || HttpError.HTTP_ERROR_MAP[HttpError.ERROR_CODE.TOKEN_EXPIRE],
      //         })
      //       } else if (code !== 0) {
      //         return new HttpError({
      //           code,
      //           httpStatus: CUSTOM_HTTP_ERROR_STATUS, // 服务器返回的错误
      //           message: message || msg || '后台返回未知错误',
      //         })
      //       }
      //     }
    } catch (error) {
      return new HttpError({
        code: CUSTOM_HTTP_ERROR_STATUS,
        httpStatus: HttpError.ERROR_CODE.RESPONSE_PARSING_FAILED, // 解析数据错误
        message: HttpError.HTTP_ERROR_MAP[HttpError.ERROR_CODE.RESPONSE_PARSING_FAILED],
      })
    }
  })

  http.setErrorHook((httpError, fetchUrl) => {
    console.log('[HTTP ERROR]', fetchUrl, httpError) // eslint-disable-line
  })

  Vue.prototype.http = http
}
