<template>
  <div class="layer-choose">
    <div class="content">
      <div class="layer">
        <div class="first-level">
          <div class="subject-item" v-for="subject in subjectTree" :key="subject.id">
            <Checkbox
              v-model="subject.choosed"
              :indeterminate="subject.indeterminate"
              @on-change="itemChangeHandle(subject)">
              <span :class="{active: subject.name===prevName}">
                {{subject.name}}
              </span>
            </Checkbox>
            <Icon v-if="subject.children" @click="clickAngle(subject)" type="md-arrow-dropdown" />
          </div>
        </div>
        <div class="second-level">
          <div class="subject-item" v-for="subject in subSubjectTree" :key="subject.id">
            <Checkbox v-model="subject.choosed" @on-change="itemChangeHandle(subject)">
              {{subject.name}}
            </Checkbox>
          </div>
        </div>
      </div>
      <!-- <div v-if="currentName==='hot'" class="hot" /> -->
    </div>
  </div>
</template>

<script>
import { subjectTreeList } from './mock/subjectTree'
// eslint-disable-next-line no-unused-vars
import { MAP_ID } from '../../../../../../components/GisMap/config'
import { customMap } from '../../../../../../components/GisMap/custom-map'

const LOCAL_KEY = 'border-set'
const DEFALUT_LOCAL_BORDER_CHOOSE = {
  choosed: true,
  indeterminate: false,
}

const localBorderChoose = JSON.parse(localStorage.getItem(LOCAL_KEY)) || DEFALUT_LOCAL_BORDER_CHOOSE

export function getBorderConfig() {
  return JSON.parse(localStorage.getItem(LOCAL_KEY)) || DEFALUT_LOCAL_BORDER_CHOOSE
}

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['gisHttp', 'map'],
  data() {
    return {
      currentName: 'layer',
      subjectTree: [],
      subSubjectTree: [],
      // currentSubject: [],
      firstLevelChoosed: [], // 以及专题选中的值
      prevName: null, // 点击三角形下来时被点击的专题名称
      showBorderChooseItem: false,
      borderChoose: localBorderChoose,
    }
  },
  watch: {
    // gisHttp() {
    //   this.gisHttp.getSubjectTree(MAP_ID).then(res => {
    //     this.subjectTree = res.data || []
    //     console.log(JSON.stringify(res.data))
    //     const first = this.subjectTree[0].choosed = true
    //     this.itemChangeHandle(first)

    //   })
    // },
  },
  mounted() {
    this.subjectTree = subjectTreeList
    const first = this.subjectTree[0].choosed = true
    this.itemChangeHandle(first)
    // if (!this.gisHttp) { return }
    // this.gisHttp.getSubjectTree(MAP_ID).then(res => {
    //   this.subjectTree = res.data || []
    //   const first = this.subjectTree[0].choosed = true
    //   this.itemChangeHandle(first)
    // })
  },

  methods: {
    clickAngle(subject) {
      if (subject.name === this.prevName) {
        this.subSubjectTree = this.subSubjectTree ? null : subject.children
      } else {
        this.subSubjectTree = subject.children
      }
      this.prevName = subject.name
    },
    itemChangeHandle(subject) {
      console.log(subject, 'subject')
      this.chooseAllChildrenOrNot(subject)
      this.$emit('change', this.currentName, this.subjectTree, subject)
    },
    chooseAllChildrenOrNot(subject) {
      // 选择的专题如果是父专题，要修改所有子专题的状态
      if (subject.children) {
        subject.children.forEach(item => {
          item.choosed = subject.choosed
        })
        // subject.indeterminate = false
        this.$set(subject, 'indeterminate', false)
        return
      }
      // 所选专题如果是子专题，要根据选择情况修改父专题状态
      if (subject.pid > 0) {
        const fatherSubject = this.subjectTree.find(item => item.id === subject.pid)
        const choosedAll = fatherSubject.children.every(item => item.choosed === true)
        // 子专题全部被选中
        if (choosedAll) {
          this.$set(fatherSubject, 'indeterminate', false)
          this.$set(fatherSubject, 'choosed', true)
          return
        }
        const allNotChoosed = fatherSubject.children.every(item => item.choosed !== true)
        // 子专题全部没有选
        if (allNotChoosed) {
          this.$set(fatherSubject, 'indeterminate', false)
          this.$set(fatherSubject, 'choosed', false)
        } else {
          this.$set(fatherSubject, 'indeterminate', true)
          this.$set(fatherSubject, 'choosed', false)
        }
      }
    },
    resetChoose() {
      this.subjectTree.forEach(item => {
        this.$set(item, 'indeterminate', false)
        this.$set(item, 'choosed', false)
        if (item.children) {
          item.children.forEach(item2 => {
            this.$set(item2, 'choosed', false)
          })
        }
      })
    },
    borderChooseChange(borderChoose) {
      this.$set(borderChoose, 'indeterminate', false)
      borderChoose.children.forEach(item => {
        this.$set(item, 'choosed', borderChoose.choosed)
      })
      this.saveChoose()
    },
    borderItemChooseChange(borderChoose, item) { //eslint-disable-line
      const choosedAll = borderChoose.children.every(item => item.choosed === true)
      if (choosedAll) {
        this.$set(borderChoose, 'indeterminate', false)
        this.$set(borderChoose, 'choosed', true)
        this.saveChoose()
        return
      }
      const allNotChoosed = borderChoose.children.every(item => item.choosed !== true)
      // 子专题全部没有选
      if (allNotChoosed) {
        this.$set(borderChoose, 'indeterminate', false)
        this.$set(borderChoose, 'choosed', false)
      } else {
        this.$set(borderChoose, 'indeterminate', true)
        this.$set(borderChoose, 'choosed', false)
      }
      this.saveChoose()
    },
    saveChoose() {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(this.borderChoose))
      this.map && customMap(this.map)
    },
  },
}
</script>

