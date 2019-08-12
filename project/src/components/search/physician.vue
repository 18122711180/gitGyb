<template>
  <div id="physicianList">
    <my-head :login='login'></my-head>
    <section>
      <div class="float-doctor-main">
        <div class="float-doctor-message flex-start-start" v-for="(item , index) in doctorList" :key="index">
          <div class="float-doctor-message-left">
            <img :src="item.img" />
          </div>
          <div class="doctor-list-main">
            <div class="doctor-list-basic flex-start-center">
              <span>{{item.name}}</span>
              <span>{{item.sex}}</span>
              <span>{{item.age}}岁</span>
              <span class="float-doctor-follow" :class="{on : item.state}">{{item.state ? "空闲" : "忙碌"}}</span>
            </div>
            <div class="doctor-list-message">
              <p>所属公司:<span>{{item.company}}</span></p>
            </div>
          </div>
          <div class="float-doctor-message-right flex-start-start">
            <span>平台认证</span>
            <span>月销{{item.sales}}</span>
            <span>好评率{{item.evaluate}}%</span>
          </div>
        </div>
      </div>
      <div class="search-page flex-center-start" v-if="pageTotal>10">
        <el-pagination background @current-change="pageChange" layout="prev, pager, next" :total="pageTotal">
        </el-pagination>
      </div>
      <search-empty v-if="!doctorList.length"/>
    </section>
    <right-float></right-float>
    <my-foot></my-foot>
  </div>
</template>

<script>
  import Head from '../public/allHead.vue';
  import Float from '../public/rightFloat.vue';
  import Foot from '../public/allFoot.vue';
  import searchEmpty from '../public/searchEmpty.vue';
  export default {
    name: 'physicianList',
    props: {
      url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 3,
          searchShow: true,
          url: this.url
        },
        doctorType: 1,
        pageTotal: 60,
        doctorList: [{
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '35',
          company: '所属陪护公司名称',
          sales: '12',
          evaluate: '98',
          state: false
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '35',
          company: '所属陪护公司名称',
          sales: '12',
          evaluate: '98',
          state: false
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '35',
          company: '所属陪护公司名称',
          sales: '12',
          evaluate: '98',
          state: false
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '35',
          company: '所属陪护公司名称',
          sales: '12',
          evaluate: '98',
          state: false
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          age: '35',
          company: '所属陪护公司名称',
          sales: '12',
          evaluate: '98',
          state: false
        }]
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'search-empty': searchEmpty,
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
  #physicianList {
    background-color: #fff;
  }
  
  section {
    width: 1200px;
    padding-bottom: 20px;
    margin: 40px auto 60px;
    border: solid 1px #f1f1f1;
  }
  
  .doctor-type {
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
  
  .float-doctor-message {
    padding: 30px 20px;
    border-top: solid 1px #f1f1f1;
  }
  
  .float-doctor-message-left img {
    width: 160px;
    height: 160px;
    margin-right: 15px;
  }
  
  .doctor-list-main {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    margin-right: 20px;
  }
  
  .doctor-list-basic {
    font-size: 18px;
    color: #333;
  }
  
  .doctor-list-basic span+span {
    margin-left: 5px;
  }
  
  .doctor-list-basic span:last-of-type {
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
  
  .doctor-list-basic span.on:last-of-type {
    background-color: #ff6736;
  }
  
  .doctor-list-message p {
    margin-top: 10px;
    font-size: 16px;
    color: #999;
  }
  
  .doctor-list-message span{
  	color: #666;
  }
  
  .float-doctor-message-right span {
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #ff6736;
    border: solid 1px #ff6736;
    background-color: #fff;
    border-radius: 40px;
  }
  
  .float-doctor-message-right span+span {
    margin-left: 20px;
  }
  
  .doctor-rank {
    height: 34px;
    padding-left: 20px;
    border-top: solid 1px #f1f1f1;
    border-bottom: solid 1px #f1f1f1;
  }
  
  .doctor-rank span {
    position: relative;
    padding-right: 16px;
    margin-right: 20px;
    font-size: 12px;
    color: #666;
    cursor: pointer;
  }
  
  .doctor-rank span.on {
    color: #ff6736;
  }
  
  .doctor-rank span:after {
    position: absolute;
    right: 0;
    top: 50%;
    content: "";
    margin-top: -5px;
    border-style: solid;
    border-width: 10px 5px 10px 5px;
    border-color: #ccc transparent transparent transparent;
  }
  
  .doctor-rank span.on:after {
    margin-top: -15px;
    border-color: transparent transparent #ff6736 transparent;
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