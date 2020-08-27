<template>
  <div class="left-far">
    <!-- 整体数据 -->
    <!-- <div class="target-all">
      <div v-for="item in realPopulation.slice(0, 3)" :key="item.index"><i>{{item.value}}</i><span>{{item.name}}</span></div>
    </div> -->

    <!-- 指标数据 -->
    <!-- <div class="target">
      <div
        :class="`text${item.name.length} ${classNames[i]}`"
        v-for="(item,i) in realPopulation.slice(3, 7)"
        :key="i">
        <i>{{item.value}}</i>
        <span>{{item.name}}</span>
      </div>
      <div class="earth">
        <earth />
      </div>
    </div> -->
    <div class="warning-event">
       <title-box title="基础数据"></title-box>
       <ul class="warning-event-list">
         <li>
           <div :class="`event-0${index+1}`" v-for="(item,index) in realPopulation.slice(0, 2)" :key="index">
             <count-to
              ref="example1"
              :startVal="0"
              :endVal="item.value"
              :duration="3000"
              :autoplay="true"
              class="number"></count-to>
             <span class="name">{{item.name}}</span>
             <span class="dot dot1" />
             <span class="dot dot2" />
           </div>
         </li>
         <li>
            <div :class="`event-0${index+3}`" v-for="(item,index) in realPopulation.slice(2, 4)" :key="index">
           <count-to
              :startVal="0"
              ref="example2"
              :endVal="item.value"
              :duration="3000"
              :autoplay="true"
              class="number"></count-to>
             <span class="name">{{item.name}}</span>
             <span class="dot dot1" />
             <span class="dot dot2" />
           </div>
         </li>
       </ul>
   </div>

    <!-- 事件列表 -->
    <div class="event">
      <title-box title="预警事件"></title-box>
      <!-- <div class="event-header">
        <div class="title">重点事件列表</div>
        <div class="list-header">
          <span>事件列表</span>
          <span>发生时间</span>
        </div>
      </div> -->
      <div class="event-content">
      <div class="list-header">
          <span>事件列表</span>
          <span>发生时间</span>
        </div>
         <scroll-list :duration="3000" :data="eventList" :renderItem="renderItem" />
      </div>
    </div>
