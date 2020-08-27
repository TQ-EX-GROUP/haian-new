/*
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-03 11:23:40
 * @LastEditTime: 2020-08-13 17:01:04
 */

let ENNAME = 'nantong-haimen_bigscreen' // haian
let HOST = 'tianque.oicp.net'
let PORT = '28182'
let APP_KEY = 'b26270efe5d54e5b9fdaa56187b9d304'
let MAP_ID = 208
console.log('开发环境')

if (process.env.NODE_ENV === 'production') { //生产环境
  ENNAME = 'nantong-haimen_bigscreen'
  HOST = '2.82.4.200'
  PORT = '8182'
  APP_KEY = '030fa88eba584357840ad086369008cc'
  MAP_ID = 2
  console.log('生产环境')
}

export {
  ENNAME, HOST, PORT, APP_KEY, MAP_ID,
}
