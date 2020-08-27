<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-12 17:02:02
 * @LastEditTime: 2020-08-14 14:15:23
-->
<template>
  <div class="visit-details">
    <div class="tab-box">
      <img
        class="slide-left-icon"
        @click="slideLeft"
        src="../../../../../../assets/imgs/slide-right-icon.png"
        v-if="isShow">
        <div class="tab" ref="tab">
          <ul ref ="tabWrapper" :style="style" v-if="tabOneValue.length>0">
            <li
              :class="currentIndexs == (index+1)? 'tab-name-active':''"
              v-for="(item, index) in tabOneValue"
              @click="changeIndex((index+1), item)"
              :key="index">
               {{item.value}}
            </li>
          </ul>
        </div>
      <img
        v-if="isShow"
        class="slide-right-icon"
        src="../../../../../../assets/imgs/slide-right-icon.png"
        @click="slideRight">
    </div>
    <div class="body-box">
      <div class="box-left">
       <div class="inner-box" v-for="(item,index) in visitDetailsData" :key="index">
          <img :src="imgBox[index]">
          <div class="inner-box-item">
            <p class="inner-box-item-title">{{item.name}}</p>
            <p class="inner-box-item-num" v-if="item.name.includes('率')">{{item.value}}%</p>
            <p class="inner-box-item-num" v-else>{{item.value}}</p>
          </div>
        </div>
         <!--
        <div class="inner-box">
          <img src="../../../../../../assets/imgs/visit-num.png">
          <div class="inner-box-item">
            <p class="inner-box-item-title">本月已1111111走访人数</p>
            <p class="inner-box-item-num">{{visitDetailsData.value}}</p>
          </div>
        </div>
        <div class="inner-box">
          <img src="../../../../../../assets/imgs/visit-schedule.png">
          <div class="inner-box-item">
            <p class="inner-box-item-title">本月走访进度</p>
            <p class="inner-box-item-num">{{visitDetailsData.pre}}%</p>
          </div>
        </div> -->
      </div>
      <div class="box-right">
        <div class="box-right-tab">
          <dialog-switch-tab
          :source="tabTwoValue"
          v-model="tabIndex"
          @getTabValue="getTabValue"></dialog-switch-tab>
        </div>
        <div class="person-list">
          <scroll-list-two :source="personList"></scroll-list-two>
        </div>
        <div class="bottom">
          <Page
            class-name="my-page"
            @on-change="changePage"
            :page-size="10"
            :total="total"
            prev-text="上一页"
            next-text="下一页" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import DialogSwitchTab from '../../../../../../components/DialogSwitchTab'
