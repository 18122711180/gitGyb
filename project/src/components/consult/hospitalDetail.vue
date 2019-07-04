<template>
  <div id="hospitalDetail">
    <my-head :login='login'></my-head>
    <section>
      <div class="hospital-top flex-start-start">
        <img :src="hospital.img" />
        <div class="hospital-top-right">
          <p><span>名称：</span>{{hospital.name}}</p>
          <p><span>地址：</span>{{hospital.address}}</p>
          <p><span>电话：</span>{{hospital.tel}}</p>
          <p><span>特色：</span>{{hospital.characteristic}}</p>
          <p><span>简介：</span>{{hospital.introduce}}</p>
        </div>
      </div>
      <div class="department">
        <div class="department-title">
          <img src="../../../static/img/consult-title-1.png" />
        </div>
        <div class="department-menu flex-start-start">
          <span v-for="(item , index) in departmentMenu" :class="{on : departmentMenuType == index}" @click="departmentMenuChange(index, item.id)">{{item.name}}</span>
        </div>
        <div class="doctor-list flex-start-start flex-wrap">
          <div v-for="(item , index) in doctorList" @click="doctorSelect(item.id)">
            <img :src="item.img" />
            <div class="doctor-list-main">
              <div class="doctor-list-basic flex-start-start">
                <span>{{item.name}}</span>
                <span>{{item.sex}}</span>
                <span>{{item.level}}</span>
              </div>
              <div class="doctor-list-message">
                <p>内科:{{item.type}}</p>
                <p>{{item.address}}</p>
                <p>擅长{{item.goodAt}}</p>
              </div>
              <div class="doctor-list-data flex-start-start">
                <span>从业{{item.workTime}}年</span>
                <span>好评率{{item.evaluate}}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="float-doctor" v-if="doctorShow">
      <div class="float-doctor-title">
        <p>医生详情</p>
        <img src="../../../static/img/icon-delete.png" @click="doctorShow = false" />
      </div>
      <div class="float-doctor-main">
        <div class="float-doctor-message flex-start-start">
          <div class="float-doctor-message-left">
            <img :src="doctorDetail.img" />
          </div>
          <div class="doctor-list-main">
            <div class="doctor-list-basic flex-start-center">
              <span>{{doctorDetail.name}}</span>
              <span>{{doctorDetail.sex}}</span>
              <span>{{doctorDetail.level}}</span>
              <span class="float-doctor-follow" @click="doctorDetail.follow = !doctorDetail.follow">{{doctorDetail.follow ? "已关注" : "关注"}}</span>
            </div>
            <div class="doctor-list-message">
              <p>内科:{{doctorDetail.type}}</p>
              <p>{{doctorDetail.address}}</p>
            </div>
            <div class="float-doctor-attestation flex-start-start">
              <p class="flex-start-center">
                <img src="../../../static/img/doctor-sure.png" /> 医生认证
              </p>
              <p class="flex-start-center">
                <img src="../../../static/img/doctor-sure.png" /> 平台认证
              </p>
            </div>
          </div>
        </div>
        <div class="float-doctor-introudce">
          <h3>擅长疾病</h3>
          <p>{{doctorDetail.goodAt}}</p>
        </div>
        <div class="float-doctor-introudce">
          <h3>个人简介</h3>
          <p>{{doctorDetail.introduce}}</p>
        </div>
        <div class="float-doctor-introudce">
          <h3>医院信息</h3>
          <div class="flex-start-center">
            <img src="../../../static/img/doctor-hospital.png" />
            <p><span>{{doctorDetail.hospital}}</span></p>
          </div>
          <div class="flex-start-center">
            <img src="../../../static/img/doctor-tel.png" />
            <p>联系电话：<span>{{doctorDetail.tel}}</span></p>
          </div>
          <div class="flex-start-center">
            <img src="../../../static/img/doctor-address.png" />
            <p>详细地址：<span>{{doctorDetail.address}}</span></p>
          </div>
        </div>
      </div>
      <div class="float-doctor-btn flex-start-start">
      	<span>预约陪诊 （暂未开通）</span>
      	<span>预约陪诊</span>
      </div>
    </div>
    <right-float></right-float>
    <my-foot></my-foot>
  </div>
</template>