</div>
</template>
<script>
import Item from './item'
import countTo from 'vue-count-to'
export default {
  name: 'LeftFar',
  components: {
    countTo,
  },
  data() {
    return {
      // 循环的代码
      classNames: ['item  t l tl', 'item  t r tr', 'item  b l bl', 'item  b r br'],
      realPopulation: [], //指标数据
    }
  },
  computed: {
    userOrg() {
      return {
        id: '4583',
        orgInternalCode: '.1.6.4.',
      }
      // return this.$store.getters['globe/user/userOrg']
    },
    //获取存入store的预警事件数据
    eventList() {
      const list = this.$store.getters['screen/home/eventList']
      list.forEach((v, i) => {
        v.index = i + 1
      })
      return list
    },
  },
  mounted() {
    // 获取指标数据-数据
    this.getRealPopulation()
    // 获取指数数据
    this.getEventList()
  },
  methods: {
    renderItem(h, data) {
      return h(Item, {
        props: { info: data },
        on: {
          click: () => {
            // 点击事件列表  切换到近景 且 设置单前事件
            this.$store.commit('screen/home/updateShowFlag', 2)
            this.$store.commit('screen/home/updateCurEvent', data)
          },
        },
      })
    },
    //获取基础数据
    async getRealPopulation() {
      const rst =  await this.$store.dispatch('screen/home/getRealPopulationForBigScreen', {
        'actionId': 'getRealPopulationForBigScreen',
        'orgId': this.userOrg.id,
      })
      this.realPopulation = rst.data || []
    },
    //获取预警事件列表
    async getEventList() {
      const rst = await this.$store.dispatch('screen/home/getIssueListByOrgIntCode', {
        'actionId': 'getIssueListByOrgIntCode',
        'orgCode': this.userOrg.orgInternalCode,
        'page': '1',
        'size': '100',
        'configTypeName': 'issue',
      })
      console.log(rst)
    },
  },
}
</script>
<style lang="scss" scoped>
.warning-event{
  padding-top:50px;
  height:700px;
  width:100%;
  .warning-event-list{
    li{
      height:300px;
      background: url('../../../../../../../assets//img/virtual/wleft-bg.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
       padding:40px 40px 0;
      >div{
        width:47%;
        height:160px;
        box-sizing: border-box;
        position: relative;
        >span{
          &:first-of-type{
            position: absolute;
            font-size: 48px;
            font-family: FZLanTingHei-EB-GBK Regular, FZLanTingHei-EB-GBK Regular-Regular;
            font-weight: bolder;
            color: #ffbf40;
          }
        &.name{
          position: absolute;
          top:50%;
          left:50%;
          transform: translate(-50%,-50%);
          font-size: 32px;
          font-family: FZLanTingHeiS-DB1-GBK Regular, FZLanTingHeiS-DB1-GBK Regular-Regular;
          font-weight: 400;
          text-align: center;
          color: #6dfff5;
          line-height: 160px;
          }
          &.dot{
            position: absolute;
            width:55px;
            height: 20px;
            background: url('../../../../../../../assets//img/virtual/dotted.png') no-repeat;
            background-size: 100% 100%;
            display: inline-block;
          }
        }

      }
      div.event-01{
       background: url('../../../../../../../assets/img/virtual/wleft-01.png') no-repeat;
       background-size: 100% 100%;
        .number{
          top:0px;
          right:75px;
        }
         .dot1{
          top: 21px;
          left: 142px;
          animation: dot11 4s infinite linear;
        }
        .dot2{
          top:110px;
          left: 142px;
          animation: dot12 4s infinite linear;
        }

      }
      div.event-02{
       background: url('../../../../../../../assets/img/virtual/wright-01.png') no-repeat;
         background-size: 100% 100%;
          .number{
          top:0px;
          left:75px;
        }
        .dot{
          transform: rotate(180deg);
        }
        .dot1{
          top: 21px;
          right: 142px;
          animation: dot21 4s infinite linear;
        }
        .dot2{
          top:110px;
          right: 142px;
          animation: dot22 4s infinite linear;
        }
      }
      div.event-03{
       background: url('../../../../../../../assets/img/virtual/wleft-02.png') no-repeat;
         background-size: 100% 100%;
         .number{
          top:0px;
          right:75px;
        }
        .dot1{
          top: 21px;
          left: 142px;
          animation: dot31 4s infinite linear;
        }
        .dot2{
          top:110px;
          left: 142px;
          animation: dot32 4s infinite linear;
        }
      }
      div.event-04{
       background: url('../../../../../../../assets/img/virtual/wright-02.png') no-repeat;
         background-size: 100% 100%;
          .number{
          top:0px;
          left:75px;
        }
        .dot{
          transform: rotate(180deg);
        }
        .dot1{
          top: 21px;
          right: 142px;
          animation: dot41 4s infinite linear;
        }
        .dot2{
          top:110px;
          right: 142px;
          animation: dot42 4s infinite linear;
        }
      }
    }

  }
}
.left-far{
  width: 1650px;
  height: calc(100% - 110px);
  position: absolute;
  padding:0 80px;
  top: 38px;
  left: 0px;
  // background: url('../../../../../../../assets/img/virtual/left-bg.png') no-repeat;
  background-size: 100% 100%;
  transition: all .4s linear;
  position: relative;
  &:before{
    content:'';
   position: absolute;
   background: url('../../../../../../../assets/img/virtual/left-bg.png') no-repeat;
   background-size: 100% 100%;
   opacity:0.3;
   top:0;
   left:0;
   bottom:0;
   right:0;
  //  z-index:-1;
  }
  .target-all{
    display: flex;
    justify-content: space-between;
    height: 185px;
    margin:46px 0  0 0px;
    background: url('../../../../../../../assets/img/all-bottom.png') no-repeat bottom;
    background-size: 100% 100%;
    padding:0 100px 0 100px;
    >div{
      display: flex;
      flex-direction: column;
      >i{
        font-size: 80px;
        line-height: 80px;
        color: #fff;
      }
      &:nth-child(2) >i{ color: #ffb400;}
      &:nth-child(3) >i{ color: #02ffde;}
      span{
        font-size: 48px;
        line-height: 48px;
        color: #067c8d;
        text-align: right;
        font-weight: bold;
      }
    }
  }
  .target{
    margin:38px 0  0 0px;
    height: 455px;
    position: relative;
    .earth{
      width: 455px;
      height: 455px;
      margin:0 auto ;
      // padding-top: 10px;
    }
    .item{
      position: absolute;
      height: 157px;
      width: 332px;
      >span{
        color: #067c8d;
        font-size: 45px;
        display: inline-block;
        position: absolute;
        width:100%;
        text-align: center;
        font-weight: bold;
      }
      >i{
        font-size: 48px;
        width: 100%;
        color: #02ffde;
        position: absolute;
        text-align: center;
      }
    }
    // .text4 >span{width: 32px;}
    // .text5 >span{width: 48px;}
    // .text6 >span{width: 48px;}
    // .text7 >span{width: 56px;font-size: 14px;line-height: 22px;}
    .t{
      top:12px;
      >span{top:12px;}
      >i{top:70px;}
    }
    .b{
      bottom:12px;
      >span{bottom:12px;}
      >i{bottom:70px;}
    }
    .l{
      left: 0;
      >span{ left: 0px;}
      >i{left:0px;}
    }
    .r{
      right: 0;
      >span{right: 0px;}
      >i{right:0px;}
    }
    .tl{
      background: url('../../../../../../../assets/img/target-tl.png') no-repeat;
      background-size: 100% 100%;
    }
    .tr{
      background: url('../../../../../../../assets/img/target-tr.png') no-repeat;
    background-size: 100% 100%;
    }
    .bl{
      background: url('../../../../../../../assets/img/target-bl.png') no-repeat;
     background-size: 100% 100%;
    }
    .br{
      background: url('../../../../../../../assets/img/target-br.png') no-repeat;
    background-size: 100% 100%;
    }
  }
  .event{
    margin:40px 0  0 0px;
    height: 1100px;
    position: relative;
    .event-header{
      position: relative;
      height: 146px;
      background: url('../../../../../../../assets/img/list-top.png') no-repeat top;
      background-size: 100% 100%;
      display: flex;
      align-items: center;
      .title{
        font-size: 50px;
        width:100%;
        height: 100%;
        // line-height: 44px;
        color: #87f5ff;
        &:before{
          content: '';
          width:100px;
          height:100px;
          background: url('../../../../../../../assets/img/event-icon.png') no-repeat ;
          background-size: 100% 100%;
        }

        margin-left:28px;
        padding-left:34px;
      }
      .list-header{
        position: absolute;
        bottom:0;
        left:10px;
        width: 450px;
        height: 34px;
        border-bottom: 1px solid #18548a;
        display: flex;
        justify-content: space-between;
        padding:0 100px;
        >span{
          font-size: 14px;
          line-height: 34px;
          color: #87f5ff;
          &:nth-child(1){
            margin-left: 38px;
          }
          &:nth-child(2){
            margin-right:46px;
          }
        }
      }

    }
    .event-content{
      margin-top:12px;
      height: 1000px;
      .list-header{
        height:70px;
        width:100%;
        background:rgba(36,167,255,0.3);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 100px;
        span{
          font-size: 32px;
        font-family: FZLanTingHei-M-GBK Regular, FZLanTingHei-M-GBK Regular-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        }
      }
    }
  }
}

@keyframes dot11 {
    0%{
      top: 21px;
      left: 142px;
    }
    100%{
      top: 21px;
      left: 365px;
    }
}
@keyframes dot12 {
    0%{
     top:110px;
     left: 142px;
     width:55px;
            height: 20px;
    }
    30%{
      top: 110px;
      left: 225px;
      transform: rotate(0deg);
      width:55px;
            height: 20px;
    }
    33%{
    top: 103px;
    left: 265px;
    transform: rotate(0deg);
    width:55px;
            height: 20px;
    }
    98%{
    top: 103px;
    left: 620px;
    transform: rotate(0deg);
    width:55px;
    height: 20px;
    }
    99%{
    top: 75px;
    left: 620px;
    transform: rotate(270deg);
    width: 38px;
    height: 45px;
    }
    100%{
    top: 58px;
    left: 625px;
    transform: rotate(270deg);
    width: 38px;
    height: 45px;
    }

}

@keyframes dot21 {
    0%{
      top: 21px;
      right: 142px;
    }
    100%{
      top: 21px;
      right: 365px;
    }
}
@keyframes dot22 {
    0%{
     top:110px;
     right: 142px;
     width:55px;
     height: 20px;
     transform: rotate(180deg);
    }
    30%{
      top: 110px;
      right: 225px;
      transform: rotate(180deg);
      width:55px;
      height: 20px;
    }
    33%{
    top: 103px;
    right: 265px;
    transform: rotate(180deg);
    width:55px;
    height: 20px;
    }
    98%{
    top: 103px;
    right: 620px;
    transform: rotate(180deg);
    width:55px;
    height: 20px;
    }
    99%{
    top: 75px;
    right: 620px;
    transform: rotate(270deg);
    width: 38px;
    height: 45px;
    }
    100%{
    top: 58px;
    right: 625px;
    transform: rotate(270deg);
    width: 38px;
    height: 45px;
    }

}
@keyframes dot31 {
    0%{
      top: 21px;
      left: 142px;
    }
    100%{
      top: 21px;
      left: 365px;
    }
}
@keyframes dot32 {
    0%{
     top:110px;
     left: 142px;
     width:55px;
            height: 20px;
    }
    30%{
      top: 110px;
      left: 225px;
      transform: rotate(0deg);
      width:55px;
            height: 20px;
    }
    33%{
    top: 103px;
    left: 265px;
    transform: rotate(0deg);
    width:55px;
            height: 20px;
    }
    98%{
    top: 103px;
    left: 620px;
    transform: rotate(0deg);
    width:55px;
    height: 20px;
    }
    99%{
    top: 75px;
    left: 620px;
    transform: rotate(270deg);
    width: 38px;
    height: 45px;
    }
    100%{
    top: 58px;
    left: 625px;
    transform: rotate(270deg);
    width: 38px;
    height: 45px;
    }

}
@keyframes dot41 {
    0%{
      top: 21px;
      right: 142px;
    }
    100%{
      top: 21px;
      right: 365px;
    }
}
@keyframes dot42 {
    0%{
     top:110px;
     right: 142px;
     width:55px;
     height: 20px;
     transform: rotate(180deg);
    }
    30%{
      top: 110px;
      right: 225px;
      transform: rotate(180deg);
      width:55px;
      height: 20px;
    }
    33%{
    top: 103px;
    right: 265px;
    transform: rotate(180deg);
    width:55px;
    height: 20px;
    }
    98%{
    top: 103px;
    right: 620px;
    transform: rotate(180deg);
    width:55px;
    height: 20px;
    }
    99%{
    top: 75px;
    right: 620px;
    transform: rotate(270deg);
    width: 38px;
    height: 45px;
    }
    100%{
    top: 58px;
    right: 625px;
    transform: rotate(270deg);
    width: 38px;
    height: 45px;
    }

}
</style>