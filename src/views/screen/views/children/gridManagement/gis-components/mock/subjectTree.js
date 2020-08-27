/*
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-12 09:31:24
 * @LastEditTime: 2020-08-12 10:09:14
 */
const subjectTreeTest = [
  { 'id': 836, 'pid': 0, 'name': '网格员', 'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e', 'mapId': 208, 'tableId': 271, 'dicts': '[]', 'imageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141253402.png', 'poiImageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141250613.png' },
  { 'id': 837, 'pid': 0, 'name': '出租房', 'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e', 'mapId': 208, 'tableId': 271, 'dicts': '[]', 'imageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141338495.png', 'poiImageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141340908.png', 'updateDate': '2020-08-04 00:21:39' },
  { 'id': 838, 'pid': 0, 'name': '今日重大事件', 'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e', 'mapId': 208, 'tableId': 271, 'imageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141406160.png', 'poiImageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141408471.png', 'updateDate': '2020-08-04 16:41:47' },
  { 'id': 839, 'pid': 0, 'name': '吸毒人员', 'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e', 'mapId': 208, 'imageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141431595.png', 'poiImageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141434157.png' },
  { 'id': 840, 'pid': 0, 'name': '刑满释放人员', 'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e', 'mapId': 208, 'imageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141505887.png', 'poiImageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141508308.png' },
  { 'id': 841, 'pid': 0, 'name': '社区服刑人员', 'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e', 'mapId': 208, 'imageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141527947.png', 'poiImageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141530559.png' },
  { 'id': 842, 'pid': 0, 'name': '重点青少年', 'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e', 'mapId': 208, 'tableId': 271, 'imageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141548174.png', 'poiImageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141550518.png', 'updateDate': '2020-08-06 17:46:31' },
  { 'id': 843, 'pid': 0, 'name': '精神病患者', 'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e', 'mapId': 208, 'imageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141611627.png', 'poiImageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141613978.png' },
  { 'id': 844, 'pid': 0, 'name': '重点上访人员', 'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e', 'mapId': 208, 'tableId': 271, 'dicts': '[]', 'imageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141640212.png', 'poiImageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141643637.png', 'updateDate': '2020-08-04 16:41:54' },
  { 'id': 845, 'pid': 0, 'name': '艾滋病病毒感染者', 'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e', 'mapId': 208, 'imageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141658940.png', 'poiImageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141701606.png' },
  { 'id': 846, 'pid': 0, 'name': '空巢孤寡失助老人', 'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e', 'mapId': 208, 'imageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141715107.png', 'poiImageUrl': 'http://tianque.oicp.net:28082/tqgridfsByName/20200803141717807.png' }]