<script>
  import Head from '../public/allHead.vue';
  import Float from '../public/rightFloat.vue';
  import Foot from '../public/allFoot.vue';
  export default {
    name: 'hospitalDetail',
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
        hospital: {
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '赣州市人民医院 北院（老院）',
          address: '章贡区红旗大道17号',
          tel: '0755-8392333',
          characteristic: '中医儿科、神经内科、脊椎外科等......',
          introduce: '深圳市南山区人民医院位于广东省深圳市南山区桃园路89号，交通相当方便，我们深圳市南山区人民医院位于广东省深圳市南山区桃园路89号，交通相当方便，我们的服务深圳市南山区人民医院位于广东省深圳市南山区桃园路89号，交通相当方便，我们的服务深圳市南山区人民医院位于广东省深圳市南山区桃园路89号，交通相当方便，我们的服务深圳市南山区人民医院位于广东省深圳市南山区桃园路89号，交通相当方便，我们的服务深圳市南山区人民医院位于广东省深圳市南山区桃园路89号，交通相当方便，我们的服务深圳市南山区人民医院位于广东省深圳市南山区桃园路89我们的服务宗旨诚信为本为中小深圳市南山区人民医院位于广东省深圳市南山区桃园路89我们的服务宗旨诚信为本为中小深圳市南山区人民医院位于广东省深圳市南山区桃园路89我们的服务宗旨诚信为本为中小深圳市南山区人民医院位于广东省深圳市南山区桃园圳市南山区人民医院位于广东省深圳市南山区桃园圳市南山区人民医院位于广东省深圳市南山区桃园圳市南山区人民医院位于广东省深圳市南山区桃园圳市南山区人民医院位于广东省深圳市南山区桃园圳市南山区人民医院位于广东省深圳市南山区桃园圳市南山区人民医院位于广东省深圳市南山区桃园',
        },
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
        departmentMenuType: 0,
        doctorList: [{
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
        doctorShow: false,
        doctorDetail: {
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          name: '韩冬梅',
          sex: '女',
          level: '主治医师',
          type: '妇产科&生殖中心',
          address: '江西赣州市立医院',
          follow: false,
          goodAt: '擅长口腔种植手术、口腔正畸治疗、复杂埋伏阻生牙的拔出、复杂根治生牙的拔出、复杂根治牙的大拔疗、牙周序列治疗、口腔黏膜病的诊断治疗。',
          introduce: '北大医院肝病肠道科主任、教授、主任医师、研究生导师、北京大学医北京大学医学部感大学系委员的部感染学系委员、广东省肝病常委、深圳市医师协会肝病专科会长、深北京大学医学部感学系委员的大市感染疾病、肝病副主委。北大医院肝病肠道科主任、教授、主任医师北京大学医学部感学系委员的大研究生导师、北京大学医学部感染学系委员、广东省肝病常委、深圳的北京大学医学部感学系委员的大师协会肝病专科会长、深圳市感染疾病、肝病副主委。北大医院肝病肠北京大学医学部感学系委员的大科主任、教授、主任医师、研究生导师、北京大学医学部感学系委员的北京大学医学部感学系委员的大广东省肝病常委、深圳市医师协会肝病专科会长、深圳市感疾副主委。',
          hospital: '江西赣州市立医院',
          tel: '0755-1234567',
          address: '深圳市南山区东滨路xxxx南山人民医院'
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
      departmentMenuChange: function(index, id) {
        var that = this
        that.departmentMenuType = index
      },
      doctorSelect: function(id) {
        var that = this
        that.doctorShow = true
      }
    }
  }
</script>

<style scoped>
  #hospitalDetail {
    background-color: #fff;
  }
  
  section {
    width: 1200px;
    margin: 30px auto 60px;
  }
  
  .hospital-top img {
    width: 547px;
    height: 396px;
    margin-right: 20px;
  }
  
  .hospital-top-right {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    line-height: 1;
  }
  
  .hospital-top-right p {
    width: 100%;
    font-size: 16px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .hospital-top-right p span {
    color: #999;
  }
  
  .hospital-top-right p+p {
    margin-top: 14px;
  }
  
  .hospital-top-right p:last-of-type {
    height: 268px;
    overflow-y: auto;
    line-height: 1.6;
    text-overflow: inherit;
    white-space: normal;
  }
  
  .department-title {
    margin: 38px 0 30px;
    text-align: center;
  }
  
  .department-title img {
    width: 175px;
    height: 63px;
  }
  
  .department-menu {
    width: 100%;
    height: 50px;
    background-color: #f3f5f9;
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
  
  .department-menu span+span {
    border-left: solid 2px #f1f1f1;
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
  
  .doctor-list>div {
    width: 288px;
    height: 474px;
    margin: 40px 0 0 16px;
    cursor: pointer;
  }
  
  .doctor-list img {
    width: 100%;
    height: 280px;
  }
  
  .doctor-list>div:nth-of-type(4n+1) {
    margin-left: 0;
  }
  
  .doctor-list-main {
    height: 194px;
    padding: 23px 15px 0;
    border: solid 1px #f1f1f1;
    border-top: none;
  }
  
  .doctor-list-basic {
    line-height: 1;
    font-size: 16px;
    color: #333;
  }
  
  .doctor-list-basic span+span {
    margin-left: 5px;
  }
  
  .doctor-list-message p {
    width: 100%;
    margin-top: 18px;
    line-height: 1;
    font-size: 16px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .doctor-list-message p+p {
    margin-top: 13px;
  }
  
  .doctor-list-data {
    margin-top: 10px;
  }
  
  .doctor-list-data span {
    height: 30px;
    line-height: 30px;
    padding: 0 15px;
    font-size: 14px;
    color: #fff;
    border-radius: 30px;
    background-color: #ff6736;
  }
  
  .doctor-list-data span+span {
    margin-left: 15px;
  }
  
  .float-doctor {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 764px;
    height: 700px;
    transform: translate(-50%, -50%);
    border: solid 1px #f1f1f1;
    background-color: #fff;
    z-index: 3222;
  }
  
  .float-doctor-main{
  	height: 600px;
  	overflow-y: auto;
  }
  
  .float-doctor-title {
    position: relative;
    height: 55px;
    line-height: 55px;
    text-align: center;
    font-size: 16px;
    color: #666;
    border-bottom: solid 1px #f3f5f9;
  }
  
  .float-doctor-title img {
    position: absolute;
    right: 20px;
    top: 19px;
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  
   ::-webkit-scrollbar {
    width: 4px;
  }
  
   ::-webkit-scrollbar-track {
    background-color: #eaeaea;
    border-left: 1px solid #ccc;
  }
  /*定义滚动条轨道 内阴影+圆角*/
  
   ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }
  /*定义滑块 内阴影+圆角*/
  
   ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #555;
  }
  
  .float-doctor-message {
    padding: 20px;
    border-bottom: solid 1px #f3f5f6;
  }
  
  .float-doctor-message-left img {
    width: 160px;
    height: 160px;
    margin-right: 20px;
    border-radius: 5px;
  }
  
  .float-doctor-message .doctor-list-main {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    padding: 0;
    height: auto;
    border: none;
  }
  
  .float-doctor-attestation {
    margin-top: 25px;
    font-size: 14px;
    color: #666;
  }
  
  .float-doctor-attestation p+p {
    margin-left: 10px;
  }
  
  .float-doctor-attestation img {
    width: 15px;
    height: 15px;
    margin-right: 10px;
  }
  
  .doctor-list-basic span.float-doctor-follow {
    height: 25px;
    line-height: 25px;
    padding: 0 13px;
    margin-left: 50px;
    font-size: 14px;
    color: #fff;
    background-color: #27b5b1;
    border-radius: 25px;
    cursor: pointer;
  }
  
  .float-doctor-introudce {
    font-size: 16px;
    ;
    padding: 20px 20px 30px;
  }
  
  .float-doctor-introudce h3 {
    text-align: center;
    color: #666;
  }
  
  .float-doctor-introudce p {
    margin-top: 10px;
    line-height: 1.6;
    color: #999;
  }
  
  .float-doctor-introudce+.float-doctor-introudce {
    border-top: solid 1px #f3f5f6;
  }
  
  .float-doctor-introudce div {
    margin-top: 19px;
  }
  
  .float-doctor-introudce div p{
  	margin-top: 0;
  }
  
  .float-doctor-introudce div+div {
    margin-top: 15px;
  }
  
  .float-doctor-introudce img {
    margin-right: 10px;
  }
  
  .float-doctor-introudce span {
    font-weight: bold;
    color: #666;
  }
  
  .float-doctor-btn span{
  	width: 50%;
  	height: 45px;
  	line-height: 45px;
  	text-align: center;
  	font-size: 16px;
  	color: #fff;
  	background-color: #ccc;
  }
  
  .float-doctor-btn span+span{
  	background-color: #ff6736;
  }
</style>