<template>
  <div class="org-choose">
    <div class="org-name" v-if="currentOrg">
      <span class="org-icon" />
      <span class="can-click" @click="showChildren=true">
        <span class="sub-nav-text">{{currentOrg.orgName}}</span>
      </span>
    </div>
    <div class="children-wrapper" v-if="showChildren">
      <div class="current-region">
        当前区域：<span
        v-for="(item,index) in tempOrgList"
        @click="clickOrgListItemHandle(item,index)"
        :key="item.orgCode"
         :class="{current: index===(tempOrgList.length-1)}">
          {{item.orgName}} <span v-if="index<(tempOrgList.length-1)">-></span>
        </span>
      </div>
      <div class="children-list">
        <span
          v-for="item in tempOrg.children"
          :key="item.orgCode"
          class="child"
           :class="{clicked: tempOrg.orgCode===item.orgCode}"
          @click="clickOrgItemHandle(item)">
          {{item.orgName}}
        </span>
      </div>
      <div class="button-wrap">
        <span class="button ok" @click="confirmHandle">确定</span>
        <span class="button cancel" @click="showChildren=false">取消</span>
      </div>
    </div>
  </div>
</template>

<script>

import { RenderBorder } from '../map-helpers/render-border'
export default {
  components: {
  },
  props: ['orgCode', 'gisHttp', 'map'],//eslint-disable-line
  data() {
    return {
      showChildren: false,
      currentOrg: null,
      tempOrg: {},
      tempOrgList: [],
      orgList: [],
    }
  },
  created() {
    this.renderBorder = new RenderBorder({ map: this.map })
    this.initOrg(this.orgCode)
  },
  beforeDestroy() {
    this.renderBorder.remove()
  },
  methods: {
    initOrg(orgCode) {
      this.gisHttp.getOrgChildren(orgCode).then(res => {
        const org = res.data
        this.currentOrg = org
        this.tempOrg = org
        this.tempOrgList.push(org)
        this.confirmHandle()
      })
    },
    clickOrgItemHandle(org) {
      this.gisHttp.getOrgChildren(org.orgCode).then(res => {
        this.tempOrg = res.data
        this.tempOrgList.push(this.tempOrg)
      })
    },
    clickOrgListItemHandle(tempOrg, index) { //eslint-disable-line
      this.tempOrg = this.tempOrgList[index]
      this.tempOrgList = this.tempOrgList.slice(0, index + 1)
    },
    confirmHandle() {
      this.currentOrg = this.tempOrg
      this.getBorderGeojson(this.currentOrg).then(data => {
        const { org, currentFeature, childrenFeatures } = data
        this.currentOrg = org
        if (currentFeature) {
          this.renderBorder.setData(currentFeature, childrenFeatures)
        }
        this.$emit('change', org)
        this.showChildren = false
      })
    },
    // 获取边界数据和中心点
    // org: 给当前传入的组织机构和下级组织机构加center字段，
    // currentFeature: 当前组织机构的边界数据
    getBorderGeojson(currentOrg) {
      const org = Object.assign({}, currentOrg)
      let currentFeature = null
      let childrenFeatures = []
      // 将组织机构扁平化，复杂度降为O(1)
      let orgFlat = {} //eslint-disable-line
      org.children.forEach(item => {
        orgFlat[item.orgCode] = item
      })

      return this.gisHttp.getBorderGeojson(org.orgCode).then(res => {
        const borderArray = res.data || []
        // 解析出当前组织机构
        if (borderArray.length > 0) {
          currentFeature = borderArray[0].features[0] //eslint-disable-line
          const { center } = currentFeature.properties
          org.center = [center.lng, center.lat]
          // 解析直接下级组织机构
          if (borderArray.length > 1) {
            // 给当前组织机构的children增加center
            childrenFeatures = borderArray.slice(1)
            childrenFeatures.forEach(item => {
              const { adcode, center: childCenter } = item.features[0].properties
              if (childCenter) {
                Object.assign(orgFlat[adcode], { center: [childCenter.lng, childCenter.lat] })
              }
            })
          }
        }
        return { org, currentFeature, childrenFeatures }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$baseUrl: "../../../../../../assets/imgs/panoramicGrid/subNavIcon/";
.org-choose {
  position: absolute;
  top: 0px;
  left: 2120px;
  color: #fff;
  font-size: 68px;
  z-index: 95;
  .org-name {
    border: 1px solid #53a6f8;
    padding-left: 20px;
    padding-right: 27px;
    height:62px;
    line-height: 62px;
    font-size: 28px;
    .org-icon{
      width: 28px;
      height:28px;
      display: inline-block;
      background: url('../../../../../../assets/img/common/org-icon.png') no-repeat;
      background-size: 100% 100%;
      margin-right:28px;
    }
    .can-click {
      cursor: pointer;
    }
  }
  .children-wrapper {
    position: absolute;
    padding: 28px 50px;
    top: 70px;
    left: 0;
    width:1000px;
    font-size: 28px;
    font-family: FZZhengHeiS-M-GB;
    background:rgba(15,30,85,0.88);
    border:4px solid rgba(86,138,235,1);
    .current-region {
      color: #99BDEE;
      .current {
        color: #fff;
      }
    }
    .children-list {
      padding-bottom: 80px;
      .child {
        margin-right: 70px;
        display: inline-block;
        padding: 10px 0;
        &:last-child {
          margin-right: 0;
        }
        &.clicked {
          color: #58B0F5;
        }
      }
    }
    .button-wrap {
      position: absolute;
      bottom: 38px;
      right: 44px;
      .button {
        background:rgba(6,15,36,0.2);
        border:2px solid rgba(100,191,255,1);
        opacity:0.8;
        border-radius:4px;
        font-size: 32px;
        font-weight: 400;
        color: #64BFFF;
        padding: 8px 20px;
        &.ok {
          color: #fff;
          background: #64BFFF;
          margin-right: 26px;
        }
      }
    }
  }
}
</style>