<template>
  <div id="accompanyingList">
    <my-head :login="login"></my-head>
    <section>
      <div class="doctor-type">
        <div class="doctor-type-list flex-start-center">
          <span class="doctor-type-title">分类：</span>
          <div class="flex-start-start doctor-type-main">
            <span
              v-for="(item,index) in nursingTypeData"
              :key="index"
              :class="{ on : nursingType == index}"
              @click="typeChange(0,index)"
            >{{item}}</span>
          </div>
        </div>
        <template v-if="nursingType == 0">
          <div class="doctor-type-list flex-start-center">
            <span class="doctor-type-title">服务时间：</span>
            <div class="flex-start-start doctor-type-main">
              <span
                v-for="(item,index) in serviceTimeData"
                :key="index"
                :class="{ on : serviceTime == item}"
                @click="typeChange(1,item)"
              >{{item}}</span>
            </div>
          </div>
          <div class="doctor-type-list flex-start-center">
            <span class="doctor-type-title">护龄：</span>
            <div class="flex-start-start doctor-type-main">
              <span
                v-for="(item,index) in nursingWorkTimeData"
                :key="index"
                :class="{ on : nursingWorkTime == index}"
                @click="typeChange(2,index)"
              >{{item}}</span>
            </div>
          </div>
          <div class="doctor-type-list flex-start-center">
            <span class="doctor-type-title doctor-key">服务医院：</span>
            <div class="flex-start-start doctor-type-main">
              <span :class="{ on : serviceHospital === ''}" @click="typeChange(3,'')">全部</span>
              <span
                v-for="(item,index) in serviceHospitalData.list"
                :key="index"
                :class="{ on : serviceHospital === item.hname}"
                @click="typeChange(3,item.hname)"
              >{{item.hname}}</span>
            </div>
          </div>
        </template>
      </div>
      <div class="doctor-rank flex-start-center">
        <!-- <span :class="{ on : rankState}" @click="rankState = !rankState ">闲忙状态</span> -->
        <el-dropdown @command="stateVal" v-if="nursingType === 0">
          <span class="el-dropdown-link">
            {{stateText}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command>全部</el-dropdown-item>
            <el-dropdown-item command="空闲">空闲</el-dropdown-item>
            <el-dropdown-item command="忙碌">忙碌</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="sexVal">
          <span class="el-dropdown-link">
            {{sexText}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command>全部</el-dropdown-item>
            <el-dropdown-item command="男">男</el-dropdown-item>
            <el-dropdown-item command="女">女</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command="ageVal">
          <span class="el-dropdown-link">
            {{ageText}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command>全部</el-dropdown-item>
            <el-dropdown-item command="18-25">18岁-25岁</el-dropdown-item>
            <el-dropdown-item command="26-30">26岁-30岁</el-dropdown-item>
            <el-dropdown-item command="31-35">31岁-35岁</el-dropdown-item>
            <el-dropdown-item command="36-40">36岁-40岁</el-dropdown-item>
            <el-dropdown-item command="41-45">41岁-45岁</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <span :class="{ on : rankSex}" @click="rankSex = !rankSex ">性别</span>
        <span :class="{ on : rankLevel}" @click="rankLevel = !rankLevel ">等级</span>-->
        <!-- <div class="rankState"></div> -->
      </div>
      <div class="float-doctor-main" v-if="nursingType === 0">
        <div v-for="(val,index) in doctorList" :key="index">
          <!-- <router-link :to="({path:'/hospitalDetail',query:{id:val.cid,menu:login.menu}})"> -->
          <p class="hospital-name">{{val.cname}}</p>
          <router-link
            :to="{ path: '/nurse/detail', query: { id: item.id, menu:login.menu}}"
            class="float-doctor-message flex-start-start"
            v-for="(item , index) in doctorList[index].list"
            :key="index"
          >
            <div class="float-doctor-message-left">
              <img :src="item.photo">
            </div>
            <div class="doctor-list-main">
              <div class="doctor-list-basic flex-start-center">
                <span>{{item.name}}</span>
                <span>{{item.sex}}</span>
                <span>{{item.age}}岁</span>
                <span>{{item.level}}</span>
                <span
                  class="float-doctor-follow"
                  :class="{'on' : item.workstate}"
                >{{item.workstate}}</span>
                <!-- <template v-if="type != 2">
                  <div class="flex-start-center doctor-basice-score">
                    <img
                      v-for="idx in 5"
                      :key="idx"
                      :src="item.quality / 20 >= idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                    >
                  </div>
                </template> -->
              </div>
              <div class="doctor-list-message">
                <p>
                  所属公司:
                  <span>{{item.companyname}}</span>
                </p>
                <p>
                  所服务医院:
                  <span>{{item.hospitalname}}</span>
                </p>
                <p>
                  {{item.certificate}}
                  <!-- 养老护理员证:
                  <span>{{item.cardState1? "有" : "无"}}</span>健康证:
                  <span>{{item.cardState2? "有" : "无"}}</span>-->
                </p>
                <p>
                  护龄
                  <span>{{item.workage}}年</span>
                </p>
              </div>
            </div>
            <div class="float-doctor-message-right flex-start-start">
              <span>服务{{item.servecount}}次</span>
              <span>好评率{{item.quality}}%</span>
            </div>
          </router-link>
        </div>
      </div>
      <div class="float-doctor-main" v-if="nursingType === 1">
        <router-link
          :to="{ path: '/accompanying/teacher', query: { id: item.id , menu:login.menu }}"
          class="float-doctor-message flex-start-start"
          v-for="(item , index) in teacherArr"
          :key="index"
        >
          <div class="float-doctor-message-left">
            <img :src="item.photo">
          </div>
          <div class="doctor-list-main">
            <div class="doctor-list-basic flex-start-center">
              <span>{{item.name}}</span>
              <span>{{item.sex}}</span>
              <span>{{item.age}}岁</span>
              <span>{{item.level}}</span>
              <!-- <span class="float-doctor-follow" :class="{'on' : item.workstate}">{{item.workstate}}</span> -->
              <!-- <template v-if="type != 2">
                <div class="flex-start-center doctor-basice-score">
                  <img
                    v-for="idx in 5"
                    :key="idx"
                    :src="item.quality / 20 >= idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                  >
                </div>
              </template>-->
            </div>
            <div class="doctor-list-message">
              <p>
                <span>{{item.manageleve}}</span>
              </p>
              <p>
                <span>{{item.introductions}}</span>
              </p>
              <!-- <p>
                {{item.certificate}}
              </p>-->

              <p>
                护龄
                <span>{{item.workage}}年</span>
              </p>
            </div>
          </div>
          <!-- <div class="float-doctor-message-right flex-start-start">
            <span>服务{{item.servecount}}次</span>
            <span>好评率{{item.quality}}%</span>
          </div>-->
        </router-link>
      </div>
      <!-- <div class="search-page flex-center-start" v-if="pageTotal>10">
        <el-pagination
          background=""
          @current-change="pageChange"
          layout="prev, pager, next"
          :total="pageTotal"
        ></el-pagination>
      </div>-->
    </section>
    <right-float></right-float>
    <my-foot></my-foot>
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Foot from "../public/allFoot.vue";
export default {
  name: "accompanyingList",
  props: {
    url: ""
  },
  data() {
    return {
      login: {
        state: true,
        name: "hhy",
        menu: 2,
        searchShow: false,
        url: this.url
      },
      pageTotal: 60,
      rankState: false,
      rankSex: false,
      rankLevel: false,
      nursingType: 0,
      nursingTypeData: ["护理人员", "管理老师"],
      serviceTime: "全天陪护",
      serviceTimeData: ["全天陪护", "白天陪护", "夜间陪护"],
      nursingWorkTime: 0,
      nursingWorkTimeData: [
        "全部",
        "我是新手",
        "3年以下",
        "3-5年",
        "5-10年",
        "10年以上"
      ],
      serviceHospital: "",
      serviceHospitalData: [],
      doctorList: [],
      type: 0,
      stateText: "闲忙状态",
      workstate: "",
      sexText: "性别",
      sex: "",
      ageText: "年龄",
      age: "",
      teacherArr: []
    };
  },
  components: {
    props: ["login"],
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  mounted() {
    // this.type = this.$route.query.type;
  },
  created() {
    this.getHospita();
    this.getNurse();
  },
  watch: {
    nursingType: function(val) {
      if (val === 1) {
        this.getTeacher();
      } else {
        this.getNurse();
      }
    },
    serviceTime: function() {
      if (this.nursingType === 0) {
        this.getNurse();
      }
    },
    nursingWorkTime: function() {
      if (this.nursingType === 0) {
        this.getNurse();
      }
    },
    serviceHospital: function() {
      if (this.nursingType === 0) {
        this.getNurse();
      }
    },
    workstate: function() {
      if (this.nursingType === 0) {
        this.getNurse();
      }
    },
    sex: function() {
      if (this.nursingType === 0) {
        this.getNurse();
      } else {
        this.getTeacher();
      }
    },
    age: function() {
      if (this.nursingType === 0) {
        this.getNurse();
      } else {
        this.getTeacher();
      }
    }
  },
  methods: {
    //获取护理员列表
    getNurse() {
      let v = {};
      v.servetime = this.serviceTime;
      v.wokage = this.nursingWorkTime;
      if (this.serviceHospital !== "") {
        v.wokage = this.serviceHospital;
      }
      if (this.workstate !== "") {
        v.workstate = this.workstate;
      }
      if (this.sex !== "") {
        v.sex = this.sex;
      }
      if (this.age !== "") {
        v.age = this.age;
      }
      if (this.$route.query.type) {
        v.servetyle = this.$route.query.type;
      }
      this.post("/yiqi-api/api/hg/hglist", v)
        .then(res => {
          console.log(res);
          this.doctorList = res.data;
        })
        .catch(err => {});
    },
    getHospita() {
      this.post("/yiqi-api/api/health/Hospita")
        .then(res => {
          this.serviceHospitalData = res.data;
        })
        .catch(err => {});
    },
    pageChange: function(val) {
      console.log(val);
    },
    typeChange: function(type, index) {
      var that = this;
      switch (type) {
        case 0:
          that.nursingType = index;

          break;
        case 1:
          that.serviceTime = index;
          break;
        case 2:
          that.nursingWorkTime = index;
          break;
        case 3:
          that.serviceHospital = index;
          break;
      }
    },
    getTeacher() {
      let v = {};
      v.sex = this.sex;
      v.age = this.age;
      this.post("/yiqi-api/api/hg/managelist", v).then(res => {
        console.log(res);
        this.teacherArr = res.data;
      });
    },
    stateVal(val) {
      this.stateText = val;
      if (val === "") {
        this.stateText = "全部";
      }
      
      this.workstate = val;
    },
    sexVal(val) {
      this.sexText = val;
      if (val === "") {
        this.sexText = "全部";
      }
      this.sex = val;
    },
    ageVal(val) {
      this.ageText = val;
      if (val === "") {
        this.ageText = "全部";
      }
      this.age = val;
    }
  }
};
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

.doctor-department div:first-of-type span + span {
  margin-left: 30px;
}

.doctor-department span.on {
  color: #ff6736;
}

.doctor-department div + div {
  font-size: 14px;
  color: #999;
}

.doctor-department div + div span {
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

.doctor-list-basic span + span {
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

.float-doctor-message-right span + span {
  margin-left: 20px;
}

.doctor-type {
  padding: 30px;
}

.doctor-type-list + .doctor-type-list {
  margin-top: 20px;
}

.doctor-type-list > div {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  margin-right: 200px;
}

.doctor-type-title {
  width: 100px;
}
.doctor-type-main {
  flex-wrap: wrap;
}
.doctor-type-main span {
  box-sizing: border-box;
  height: 30px;
  padding: 0 15px;
  line-height: 30px;
  text-align: center;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 15px;
}

.doctor-type-main span + span {
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

/* .doctor-rank span:after {
  position: absolute;
  right: 0;
  top: 50%;
  content: "";
  margin-top: -5px;
  border-style: solid;
  border-width: 10px 5px 10px 5px;
  border-color: #ccc transparent transparent transparent;
} */

.doctor-rank span.on:after {
  margin-top: -15px;
  border-color: transparent transparent #ff6736 transparent;
}
.doctor-key {
  /* vertical-align: top; */
  height: 100%;
}
.hospital-name {
  font-size: 18px;
  padding: 8px 0 8px 5px;
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