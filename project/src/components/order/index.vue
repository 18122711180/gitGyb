<template>
  <div id="order">
    <my-head :login='login' />
    <section class="flex-between-start">
      <order-left :num="menuNum" @scrollNum="menuChange"/>
      <div class="order-main">
        <h3>我的订单</h3>
        <div class="order-frame">
          <div class="order-menu flex-start-center">
            <span v-for="(item, index) in orderMenu" :class="{on : orderMenuType == index}" @click="orderMenuType = index" :key="index">{{item}}</span>
          </div>
          <div class="order-list-title flex-start-center">
            <span>订单详情</span>
            <span>金额</span>
            <span>状态</span>
            <span>操作</span>
          </div>
          <div class="order-list">
            <div class="order-list-main" v-for="(item,index) in orderList" :key="index">
              <div class="order-list-top flex-between-center">
                <div>
                  <span>{{item.time}}</span>
                  <span>订单编号：{{item.code}}</span>
                </div>
                <span v-if="item.type == 1" class="residue">支付剩余时间：{{item.residueTime}}</span>
              </div>
              <div class="order-list-bottom flex-start-start">
                <div class="order-list-message flex-between-center">
                  <div class="order-list-message-left flex-start-start">
                    <img :src="item.img" />
                    <div class="order-list-message-basic">
                      <div class="order-list-message-name">
                        <span>{{item.name}}</span>
                        <span>{{item.sex}}</span>
                        <span>{{item.level}}</span>
                      </div>
                      <p>{{item.service}}</p>
                    </div>
                  </div>
                  <p class="order-list-message-right">x{{item.amount}}</p>
                </div>
                <div class="order-list-price order-list-bottom-div flex-center-center">
                  <span>{{item.price}}</span>
                </div>
                <div class="order-list-state order-list-bottom-div flex-center-center flex-column">
                  <span>{{item.type == 1 ? "待付款" : item.type == 2 ? "待接单" :item.type == 3 ? "进行中" : "已完成"}}</span>
                  <span>(退款中)</span>
                  <router-link to="/">订单详情</router-link>
                </div>
                <div class="order-list-oper order-list-bottom-div flex-center-center flex-column">
                  <router-link to="/" class="on">
                    立即付款
                  </router-link>
                  <p>
                  	<span>投诉</span>
                  	<span>删除</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
        menuNum: 0,
        orderMenuType: 0,
        orderMenu: [
          "全部订单",
          "待付款",
          "待接单",
          "进行中",
          "已完成"
        ],
        orderList: [{
            type: 1,
            time: '2019 - 04 - 09 10:11',
            residueTime: '26分 60秒',
            code: '123456789987621589 ',
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            otherName: '',
            sex: '女',
            level: '主治医生',
            service: '单次服务',
            amount: '1',
            size: '',
            price: '109.00'
          },
          {
            type: 2,
            time: '2019 - 04 - 09 10:11',
            residueTime: '26分 60秒',
            code: '123456789987621589 ',
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            otherName: '',
            sex: '女',
            level: '主治医生',
            service: '单次服务',
            amount: '1',
            size: '',
            price: '109.00'
          },
          {
            type: 3,
            time: '2019 - 04 - 09 10:11',
            residueTime: '26分 60秒',
            code: '123456789987621589 ',
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            otherName: '凯胜（KASON）速度型高碳纤维钛金属羽毛球拍单拍TSF 100Ti',
            sex: '女',
            level: '主治医生',
            service: '单次服务',
            amount: '1',
            size: 'L',
            price: '109.00'
          },
          {
            type: 4,
            time: '2019 - 04 - 09 10:11',
            residueTime: '26分 60秒',
            code: '123456789987621589 ',
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            otherName: '',
            sex: '女',
            level: '主治医生',
            service: '单次服务',
            amount: '1',
            size: '',
            price: '109.00'
          },
        ]
      }
    },
    components: {
      'my-head': Head,
      'right-float': Float,
      'order-left': Order,
      'my-foot': Foot
    },
    mounted(){
    	this.menuNum = this.$route.query.num
    },
    methods: {
      pageChange: function(val) {
        console.log(val)
      },
      menuChange: function(num){
      	this.menuNum = num
      }
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
    padding: 0 20px 40px;
    margin-top: 10px;
    background-color: #fff;
  }
  
  .order-menu {
    height: 60px;
    font-size: 14px;
    color: #666;
  }
  
  .order-menu span {
    line-height: 18px;
    height: 18px;
    padding: 0 26px;
    cursor: pointer;
  }
  
  .order-menu span:first-child {
    padding-left: 0;
    border-right: solid 1px #f1f1f1;
  }
  
  .order-menu span.on {
    color: #ff6736;
  }
  
  .order-list-title {
    width: 100%;
    height: 34px;
    font-size: 14px;
    color: #666;
    background-color: #f7f7f7;
  }
  
  .order-list-title span {
    text-align: center;
  }
  
  .order-list-title span:first-child {
    -webkit-flex: 1;
    flex: 1;
  }
  
  .order-list-title span+span {
    width: 140px;
  }
  
  .order-list {
    margin-top: 20px;
  }
  
  .order-list-top {
    width: 100%;
    height: 34px;
    padding: 0 20px;
    font-size: 12px;
    color: #666;
    background-color: #f7f7f7;
  }
  
  .order-list-top span+span {
    margin-left: 35px;
  }
  
  .order-list-top .residue {
    color: #ff4a60;
  }
  
  .order-list-bottom {
    width: 100%;
    height: 120px;
    background-color: #fff;
    border: solid 1px #e5e5e5;
    border-top: none;
  }
  
  .order-list-message {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    height: 120px;
    padding: 0 50px 0 20px;
  }
  
  .order-list-bottom-div {
    width: 140px;
    border-left: solid 1px #e5e5e5;
  }
  
  .order-list-message-left {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    margin-right: 20px;
  }
  
  .order-list-message-left img {
    width: 80px;
    height: 80px;
    margin-right: 16px;
    border-radius: 5px;
  }
  
  .order-list-message-name {
    font-size: 16px;
    color: #111;
  }
  
  .order-list-message-name span+span {
    margin-left: 5px;
    font-size: 14px;
    color: #666;
  }
  
  .order-list-message-service {
    margin-top: 10px;
    font-size: 14px;
    color: #333;
  }
  
  .order-list-message-right {
    font-size: 12px;
    color: #333;
  }
  
  .order-list-price {
    font-size: 14px;
    color: #ff4a60;
  }
  
  .order-list-state span {
    font-size: 14px;
    color: #666;
  }
  
  .order-list-state a {
    margin-top: 5px;
    font-size: 14px;
    color: #ff6736;
  }
  
  .order-list-oper a{
  	width: 80px;
  	height: 30px;
  	line-height: 30px;
  	text-align: center;
  	font-size: 14px;
  	color: #fff;
  	border-radius: 5px;
  	background-color: #ff6736;
  }
  
  .order-list-oper p{
  	margin-top: 10px;
  }
  
  .order-list-oper p span{
  	margin: 0 5px;
  	font-size: 14px;
  	color: #ff6736;
  	cursor: pointer;
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