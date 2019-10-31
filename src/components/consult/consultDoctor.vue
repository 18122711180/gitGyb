<template>
  <div id="consultDoctor">
    <my-head :login="login"></my-head>
    <section>
      <div class="doctor-type flex-start-center">
        <span class="doctor-type-title">分类：</span>
        <div class="flex-start-start doctor-type-main">
          <!-- <span :class="{ on : doctorType == 1}" @click="doctorType = 1">全部</span> -->
          <span :class="{ on : doctorType == 2}" @click="doctorType = 2, getExclusive()">临床名医</span>
          <span :class="{ on : doctorType == 3}" @click="doctorType = 3,getPharmacist()">临床药师</span>
        </div>
      </div>
      <div style="padding-top: 0;" class="doctor-type flex-start-start" v-if="doctorType == 2">
        <span class="doctor-type-title">选择科室：</span>
        <div class="doctor-department">
          <div class="department-list flex-start-start">
            <span
              v-for="(item,index) in department"
              :key="index"
              :class="{ on : departmentType == item.value}"
              @click="departmentType = item.value,getdepartment2()"
            >{{item.value}}</span>
            <!-- <span :class="{ on : departmentType == 1}" @click="departmentType = 1">外科</span>
            <span :class="{ on : departmentType == 2}" @click="departmentType = 2">专科</span>
            <span :class="{ on : departmentType == 3}" @click="departmentType = 3">非临床</span>-->
          </div>
          <div class="flex-start-start flex-wrap">
            <span
              v-for="(item, index) in departmentList"
              :key="index"
              :class="{ on : departmentListType == item.value}"
              @click="departmentListType = item.value"
            >{{item.value}}</span>
          </div>
        </div>
      </div>
      <div class="float-doctor-main">
        <div
          class="float-doctor-message flex-start-start"
          v-for="(item , index) in doctorList"
          :key="index"
           @click="doctorDetails(item.id,login.menu)"
        >
          <!-- <router-link to="/famousDetail"> -->
          <div class="float-doctor-message-left">
            <img :src="item.dimagesrc">
          </div>
          <div class="doctor-list-main">
            <div class="doctor-list-basic flex-start-center">
              <span>{{item.dname}}</span>
              <span>{{item.dsex}}</span>
              <span>{{item.dlevel}}</span>
              <!-- <span class="on float-doctor-follow">{{item.workstae}}</span> -->
            </div>
            <div class="doctor-list-message">
              <p>{{item.ddepartmentname}}</p>
              <p>{{item.dhospitalname}}</p>
              <p>{{item.dexperience}}</p>
            </div>
          </div>
          <div class="float-doctor-message-right flex-start-start">
            <span>从业{{item.workage}}年</span>
            <!-- <span v-if="item.workstae">好评率{{item.workstae}}%</span> -->
          </div>
        </div>
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
import { mapGetters } from "vuex";
export default {
  name: "consultDoctor",
  props: {
    url: ""
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  data() {
    return {
      login: {
        state: true,
        name: "hhy",
        menu: 0,
        searchShow: false,
        url: this.url
      },
      doctorType: 2,
      department: [],
      departmentType: 0,
      departmentListType: "",
      pageTotal: 60,
      departmentList: [
        // {
        //   id: 12,
        //   name: "南山肥胖减重门诊"
        // },
        // {
        //   id: 13,
        //   name: "南山肥胖减重门诊"
        // },
        // {
        //   id: 14,
        //   name: "南山肥胖减重门诊"
        // },
        // {
        //   id: 15,
        //   name: "南山肥胖减重门诊"
        // },
        // {
        //   id: 16,
        //   name: "南山肥胖减重门诊"
        // },
        // {
        //   id: 17,
        //   name: "南山肥胖减重门诊"
        // },
        // {
        //   id: 18,
        //   name: "南山肥胖减重门诊"
        // },
        // {
        //   id: 19,
        //   name: "南山肥胖减重门诊"
        // },
        // {
        //   id: 20,
        //   name: "南山肥胖减重门诊"
        // }
      ],
      doctorList: [
        // {
        //   id: 1,
        //   img:
        //     "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
        //   name: "韩冬梅",
        //   sex: "女",
        //   level: "主治医师",
        //   type: "妇产科&生殖中心",
        //   address: "江西赣州市立医院",
        //   goodAt: "骨性牙列不齐，各种正畸技术",
        //   workTime: "12",
        //   evaluate: "98",
        //   state: false
        // }
      ]
    };
  },
  components: {
    props: ["login"],
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  created() {
    // if (this.doctorType === 2) {
    //   this.getDoctors(this.departmentType);
    // }
    this.doctorType === 2;
    this.getExclusive();
  },
  methods: {
    getExclusive() {
      this.post("/yiqi-api/api/health/SRDepartmentOne")
        .then(res => {
          console.log(res);
          this.department = res.data;
          if (res.data.length > 0) {
            this.departmentType = res.data[0].value;
            this.getdepartment2();
          }
        })
        .catch(err => {});
    },
    getdepartment2(){
      this.post("/yiqi-api/api/health/SRDepartment", {
        key: this.departmentType
      })
        .then(res => {
          console.log(res);
          this.departmentList = res.data;
          if (res.data.length > 0) {
            this.departmentListType = res.data[0].value;
            this.getDoctors();
          }
        })
        .catch(err => {});
    },
    getDoctors() {
      this.post("/yiqi-api/api/health/SRDepartmentDoctor", {
        departmentName: this.departmentListType
      })
        .then(res => {
          this.doctorList = [] = res.data;
        })
        .catch(err => {});
    },
    getPharmacist() {
      this.post("/yiqi-api/api/health/LCpharmacist")
        .then(res => {
          this.doctorList = [] = res.data;
          console.log("药师",res.data)
        })
        .catch(err => {});
    },
    doctorDetails(id, menu) {
      console.log(11111)
      this.$router.push({path:"/famousDetail",query:{id:id,menu:menu}}).then(res=>{
        console.log(res)
      }).catch(err=>{})
    },
    pageChange: function(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
#consultDoctor {
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

.doctor-type > div {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  margin-right: 50px;
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

.doctor-type-main span + span {
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
  padding: 4px 8px;
  cursor: pointer;
}

.doctor-department div:first-of-type span + span {
  /* margin-left: 30px; */
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
  cursor: pointer;
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

/* .doctor-list-basic span:last-of-type {
  width: 50px;
  height: 30px;
  line-height: 30px;
  margin-left: 60px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background-color: #999;
  border-radius: 5px;
} */

/* .doctor-list-basic span.on:last-of-type {
  background-color: #ff6736;
} */

.doctor-list-message p {
  margin-top: 10px;
  font-size: 16px;
  color: #999;
}

.float-doctor-message-right span {
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #ff6736;
  background-color: #fff;
  border: solid 1px #ff6736;
  border-radius: 40px;
}

.float-doctor-message-right span + span {
  margin-left: 20px;
}
.department-list {
  flex-wrap: wrap;
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