<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-08-04 11:25:09
 * @LastEditTime: 2020-08-13 14:00:30
-->
<template>
  <modal-page :modalScale="[4800,1500]" v-model="showModals">
    <div class="key-petitioners">
      <div class="petitioners-top">
        <div class="level-img">
          <ul>
            <li>
              <p>关注程度</p>
              <p style="color:#FE324A">{{serviceMessageData&&serviceMessageData.关注程度}}</p>
            </li>
            <li>
              <p>本月是否有走访</p>
              <p>{{serviceMessageData&&serviceMessageData.本月是否有走访}}</p>
            </li>
            <li>
              <p>本月是否有事件</p>
              <p>{{serviceMessageData&&serviceMessageData.本月是否有事件}}</p>
            </li>
          </ul>
          <img :src="`http://2.82.4.201:8080/${imgList}`" alt="" v-if="imgList">
          <img src="@/assets/imgs/33.png" alt v-else>
        </div>
        <div class="base-info">
          <title-box title="基本信息">
            <div class="base-info-box">
              <div class="base-text">
                <Row>
                  <Col span="11">
                    <div class="line">
                      <p>姓名：</p>
                      <p>{{memberBaseinfo&&memberBaseinfo.name}}</p>
                    </div>
                  </Col>
                  <Col span="1">
                    <div class="line" />
                  </Col>
                  <Col span="12">
                    <div class="line">
                      <p>身份证号：</p>
                      <p>{{memberBaseinfo&&memberBaseinfo.idCardNo}}</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span="11">
                    <div class="line">
                      <p>联系电话：</p>
                      <p>{{memberBaseinfo&&memberBaseinfo.mobilenumber}}</p>
                    </div>
                  </Col>
                  <Col span="1">
                    <div class="line" />
                  </Col>
                  <Col span="12">
                    <div class="line">
                      <p>婚姻状况：</p>
                      <p>{{memberBaseinfo&&memberBaseinfo.maritalState}}</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <div class="line">
                      <p>住址：</p>
                      <p>{{memberBaseinfo&&memberBaseinfo.currentAddress}}</p>
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
                  <Col span="24">
                    <div class="line">
                      <p>工作单位：</p>
                      <p>{{memberBaseinfo&&memberBaseinfo.workunit}}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </title-box>
          <title-box title="业务信息">
            <div class="base-info-box">
              <div class="base-text">
                <Row>
                  <Col span="24">
                    <div class="line">
                      <p>事发地：</p>
                      <p>{{serviceMessageData&&serviceMessageData.事发地}}</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <div class="line">
                      <p>上访类型：</p>
                      <p>{{serviceMessageData&&serviceMessageData.上访类型}}</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <div class="line">
                      <p>上访原因：</p>
                      <p>{{serviceMessageData&&serviceMessageData.信访原因}}</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col span="24">
                    <div class="line">
                      <p>上访状态：</p>
                      <p>{{serviceMessageData&&serviceMessageData.上访状态}}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </title-box>
          <title-box title="监护/工作人员信息">
            <div class="tab-toggle">
              <ul>
                <li
                  :class="{active:currentIndex===index}"
                  v-for="(item,index) in tabList"
                  :key="index"
                  @click="Tutelage(item,index)">
            {{item.name}}
          </li>
              </ul>
            </div>
            <div class="work-message">
              <scroll-list :source="workTabList" :tableHeader="tableHeader"></scroll-list>
            </div>
          </title-box>
        </div>
      </div>
      <div class="petitioners-bottom">
        <title-box title="关联事件信息">
          <div class="scroll-container">
            <scroll-list :source="eventTableList" :tableHeader="tableHeaderEvent"></scroll-list>
          </div>
        </title-box>
        <title-box title="服务走访信息">
          <div class="scroll-container">
            <scroll-list :source="serverTableList" :tableHeader="tableHeaderServe"></scroll-list>
          </div>
        </title-box>
        <title-box title="上访记录">
          <div class="scroll-container">
            <scroll-list :source="petitioningTableList" :tableHeader="tableHeaderPetitioning"></scroll-list>
          </div>
        </title-box>
      </div>
    </div>
  </modal-page>
</template>

