<template>
  <div class="page">
    <span
      :class="['prev-btn', 'btn', 'icon', 'prev', current === 1 ? 'disable':'']"
      @click="pageClick(current - 1 ? current - 1 : 1)">上一页</span>
    <span
      :class="['next-btn', 'btn', 'icon', 'next', current === max ? 'disable':'']"
      @click="pageClick(current - 1 ? current - 1 : 1)">下一页</span>
    <div class="list-wrapper">
      <ul class="page-list" v-if="!simple">
        <li class="option" v-if="prevPageVisible" @click="pageClick(1)">1</li>
        <li class="option ellipsis" v-if="prevPageVisible">...</li>
        <li
          :class="['option', current === p ? 'active': '']"
          v-for="p in centerList"
          :key="p"
          @click="pageClick(p)">
          {{p}}
        </li>
        <li class="option ellipsis" v-if="nextPageVisible">...</li>
        <li class="option" v-if="nextPageVisible" @click="pageClick(max)">{{max}}</li>
      </ul>

      <div class="simple-page" v-else>
        <input
          class="curr-input"
          type="number"
          v-model="inputPage"
          :min="1"
          :max="max"
          @blur="inputPage = current"
          @keyup.enter="enter"> / <span class="total-page">{{max}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    total: {
      type: Number,
      default: 100,
    },
    current: {
      type: Number,
      default: 1,
    },
    rows: {
      type: Number,
      default: 10,
    },
    maxPage: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      inputPage: this.current,
    }
  },
  computed: {
    max() {
      return Math.floor(this.total / this.rows) + (this.total % this.rows > 0 ? 1 : 0)
    },
    simple() {
      return this.max >= this.maxPage || this.max < 6
    },
    centerList() {
      if (this.current < 4) {
        return [1, 2, 3, 4]
      } else if (this.current > this.max - 2) {
        return [this.max - 3, this.max - 2, this.max - 1, this.max]
      } else {
        return [this.current - 1, this.current, this.current + 1]
      }
    },
    prevPageVisible() {
      return this.centerList[0] !== 1
    },
    nextPageVisible() {
      return this.centerList[this.centerList.length - 1] !== this.max
    },
  },
  watch: {
    current(p) {
      this.inputPage = p
    },
  },
  mounted() {

  },
  methods: {
    pageClick(page) {
      this.$emit('change', +page)
    },
    enter(obj) {
      const val = +obj.target.value
      this.$emit('change', val > this.max ? this.max : val)
    },
  },
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  height: 48px;
  line-height: 48px;
  color: #fff;
  overflow: hidden;
  .list-wrapper{

    width: calc(100% - 120px);
    padding: 0 60px;
    text-align: center;
    user-select: none;
    .page-list{
      width: calc(100% - 20px);
      list-style: none;
      color: #92ADD3;

      padding: 0 10px;
      .option{
        display: inline-block;
        margin: 0 10px;
        font-size: 16px;
        cursor: pointer;
      }
      .active{
        font-size: 22px;
        color: #D3E3F9;
        cursor: not-allowed;
      }
      .ellipsis{
        cursor: default;
      }
    }
    .simple-page{
      height: 48px;
      padding-top: 7px;
      box-sizing: border-box;
      .curr-input{
        display: inline-block;
        min-width: 68px;
        height: 32px;
        line-height: 32px;
        margin-right: 10px;

        color: #92ADD3;
        font-size: 22px;
        text-align: center;
        background-color: transparent;
        outline: none;
        border: 1px solid rgba(68,77,98,1);
        border-radius:4px;
      }
    }
  }
  .btn{
    user-select: none;
    font-size: 18px;
    font-weight: 500;
    color: #92add3;
    cursor: pointer;
  }
  .icon{
    position: relative;
    &::after{
      content: "";
      position: absolute;
      display: inline-block;
      width: 10px;
      height: 2px;
      border-radius: 1px;
      background: #C7DDF9;
    }
    &::before{
      content: "";
      position: absolute;
      display: inline-block;
      width: 10px;
      height: 2px;
      border-radius: 1px;
      background: #C7DDF9;
    }
  }
  .prev{
    padding-left: 15px;
    &::after{
      top: calc(50% - 2px);
      left: 0;
      transform: rotate(-45deg) translateY(-100%);
    }
    &::before{
      top: calc(50% + 2px);
      left: 0;
      transform: rotate(45deg) translateY(100%);
    }
  }
  .next{
    padding-right: 15px;
    &::after{
      top: calc(50% - 2px);
      right: 0;
      transform: rotate(45deg) translateY(-100%);
    }
    &::before{
      top: calc(50% + 2px);
      right: 0;
      transform: rotate(-45deg) translateY(100%);
    }
  }
  .prev-btn{
    float: left;
    padding-left: 10px;
  }
  .next-btn{
    float: right;
  }
  .disable{
    cursor: not-allowed;
    color: #999;
  }
}
</style>
