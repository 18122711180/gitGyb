<template>
  <div id="famousDetail">
    <my-head :login='login' />
    <section>
      <div class="doctor-top flex-between-start">
        <div class="doctor-top-left flex-start-start">
          <div class="doctor-evaluate">
            <img :src="doctor.img" />
            <p>
              <span>从业{{doctor.workTime}}年</span>
              <span>好评率{{doctor.evaluate}}%</span>
            </p>
          </div>
          <div class="doctor-message">
            <div class="doctor-basice flex-start-center">
              <span>{{doctor.name}}</span>
              <span>{{doctor.sex}}</span>
              <span>{{doctor.level}}</span>
              <p class="flex-start-center">
                <span class="doctor-basice-state" :class="{on : doctor.state}">{{doctor.state ? "在线" : "离线"}}</span>
                <span class="doctor-basice-follow">{{doctor.follow ? "已关注" : "关注"}}</span>
              </p>
            </div>
            <div class="doctor-other">
              <p><span>内科：</span>{{doctor.type}}</p>
              <p>{{doctor.address}}</p>
              <p><span>擅长：</span>{{doctor.goodAt}}</p>
              <p>
                <span>服务价格：</span>
                <span class="price">￥{{doctor.servicePrice}}</span>
              </p>
              <div class="doctor-other-amount flex-start-center">
                <p>选择数量：</p>
                <input type="number" v-model="amount" @change="amountChange"/>
                <p>本月仅剩{{doctor.surplus}}个服务名额，预估从速</p>
              </div>
              <p>选择服务：</p>
              <div class="doctor-other-service flex-start-start flex-wrap">
                <span :class="{on : serviceType == 1}" @click="serviceType = 1">单次服务</span>
                <span :class="{on : serviceType == 2}" @click="serviceType = 2">月卡服务</span>
                <span :class="{on : serviceType == 3}" @click="serviceType = 3">季卡服务</span>
                <span :class="{on : serviceType == 4}" @click="serviceType = 4">年卡服务</span>
                <span :class="{on : serviceType == 5}" @click="serviceType = 5">上门服务</span>
              </div>
            </div>
            <div class="doctor-btn flex-start-start">
            	<span>立即购买</span>
            	<span>加入购物车</span>
            </div>
          </div>
        </div>
        <div class="doctor-top-right">
        	<img :src="doctor.hospitalImg" />
        	<p>{{doctor.hospital}}</p>
        	<p><span>联系电话：</span>{{doctor.tel}}</p>
        	<p><span>详细地址：</span>{{doctor.address}}</p>
        </div>
      </div>
      <div class="doctor-bottom">
      	<div class="doctor-bottom-title flex-start-start">
      		<span :class="{on : doctorDetailType == 1}" @click="doctorDetailType = 1">简介及服务</span>
      		<span :class="{on : doctorDetailType == 2}" @click="doctorDetailType = 2">评价</span>
      	</div>
      	<div class="doctor-bottom-time flex-center-center">
      		<p><span>工作时间:</span>{{doctor.timeWeek}}</p>
      		<p><span>上午:</span>{{doctor.timeAm}}</p>
      		<p><span>下午:</span>{{doctor.timePm}}</p>
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
  import Foot from '../public/allFoot.vue';
  export default {
    name: 'famousDetail',
    props: {
      url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 0,
          searchShow: true,
          url: this.url
        },
        serviceType: 1,
        amount: 1,
        doctorDetailType: 1,
        doctor: {
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          workTime: '12',
          evaluate: '98',
          name: '韩冬梅',
          sex: '女',
          level: '主治医师',
          type: '妇产科&生殖中心',
          address: '江西赣州市立医院',
          follow: false,
          goodAt: '擅长口腔种植手术、口腔正畸治疗、复杂埋伏阻生牙的拔出、复杂根治生牙的拔出、复杂根治牙的大拔疗、牙周序列治疗、口腔黏膜病的诊断治疗。',
          servicePrice: '69.00',
          surplus: 3,
          hospital: '江西赣州市立医院',
          tel: '0755-1234567',
          address: '深圳市南山区东滨路xxxx南山人民医院',
          hospitalImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          timeWeek: '周一至周五',
          timeAm: '09：00至17：00',
          timePm: '14:00至17:00'
        }
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'my-foot': Foot
    },
    methods: {
    	amountChange: function(){
    		if(this.amount<1){
    			this.amount = 1
    		}else if(this.amount > this.doctor.surplus){
    			this.amount = this.doctor.surplus
    		}
    	}
    }
  }
</script>

