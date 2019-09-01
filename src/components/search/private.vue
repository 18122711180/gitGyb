<template>
  <div id="private">
    <my-head :login="login" @searchCentent="searchCentent"></my-head>
    <section>
      <div class="float-doctor-main">
        <div
          class="float-doctor-message flex-start-start"
          v-for="(item , index) in doctorList"
          :key="index"
        >
          <div class="float-doctor-message-left">
            <img :src="item.img">
          </div>
          <div class="doctor-list-main">
            <div class="doctor-list-basic flex-start-center">
              <span>{{item.name}}</span>
              <span>{{item.sex}}</span>
              <span>{{item.level}}</span>
              <span
                class="float-doctor-follow"
                :class="{on : item.state}"
              >{{item.state ? "在线" : "离线"}}</span>
            </div>
            <div class="doctor-list-message">
              <p>内科:{{item.type}}</p>
              <p>{{item.address}}</p>
              <p>擅长：{{item.goodAt}}</p>
            </div>
          </div>
          <div class="float-doctor-message-right flex-start-start">
            <span>从业{{item.workTime}}年</span>
            <span>好评率{{item.evaluate}}%</span>
          </div>
        </div>
      </div>
      <div class="search-page flex-center-start" v-if="pageTotal>10">
        <el-pagination
          background=""
          @current-change="pageChange"
          layout="prev, pager, next"
          :total="pageTotal"
        ></el-pagination>
      </div>
      <search-empty v-if="!doctorList.length"/>
    </section>
    <right-float></right-float>
    <my-foot></my-foot>
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Foot from "../public/allFoot.vue";
import searchEmpty from "../public/searchEmpty.vue";
export default {
  name: "private",
  props: {
    url: ""
  },
  data() {
    return {
      login: {
        state: true,
        name: "hhy",
        menu: 1,
        searchShow: true,
        url: this.url
      },
      doctorType: 1,
      pageTotal: 60,
      doctorList: [
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          level: "主治医师",
          type: "妇产科&生殖中心",
          address: "江西赣州市立医院",
          goodAt: "骨性牙列不齐，各种正畸技术",
          workTime: "12",
          evaluate: "98",
          state: false
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          level: "主治医师",
          type: "妇产科&生殖中心",
          address: "江西赣州市立医院",
          goodAt: "骨性牙列不齐，各种正畸技术",
          workTime: "12",
          evaluate: "98",
          state: false
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          level: "主治医师",
          type: "妇产科&生殖中心",
          address: "江西赣州市立医院",
          goodAt: "骨性牙列不齐，各种正畸技术",
          workTime: "12",
          evaluate: "98"
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          level: "主治医师",
          type: "妇产科&生殖中心",
          address: "江西赣州市立医院",
          goodAt: "骨性牙列不齐，各种正畸技术",
          workTime: "12",
          evaluate: "98",
          state: false
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          level: "主治医师",
          type: "妇产科&生殖中心",
          address: "江西赣州市立医院",
          goodAt: "骨性牙列不齐，各种正畸技术",
          workTime: "12",
          evaluate: "98",
          state: false
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          level: "主治医师",
          type: "妇产科&生殖中心",
          address: "江西赣州市立医院",
          goodAt: "骨性牙列不齐，各种正畸技术",
          workTime: "12",
          evaluate: "98",
          state: false
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          level: "主治医师",
          type: "妇产科&生殖中心",
          address: "江西赣州市立医院",
          goodAt: "骨性牙列不齐，各种正畸技术",
          workTime: "12",
          evaluate: "98",
          state: false
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          level: "主治医师",
          type: "妇产科&生殖中心",
          address: "江西赣州市立医院",
          goodAt: "骨性牙列不齐，各种正畸技术",
          workTime: "12",
          evaluate: "98",
          state: true
        }
      ]
    };
  },
  components: {
    props: ["login"],
    "my-head": Head,
    "right-float": Float,
    "search-empty": searchEmpty,
    "my-foot": Foot
  },
  methods: {
    searchCentent(val) {
      // this.post('')
    },
    pageChange: function(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
#private {
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
</style>

<style>
.search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff6736;
}

.search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #ff6736;
}
</style>