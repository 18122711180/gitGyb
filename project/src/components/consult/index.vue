<template>
  <div id="consultIndex">
    <my-head :login='login' />
    <section>
      <div class="banner">
        <img :src="nurse.banner" />
      </div>
      <div class="section-center">
        <div class="health-consult-main nursing-main-list-2">
          <ul class="flex-between-start">
            <li v-for="item in nursingList2">
              <router-link to="/">
                <img :src="item.img" />
                <span>{{item.name}}</span>
                <div class="health-consult-hover flex-center-center flex-column">
                  <p>{{item.name}}</p>
                  <p>{{item.introduce}}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="doctor-main">
          <div class="nursing-main-title">
            <img src="../../../static/img/consult-title-2.png" />
            <router-link to="">进入名医榜 >></router-link>
          </div>
          <div class="doctor-list flex-between-start">
            <div class="doctor-list-main" v-for="(item,index) in doctorList">
              <img :src="item.img" />
              <div class="doctor-list-bottom">
                <p>{{item.name}}</p>
                <p>{{item.address}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="hospital-main">
          <div class="nursing-main-title">
            <img src="../../../static/img/consult-title-3.png" />
            <router-link to="">更多私人医生 >></router-link>
          </div>
          <div class="department-menu flex-start-start">
            <span v-for="(item , index) in departmentMenu" :class="{on : departmentMenuType == index}" @click="departmentMenuChange(index, item.id)">{{item.name}}</span>
          </div>
          <div class="hospital-list flex-start-start flex-wrap">
            <div v-for="(item , index) in hospitalList">
              <img :src="item.img" />
              <div class="hospital-list-main">
                <div class="hospital-list-basic flex-start-start">
                  <span>{{item.name}}</span>
                  <span>{{item.sex}}</span>
                  <span>{{item.level}}</span>
                </div>
                <div class="hospital-list-message">
                  <p>内科:{{item.type}}</p>
                  <p>{{item.address}}</p>
                  <p>擅长{{item.goodAt}}</p>
                </div>
                <div class="hospital-list-data flex-start-start">
                  <span>从业{{item.workTime}}年</span>
                  <span>好评率{{item.evaluate}}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="nursing-main">
          <div class="nursing-main-title">
            <img src="../../../static/img/consult-title-4.png" />
            <router-link to="">更多专业陪诊 >></router-link>
          </div>
          <div class="nursing-list flex-between-start">
            <div class="nursing-list-main" v-for="(item,index) in nursingList">
              <img :src="item.img" />
              <div class="nursing-list-bottom">
                <div class="nursing-list-basic flex-start-start">
                  <span>{{item.name}}</span>
                  <span>{{item.sex}}</span>
                  <span>{{item.age}}岁</span>
                </div>
                <p>所服务医院:<span>{{item.hospital}}</span></p>
                <p>陪护公司:<span>{{item.company}}</span></p>
                <p class="flex-start-center">
                  好评率:
                  <span>{{item.evaluate}}</span>
                  <img v-for="(star , idx) in 5" :src="item.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'" />
                </p>
                <div class="nursing-list-contact">
                  <span>联系公司</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="physician-main">
          <div class="nursing-main-title">
            <img src="../../../static/img/consult-title-5.png" />
            <router-link to="">更多医生 >></router-link>
          </div>
          <div class="department-menu flex-start-start">
            <span v-for="(item , index) in physicianMenu" :class="{on : physicianMenuType == index}" @click="physicianMenuChange(index, item.id)">{{item.name}}</span>
          </div>
          <div class="physician-list flex-between-start">
            <div class="physician-list-main" v-for="(item,index) in physicianList">
              <img :src="item.img" />
              <div class="physician-list-bottom">
                <div class="nursing-list-basic flex-start-start">
                  <span>{{item.name}}</span>
                  <span>{{item.sex}}</span>
                  <span>{{item.age}}岁</span>
                </div>
                <p>所属公司:{{item.company}}</p>
                <div class="physician-list-evaluate flex-start-start">
                  <span>好评率{{item.evaluate}}%</span>
                  <span>月销{{item.sales}}</span>
                  <span>平台认证</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="physician-main">
          <div class="nursing-main-title">
            <img src="../../../static/img/consult-title-6.png" />
            <router-link to="">更多健康资讯 >></router-link>
          </div>
          <div class="department-menu flex-start-start">
            <span v-for="(item , index) in healthMenu" :class="{on : healthMenuType == index}" @click="healthMenuChange(index, item.id)">{{item.name}}</span>
          </div>
          <div class="health-list">
            <el-carousel trigger="click" height="400px">
              <el-carousel-item v-for="(item,index) in healthList" :key="index">
                <div class="health-list-main">
                	<img :src="item.img"/>
                	<p>{{item.text}}</p>
                </div>
              </el-carousel-item>
            </el-carousel>
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
  import Foot from '../public/allFoot.vue';
  export default {
    name: 'consultIndex',
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
        nurse: {
          banner: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg'
        },
        nursingList2: [{
            url: '',
            img: '../../../static/img/consult-1.png',
            name: '名医榜',
            introduce: '私人定制 安全放心'
          },
          {
            url: '',
            img: '../../../static/img/consult-2.png',
            name: '私人医生',
            introduce: '私人定制 安全放心'
          },
          {
            url: '',
            img: '../../../static/img/consult-3.png',
            name: '医辅名师',
            introduce: '私人定制 安全放心'
          },
          {
            url: '',
            img: '../../../static/img/consult-4.png',
            name: '专业陪诊',
            introduce: '私人定制 安全放心'
          }, {
            url: '',
            img: '../../../static/img/consult-5.png',
            name: '健康咨询',
            introduce: '私人定制 安全放心'
          }
        ],
        doctorList: [{
            id: 11,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '江西省赣州市人民医院 北院 （老院）',
            address: '章贡区红旗大道17号'
          },
          {
            id: 11,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '江西省赣州市人民医院 北院 （老院）',
            address: '章贡区红旗大道17号'
          },
          {
            id: 11,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '江西省赣州市人民医院 北院 （老院）',
            address: '章贡区红旗大道17号'
          },
          {
            id: 11,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '江西省赣州市人民医院 北院 （老院）',
            address: '章贡区红旗大道17号'
          }
        ],
        nursingList: [{
            id: 11,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '丁海',
            sex: '女',
            age: '21',
            hospital: '赣州市人民医院新院区',
            company: '陪护公司名称',
            score: 5
          },
          {
            id: 11,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '丁海',
            sex: '女',
            age: '21',
            hospital: '赣州市人民医院新院区',
            company: '陪护公司名称',
            score: 5
          },
          {
            id: 11,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '丁海',
            sex: '女',
            age: '21',
            hospital: '赣州市人民医院新院区',
            company: '陪护公司名称',
            score: 5
          },
          {
            id: 11,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '丁海',
            sex: '女',
            age: '21',
            hospital: '赣州市人民医院新院区',
            company: '陪护公司名称',
            score: 5
          }
        ],
        physicianList: [{
            id: 11,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '丁海',
            sex: '女',
            age: '21',
            company: '陪护公司名称',
            evaluate: 98,
            sales: 12
          },
          {
            id: 11,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '丁海',
            sex: '女',
            age: '21',
            company: '陪护公司名称',
            evaluate: 98,
            sales: 12
          },
          {
            id: 11,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '丁海',
            sex: '女',
            age: '21',
            company: '陪护公司名称',
            evaluate: 98,
            sales: 12
          }
        ],
        departmentMenu: [{
            id: 1,
            name: '妇产科&生殖中心'
          },
          {
            id: 2,
            name: '儿科'
          },
          {
            id: 3,
            name: '泌尿外科'
          },
          {
            id: 4,
            name: '皮肤性病科'
          },
          {
            id: 5,
            name: '骨科'
          },
          {
            id: 6,
            name: '内分泌科'
          }
        ],
        physicianMenu: [{
            id: 1,
            name: '催乳师'
          },
          {
            id: 2,
            name: '心理咨询师'
          },
          {
            id: 3,
            name: '康复理疗师'
          },
          {
            id: 4,
            name: '公共营养师'
          },
          {
            id: 5,
            name: '医事代办员'
          }
        ],
        healthMenu: [{
            id: 1,
            name: '热门推荐'
          },
          {
            id: 2,
            name: '生活健康'
          },
          {
            id: 3,
            name: '生活护理'
          },
          {
            id: 4,
            name: '优生优育'
          }
        ],
        departmentMenuType: 0,
        physicianMenuType: 0,
        healthMenuType: 0,
        hospitalList: [{
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          level: '主治医师',
          type: '妇产科&生殖中心',
          address: '江西赣州市立医院',
          goodAt: '骨性牙列不齐，各种正畸技术',
          workTime: '12',
          evaluate: '98'
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          level: '主治医师',
          type: '妇产科&生殖中心',
          address: '江西赣州市立医院',
          goodAt: '骨性牙列不齐，各种正畸技术',
          workTime: '12',
          evaluate: '98'
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          level: '主治医师',
          type: '妇产科&生殖中心',
          address: '江西赣州市立医院',
          goodAt: '骨性牙列不齐，各种正畸技术',
          workTime: '12',
          evaluate: '98'
        }, {
          id: 1,
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          level: '主治医师',
          type: '妇产科&生殖中心',
          address: '江西赣州市立医院',
          goodAt: '骨性牙列不齐，各种正畸技术',
          workTime: '12',
          evaluate: '98'
        }],
        healthList: [
        	{
        		id: 1,
        		img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
        		text: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相！'
        	},
        	{
        		id: 1,
        		img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
        		text: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相！'
        	}
        ]
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'my-foot': Foot
    },
    methods: {
      departmentMenuChange: function(index, id) {
        var that = this
        that.departmentMenuType = index
      },
      physicianMenuChange: function(index, id) {
        var that = this
        that.physicianMenuType = index
      },
      healthMenuChange: function(index, id) {
        var that = this
        that.healthMenuType = index
      }
    }
  }
