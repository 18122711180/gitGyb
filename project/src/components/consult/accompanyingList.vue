<template>
  <div id="accompanyingList">
    <my-head :login='login'></my-head>
    <section>
      <div class="float-doctor-main">
      	<router-link :to="{ path: '/accompanying/detail', query: { id: item.id }}" class="float-doctor-message flex-start-start" v-for="(item , index) in doctorList" :key="index">
          <div class="float-doctor-message-left">
            <img :src="item.img" />
          </div>
          <div class="doctor-list-main">
            <div class="doctor-list-basic flex-start-center">
              <span>{{item.name}}</span>
              <span>{{item.sex}}</span>
              <span>{{item.age}}岁</span>
              <span>{{item.level}}</span>
              <span class="float-doctor-follow" :class="{on : item.state}">{{item.state ? "忙" : "闲"}}</span>
              <div class="flex-start-center doctor-basice-score">
              	<img v-for="(img, idx) in 5" :src="item.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'" />
              </div>
            </div>
            <div class="doctor-list-message">
              <p>所属公司:<span>{{item.company}}</span></p>
              <p>所服务医院:<span>{{item.address}}</span></p>
              <p>养老护理员证:<span>{{item.cardState1? "有" : "无"}}</span> 健康证:<span>{{item.cardState2? "有" : "无"}}</span></p>
              <p>护龄<span>{{item.workTime}}年</span></p>
            </div>
          </div>
          <div class="float-doctor-message-right flex-start-start">
          	<span>服务{{item.serviceTime}}次</span>
          	<span>好评率{{item.evaluate}}%</span>
          </div>
        </router-link>
      </div>
      <div class="search-page flex-center-start" v-if="pageTotal>10">
        <el-pagination background @current-change="pageChange" layout="prev, pager, next" :total="pageTotal">
        </el-pagination>
      </div>
    </section>
    <right-float></right-float>
    <my-foot></my-foot>
  </div>
</template>

<script>
  import Head from '../public/allHead.vue';
  import Float from '../public/rightFloat.vue';
  import Foot from '../public/allFoot.vue';
  export default {
    name: 'accompanyingList',
    props: {
      url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 1,
          searchShow: false,
          url: this.url
        },
        pageTotal: 60,
        doctorList: [{
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '30',
          level: '主治医师',
          company: '所属陪护公司名称',
          score: 5,
          address: '江西赣州市立医院',
          cardState1: true,
          cardState2: true,
          workTime: '12',
          serviceTime: '87',
          evaluate: '98',
          state: false
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '30',
          level: '主治医师',
          company: '所属陪护公司名称',
          score: 5,
          address: '江西赣州市立医院',
          cardState1: true,
          cardState2: true,
          workTime: '12',
          serviceTime: '87',
          evaluate: '98',
          state: false
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '30',
          level: '主治医师',
          company: '所属陪护公司名称',
          score: 5,
          address: '江西赣州市立医院',
          cardState1: true,
          cardState2: true,
          workTime: '12',
          serviceTime: '87',
          evaluate: '98',
          state: false
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '30',
          level: '主治医师',
          company: '所属陪护公司名称',
          score: 5,
          address: '江西赣州市立医院',
          cardState1: true,
          cardState2: true,
          workTime: '12',
          serviceTime: '87',
          evaluate: '98',
          state: false
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '30',
          level: '主治医师',
          company: '所属陪护公司名称',
          score: 5,
          address: '江西赣州市立医院',
          cardState1: true,
          cardState2: true,
          workTime: '12',
          serviceTime: '87',
          evaluate: '98',
          state: false
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '30',
          level: '主治医师',
          company: '所属陪护公司名称',
          score: 5,
          address: '江西赣州市立医院',
          cardState1: true,
          cardState2: true,
          workTime: '12',
          serviceTime: '87',
          evaluate: '98',
          state: false
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '30',
          level: '主治医师',
          company: '所属陪护公司名称',
          score: 5,
          address: '江西赣州市立医院',
          cardState1: true,
          cardState2: true,
          workTime: '12',
          serviceTime: '87',
          evaluate: '98',
          state: false
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '30',
          level: '主治医师',
          company: '所属陪护公司名称',
          score: 5,
          address: '江西赣州市立医院',
          cardState1: true,
          cardState2: true,
          workTime: '12',
          serviceTime: '87',
          evaluate: '98',
          state: false
        }]
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'my-foot': Foot
    },
    methods: {
			pageChange: function(val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped>
  #accompanyingList {
    background-color: #fff;
  }
  
  section {
    width: 1200px;
    padding-bottom: 20px;
    margin: 40px auto 60px;
    border: solid 1px #f1f1f1;
  }
  
  .doctor-type{
  	padding: 30px;
  }
  
  .doctor-type>div {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    margin-right: 200px;
  }
  
  .doctor-type-main span {
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    color: #333;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .doctor-type-main span+span {
    margin-left: 15px;
  }
  
  .doctor-type-main span.on {
    color: #fff;
    background-color: #ff6736;
  }
  
  .doctor-department {
    font-size: 16px;
    color: #666;
  }
  
  .doctor-department span {
    cursor: pointer;
  }
  
  .doctor-department div:first-of-type span+span {
    margin-left: 30px;
  }
  
  .doctor-department span.on {
    color: #ff6736;
  }
  
  .doctor-department div+div {
    font-size: 14px;
    color: #999;
  }
  
  .doctor-department div+div span {
    margin: 14px 19px 0 0;
  }
  
  .float-doctor-message {
    padding: 30px 20px;
    border-top: solid 1px #f1f1f1;
  }
  
  .float-doctor-message-left img{
  	width: 160px;
  	height: 160px;
  	margin-right: 15px;
  }
  
  .doctor-list-main{
  	-webkit-flex: 1;
  	flex: 1;
  	min-width: 0;
  	margin-right: 20px;
  }
  
  .doctor-list-basic{
  	font-size: 18px;
  	color: #333;
  }
  
  .doctor-list-basic span+span{
  	margin-left: 5px;
  }
  
  .doctor-list-basic span:last-of-type{
  	width: 50px;
  	height: 30px;
  	line-height: 30px;
  	margin-left: 60px;
  	text-align: center;
  	font-size: 16px;
  	color: #fff;
  	background-color: #999;
  	border-radius: 5px;
  }
  
  .doctor-list-basic span.on:last-of-type{
  	background-color: #ff6736;
  }
  
  .doctor-basice-score{
  	margin-left: 30px;
  }
  
  .doctor-basice-score img{
  	width: 18px;
  	height: 18px;
  	margin-right: 5px;
  }
  
  .doctor-list-message p{
  	margin-top: 10px;
  	font-size: 16px;
  	color: #999;
  }
  
  .doctor-list-message span{
  	color: #666;
  }
  
  .float-doctor-message-right span{
  	width: 120px;
  	height: 40px;
  	line-height: 40px;
  	text-align: center;
  	font-size: 16px;
  	color: #ff6736;
  	border: solid 1px #ff6736;
  	border-radius: 40px;
  }
  
  .float-doctor-message-right span+span{
  	margin-left: 20px;
  }
</style>

<style>
  .search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6736;
  }
  
  .search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #ff6736;
  }
</style>