<style scoped>
  #famousDetail {
    background-color: #fff;
  }
  
  section {
    width: 1200px;
    margin: 30px auto 60px;
  }
  
  .doctor-top {
    padding: 30px 66px 40px 20px;
    border: solid 1px #f1f1f1;
  }
  
  .doctor-top-left {
    width: 760px;
  }
  
  .doctor-evaluate {
    width: 160px;
    margin-right: 20px;
  }
  
  .doctor-evaluate img {
    width: 160px;
    height: 160px;
  }
  
  .doctor-evaluate p {
    margin-top: 20px;
    font-size: 14px;
    color: #ff6736;
  }
  
  .doctor-message {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
  }
  
  .doctor-basice {
    font-size: 18px;
    color: #333;
  }
  
  .doctor-basice span+span {
    margin-left: 5px;
  }
  
  .doctor-basice-state {
    height: 30px;
    width: 50px;
    line-height: 30px;
    text-align: center;
    margin-left: 60px;
    font-size: 16px;
    color: #fff;
    background-color: #999;
    border-radius: 5px;
  }
  
  .doctor-basice-state.on {
    background-color: #ff6736;
  }
  
  .doctor-basice span+span.doctor-basice-follow {
    height: 25px;
    line-height: 25px;
    margin-left: 50px;
    padding: 0 15px;
    font-size: 14px;
    color: #fff;
    border-radius: 25px;
    background-color: #27b5b1;
  }
  
  .doctor-other {
    line-height: 1;
  }
  
  .doctor-other p {
    width: 100%;
    margin-top: 15px;
    font-size: 16px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .doctor-other p span {
    color: #999;
  }
  
  .doctor-other p span.price {
    font-size: 16px;
    color: #ff4a60;
  }
  
  .doctor-other-amount {
    margin-top: 15px;
  }
  
  .doctor-other-amount p {
    width: auto;
    margin-top: 0;
  }
  
  .doctor-other-amount span {
    width: 18px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 16px;
    color: #ccc;
    border: solid 1px #999;
    cursor: pointer;
  }
  
  .doctor-other-amount input {
    width: 60px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 16px;
    color: #ccc;
    outline: none;
    border-radius: 0;
    border: solid 1px #999;
  }
  
  .doctor-other-service {
    width: 460px;
  }
  
  .doctor-other-service span {
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 20px 15px 0 0;
    font-size: 12px;
    color: #999;
    border: solid 1px #e5e5e5;
    background-color: #fff;
    border-radius: 5px;
  }
  
  .doctor-other-service span.on {
    color: #fff;
    background-color: #ff6736;
    border-color: #ff6736;
  }
  
  .doctor-btn{
  	margin-top: 40px;
  }
  
  .doctor-btn span{
  	width: 160px;
  	height: 50px;
  	line-height: 50px;
  	text-align: center;
  	font-size: 16px;
  	color: #ff6736;
  	border: solid 1px #ff6736;
  	background-color: #fff;
  	border-radius: 5px;
  }
  
  .doctor-btn span+span{
  	margin-left: 50px;
  	color: #fff;
  	background-color: #ff6736;
  }
  
  .doctor-top-right{
  	width: 210px;
  	padding: 15px;
  	border: solid 1px #f1f1f1;
  }
  
  .doctor-top-right img{
  	width: 180px;
  	height: 240px;
  }
  
  .doctor-top-right p{
  	line-height: 1.4;
  	margin-top: 5px;
  	font-size: 14px;
  	color: #666;
  }
  
  .doctor-top-right p span{
  	font-size: 14px;
  	color: #999;
  }
  
  .doctor-bottom-title{
  	width: 100%;
  	background-color: #f3f5f9;
  }
  
  .doctor-bottom-title span{
  	position: relative;
  	height: 50px;
  	line-height: 50px;
  	padding: 0 20px;
  	font-size: 18px;
  	color: #666;
  	cursor: pointer;
  }
  
  .doctor-bottom-title span.on{
  	color: #ff6736;
  }
  
  .doctor-bottom-title span.on:after{
  	position: absolute;
  	top: -2px;
  	left: 0;
  	content: "";
  	width: 100%;
  	height: 2px;
  	background-color: #ff6736;
  }
  
  .doctor-bottom-title span+span{
  	border-right: solid 1px #f1f1f1;
  }
  
  .doctor-bottom-time{
  	height: 50px;
  	font-size: 18px;
  	color: #666;
  	border-bottom: solid 1px #f1f1f1;
  }
  
  .doctor-bottom-time p+p{
  	margin-left: 40px;
  }
  
  .doctor-bottom-time p span{
  	color: #999;
  }
</style>