<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-03 17:46:55
 * @LastEditTime: 2020-08-13 13:58:37
-->
<template>
  <!-- //弹窗 -->
  <modal-page :modalScale="[4400,1600]" v-model="showModals">
    <div class="grid-base">
      <div class="left-grid">
        <title-box title="网格员基本信息">
          <div class="base-info-box">
            <div class="base-img">
              <img :src="`http://2.82.4.201:8080/${memberBaseinfo.imgUrl?memberBaseinfo.imgUrl:''}`" alt="" v-if="memberBaseinfo&&memberBaseinfo.imgUrl">
              <img v-else src="@/assets/imgs/33.png" alt>
            </div>
            <div class="base-text">
              <Row>
                <Col span="11">
                  <div class="line">
                    <p>网格员：</p>
                    <p>{{memberBaseinfo&&memberBaseinfo.name}}</p>
                  </div>
                </Col>
                <Col span="1">
                  <div class="line" />
                </Col>
                <Col span="12">
                  <div class="line">
                    <p>职务：</p>
                    <p>{{memberBaseinfo&&memberBaseinfo.leaderGroup}}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span="24">
                  <div class="line">
                    <p>所属区域：</p>
                    <p>{{memberBaseinfo&&memberBaseinfo.orgName}}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span="11">
                  <div class="line">
                    <p>性别：</p>
                    <p>{{memberBaseinfo&&memberBaseinfo.gender}}</p>
                  </div>
                </Col>
                <Col span="1">
                  <div class="line" />
                </Col>
                <Col span="12">
                  <div class="line">
                    <p>联系电话：</p>
                    <p>{{memberBaseinfo&&memberBaseinfo.mobilePhone}}</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span="24">
                  <div class="line">
                    <p>省份证号：</p>
                    <p>{{memberBaseinfo&&memberBaseinfo.idcardNo}}</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </title-box>
        <title-box title="网格员本月工作情况">
          <grid-month-work
          :tabList="tabListData"
          :tableSource="tableSource"
          @changeList="changeList"></grid-month-work>
        </title-box>
      </div>
      <div class="right-grid">
        <title-box title="本月登录情况">
          <div class="login-siu">
            <ul>
              <li>
                <img src="@/assets/imgs/login1.png" alt>
                <div>
                  <p>登录天数</p>
                  <p>{{loginDeatil.length>0?loginDeatil[0].complete:0}}天</p>
                </div>
              </li>
              <li>
                <img src="@/assets/imgs/login2.png" alt>
                <div>
                  <p>登录率</p>
                  <p>{{loginDeatil.length>0?(loginDeatil[0].complete*100/loginDeatil[0].target):0}}%</p>
                </div>
              </li>
            </ul>
          </div>
        </title-box>
        <title-box title="本月轨迹情况">
          <div class="login-siu">
            <ul>
              <li>
                <img src="@/assets/imgs/trace1.png" alt>
                <div>
                  <p>轨迹时长</p>
                  <p>{{trailTotal.s?trailTotal.s:0}}天</p>
                </div>
              </li>
              <li>
                <img src="@/assets/imgs/trace2.png" alt>
                <div>
                  <p>轨迹历程</p>
                  <p>{{trailTotal.l?trailTotal.l:0}}Km</p>
                </div>
              </li>
            </ul>
          </div>
         <vue-seamless-scroll :data="listTrace" class="list-trace">
          <div class="login-list-trace">
            <ul>
              <li v-for="(item,index) in listTrace" :key="index">
                <p>{{item.startTime}} ～ {{item.endTime}}</p>
                <div class="detail-list">
                  <ul>
                    <!-- <li v-for="(it,index) in item.data" :key="index">
                      <p>{{it.name}}</p>
                      <p>{{it.value}}</p>
                    </li> -->
                    <li>
                      <p>历程</p>
                      <p>{{item.distance}}米</p>
                    </li>
                    <li>
                      <p>时长</p>
                      <p>{{item.inspectTime}}小时</p>
                    </li>
                    <li>
                      <p>采集量</p>
                      <p>{{item.issueReportNum}}件</p>
                    </li>
                    <li>
                      <p>事件办理</p>
                      <p>{{item.serviceRecordNum}}件</p>
                    </li>
                    </ul>
                  <div class="trace-button">
                    <button>轨迹回放</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          </vue-seamless-scroll>
        </title-box>
      </div>
    </div>
  </modal-page>
