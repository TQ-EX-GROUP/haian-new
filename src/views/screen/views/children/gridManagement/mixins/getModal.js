/*
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-04 17:55:52
 * @LastEditTime: 2020-08-05 09:24:48
 */
import gridbase from '../components/grid-base'
import keyPetitioners from '../components/key-petitioners'

export default {
  methods: {
    getModal(subjectName) {
      let modal = null
      if (subjectName === '网格员') {
        modal = 'gridbase'
      } else if (subjectName === '重点上访人员') {
        modal = 'keyPetitioners'
      }
      return modal
    },
  },
  components: {
    gridbase, //网格员弹窗
    keyPetitioners, //重点上访人员
  },
}