<script>
import { mapActions } from 'vuex'
import scrollList from '../components/scroll-list'
// import workTabListJson from '@/assets/mock/visit-work-message.json'
// // import petitioningTableListJson from '@/assets/mock/petitioning-message.json'
// import serverTableListJson from '@/assets/mock/serve-visit-message.json'
// import eventTableListJson from '@/assets/mock/relate-work-message.json'
export default {
  components: {
    scrollList,
  },
  // props: {
  //   showModal: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  data() {
    return {
      baseinfoId: '',
      showModals: false,
      currentIndex: 0,
      tabList: [
        {
          name: '监护人员',
        },
        {
          name: '工作人员',
        },
      ],
      memberId: '100000000331896', //重点上访人员id
      memberBaseinfo: {}, //基础信息
      imgList: '',
      serviceMessageData: {}, //业务信息

      eventTableList: [], //关联事件信息

      serverTableList: [], //服务走访信息

      workTabListData: {}, //监护/工作人员信息
      workTabList: [], //监护/工作人员信息

      petitioningTableList: [], // 上访记录
      tableHeader: [],
      tableHeaderJ: [
        {
          name: '姓名',
          width: 50,
        },
        {
          name: '性别',
          width: 50,
        },
        {
          name: '职务',
          width: 80,
        },
        {
          name: '联系手机',
          width: 100,
        },
        {
          name: '省份证',
          width: 100,
        },
      ],
      tableHeaderG: [
        {
          name: '姓名',
          width: 50,
        },
        {
          name: '性别',
          width: 50,
        },
        {
          name: '机构名称',
          width: 50,
        },
        {
          name: '岗位',
          width: 80,
        },
        {
          name: '职务',
          width: 80,
        },


      ],
      tableHeaderEvent: [
        {
          name: '事件标题',
          width: 5,
        },
        {
          name: '事件来源',
          width: 5,
        },
        {
          name: '类型',
          width: 4,
        },
        {
          name: '内容',
          width: 8,
        },
        {
          name: '附件',
          width: 5,
        },
      ],
      tableHeaderServe: [
        {
          name: '时间',
          width: 5,
        },
        {
          name: '地点',
          width: 5,
        },
        {
          name: '内容',
          width: 6,
        },
        {
          name: '走访人',
          width: 4,
        },
        {
          name: '附件',
          width: 5,
        },
      ],
      tableHeaderPetitioning: [
        {
          name: '上访时间',
          width: 1,
        },
        {
          name: '上访类型',
          width: 1,
        },
        {
          name: '上访地址',
          width: 1,
        },
        {
          name: '上访状态',
          width: 1,
        },
        {
          name: '上访原因',
          width: 1,
        },
        {
          name: '影响程度',
          width: 1,
        },
        {
          name: '主要诉求',
          width: 1,
        },
      ],
    }
  },
  mounted() {
    // this.workTabList = workTabListJson
    // this.eventTableList = eventTableListJson
    // this.serverTableList = serverTableListJson
    // this.petitioningTableList = serverTableListJson

  },
  methods: {
    show(poi) {
      console.log(poi, '重点上访人员poi')
      this.showModals = true
      this.memberId = poi.businessId
      this.baseinfoId = poi.baseinfoid ? poi.baseinfoid : poi.businessId
      this.tableHeader = this.tableHeaderJ
      this.getKeyPetitionMessage()
      this.getKeyPetitionServiceMessage()
      this.getTutelageWorkMessage()
      this.getRelatedEventsMessage()
      this.getServiceVisitMessage()
      this.getPetitionersRecordMessage()
    },
    //重点上访人员基础信息
    getKeyPetitionMessage() {
      const params = {
        id: this.baseinfoId,
      }
      this.keyPetitionMessage(params).then(res => {
        this.memberBaseinfo = res.body
        this.imgList = res.body ? res.body.imgurl : ''
        // console.log(res, '------------------')
      })
    },
    //业务信息
    getKeyPetitionServiceMessage() {
      const params = {
        id: this.memberId,
        keyWord: 'superiorVisit',
      }
      this.keyPetitionServiceMessage(params).then(res => {
        this.serviceMessageData = res.body
        // console.log(res, '-------------111-----')
      })
    },
    //监护/工作人员信息tab切换
    Tutelage(data, index) {
      console.log(data)
      this.currentIndex = index
      if (data.name === '监护人员') {
        this.workTabList = []
        this.tableHeader = this.tableHeaderJ
        this.workTabListData.guardian.forEach((item) => {
          this.workTabList.push({
            'memberName': item.memberName,
            'gender': item.gender,
            'basePosition': item.basePosition,
            'mobile': item.mobile,
            'idCardNo': item.idCardNo,
          })
        })
      } else if (data.name === '工作人员') {
        this.workTabList = []
        this.tableHeader = this.tableHeaderG
        this.workTabListData.staff.forEach((item) => {
          this.workTabList.push({
            'memberName': item.memberName,
            'gender': item.gender,
            'teamName': item.teamName,
            'baseJob': item.baseJob,
            'basePosition': item.basePosition,
          })
        })
      }
    },
    //监护/工作人员信息
    getTutelageWorkMessage() {
      const params = {
        id: this.memberId,
        keyWord: 'superiorVisit',
      }
      this.tutelageWorkMessage(params).then(res => {
        this.workTabList = []
        res.body.guardian.forEach((item) => {
          this.workTabList.push({
            'memberName': item.memberName,
            'gender': item.gender,
            'basePosition': item.basePosition,
            'mobile': item.mobile,
            'idCardNo': item.idCardNo,
          })
        })
        this.workTabListData = res.body
      })
    },
    // 关联事件信息
    getRelatedEventsMessage() {
      const params = {
        pageNum: 1,
        pageSize: 10000,
        baseInfoId: this.memberId,
        dataType: 'month',
      }
      this.relatedEventsMessage(params).then(res => {
        this.eventTableList = []
        res.body.list.forEach(item => {
          this.eventTableList.push({
            title: item.title,
            sourceName: item.sourceName,
            issueType: item.issueType,
            content: item.content,
            attachFiles: item.attachFiles,
          })
        })
      })
    },
    // 服务走访信息
    getServiceVisitMessage() {
      const params = {
        orgCode: '.1.6.4.',
        objectId: this.memberId,
        objectType: 'positiveInfo',
        pageNum: 1,
        pageSize: 20,
      }
      this.serviceVisitMessage(params).then(res => {
        this.serverTableList = []
        res.body.list.forEach(item => {
          this.serverTableList.push({
            occurDate: item.occurDate,
            occurPlace: item.occurPlace,
            serviceContent: item.serviceContent,
            serviceMembers: item.serviceMembers,
            attachments: item.attachments,
            // attachments: item.attachments.length > 0 ? item.attachments[0].fileName : '',
          })
        })
        // console.log(this.serverTableList, 'this.serverTableList')
      })
    },
    //上访记录
    getPetitionersRecordMessage() {
      const params = {
        id: this.memberId,
      }
      this.petitionersRecordMessage(params).then(res => {
        this.petitioningTableList = []
        res.body.list.forEach(item => {
          this.petitioningTableList.push({
            superiorvisitsDate: item.superiorvisitsDate,
            superiorvisitsSubjectType: item.superiorvisitsSubjectType,
            superiorvisitsPlace: item.superiorvisitsPlace,
            superiorvisitsType: item.superiorvisitsType,
            superiorvisitsReason: item.superiorvisitsReason,
            influenceDegree: item.influenceDegree,
            appeal: item.appeal,
          })
        })
      })
    },

    ...mapActions('screen/gridManagement', ['keyPetitionMessage',
      'keyPetitionServiceMessage', 'tutelageWorkMessage',
      'relatedEventsMessage', 'serviceVisitMessage', 'petitionersRecordMessage']),
  },
}
</script>

