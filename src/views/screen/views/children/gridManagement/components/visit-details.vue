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
              :class="currentIndexs === index? 'tab-name-active':''"
              v-for="(item, index) in tabOneValue"
              @click="changeIndex(index, item)"
              :key="index">
               {{item.name}}
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
        <div class="inner-box">
          <img src="../../../../../../assets/imgs/person-num.png">
          <div class="inner-box-item">
            <p class="inner-box-item-title">人员数</p>
            <p class="inner-box-item-num">{{visitDetailsData.target}}</p>
          </div>
        </div>
        <div class="inner-box">
          <img src="../../../../../../assets/imgs/visit-num.png">
          <div class="inner-box-item">
            <p class="inner-box-item-title">本月已走访人数</p>
            <p class="inner-box-item-num">{{visitDetailsData.server}}</p>
          </div>
        </div>
        <div class="inner-box">
          <img src="../../../../../../assets/imgs/visit-schedule.png">
          <div class="inner-box-item">
            <p class="inner-box-item-title">本月走访进度</p>
            <p class="inner-box-item-num">{{visitDetailsData.pre}}%</p>
          </div>
        </div>
      </div>
      <div class="box-right">
        <div class="box-right-tab">
          <dialog-switch-tab
          v-model="tabIndex"
          :source="tabTwoValue"
          @getTabValue="getTabValue"></dialog-switch-tab>
        </div>
        <div class="person-list">
          <scroll-list-two :source="personList" :header="currentHeader"></scroll-list-two>
        </div>
        <div class="bottom">
          <Page
            class-name="my-page"
            @on-change="changePage"
            :page-size="20"
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
  },
  data() {
    return {
      tabIndex: 0, //区域选中index
      currentIndexs: 0,
      currentDatatype: '',
      selectOrgId: '',
      tabOneValue: [], //顶部类型
      tabTwoValue: [], //区域类型
      visitDetailsData: {}, //左侧统计
      page: 1,
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
      headerR: [
        {
          des: '租房人姓名',
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
          des: '租房用途',
          flex: 17,
        },
      ],
      currentHeader: [],
      clickeIndex: 0,
      personList: [],
      total: 0,
      isShow: true,
      style: {},
      index: 1,
    }
  },
  created() {
    this.getMonthServiceRate()
  },
  methods: {
    init() {
      this.$nextTick(() => {
        const firstLi = this.$refs.tabWrapper.querySelector('li:nth-of-type(1)')
        this.style = {
          left: `${firstLi.offsetLeft}px`,
        }
        const tabWidth = this.$refs.tab.clientWidth
        const tabWrapperWidth = this.$refs.tabWrapper.clientWidth
        this.isShow = !((tabWidth > tabWrapperWidth))
      })
    },
    //本月服务率类型
    getMonthServiceRate() {
      const params = {
        orgId: 4583,
      }
      this.monthServiceRate(params).then(res => {
        this.currentDatatype = res.body[0]['dataType']
        this.tabOneValue = res.body
        // eslint-disable-next-line prefer-destructuring
        this.visitDetailsData = res.body[0]['areaList'][0]
        this.tabTwoValue = res.body[0].areaList
        this.tabTwoValue[0].orgName = '全部'
        this.selectOrgId = this.tabTwoValue[0].orgId
        this.getMonthServiceList()
        this.init()
      })
    },
    //本月服务率弹窗列表
    getMonthServiceList() {
      const params = {
        orgId: this.selectOrgId,
        keyWord: this.currentDatatype,
        page: this.page,
        pageSize: 20,
        isService: 1,
      }
      this.monthServiceList(params).then(res => {
        this.total = res.body.list.length
        this.currentHeader = this.header
        this.personList = this.getPersonList(res.body.list)
      })
    },
    //本月服务率弹窗列表-出租房、群租房
    getMonthServiceListR(type) {
      const params = {
        orgId: this.selectOrgId,
        limit: Number(type),
        page: this.page,
        pageSize: 20,
        isService: 1,
      }
      this.monthServiceListR(params).then(res => {
        this.total = res.body.list.length
        this.currentHeader = this.headerR
        this.personList = this.getPersonListR(res.body.list)
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
    //区域选择回调
    getTabValue(data) {
      this.page = 1
      this.selectOrgId = data.orgId
      // this.getMonthServiceList()
      if (this.currentDatatype === 'groupHouse') {
        this.getMonthServiceListR('1')
      } else if (this.currentDatatype === 'rentalHouse') {
        this.getMonthServiceListR('0')
      } else {
        this.getMonthServiceList()
      }

    },
    //类型切换
    changeIndex(index, data) {
      this.tabIndex = 0
      this.currentIndexs = index
      this.currentDatatype = data.dataType
      const aimData = this.tabOneValue.filter(item => {
        return item.dataType === data.dataType
      })
      // eslint-disable-next-line prefer-destructuring
      this.visitDetailsData = aimData[0]['areaList'][0]
      this.tabTwoValue = aimData[0].areaList
      this.tabTwoValue[0].orgName = '全部'
      this.selectOrgId = this.tabTwoValue[0].orgId
      if (this.currentDatatype === 'groupHouse') {
        this.getMonthServiceListR('1')
      } else if (this.currentDatatype === 'rentalHouse') {
        this.getMonthServiceListR('0')
      } else {
        this.getMonthServiceList()
      }
    },
    //页码改变
    changePage(page) {
      this.page = page
      // console.log('1111', page)
      // this.getMonthServiceList()
      if (this.currentDatatype === 'groupHouse') {
        this.getMonthServiceListR('1')
      } else if (this.currentDatatype === 'rentalHouse') {
        this.getMonthServiceListR('0')
      } else {
        this.getMonthServiceList()
      }

    },
    //筛选数据
    getPersonList(data) {
      const rst = []
      data.forEach(item => {
        rst.push({
          textArr: [
            item.name,
            item.orgName,
            item.currentAddress,
            item.mobilenumber,
          ],
        })
      })
      return rst
    },
    //筛选数据-出租房、群租房
    getPersonListR(data) {
      const rst = []
      data.forEach(item => {
        rst.push({
          textArr: [
            item.rentalPerson,
            item.orgName,
            item.address,
            item.rentalUse,
          ],
        })
      })
      return rst
    },
    ...mapActions('screen/gridManagement',
      ['monthServiceRate',
        'monthServiceList', 'monthServiceListR']),
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