<style lang="scss">
$baseUrl: "../../../../../../assets/img/gis";
.layer-choose {
  width:3304px;
  background: rgba(20,49,93,0.4);
  border-radius: 24px;
  // background:rgba(15,30,85,0.86);
  // border:4px solid rgba(86,138,235,1);
  border-radius:10px;
  position: absolute;
  bottom: 200px;
  left:50%;
  transform: translateX(-50%);
  .nav {
    height: 120px;
    line-height: 120px;
    border-bottom: 4px solid rgba(86,138,235,1);
    box-sizing: border-box;
    overflow: hidden;
    .nav-item {
      display: inline-block;
      user-select: none;
      cursor: pointer;
      height: 120px;
      width: 356px;
      text-align: center;
      border-right: 4px solid rgba(86,138,235,1);
      &:last-child {
        border-right: 4px solid rgba(15,30,85,0.86);
      }
      &.active {
        background-color: rgba(86,138,235,0.2);
        border-right: 4px solid rgba(86,138,235,1);
      }
      .icon {
          display: inline-block;
          width: 44px;
          height: 44px;
          margin-right: 28px;
          &.tool {
            background: url(#{$baseUrl}/map-tool-icon.png) no-repeat;
          }
          &.layer {
            background: url(#{$baseUrl}/map-layer-icon.png) no-repeat;
          }
          &.hot {
            background: url(#{$baseUrl}/map-hot-icon.png) no-repeat;
          }
        }
      .text {
        font-size: 36px;
        color:rgba(166,218,255,1);
        font-family:FZZhengHeiS-B-GB;
        font-weight:400;
      }
      &.active {
        .icon {
          &.tool {
            background: url(#{$baseUrl}/map-tool-icon-active.png) no-repeat;
          }
          &.layer {
            background: url(#{$baseUrl}/map-layer-icon-active.png) no-repeat;
          }
          &.hot {
            background: url(#{$baseUrl}/map-hot-icon-active.png) no-repeat;
          }
        }
      }
    }
  }
  .content {
    font-size: 42px;
    color: #fff;
    padding-bottom: 64px;
    min-height: 188px;
    .first-level, .second-level {
      .subject-item {
        display: inline-block;
        font-size: 42px;
        margin-right: 101px;
        margin-top: 64px;
        .ivu-icon {
          cursor: pointer;
        }
        .active {
          color: #7dc9ff;
        }
      }
    }
    .second-level {
      .subject-item {
        color: #7dc9ff;
      }
    }
    .ivu-checkbox-wrapper {
      font-size: 42px;
      margin-left: 100px;
      user-select: none;
      &:first-child {
        margin-left: 70px;
      }
      .ivu-checkbox {
        .ivu-checkbox-inner {
          width: 42px;
          height: 42px;
          font-size: 42px;
          border-radius: 10px;
          border: 3px solid #477EE3;
          background-color: #0F1E55;
          &:after {
            width: 10px;
            height: 20px;
            top: 5px;
            left: 12px;
          }
        }
        &.ivu-checkbox-checked {
          .ivu-checkbox-inner {
            background-color: #64BFFF;
            &:after {
              content: '';
              display: table;
              width: 10px;
              height: 20px;
              position: absolute;
              top: 5px;
              left: 12px;
              border: 3px solid #081133;
              border-top: 0;
              border-left: 0;
              transform: rotate(45deg) scale(1);
              transition: all .2s ease-in-out;
            }
          }
        }
        &.ivu-checkbox-indeterminate {
          .ivu-checkbox-inner {
            background-color: #64BFFF;
            &:after {
              content: '';
              height: 0;
              top: 16px;
              width: 20px;
              left: 8px;
            }
          }
        }
      }
    }
  }
}
</style>