</template>

<script>
import { mapActions } from 'vuex'
import gridMonthWork from '../components/grid-month-work'
import VueSeamLessScroll from 'vue-seamless-scroll'
export default {
  components: {
    gridMonthWork,
    VueSeamLessScroll,
  },
  // props: {
  //   showModal: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      showModals: false,
      listTrace: [],
      memberId: '100000000331896', //网格员id
      baseinfoId: '',
      memberBaseinfo: {},
      tabListData: [],
      tableSource: [],
      page: 1,
      objectType: 'importantpersonnel', //本月工作情况tab类型
      loginDeatil: [],
      trailList: {},
      trailTotal: {
        s: '',
        l: '',
      },
    }
  },
  mounted() {},
  created() {

  },
  methods: {
    show(poi) {
      console.log(poi, '网格员poi')
      this.memberId = poi.businessId
      this.baseinfoId = poi.baseinfoid ? poi.baseinfoid : poi.businessId
      this.showModals = true
      this.getGridMemberMessage()
      this.getGridMemberWork()
      this.getGridMemberWorkList()
      this.getGridMemberTrail()
    },
    //网格员基础信息
    getGridMemberMessage() {
      const params = {
        id: this.memberId,
      }
      this.gridMemberMessage(params).then(res => {
        this.memberBaseinfo = res.body
      })
    },
    //网格员工作情况统计
    getGridMemberWork() {
      const params = {
        memberId: this.memberId,
        year: new Date().getFullYear(),
        // month: '06',
        month: (new Date().getMonth() + 1) < 10 ?
          `0${new Date().getMonth() + 1}` :
          new Date().getMonth() + 1,
      }
      this.gridMemberWork(params).then(res => {
        if (res.length === 0) {
          return
        }
        this.tabListData = res[0].detailList
        this.loginDeatil = res[1]['detailList']
      })
    },
    //网格员工作情况列表
    getGridMemberWorkList() {
      const params = {
        //
        // .1.6.1.10.1.10.//测试有数据
        orgCode: '.1.6.4.',
        gridMemberId: this.memberId,
        objectType: this.objectType,
        pageNum: this.page,
        pageSize: 10,
      }
      this.gridMemberWorkList(params).then(res => {
        // console.log(res, '-------------')
        this.tableSource = res.body.list
      })
    },
    //类型和页码更改
    changeList(obj) {
      this.page = obj.page
      this.objectType = this.typeTransfer(obj.type)
      this.getGridMemberWorkList()
    },
    //类型
    typeTransfer(data) {
      let obj = ''
      // eslint-disable-next-line default-case
      switch (data) {
        case '重点人员走访': {
          obj = 'importantpersonnel'
          break
        }
        case '出租房走访': {
          obj = 'rentalHouse'
          break
        }
        case '群租房走访': {
          obj = 'groupRental'
          break
        }
        case '空巢孤寡失助老人走访': {
          obj = 'elderlyPeople'
          break
        }
      }
      return obj
    },
    //网格员轨迹情况
    getGridMemberTrail() {
      const params = {
        userId: this.memberId,
      }
      this.gridMemberTrails(params).then(res => {
        this.listTrace = res.body
        const s = res.body.reduce((prev, cur) => {
          return prev + Number(cur.inspectTime)
        }, 0)
        const l = res.body.reduce((prev, cur) => {
          return prev + Number(cur.distance)
        }, 0)
        this.trailTotal = {
          s: Number(s / 24).toFixed(2),
          l: Number(l / 1000).toFixed(2),
        }
      })
    },
    ...mapActions('screen/gridManagement',
      ['gridMemberMessage',
        'gridMemberWork', 'gridMemberWorkList', 'gridMemberTrails']),
  },
}
</script>

