<template>
  <div id="order">
    <my-head :login='login' />
    <section class="flex-between-start">
      <order-left :num="menuNum" :otherLink="true"/>
      <div class="order-main">
        <h3>我的订单</h3>
        <div class="order-frame">
        	<img src="../../../static/img/service-1.png"/>
        </div>
      </div>
    </section>
    <right-float />
    <my-foot />
  </div>
</template>

<script>
  import Head from '../public/allHead.vue';
  import Float from '../public/rightFloat.vue';
  import Order from '../public/orderLeft.vue';
  import Foot from '../public/allFoot.vue';
  export default {
    name: 'order',
    props: {
      url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 8,
          searchShow: false,
          orderShow: true,
          url: this.url
        },
        menuNum: 7,
        orderMenuType: 0,
        orderMenu: [
          "未使用",
          "已使用",
          "已过期"
        ],
        couponList: [
        	{
        		id: 1,
        		price: '10',
        		denomination: '无门槛10元券',
        		company: '【同仁堂店铺】',
        		timeLimit: '2019/05/20-2019/06/20'
        	},
        	{
        		id: 1,
        		price: '10',
        		denomination: '无门槛10元券',
        		company: '【同仁堂店铺】',
        		timeLimit: '2019/05/20-2019/06/20'
        	},
        	{
        		id: 1,
        		price: '10',
        		denomination: '无门槛10元券',
        		company: '【同仁堂店铺】',
        		timeLimit: '2019/05/20-2019/06/20'
        	},
        	{
        		id: 1,
        		price: '10',
        		denomination: '无门槛10元券',
        		company: '【同仁堂店铺】',
        		timeLimit: '2019/05/20-2019/06/20'
        	}
        ]
      }
    },
    components: {
      'my-head': Head,
      'right-float': Float,
      'order-left': Order,
      'my-foot': Foot
    },
    methods: {
    }
  }
</script>

<style scoped>
  section {
    position: relative;
    width: 1200px;
    margin: 30px auto 60px;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
  
  section {
    width: 1200px;
    margin: 40px auto 100px;
  }
  
  .order-main {
    width: 1050px;
  }
  
  .order-main h3 {
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    font-weight: normal;
    font-size: 16px;
    color: #333;
    background-color: #fff;
  }
  
  .order-frame {
    width: 100%;
    padding: 20px;
    margin-top: 10px;
    background-color: #fff;
  }
</style>

<style>
  .search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6736;
  }
  
  .search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #ff6736;
  }
  
  #order .head-second-bg {
    background-color: #fafafa;
  }
</style>