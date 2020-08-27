<!--
 * @Descripttion: ''
 * @Author: lilong(lilong@hztianque.com)
 * @Date: 2020-07-30 15:45:59
 * @LastEditTime: 2020-08-06 10:02:56
-->
<template>
  <div class="grid-work">
    <ul>
      <li v-for="(item,index) in source" :key="index" @click="$emit('modal',index)">
        <img :src="imgList[index]" alt>
        <div>
          <p>{{item.name}}</p>
          <p>{{item.value}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      imgList: [
        require('@/assets/imgs/collectGrid.png'),
        require('@/assets/imgs/noLogin.png'),
        require('@/assets/imgs/trace.png'),
      ],
    }
  },
}
</script>

<style lang='scss' scoped>
.grid-work {
  width: 100%;
  height: 100%;
  padding:20px;
  box-sizing: border-box;
  ul {
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    li {
      height: 100%;
      display: flex;
      color: #fff;
      font-size: 18px;
      align-items: center;
      // flex: 1;
      width:33%;
      cursor: pointer;
      img{
        width:354px;
        height:202px;
      }
      >div{
        flex:1;
         p{
          font-size: 30px;
          font-family: Source Han Sans CN Regular, Source Han Sans CN Regular-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          // line-height: 50px;
          letter-spacing: 5px;
          &:first-of-type{
            flex-wrap: wrap;
          }
          &:last-of-type{
            font-size: 48px;
            font-weight: bolder;
          }
         }
      }
    }
  }
}
</style>