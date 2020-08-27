<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-04 14:36:09
 * @LastEditTime: 2020-08-13 11:21:17
-->
<template>
  <div class="scroll-list">
     <div class="table-header">
        <ul>
          <li
          v-for="(item,index) in tableHeader"
          :key="index"
          :title="item.name"
          :style="{'flex':`${item.width}`}">
          {{item.name}}
          </li>
        </ul>
      </div>
      <vue-seamless-scroll :data="sourceData" class="list" v-if="sourceData.length>0">
        <ul>
          <li v-for="(item,index) in sourceData" :key="index">
            <span
            :style="{flex:`${flexWidth[indexs]}`}"
            v-for="(itm,indexs) in item"
            :key="indexs">
            <span v-if="Object.prototype.toString.call(itm) === '[object Array]'">
              <img
              v-if="itm.length>0"
              src="@/assets/imgs/file.png"
              alt=""
              @mouseenter="showImg(itm)">
              <span style="margin:0;padding:0;" v-else>无附件</span>
            </span>
            <span v-else :title="itm">{{itm}}</span>
            </span>
          </li>
        </ul>
      </vue-seamless-scroll>
      <p v-else class="noDate">暂无数据</p>
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
    source: {
      type: Array,
      default: () => [

      ],
    },
    tableHeader: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      prevShow: false,
      backShow: true,
      clickNum: 0, //有效点击次数
      transNum: 0, //移动距离
      showModal: false,
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
  computed: {
    sourceData() {
      const dataArr = []
      this.source.forEach(item => {
        dataArr.push(Object.values(item))
      })
      return dataArr
    },
    flexWidth() {
      return this.tableHeader.map((item) => {
        return item.width
      })
    },
  },
  mounted() {
    // console.log(this.source, 'this.source')
  },
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
.scroll-list{
  width:100%;
  height:100%;
  padding:20px 0;
  .table-header{
    ul{
      display: flex;
      align-items: center;
      background: rgba(18,66,108,0.3);
      height:80px;
      width:100%;
      li{
        font-size: 28px;
        font-family: FZLanTingHei-M-GBK Regular, FZLanTingHei-M-GBK Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        padding-left:30px;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .list{
    cursor: pointer;
    height:calc(100% - 60px);
    overflow: hidden;
    ul{
      li{
        display: flex;
        align-items: center;
        height: 80px;
        line-height: 80px;
        font-size: 25px;
        font-family: PingFang SC Regular, PingFang SC Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #d5def7;
        >span{
         flex:1;
         padding-left:30px;
         letter-spacing: 5px;
         white-space: nowrap;
         text-overflow: ellipsis;
         overflow: hidden;
         >img{
           margin-right:5px;
         }
        }
        &:nth-child(even){
          background: rgba(255,255,255,0.06);
          span{
          color: #72aeea;
          }
        }
      }
    }
  }
  .noDate{
    font-size: 30px;
    color:#fff;
    font-weight: bold;
    text-align: center;
    line-height: 70px;
  }
}
</style>