import ScrollListTwo from '../../../../../../components/ScrollListTwo'
// mock数据
// import personListJson from '../../../../../../assets/mock/person-list.json'
// import visitDetailsJson from '../../../../../../assets/mock/visit-details.json'
export default {
  components: {
    DialogSwitchTab,
    ScrollListTwo,
  },
  props: {
    source: {
      type: [Array, Object],
      default: () => [],
    },
    tabOneValue: {
      type: Array,
      default: () => [],
    },
    // tabTwoValue: {
    //   type: Array,
    //   default: () => [],
    // },
    currentIndex: {
      type: [Number, String],
      default: 0,
    },
    monthType: {
      type: [String],
      default: 'day',
    },
  },
  data() {
    return {
      tabIndex: 0,
      currentIndexs: 0,
      currentDatatype: '',
      // tabOneValue: [], //顶部类型
      tabTwoValue: [], //区域类型
      visitDetailsData: [], //左侧统计
      selectOrgId: '',
      header: [
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
      ],
      page: 1,
      clickeIndex: 0,
      personList: [],
      total: 0,
      isShow: true,
      style: {},
      index: 1,
      imgBox: [
        require('@/assets/imgs/person-num.png'),
        require('@/assets/imgs/visit-num.png'),
        require('@/assets/imgs/visit-schedule.png'),
      ],
    }
  },
  watch: {
    currentIndex() {
      this.getGridWarningType()
    },
  },
  mounted() {
    this.$nextTick(() => {
      const firstLi = this.$refs.tabWrapper.querySelector('li:nth-of-type(1)')
      this.style = {
        left: `${firstLi.offsetLeft}px`,
      }
      const tabWidth = this.$refs.tab.clientWidth
      const tabWrapperWidth = this.$refs.tabWrapper.clientWidth
      this.isShow = !((tabWidth > tabWrapperWidth))
    })
    // this.visitDetailsData = visitDetailsJson
    this.currentIndexs = this.currentIndex
    // this.getPersonList()
    this.getGridWarningType()
    this.getGridWarningArea()

  },
  methods: {
    //网格工作预警统计
    getGridWarningType() {
      const params = {
        orgId: 4583,
        dataTime: this.monthType,
        tab: this.currentIndexs,
      }
      this.gridWarningType(params).then(res => {
        if (this.currentIndexs === 1) {
          this.visitDetailsData = [
            {
              name: '网格员数',
              value: res.body.total,
            },
            {
              name: '无数据采集网格员数',
              value: res.body.value,
            },
            {
              name: '采集率',
              value: (res.body.pre) * 100,
            },
          ]
        } else if (this.currentIndexs === 2) {
          this.visitDetailsData = [
            {
              name: '网格员数',
              value: res.body.total,
            },
            {
              name: '未登录网格员数',
              value: res.body.value,
            },
            {
              name: '登录率',
              value: (res.body.pre) * 100,
            },
          ]
        } else if (this.currentIndexs === 3) {
          this.visitDetailsData = [
            {
              name: '网格员数',
              value: res.body.total,
            },
            {
              name: '轨迹时长未达标网格员数',
              value: res.body.value,
            },
            {
              name: '达标率',
              value: (res.body.pre) * 100,
            },
          ]
        }
        // this.visitDetailsData = res.body
      })
    },
    //网格工作预警区域
    getGridWarningArea() {
      const params = {
        orgId: 4583,
        dataTime: this.monthType,
        tab: this.currentIndexs,
      }
      this.gridWarningArea(params).then(res => {
        this.tabTwoValue = res.body
        this.tabTwoValue[0].name = '全部'
        this.selectOrgId = res.body[0].orgId
        this.getGridWarningList()
      })
    },
    //网格工作预警列表
    getGridWarningList() {
      const params = {
        orgId: this.selectOrgId,
        dataTime: this.monthType,
        tab: this.currentIndexs,
        pageNum: this.page,
        pageSize: 20,
      }
      this.gridWarningList(params).then(res => {
        this.total = res.body.list.length
        this.personList = this.getPersonList(res.body.list)
      })
    },
    slideLeft() {
      this.index++
      if (this.index > this.tabOneValue.length) {
        this.style = {
          left: `${this.$refs.tabWrapper.querySelector('li:nth-of-type(1)').offsetLeft}px`,
        }
        this.index = 1
      } else {
        this.style = {
          left: `${-this.$refs.tabWrapper.querySelector(`li:nth-of-type(${this.index})`).offsetLeft}px`,
        }
      }
    },
    slideRight() {
      if (this.index > 1 && this.tabOneValue.length > 0) {
        this.index--
        this.style = {
          left: `${-this.$refs.tabWrapper.querySelector(`li:nth-of-type(${this.index})`).offsetLeft}px`,
        }
      }

    },
    getTabValue(id) {
      console.log(id, 'id')
      this.selectOrgId = id.orgId
      this.getGridWarningList()

    },
    changeIndex(index, data) {
      this.currentIndexs = index
      console.log(data)
      this.tabIndex = 0
      this.getGridWarningType()
      this.getGridWarningArea()
      // this.getGridWarningList()
    },
    changePage(page) {
      console.log('1111', page)
      this.page = page
      this.getGridWarningList()

    },
    getPersonList(data) {
      const rst = []
      data.forEach(item => {
        rst.push({
          textArr: [
            item.name,
            item.orgName,
            item.orgFullName,
            item.mobile,
          ],
          data: item,
        })
      })
      return rst
    },
    ...mapActions('screen/gridManagement', ['gridWarningType',
      'gridWarningArea', 'gridWarningList']),
  },
}
</script>
<style lang='scss' scoped>
.visit-details {
  width: 100%;
  height: 100%;
  .tab-box{
    display: flex;
    align-items: center;
    padding-bottom: 40px;
    cursor: pointer;
    ul {
      padding: 0
    }
    ul li {
      list-style: none;
    }
    .tab{
      display: flex;
      width: 100%;
      overflow: hidden;
      ul{
        position: relative;
        color: #71E3FF;
        // overflow: hidden;
        // width:500px;
        display: flex;
        transition: All 0.4s ease-out;
        -webkit-transition: All 0.4s ease-out;
        -moz-transition: All 0.4s ease-out;
        -o-transition: All 0.4s ease-out;
        li {
          // display: inline-block;
          height: 60px;
          line-height: 60px;
          white-space: nowrap;
          text-align: center;
          font-size: 34px;
          font-family: FZLanTingHei-M-GBK Regular, FZLanTingHei-M-GBK Regular-Regular;
          font-weight: 400;
          text-align: center;
          padding: 0 30px;
        }
        .tab-name-active{
            color: #fff;
            border-bottom: 4px solid #CEF7FF;
            border-radius: 2px;
          }
      }
    }
    .slide-left-icon{
        margin: 0 40px;
        height: 40px;
        width: 80px;
        transform:rotate(180deg);
      }
      .slide-right-icon{
        margin: 0 40px;
        height: 40px;
        width: 80px;
      }
  }

  .body-box{
    display: flex;
    .box-left{
      // background: rgb(60, 24, 107);
      padding-right: 60px;;
      .inner-box{
        margin-bottom: 60px;
        height: 276px;
        width: 550px;
        display: flex;
        align-items: center;
        background-image: linear-gradient(to right, rgba(29,143,194,0.9) 0% , rgba(34,55,103,0.9) 100%);
        img{
          height:110px;
          width:110px;
          margin:0 40px;
        }
        .inner-box-item{
          font-weight: 400;
          padding-right:20px;
          .inner-box-item-title{
            font-size: 40px;
            font-family: FZLanTingHei-M-GBK Regular, FZLanTingHei-M-GBK Regular-Regular;
            color: #b8f2ff;
          }
          .inner-box-item-num{
            font-size: 46px;
            font-family: FZLanTingHeiS-DB1-GBK Regular, FZLanTingHeiS-DB1-GBK Regular-Regular;
            color: #f7faff;
            letter-spacing: 2px;
          }
        }
      }
    }
    .box-right{
      width: 100%;
      .box-right-tab{
        padding: 20px 0;
      }
      .person-list{
        padding-top: 10px;
        height: 820px;
      }
      .bottom{
        padding-top: 50px;
        display: flex;
        justify-content: center;
      }
      .my-page {
        margin-bottom: 15px;
        padding-left: 20px;
        box-sizing:border-box;
        margin-top: 0px;
        /deep/ .ivu-page-prev, /deep/ .ivu-page-next {
          background-color: transparent;
          a {
            font-size: 28px;
            color: #C7DDF9;
          }
        }
        /deep/ .ivu-page-item {
          background-color: transparent;
          border: none;
          a {
            font-size: 32px;
            color: #91ADD3;
          }
          &.ivu-page-item-active {
            a {
              color: #fff;
            }
          }
        }
      }
    }

  }
}
</style>