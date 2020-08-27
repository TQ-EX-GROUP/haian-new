<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-04 09:02:51
 * @LastEditTime: 2020-08-13 11:21:50
-->
<template>
  <div class="grid-month-work">
    <div class="tab">
      <ul>
        <li
          :class="{active:currentIndex===index}"
          v-for="(item,index) in tabList"
          :key="index"
          @click="selectTab(item,index)">
          {{item.name}}
          </li>
      </ul>
    </div>
    <div class="data-card">
      <ul>
        <li v-for="(item,index) in cardList" :key="index">
          <img :src="cardImgList[index]" alt>
          <span>{{item.name}}</span>
          <span>{{item.value}}</span>
          <div class="line" v-if="index<cardList.length-1" />
        </li>
      </ul>
    </div>
    <div class="scroll-list">
      <div class="table-header">
        <ul>
          <li v-for="(item,index) in tableHeader" :key="index">{{item.name}}</li>
        </ul>
      </div>
      <vue-seamless-scroll :data="tableSource" class="scroll-box">
        <ul>
          <li v-for="(item,index) in tableSource" :key="index">
            <span>{{item.occurDate}}</span>
            <span>{{item.occurPlace}}</span>
            <span>{{item.serviceMembers}}</span>
            <span>{{item.objectType}}</span>
            <span>{{item.serviceContent}}</span>
            <span>
              <img
              v-if="item.attachments&&item.attachments.length>0"
                src="@/assets/imgs/file.png"
                @mouseenter="showImg(item.attachments)"
                alt>
               <span v-else>无附件</span>

            </span>
          </li>
        </ul>
      </vue-seamless-scroll>
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
    <!-- //弹窗 -->
    <modal-page :modalScale="[2700,500]" v-model="showModal">
      <div class="leftImg" @mouseleave="showModal=false">
        <Icon
          type="ios-arrow-back"
          size="70"
          v-if="dataLists.length>0&&prevShow"
          @click="prv" />
        <div v-else style="width:50px" />
        <div class="proview">
          <ul :style="`transform:translateX(${transNum}px)`">
            <li v-for="(item,index) in dataLists" :key="index">
              <img :src="`http://2.82.4.201:8080/${item.fileActualUrl}`" alt>
            </li>
          </ul>
        </div>
        <Icon
        type="ios-arrow-forward"
        size="70"
        v-if="dataLists.length>5&&backShow"
        @click="back" />
      </div>
    </modal-page>
  </div>
</template>

<script>
import VueSeamLessScroll from 'vue-seamless-scroll'
export default {
  components: {
    VueSeamLessScroll,
  },
  props: {
    tabList: {
      type: Array,
      default: () => '[]',
    },
    tableSource: {
      type: [Array, Object],
      // default: () => '[]',
    },
  },
  data() {
    return {
      prevShow: false,
      backShow: true,
      clickNum: 0, //有效点击次数
      transNum: 0, //移动距离
      showModal: false,
      currentIndex: 0,
      total: 30,
      cardImgList: [
        require('@/assets/imgs/work1.png'),
        require('@/assets/imgs/work2.png'),
        require('@/assets/imgs/work3.png'),
      ],
      cardList: [
        {
          name: '人员数',
          value: 32,
        },
        {
          name: '本月已走访量',
          value: 32,
        },
        {
          name: '走访进度',
          value: '32%',
        },
      ],
      tableHeader: [
        {
          name: '服务时间',
        },
        {
          name: '服务地点',
        },
        {
          name: '服务对象',
        },
        {
          name: '服务类型',
        },
        {
          name: '内容',
        },
        {
          name: '附件',
        },
      ],
      cuurentTabType: '', //选择的tab
      page: 1,
      dataLists: [
        {
          imgUrl: require('@/assets/imgs/33.png'),
        },
        {
          imgUrl: require('@/assets/imgs/33.png'),
        },
        {
          imgUrl: require('@/assets/imgs/33.png'),
        },
        {
          imgUrl: require('@/assets/imgs/33.png'),
        },
        {
          imgUrl: require('@/assets/imgs/33.png'),
        },
        {
          imgUrl: require('@/assets/imgs/33.png'),
        },
      ],
    }
  },
  watch: {
    tableSource: {
      handler(newVal) {
        this.total = newVal.length
      },
      deep: true,
    },
    tabList: {
      handler(newVal) {
        this.initCardList(newVal[0])
        this.cuurentTabType = newVal[0].name
      },
      deep: true,
    },
  },
  mounted() {},
  methods: {
    showImg(data) {
      console.log(data, '------data-')
      this.dataLists = data
      this.showModal = true
    },
    //向前翻页
    prv() {
      if (this.clickNum !== 0) {
        this.backShow = true
        // this.transNum = 0
        this.clickNum = this.clickNum - 1
        this.transNum = -(Math.abs(this.transNum) - 5 * 450)
        if (this.clickNum === 0) {
          this.clickNum = 0
          this.prevShow = false
        }
      } else {
        this.clickNum = 0
        this.prevShow = false
      }
    },
    //向后翻页
    back() {
      const fg = Math.ceil((this.dataLists.length * 450) / (5 * 450))
      if (this.clickNum + 1 < fg) {
        this.prevShow = true
        this.transNum = -5 * 450 * (this.clickNum + 1)
        this.clickNum = this.clickNum + 1
        if (this.clickNum + 1 === fg) {
          this.backShow = false
        }
      }
    },
    //分页改变
    changePage(page) {
      this.page = page
      this.$emit('changeList', { page: this.page, type: this.cuurentTabType })
    },
    //tab选择
    selectTab(data, index) {
      this.currentIndex = index
      this.initCardList(data)
      this.cuurentTabType = data.name
      this.$emit('changeList', { page: this.page, type: this.cuurentTabType })
    },
    //获取网格员工作情况统计
    initCardList(data) {
      this.cardList = [
        {
          name: '人员数',
          value: data.target,
        },
        {
          name: '本月已走访量',
          value: data.complete,
        },
        {
          name: '走访进度',
          value: `${
            data.target === 0 ?
              0 :
              Number((data.complete * 100) / data.target).toFixed(1)
          }%`,
        },
      ]
    },
  },
}
</script>