<style lang='scss' scoped>
.key-petitioners {
  width: 100%;
  height: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  .petitioners-top {
    display: flex;
    align-items: center;
    height: 550px;
    // background: cyan;
    > div.base-info {
      flex: 1;
      display: inline-grid;
      grid-template-columns: 1fr 1fr 1fr;
      height: 100%;
      margin-left: 70px;
      grid-column-gap: 50px;
    }
    .level-img {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      > img {
        width: 518px;
        height: 548px;
      }
      > ul {
        margin-right: 70px;
        li {
          width: 366px;
          height: 158px;
          background: url("../../../../../../assets//imgs//im.png") no-repeat;
          background-size: 100% 100%;
          margin-bottom: 30px;
          &:last-of-type {
            margin-bottom: 0px;
          }
          padding: 30px;
          box-sizing: border-box;
          p {
            &:first-of-type {
              font-size: 20px;
              font-family: FZLanTingHeiS-DB1-GBK Regular,
                FZLanTingHeiS-DB1-GBK Regular-Regular;
              font-weight: 400;
              text-align: left;
              color: #78f2f6;
            }
            &:last-of-type {
              font-size: 26px;
              font-family: FZLanTingHeiS-DB1-GBK Regular,
                FZLanTingHeiS-DB1-GBK Regular-Regular;
              font-weight: bolder;
              text-align: center;
              color: #ffffff;
              margin-top: 20px;
              letter-spacing: 5px;
            }
          }
        }
      }
    }
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
          grid-template-columns: 160px 1fr;
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
    .tab-toggle {
      margin-top: 20px;
      position: absolute;
      right: 52px;
      top: -17px;
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
    .work-message {
      width: 100%;
      height: 485px;
    }
  }
  .petitioners-bottom {
    width: 100%;
    margin-top: 50px;
    display: inline-grid;
    grid-template-columns: minmax(500px, 1fr) minmax(500px, 1fr) minmax(500px, 1fr);
    grid-column-gap: 50px;
    .scroll-container {
      height: 680px;
      overflow: hidden;
    }
  }
}
</style>