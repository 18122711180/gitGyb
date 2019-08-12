<template>
  <div id="accompanyingList">
    <my-head :login='login'></my-head>
    <section>
      <div class="doctor-type">
        <div class="doctor-type-list flex-start-center">
          <span class="doctor-type-title">分类：</span>
          <div class="flex-start-start doctor-type-main">
            <span v-for="(item,index) in nursingTypeData" :class="{ on : nursingType == index}" @click="typeChange(0,index)">{{item}}</span>
          </div>
        </div>
        <template v-if="type == 0">
          <div class="doctor-type-list flex-start-center">
            <span class="doctor-type-title">服务时间：</span>
            <div class="flex-start-start doctor-type-main">
              <span v-for="(item,index) in serviceTimeData" :class="{ on : serviceTime == index}" @click="typeChange(1,index)">{{item}}</span>
            </div>
          </div>
          <div class="doctor-type-list flex-start-center">
            <span class="doctor-type-title">护龄：</span>
            <div class="flex-start-start doctor-type-main">
              <span v-for="(item,index) in nursingWorkTimeData" :class="{ on : nursingWorkTime == index}" @click="typeChange(2,index)">{{item}}</span>
            </div>
          </div>
          <div class="doctor-type-list flex-start-center">
            <span class="doctor-type-title">服务医院：</span>
            <div class="flex-start-start doctor-type-main">
              <span v-for="(item,index) in serviceHospitalData" :class="{ on : serviceHospital == index}" @click="typeChange(3,index)">{{item}}</span>
            </div>
          </div>
        </template>
      </div>
      <div class="doctor-rank flex-start-center">
        <span :class="{ on : rankState}" @click="rankState = !rankState ">闲忙状态</span>
        <span :class="{ on : rankSex}" @click="rankSex = !rankSex ">性别</span>
        <span :class="{ on : rankLevel}" @click="rankLevel = !rankLevel ">等级</span>
      </div>
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
<template v-if="type != 2">
                <div class="flex-start-center doctor-basice-score">
                  <img v-for="(img, idx) in 5" :src="item.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'" />
                </div>
              </template>
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
          menu: 2,
          searchShow: false,
          url: this.url
        },
        pageTotal: 60,
        rankState: false,
        rankSex: false,
        rankLevel: false,
        nursingType: 0,
        nursingTypeData: [
          "护理人员",
          "管理老师"
        ],
        serviceTime: 0,
        serviceTimeData: [
          "全天陪护",
          "白天陪护",
          "夜间陪护"
        ],
        nursingWorkTime: 0,
        nursingWorkTimeData: [
          "我是新手",
          "3年以下",
          "3-5年",
          "5-10年",
          "10年以上"
        ],
        serviceHospital: 0,
        serviceHospitalData: [
          "赣州市立医院",
          "赣南一附院",
          "赣州东河医院",
          "赣州市人民医院",
          "赣州三康医院"
        ],
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
        }],
        type: 0
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'my-foot': Foot
    },
    mounted() {
          	this.type = this.$route.query.type
    },
    methods: {
      pageChange: function(val) {
        console.log(val)
      },
      typeChange: function(type, index) {
        var that = this
        switch(type) {
          case 0:
            that.nursingType = indexe
            break;
          case 1:
            that.serviceTime = index
            break;
          case 2:
            that.nursingWorkTime = index
            break;
          case 3:
            that.serviceHospital = index
            break;

        }
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
  
  .doctor-list-basic span.float-doctor-follow {
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
  
  .doctor-list-basic span.on.float-doctor-follow {
    background-color: #ff6736;
  }
  
  .doctor-basice-score {
    margin-left: 30px;
  }
  
  .doctor-basice-score img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
  
  .doctor-list-message p {
    margin-top: 10px;
    font-size: 16px;
    color: #999;
  }
  
  .doctor-list-message span {
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
    border-radius: 40px;
  }
  
  .float-doctor-message-right span+span {
    margin-left: 20px;
  }
  
  .doctor-type {
    padding: 30px;
  }
  
  .doctor-type-list+.doctor-type-list {
    margin-top: 20px;
  }
  
  .doctor-type-list>div {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    margin-right: 200px;
  }
  
  .doctor-type-title {
    width: 100px;
  }
  
  .doctor-type-main span {
    height: 30px;
    padding: 0 15px;
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