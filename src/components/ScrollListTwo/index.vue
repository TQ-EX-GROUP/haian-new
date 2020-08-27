<template>
  <div class="scroll-list">
    <ul class="list-wrapper" style="height:88px;line-height:88px;">
      <li class="header-wrapper">
        <div
          class="header-tab"
          v-for="(ele, index) in header"
          :style="`flex:${ele.flex};color:${ele.color}`"
          :key="index">
          {{ele.des}}
        </div>
      </li>
    </ul>
    <ul
    class="list-wrapper"
    :id="formId"
    @mousemove="stopScroll"
    @mouseout="doScroll">
      <li
        class="list-item"
        v-for="(item, index) in source"
        :key="index">
        <div
          :title="des"
          class="header-tab list-row"
          v-for="(des, cIndex) in item.textArr"
          :key="cIndex"
          :style="`flex:${header[cIndex].flex};`">
          {{des}}
        </div>
      </li>
    </ul>
    <!-- <list-detail
     :show="showdetail"
    @close="showdetail = false"
    :total="total"
    :current="curentPage"
    @page="handlePage"
    :tableData="tableData"></list-detail> -->
  </div>
</template>

<script>
// import listDetail from './list-detail'
export default {
  name: 'ScrollListTwo',
  components: {
    // listDetail,
  },
  props: {
    formId: {
      type: String,
      default: 'list-body',
    },
    orgId: {
      type: Number,
    },
    colorDic: {
      type: Object,
      default: () => {
        return {
          '1': '#a3152e',
          '2': '#ff5bf5',
          '3': '#ffdd60',
        }
      },
    },
    header: {
      type: Array,
      default: () => {
        return [
          {
            des: '人员姓名',
            flex: 30,
          },
          {
            des: '所属区域',
            flex: 25,
          },
          {
            des: '住址',
            flex: 20,
          },
          {
            des: '联系方式',
            flex: 17,
          },
        ]
      },
    },
    source: {
      type: Array,
    },
    nopadding: {
      type: Boolean,
      default: false,
    },
    formatValue: {
      type: Function,
      default: (index, value) => { //eslint-disable-line
        return value
      },
    },
  },
  data() {
    return {
      allowScroll: true,
      hasScroll: false,
      realTimeSource: [],
      showdetail: false,
      curClickData: {},
      total: 0,
      curentPage: 1,
      tableData: [],
    }
  },
  beforeMount() {
    this.judgeListDisplay()
  },
  mounted() {
    const startTimeTemp = new Date().getTime()
    const listWrapper = document.getElementById(this.formId)
    setTimeout(
      () =>
        requestAnimationFrame(() =>
          this.autoScroll(startTimeTemp, listWrapper, this.allowScroll)), 500)
  },
  methods: {
    // handleDetail(data){
    //   console.log(data)
    // },
    judgeListDisplay() {
      setTimeout(() => {
        this.realTimeSource = this.source
      }, 1000)
    },
    stopScroll() {
      this.allowScroll = false
    },
    doScroll() {
      this.allowScroll = true
    },
    autoScroll(startTimeTemp, listWrapper, flag = true) {
      const maxHeight = listWrapper.scrollHeight
      const currentTimeTemp = new Date().getTime()
      if (currentTimeTemp - startTimeTemp > 50 && flag) {
        if (listWrapper.scrollTop + listWrapper.offsetHeight < maxHeight - 1) {
          listWrapper.scrollTop += 1
        } else {
          listWrapper.scrollTop = 0
        }
        startTimeTemp = new Date().getTime()  //eslint-disable-line
      }
      requestAnimationFrame(() =>
        this.autoScroll(startTimeTemp, listWrapper, this.allowScroll))
    },
  },

}
</script>

<style lang="scss" scoped>
.scroll-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
}

.list-wrapper {
  height: 100%;
  overflow: hidden;
}

.header-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  div{
    background:rgba(89,135,200,0.3);
  }
}

.header-tab {
  color: rgba(255,255,255,0.8);
  line-height: 88px;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  padding: 0 6px;
}

.list-item {
  display: flex;
  height: 84px;
}

.list-item:hover {
  cursor: pointer;
}

.list-row {
  background: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 24px;
  font-weight: 400;
  line-height: 84px;
}
.list-item:nth-child(odd) {
  .header-tab{
    color: #D7DEF5;
  }
}
.list-item:nth-child(even) {
  background:rgba(255,255,255,0.05);
  .header-tab{
    color: #75AFF5;
  }
}
</style>