</script>

<style scoped>
  #consultIndex {
    background-color: #fff;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
  
  .banner {
    width: 100%;
    height: 510px;
  }
  
  .section-center {
    width: 1200px;
    margin: 0 auto 60px;
  }
  
  .health-consult-main {
    margin-top: 30px;
  }
  
  .health-consult-main a>span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
    color: #fff;
    background-color: rgba(255, 103, 54, .72);
  }
  
  .nursing-main-list-2.health-consult-main li {
    position: relative;
    width: 228px;
    height: 300px;
    margin-top: 0;
  }
  
  .health-consult-hover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    font-size: 30px;
    color: #fff;
    background-color: rgba(255, 103, 54, .72);
    display: none;
  }
  
  .health-consult-hover p+p {
    margin-top: 24px;
    font-size: 24px;
  }
  
  .health-consult-main li:hover a>span {
    display: none;
  }
  
  .health-consult-main li:hover .health-consult-hover {
    display: -webkit-flex;
    display: flex;
  }
  
  .nursing-main+.nursing-main {
    padding-top: 10px;
  }
  
  .nursing-main-title {
    position: relative;
    margin: 39px 0 20px;
    text-align: center;
  }
  
  .nursing-main-title img {
    width: 175px;
    height: 63px;
  }
  
  .nursing-main-title a {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 16px;
    color: #333;
    cursor: pointer;
  }
  
  .nursing-list-main {
    width: 289px;
    height: 479px;
    border: solid 1px #f1f1f1;
  }
  
  .nursing-list-main img {
    width: 100%;
    height: 280px;
  }
  
  .nursing-list-bottom {
    line-height: 1;
    padding: 24px 15px 0;
    font-size: 16px;
    color: #333;
  }
  
  .nursing-list-bottom p {
    width: 100%;
    margin-top: 15px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .nursing-list-bottom p span {
    color: #666;
  }
  
  .nursing-list-bottom p img {
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }
  
  .nursing-list-basic span+span {
    margin-left: 5px;
  }
  
  .nursing-list-contact {
    margin-top: 15px;
  }
  
  .nursing-list-contact span {
    display: inline-block;
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    border-radius: 30px;
    background-color: #ff6736;
  }
  
  .doctor-list-main {
    width: 289px;
    height: 472px;
  }
  
  .doctor-list-main img {
    width: 100%;
    height: 414px;
  }
  
  .doctor-list-bottom {
    width: 100%;
    height: 58px;
    line-height: 1;
    padding: 10px 20px 0;
    border: solid 1px #f1f1f1;
    border-top: none;
  }
  
  .doctor-list-bottom p {
    width: 100%;
    font-size: 16px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .doctor-list-bottom p+p {
    margin-top: 9;
    font-size: 12px;
    color: #999;
  }
  
  .department-menu {
    width: 100%;
    height: 50px;
    border-top: solid 1px #f1f1f1;
    border-bottom: solid 1px #f1f1f1;
  }
  
  .department-menu span {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0 21px;
    font-size: 16px;
    color: #666;
    cursor: pointer;
  }
  
  .department-menu span.on {
    color: #ff6736;
  }
  
  .department-menu span.on:after {
    position: absolute;
    left: 0;
    top: -2px;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #ff6736;
  }
  
  .hospital-list>div {
    width: 288px;
    height: 474px;
    margin: 40px 0 0 16px;
    cursor: pointer;
  }
  
  .hospital-list img {
    width: 100%;
    height: 280px;
  }
  
  .hospital-list>div:first-of-type {
    margin-left: 0;
  }
  
  .hospital-list-main {
    height: 194px;
    padding: 23px 15px 0;
    border: solid 1px #f1f1f1;
    border-top: none;
  }
  
  .hospital-list-basic {
    line-height: 1;
    font-size: 16px;
    color: #333;
  }
  
  .hospital-list-basic span+span {
    margin-left: 5px;
  }
  
  .hospital-list-message p {
    width: 100%;
    margin-top: 18px;
    line-height: 1;
    font-size: 16px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .hospital-list-message p+p {
    margin-top: 13px;
  }
  
  .hospital-list-data {
    margin-top: 10px;
  }
  
  .hospital-list-data span {
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
    font-size: 14px;
    color: #fff;
    border-radius: 30px;
    background-color: #ff6736;
  }
  
  .hospital-list-data span+span {
    margin-left: 15px;
  }
  
  .physician-list {
    margin-top: 20px;
  }
  
  .physician-list-main {
    width: 390px;
    height: 496px;
    border: solid 1px #f1f1f1;
  }
  
  .physician-list-main img {
    width: 390px;
    height: 360px;
  }
  
  .physician-list-bottom {
    padding: 30px 14px 0;
    line-height: 1;
  }
  
  .physician-list-bottom p {
    width: 100%;
    margin-top: 14px;
    font-size: 16px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .physician-list-evaluate {
    margin-top: 16px;
  }
  
  .physician-list-evaluate span {
    width: 90px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    border-radius: 30px;
    background-color: #ff6736;
  }
  
  .physician-list-evaluate span+span {
    margin-left: 15px;
  }
  
  .health-list{
  	margin-top: 20px;
  }
  
  .health-list-main{
  	position: relative;
  	width: 100%;
  	height: 400px;
  	font-size: 0;
  }
  
  .health-list-main p{
  	position: absolute;
  	left: 0;
  	bottom: 20px;
  	width: 100%;
  	padding: 0 40px;
  	font-size: 24px;
  	color: #fff;
  	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>