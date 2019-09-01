<template id="orderLeft">
  <div class="basic-main-left clearfix">
    <div class="basic-left-detail">
      <div class="basic-main-left-sev flex-start-start flex-column">
        <span>我的订单</span>
        <template v-if="!otherLink">
          <a :class="{on : num==0}" @click='menuSelect(0)' href="javascript:;">私人医护</a>
          <a :class="{on : num==1}" @click='menuSelect(1)' href="javascript:;">护工陪诊</a>
          <a :class="{on : num==2}" @click='menuSelect(2)' href="javascript:;">医疗器械</a>
          <a :class="{on : num==3}" @click='menuSelect(3)' href="javascript:;">商品订单</a>
        </template>
        <template v-else>
        	<router-link :to="{ path: '/order', query: { num: 0 }}">私人医护</router-link>
        	<router-link :to="{ path: '/order', query: { num: 1 }}">护工陪诊</router-link>
        	<router-link :to="{ path: '/order', query: { num: 2 }}">医疗器械</router-link>
        	<router-link :to="{ path: '/order', query: { num: 3 }}">商品订单</router-link>
        </template>
      </div>
      <router-link :class="{on : num==4}" to="/order/coupon">我的优惠券</router-link>
      <router-link :class="{on : num==5}" to="/order/collect">我的收藏</router-link>
      <router-link :class="{on : num==6}" to="/order/account">账号设置</router-link>
      <router-link :class="{on : num==7}" to="/order/service">专属服务</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'orderLeft',
    props: {
      num: '',
      otherLink: false
    },
    data() {
      return {}
    },
    methods: {
      menuSelect(num) {
        this.$emit('scrollNum', num);
      }
    }
  }
</script>

<style>
  .basic-left-detail {
    position: fixed;
  }
  
  .basic-main-left a {
    display: block;
    margin-top: 15px;
    font-size: 16px;
    color: #666;
  }
  
  .basic-main-left a.on {
    color: #ff6736;
  }
  
  .basic-main-left span {
    font-size: 16px;
    color: #666;
  }
  
  .basic-main-left-sev a {
    height: auto;
    line-height: 1;
    margin-top: 15px;
    font-size: 16px;
    color: #999;
  }
  
  .basic-main-left-sev a.on {
    color: #ff6736;
  }
</style>