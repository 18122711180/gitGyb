<template>
  <div id="hospitalDetail">
    <my-head :login="login"></my-head>
    <section>
      <div class="hospital-top flex-start-start">
        <img :src="hospital.himagsrc">
        <div class="hospital-top-right">
          <p>
            <span>名称：</span>
            {{hospital.hname}}
          </p>
          <p>
            <span>地址：</span>
            {{hospital.haddress}}
          </p>
          <p>
            <span>电话：</span>
            {{hospital.hphone}}
          </p>
          <p>
            <span>特色：</span>
            {{hospital.hcharacteristic}}
          </p>
          <p>
            <span>简介：</span>
            {{hospital.hintroduce}}
          </p>
        </div>
      </div>
      <div class="department">
        <div class="department-title">
          <img src="../../../static/img/consult-title-1.png">
        </div>
        <div class="department-menu flex-start-start">
          <span
            v-for="(item , index) in hospital.list1"
            :key="index"
            :class="{on : departmentMenuType == index}"
            @click="departmentMenuChange(index, item.id)"
          >{{item.value}}</span>
        </div>
        <div class="doctor-list flex-start-start flex-wrap">
          <div
            v-for="(item , index) in doctorList"
            :key="index"
            @click="doctorSelect(item,item.id)"
          >
            <img :src="item.dimagesrc">
            <div class="doctor-list-main">
              <div class="doctor-list-basic flex-start-start">
                <span>{{item.dname}}</span>
                <span>{{item.dsex}}</span>
                <span>{{item.dlevel}}</span>
              </div>
              <div class="doctor-list-message">
                <p>{{item.ddepartmentname}}</p>
                <p>{{item.dhospitalname}}</p>
                <p>{{item.dexperience}}</p>
              </div>
              <div class="doctor-list-data flex-start-start">
                <span v-if="item.workage">从业{{item.workage}}年</span>
                <span v-if="item.workstae">好评率{{item.workstae}}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="float-doctor" v-if="doctorShow">
      <div class="float-doctor-title">
        <p>医生详情</p>
        <img src="../../../static/img/icon-delete.png" @click="doctorShow = false">
      </div>
      <div class="float-doctor-main">
        <div class="float-doctor-message flex-start-start">
          <div class="float-doctor-message-left">
            <img :src="doctorDetail.dimagesrc">
          </div>
          <div class="doctor-list-main">
            <div class="doctor-list-basic flex-start-center">
              <span>{{doctorDetail.dname}}</span>
              <span>{{doctorDetail.dsex}}</span>
              <span>{{doctorDetail.dlevel}}</span>
              <!-- <span
                class="float-doctor-follow"
                @click="followBtn(doctorDetail.id,follow ? 0 : 1)"
              >{{follow ? "已关注" : "关注"}}</span>-->
            </div>
            <div class="doctor-list-message">
              <p>{{doctorDetail.ddepartmentname}}</p>
              <p>{{doctorDetail.dhospitalname}}</p>
            </div>
            <div class="float-doctor-attestation flex-start-start">
              <p class="flex-start-center">
                <img src="../../../static/img/doctor-sure.png">医生认证
              </p>
              <p class="flex-start-center">
                <img src="../../../static/img/doctor-sure.png">平台认证
              </p>
            </div>
          </div>
        </div>
        <div class="float-doctor-introudce">
          <h3>擅长疾病</h3>
          <p>{{doctorDetail.dexperience}}</p>
        </div>
        <div class="float-doctor-introudce">
          <h3>个人简介</h3>
          <p>{{doctorDetail.dintroduction}}</p>
        </div>
        <div class="float-doctor-introudce">
          <h3>医院信息</h3>
          <div class="flex-start-center">
            <img src="../../../static/img/doctor-hospital.png">
            <p>
              <span>{{hospital.hname}}</span>
            </p>
          </div>
          <div class="flex-start-center">
            <img src="../../../static/img/doctor-tel.png">
            <p>
              联系电话：
              <span>{{hospital.hphone}}</span>
            </p>
          </div>
          <div class="flex-start-center">
            <img src="../../../static/img/doctor-address.png">
            <p>
              详细地址：
              <span>{{hospital.haddress}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="float-doctor-btn flex-start-start">
        <span>预约陪诊 （暂未开通）</span>
        <!-- <span>
        预约陪诊</span>-->
        <span>
          <router-link :to="({path:'/accompanying/list',query:{menu:login.menu,searchShow:login.searchShow,hospital:hospital.hname}})">预约陪诊</router-link>
        </span>
      </div>
    </div>
    <right-float></right-float>
    <my-foot></my-foot>
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Foot from "../public/allFoot.vue";
import { mapGetters } from "vuex";
export default {
  name: "hospitalDetail",
  props: {
    url: ""
  },
  data() {
    return {
      login: {
        state: true,
        name: "hhy",
        menu: 1,
        searchShow: false,
        url: this.url
      },
      follow: false,
      hospital: {},
      departmentMenuType: 0,
      doctorList: [],
      doctorShow: false,
      doctorDetail: {}
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  components: {
    props: ["login"],
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  created() {
    this.login.menu = this.$route.query.menu;
    if (this.$route.query.id) {
      this.getMsg();
    } else {
      this.$message.error("查询医院详情失败");
      this.$router.back(-1);
    }
  },
  methods: {
    getMsg() {
      this.post("/yiqi-api/api/health/hospitalInformation", {
        hospitalId: this.$route.query.id
      })
        .then(res => {
          this.hospital = res.data;
          if (res.data.list1.length > 0) {
            this.departmentMenuChange(0, res.data.list1[0].id);
          }
        })
        .catch(err => {});
    },
    departmentMenuChange: function(index, id) {
      this.departmentMenuType = index;
      this.post("/yiqi-api/api/health/HospitaDoctor", {
        departmentId: id,
        hospitalId: this.$route.query.id
      })
        .then(res => {
          this.doctorList = res.data;
        })
        .catch(err => {});
    },
    doctorSelect: function(item, id) {
      this.doctorShow = true;
      // this.doctorDetail = item;
      this.post("/yiqi-api/api/health/SRDoctorInformation", { infoId: id })
        .then(res => {
          this.doctorDetail = res.data;
        })
        .catch(err => {});
    },
    // 关注 -- 废弃
    followBtn(id, num) {
      if (this.userInfo) {
        this.post("/yiqi-api/api/perother/yhbfadd", {
          token: this.userInfo.token,
          id: id,
          type: num
        })
          .then(res => {
          })
          .catch(err => {});
      } else {
        this.$message.error("请先登录");
      }
    }
  }
};
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

.hospital-top-right p + p {
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
  min-height: 50px;
  background-color: #f3f5f9;
  flex-wrap: wrap;
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

.department-menu span + span {
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

.doctor-list > div {
  width: 288px;
  height: 474px;
  margin: 40px 0 0 16px;
  cursor: pointer;
}

.doctor-list img {
  width: 100%;
  height: 280px;
}

.doctor-list > div:nth-of-type(4n + 1) {
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

.doctor-list-basic span + span {
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

.doctor-list-message p + p {
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

.doctor-list-data span + span {
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
  z-index: 101;
}

.float-doctor-main {
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
  background-color: #f5f5f5;
}
/*定义滑块 内阴影+圆角*/

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
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

.float-doctor-attestation p + p {
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

.float-doctor-introudce + .float-doctor-introudce {
  border-top: solid 1px #f3f5f6;
}

.float-doctor-introudce div {
  margin-top: 19px;
}

.float-doctor-introudce div p {
  margin-top: 0;
}

.float-doctor-introudce div + div {
  margin-top: 15px;
}

.float-doctor-introudce img {
  margin-right: 10px;
}

.float-doctor-introudce span {
  font-weight: bold;
  color: #666;
}

.float-doctor-btn span {
  width: 50%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background-color: #ccc;
}

.float-doctor-btn span + span {
  background-color: #ff6736;
}
.float-doctor-btn span + span a{
  color: #fff;
}
.span-box {
  display: block;
}
</style>