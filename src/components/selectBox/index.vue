<!--
 * @Descripttion: '年月选择器'
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-30 10:04:08
 * @LastEditTime: 2020-08-10 08:48:35
-->
<template>
  <div class="date">
    <div class="select-box">
      <p @click="showYear=!showYear">{{currentYear}}年</p>
      <ul class="dropSelect" v-if="showYear">
        <li
        v-for="(item,index) in yearList"
        :key="index"
        @click="selectYear(item)">
        {{item}}年
        </li>
      </ul>
    </div>
    <div class="select-box">
      <p @click="showMonth=!showMonth">{{currentMonth}}月</p>
       <ul class="dropSelect" v-if="showMonth">
        <li
        v-for="(item,index) in 12"
        @click="selectMonth(item)"
        :key="index">
        {{item}}月
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBox',
  props: {
    Inityear: {
      type: Number,
      default: 2020,
    },
  },
  data() {
    return {
      showMonth: false,
      showYear: false,
      currentMonth: '',
      currentYear: '',
      yearList: [],
    }
  },
  mounted() {
    let inityear = this.Inityear
    const currentYear = new Date().getFullYear()
    this.currentYear = currentYear
    this.currentMonth = (new Date().getMonth() + 1) < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1
    const section = new Date().getFullYear() - inityear
    for (let i = 0; i <= section; i++) {
      this.yearList.push(inityear++)
    }
    this.$emit('getSelect', { year: this.currentYear, month: this.currentMonth })
  },
  methods: {
    selectYear(year) {
      this.currentYear = year
      this.showYear = false
      this.$emit('getSelect', { year: this.currentYear, month: this.currentMonth })
    },
    selectMonth(month) {
      this.currentMonth = month < 10 ? `0${month}` : month
      this.showMonth = false
      this.$emit('getSelect', { year: this.currentYear, month: this.currentMonth })
    },
  },
}
</script>

<style lang='scss' scoped>
.date {
  display: flex;
  align-items: center;
  z-index:888;
  .select-box {
    cursor: pointer;
    width: 282px;
    height: 70px;
    position: relative;
    // padding-right: 50px;
    color: #fff;
    font-size: 20px;
    background: rgba(11, 41, 82, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
    .dropSelect{
      overflow: auto;
      width: 282px;
      max-height:300px;
      position: absolute;
      top:77px;
      left:0;
      background: rgba(11, 41, 82, 0.8);
      border:1px solid rgba(11, 41, 82, 0.6);
      box-sizing: border-box;
      li{
      cursor: pointer;
      box-sizing: border-box;
      font-size: 32px;
      font-family: FZLanTingHei-M-GBK Regular,
      FZLanTingHei-M-GBK Regular-Regular;
      font-weight: 400;
      text-align: center;
      // padding-left:60px;
      color: #0aa7ff;
      line-height: 70px;
      &:hover{
        background: rgba(11, 41, 82, 1);
        color:#fff;
      }
      }
    }
    p {
      cursor: pointer;
      width:100%;
      height: 100%;
      font-size: 36px;
      font-family: FZLanTingHei-M-GBK Regular,
      FZLanTingHei-M-GBK Regular-Regular;
      font-weight: 400;
      text-align: center;
      line-height: 70px;
      color: #0aa7ff;
    }
    &:after {
      content: "";
      width: 30px;
      height: 15px;
      position: absolute;
      right: 20px;
      top: 30px;
      background: url("./img/dir.png") no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>