<style lang='scss' scoped>
.grid-base {
  width: 100%;
  height: 100%;
  padding: 0px 30px;
  box-sizing: border-box;
  display: flex;
  .left-grid {
    flex: 6;
    margin-right: 50px;
    box-sizing: border-box;
    .base-info-box {
      display: flex;
      padding: 50px 10px;
      box-sizing: border-box;
      .base-img {
        width: 439px;
        height: 366px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .base-text {
        flex: 1;
        margin-left: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
        .line {
          width: 100%;
          display: inline-grid;
          grid-template-columns: 200px 1fr;
          margin-bottom: 20px;
          p {
            line-height: 70px;
            &:first-of-type {
              letter-spacing: 3px;
              font-size: 28px;
              font-family: Source Han Sans CN Regular,
                Source Han Sans CN Regular-Regular;
              font-weight: 400;
              text-align: left;
              color: #61affb;
            }
            &:last-of-type {
              background: rgba(255, 255, 255, 0.05);
              font-size: 28px;
              font-family: Source Han Sans CN Regular,
                Source Han Sans CN Regular-Regular;
              font-weight: 400;
              text-align: left;
              color: #fff;
              padding-left: 30px;
            }
          }
        }
      }
    }
  }
  .right-grid {
    flex: 4;
    .login-siu {
      ul {
        height: 180px;
        display: flex;
        align-items: center;
        li {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex: 1;
          > img {
            width: 148px;
            height: 88px;
            margin-left:50px;
          }
          > div {
            margin-left:100px;
            p {
              &:first-of-type {
                font-size: 28px;
                font-family: Source Han Sans CN Regular,
                  Source Han Sans CN Regular-Regular;
                font-weight: 400;
                text-align: left;
                color: #ffffff;
              }
              &:last-of-type {
                font-size: 36px;
                font-family: Source Han Sans CN Heavy,
                  Source Han Sans CN Heavy-Heavy;
                font-weight: bolder;
                text-align: left;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
    .list-trace{
      height: 235*4px;
      width:100%;
      overflow: hidden;
      cursor: pointer;
    }
    .login-list-trace{
     overflow: hidden;
      >ul{
          overflow: hidden;
        >li{
          margin-bottom: 20px;
          height:215px;
          background: url('../../../../../../assets/imgs/trace-bg.png') no-repeat;
          background-size: 100% 100%;
          >p{
            padding-left:50px;
            font-size: 30px;
            font-family: Source Han Sans CN Regular, Source Han Sans CN Regular-Regular;
            font-weight: 500;
            text-align: left;
            color: #ffffff;
            line-height: 70px;
          }
          >.detail-list{
             display: flex;
             align-items: center;
             height:calc(100% - 70px);
             ul{
               flex:1;
               display: flex;
               align-items: center;
               justify-content: center;
               li{
                 flex:1;
                 text-align: center;
                 p{
                   &:first-of-type{
                    font-size: 24px;
                    font-family: Source Han Sans CN Regular, Source Han Sans CN Regular-Regular;
                    font-weight: 400;
                    color: #47c2fc;
                    position: relative;
                    line-height: 50px;
                    &:before{
                      content:'';
                      position: absolute;
                      width:22px;
                      height: 18px;
                      background: url('../../../../../../assets/imgs/icon.png') no-repeat;
                      background-size: 100% 100%;
                      left:100px;
                      top:10px;
                    }
                   }
                   &:last-of-type{
                      font-size: 30px;
                      font-family: Source Han Sans CN Medium, Source Han Sans CN Medium-Medium;
                      font-weight: bolder;
                      color: #ffffff;
                   }
                 }
               }
             }
             .trace-button{

               width:200px;
               >button{
                cursor: pointer;
                font-size: 24px;
                font-family: Source Han Sans CN Bold, Source Han Sans CN Bold-Bold;
                font-weight: 700;
                color: #010a1a;
                background: url('../../../../../../assets/imgs/trace-b.png') no-repeat;
                background-size: 100% 100%;
                border:none;
                outline: none;
                padding:5px 30px;
                letter-spacing: 5px;
               }
             }
          }
        }
      }
    }
  }
}
</style>