const subjectTreeOnline = [
  {
    'id': 44,
    'pid': 43,
    'name': '网格员',
    'appId': '45f969790fbd4a7ab050dc2d8483836b',
    'mapId': 2,
    'tableId': 38,
    'dicts': '[]',
    'imageUrl': require('../imgs/1.png'),
    'poiImageUrl': require('../imgs/1.png'),
    'updateDate': '2020-07-28 22:17:20',
  },
  {
    'id': 4,
    'pid': 2,
    'name': '出租房',
    'appId': '45f969790fbd4a7ab050dc2d8483836b',
    'mapId': 2,
    'tableId': 5,
    'dicts': '[{"fieldName":"隐患等级","fieldIdentify":"hiddendanger_level","values":"严重, 一般, 安全"}]',
    'updateDate': '2020-05-21 11:15:12',
    'imageUrl': require('../imgs/2.png'),
    'poiImageUrl': require('../imgs/2.png'),
  },
  {
    'appId': 'aa296ea62ada4db8a04d6d8ba6c8205e',
    'dicts': '[]',
    'id': 6,
    'mapId': 163,
    'name': '今日重大事件',
    'pid': 572,
    'poiImageUrl': require('../imgs/3.png'),
    'imageUrl': require('../imgs/3.png'),
    'tableId': 274,
    'updateDate': '2020-07-22 21:45:07"',
  },
  {
    'id': 19,
    'pid': 13,
    'name': '吸毒人员',
    'appId': '45f969790fbd4a7ab050dc2d8483836b',
    'mapId': 2,
    'tableId': 17,
    'dicts': '[{"fieldName":"关注程度","fieldIdentify":"attentionextent","values":"一般, 中等, 严重"}]',
    'poiImageUrl': require('../imgs/4.png'),
    'imageUrl': require('../imgs/4.png'),
    'updateDate': '2020-05-21 11:17:57',
  },
  {
    'id': 14,
    'pid': 13,
    'name': '刑满释放人员',
    'appId': '45f969790fbd4a7ab050dc2d8483836b',
    'mapId': 2,
    'tableId': 12,
    'dicts': '[{"fieldName":"关注程度","fieldIdentify":"attentionextent","values":"一般, 中等, 严重"}]',
    'poiImageUrl': require('../imgs/5.png'),
    'imageUrl': require('../imgs/5.png'),
    'updateDate': '2020-05-21 11:16:45',
  },
  {
    'id': 15,
    'pid': 13,
    'name': '社区服刑人员',
    'appId': '45f969790fbd4a7ab050dc2d8483836b',
    'mapId': 2,
    'tableId': 13,
    'dicts': '[]',
    'poiImageUrl': require('../imgs/6.png'),
    'imageUrl': require('../imgs/6.png'),
    'updateDate': '2020-05-21 11:16:55',
  },
  {
    'id': 18,
    'pid': 13,
    'name': '重点青少年',
    'appId': '45f969790fbd4a7ab050dc2d8483836b',
    'mapId': 2,
    'tableId': 16,
    'dicts': '[{"fieldName":"关注程度","fieldIdentify":"attentionextent","values":"一般, 中等, 严重"}]',
    'poiImageUrl': require('../imgs/7.png'),
    'imageUrl': require('../imgs/7.png'),
    'updateDate': '2020-05-21 11:17:38',
  },
  {
    'id': 16,
    'pid': 13,
    'name': '精神障碍患者',
    'appId': '45f969790fbd4a7ab050dc2d8483836b',
    'mapId': 2,
    'tableId': 14,
    'dicts': '[{"fieldName":"危险等级","fieldIdentify":"danger_level","values":"0级, 1级, 2级, 3级, 4级, 5级"}]',
    'poiImageUrl': require('../imgs/8.png'),
    'imageUrl': require('../imgs/8.png'),
    'updateDate': '2020-05-21 11:17:10',
  },
  {
    'id': 20,
    'pid': 13,
    'name': '重点上访人员',
    'appId': '45f969790fbd4a7ab050dc2d8483836b',
    'mapId': 2,
    'tableId': 18,
    'dicts': '[{"fieldName":"关注程度","fieldIdentify":"attentionextent","values":"一般, 中等, 严重"}]',
    'poiImageUrl': require('../imgs/9.png'),
    'imageUrls': require('../imgs/9.png'),
    'updateDate': '2020-05-21 11:18:09',
  },
  {
    'id': 17,
    'pid': 13,
    'name': '艾滋病病毒感染者',
    'appId': '45f969790fbd4a7ab050dc2d8483836b',
    'mapId': 2,
    'tableId': 15,
    'dicts': '[{"fieldName":"关注程度","fieldIdentify":"attentionextent","values":"一般, 中等, 严重"}]',
    'poiImageUrl': require('../imgs/10.png'),
    'imageUrls': require('../imgs/10.png'),
    'updateDate': '2020-05-21 11:17:23',
  },
]

let subjectTreeList = []
if (process.env.NODE_ENV === 'production') {
  subjectTreeList = subjectTreeOnline
} else {
  subjectTreeList = subjectTreeTest
}

export { subjectTreeList }