<style lang='scss' scoped>
.leftImg {
  width: 100%;
  display: flex;
  height: 500px;
  align-items: center;
  justify-content: center;
  padding:100px;
  padding-right:140px;
  position: absolute;

  .ivu-icon {
    width: 15px;
    cursor: pointer;
    z-index: 222;
    margin-top: 30px;
    font-size: 20px;
    font-weight: bolder;
    &:first-child {
      margin-right: 15px;
    }
    &:last-child {
      margin-left: 15px;
    }
  }
  .proview {
    // background: cyan;
    height: 400px;
    margin: 0 80px;
    width: 2700px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    ul {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      li {
        margin-right: 30px;
        &:last-of-type {
          margin-right: 0px;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          height: 400px;
          width: 420px;
        }
      }
    }
  }
}
.grid-month-work {
  widows: 100%;
  height: 830px;
  .tab {
    margin-top: 20px;
    ul {
      display: flex;
      li {
        cursor: pointer;
        font-size: 25px;
        font-family: FZLanTingHeiS-R-GB Regular,
          FZLanTingHeiS-R-GB Regular-Regular;
        font-weight: 400;
        text-align: center;
        color: #24a7ff;
        padding: 0 50px;
        height: 50px;
        letter-spacing: 5px;
        line-height: 50px;
        background: #070f24;
        border: 1px solid #24a7ff;
        &:first-of-type {
          border-radius: 16px 0px 0px 16px;
        }
        &:last-of-type {
          border-radius: 0px 16px 16px 0px;
        }
      }
      .active {
        color: #fff;
        background: #24a7ff;
      }
    }
  }
  .data-card {
    ul {
      display: flex;
      align-items: center;
      height: 120px;
      li {
        flex: 1;
        margin-right: 80px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img {
          //  margin-right: 50px;
        }
        span {
          &:first-of-type {
            font-size: 28px;
            font-family: Source Han Sans CN Normal,
              Source Han Sans CN Normal-Normal;
            font-weight: Normal;
            text-align: left;
            color: #ffffff;
            margin: 0 100px;
          }
          &:last-of-type {
            background: linear-gradient(#ffffff 0%, #71d7ff 100%);
            font-size: 40px;
            font-family: FZLanTingHei-M-GBK Regular,
              FZLanTingHei-M-GBK Regular-Regular;
            font-weight: bolder;
            text-align: right;
            color: #24a7ff;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
      .line {
        position: absolute;
        right: -50px;
        width: 5px;
        height: 50px;
        background: linear-gradient(#070f24 0%, #71d7ff 100%);
      }
    }
  }
  .scroll-list {
    height: 650px;
    overflow: hidden;
    .table-header {
      ul {
        display: flex;
        width: 100%;
        align-items: center;
        height: 81px;
        background: #24a7ff;
        li {
          flex: 1;
          padding-left: 50px;
          box-sizing: border-box;
          font-size: 30px;
          font-family: FZLanTingHei-M-GBK Regular,
            FZLanTingHei-M-GBK Regular-Regular;
          font-weight: bold;
          text-align: left;
          color: #ffffff;
          letter-spacing: 5px;
        }
      }
    }
    .scroll-box {
      height: calc(100% - 131px);
      overflow: hidden;
      cursor: pointer;
      position: relative;
      ul {
        > li {
          height: 95px;
          display: flex;
          align-items: center;
          > span {
            letter-spacing: 5px;
            flex: 1;
            padding-left: 50px;
            font-size: 25px;
            font-family: PingFang SC Regular, PingFang SC Regular-Regular;
            font-weight: 400;
            text-align: left;
            color: #d5def7;

            > img {
              margin-right: 10px;
            }
          }
          &:nth-child(even) {
            background: rgba(255, 255, 255, 0.1);
            span {
              color: #72aeea;
            }
          }
        }
      }
    }
  }
  .bottom {
    // padding-top: 50px;
    display: flex;
    height: 90px;
    align-items: center;
    justify-content: center;
  }
  .my-page {
    margin-bottom: 15px;
    padding-left: 20px;
    box-sizing: border-box;
    margin-top: 0px;
    /deep/ .ivu-page-prev,
    /deep/ .ivu-page-next {
      background-color: transparent;
      a {
        font-size: 28px;
        color: #c7ddf9;
      }
    }
    /deep/ .ivu-page-item {
      background-color: transparent;
      border: none;
      a {
        font-size: 32px;
        color: #91add3;
      }
      &.ivu-page-item-active {
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>