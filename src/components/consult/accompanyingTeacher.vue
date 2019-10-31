<template>
  <div id="accompanyingDetail">
    <my-head :login="login"/>
    <section>
      <div class="doctor-top flex-between-start">
        <div class="doctor-top-left flex-start-start">
          <div class="doctor-evaluate">
            <img :src="doctor.photo">
            <!-- <p>
              <span>服务{{doctor.qgnumber}}次</span>
              <span>好评率{{doctor.quality}}%</span>
            </p>
            <div class="flex-start-center doctor-basice-score">
              <img
                v-for="it in 5"
                :key="it"
                :src="doctor.quality/ 100 * 5 >= it ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
              >
            </div> -->
            <!-- <p>
              <span
                class="follow"
                :class="{on: doctor.isfocus === 0}"
                @click="focusPz(doctor.id,doctor.isfocus === 0 ? 1 : 0)"
              >{{doctor.isfocus === 0 ? "已关注" : "关注"}}</span>
            </p> -->
          </div>
          <div class="doctor-message">
            <div class="doctor-basice flex-start-center">
              <span>{{doctor.name}}</span>
              <span>{{doctor.sex}}</span>
              <span>{{doctor.age}}岁</span>
              <span>{{doctor.leve}}</span>
              <!-- <p class="flex-start-center">
                <span
                  class="doctor-basice-state"
                  :class="{on : doctor.workstate === '空闲'}"
                >{{doctor.workstate}}</span>
              </p> -->
            </div>
            <div class="doctor-other">
              <p>
                {{doctor.manageleve}}
                
              </p>
              <!-- <p>
                 {{doctor.introductions}}
               
              </p> -->
              <!-- <p>
                <span>证件：</span>
                {{doctor.certificate}}
              </p> -->
              <p>
                <span>护龄：</span>
                {{doctor.workage}}年
              </p>
              <!-- <p>
                <span>服务类型：</span>
                {{doctor.servetylename}}
              </p> -->
              <!-- <p>
                <span>服务价格：</span>
                <span class="price">￥{{doctor.serverprice}}</span>
              </p> -->
              <!-- <div class="doctor-other-amount flex-start-center">
                <p>选择数量：</p>
                <input type="number" v-model="amount" @change="amountChange">
              </div>
              <p>
                计时计价：
                <span
                  style="font-size: 12px;color: #ff6736;"
                >（*超时以20分钟为一单位，加收百分之二十的服务费，不足20分钟，按20分钟计算*）</span>
              </p>
              <div class="doctor-other-service flex-start-start flex-wrap">
                <span
                  v-for="(item, index) in serviceTimeData"
                  :key="index"
                  :class="{on : serviceTimeType == index}"
                  @click="serviceTimeType = index"
                >{{item}}</span>
              </div>
              <p>选择服务时间：</p>
              <div class="doctor-service-time">
                <el-date-picker v-model="serviceDate" type="datetime" placeholder="选择日期时间"></el-date-picker>
              </div> -->
            </div>
            <!-- <div class="doctor-btn flex-start-start">
              <span>立即购买</span>
              <span @click="getCart(doctor.id,doctor.name,doctor.serverprice)">加入购物车</span>
            </div> -->
          </div>
        </div>
        <!-- <div class="doctor-top-right">
          <img :src="doctor.hospitalImg">
          <p>{{doctor.hospital}}</p>
          <p>
            <span>联系电话：</span>
            {{doctor.tel}}
          </p>
          <p>
            <span>详细地址：</span>
            {{doctor.address}}
          </p>
        </div>-->
      </div>
      <div class="doctor-bottom">
        <div class="doctor-bottom-title flex-start-start">
          <span :class="{on : doctorDetailType == 1}" @click="doctorDetailType = 1">简介及服务</span>
          <!-- <span :class="{on : doctorDetailType == 2}" @click="doctorDetailType = 2">评价</span> -->
        </div>
        <template v-if="doctorDetailType == 1">
          <div class="doctor-bottom-time flex-center-center">
            <p>
              <span>工作时间:</span>
              {{doctor.workweek}}
            </p>
            <p>{{doctor.worktime}}</p>
          </div>
          <h3 class="title">个人简介</h3>
          <div class="doctor-bottom-introduce">
            <p>{{doctor.introductions}}</p>
          </div>
        </template>
        <template v-else>
          <div class="doctor-evaluate-main">
            <div class="doctor-evaluate-list flex-start-start" v-for="(item,index) in evaluaterList" :key="index">
              <div class="doctor-evaluate-list-left">
                <img :src="item.img">
              </div>
              <div class="doctor-evaluate-list-right">
                <div class="doctor-evaluate-name">
                  <p>{{item.name}}</p>
                </div>
                <div class="doctor-evaluate-score flex-start-center">
                  <span>综合评分</span>
                  <img
                    v-for="items in 5"
                    :key="items"
                    :src="item.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                  >
                </div>
                <div class="doctor-evaluate-introduce">
                  <p>{{item.introduce}}</p>
                  <p>{{item.time}}</p>
                </div>
                <div class="doctor-evaluate-img flex-start-start flex-wrap">
                  <img v-for="(img,index) in item.imgList" :src="img" :key="index">
                </div>
                <div class="doctor-evaluate-reply">
                  <p>医生回复：{{item.reply}}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>
    <right-float/>
    <my-foot/>
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Foot from "../public/allFoot.vue";
import { mapGetters } from "vuex";
export default {
  name: "AccompanyingTeacher",
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
      serviceTimeType: 0,
      serviceTimeData: ["常规一小时", "超时20分钟"],
      amount: 1,
      doctorDetailType: 1,
      evaluateType: 1,
      serviceDate: "",
      follow: false,
      doctor: {},
      evaluaterList: []
    };
  },
  components: {
    props: ["login"],
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  created() {
    this.login.menu = this.$route.query.menu;
    this.login.searchShow = this.$route.query.searchShow;
    this.getPgzhgInfo(this.$route.query.id);
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    getPgzhgInfo(id) {
      let v = {};
      v.infoId = id;
      if (this.userInfo){
         v.token = this.userInfo.token;
      }
      this.post("/yiqi-api/api/hg/manageInformation", v)
        .then(res => {
          this.doctor = res.data;
          console.log(res);
        })
        .catch(err => {});
    },
    amountChange: function() {
      if (this.amount < 1) {
        this.amount = 1;
      } else if (this.amount > this.doctor.surplus) {
        this.amount = this.doctor.surplus;
      }
    },
    focusPz(id,num) {
      if (this.userInfo) {
        this.post("/yiqi-api/api/perother/hgbfadd", {
          token : this.userInfo.token,
          id : id,
          type : num,
          rtype : 2,
        })
          .then(res => {
            this.doctor.isfocus = num;
          })
          .catch(err => {});
      } else {
        this.$$message.closeAll();
        this.$message.error("请先登陆！");
      }
    },
    getCart(id, name, serverprice) {
      if (this.userInfo) {
        this.post("/yiqi-api/api/shop/addshopcar", {
          pid: id,
          pname: name,
          price: serverprice,
          mid: 0,
          mname: "",
          number: this.amount
        })
          .then(res => {
            console.log(res);
            this.$message.success("加入成功");
          })
          .catch(err => {});
      } else {
        this.$$message.closeAll();
        this.$message.error("请先登陆！");
      }
    }
  }
};
</script>

<style scoped>
#accompanyingDetail {
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

.follow {
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  border-radius: 30px;
  border: solid 1px #27b5b1;
  background-color: #27b5b1;
  cursor: pointer;
}

.follow.on {
  color: #27b5b1;
  background-color: #fff;
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

.doctor-basice span + span {
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

.doctor-basice span + span.doctor-basice-follow {
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
  cursor: pointer;
}

.doctor-other-service span.on {
  color: #fff;
  background-color: #ff6736;
  border-color: #ff6736;
}

.doctor-service-time {
  margin-top: 20px;
}

.doctor-btn {
  margin-top: 40px;
}

.doctor-btn span {
  width: 160px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: #ff6736;
  border: solid 1px #ff6736;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.doctor-btn span + span {
  margin-left: 50px;
  color: #fff;
  background-color: #ff6736;
}

.doctor-top-right {
  width: 210px;
  padding: 15px;
  border: solid 1px #f1f1f1;
}

.doctor-top-right img {
  width: 180px;
  height: 240px;
}

.doctor-top-right p {
  line-height: 1.4;
  margin-top: 5px;
  font-size: 14px;
  color: #666;
}

.doctor-top-right p span {
  font-size: 14px;
  color: #999;
}

.doctor-bottom {
  margin-top: 20px;
}

.doctor-bottom-title {
  width: 100%;
  background-color: #f3f5f9;
}

.doctor-bottom-title span {
  position: relative;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  font-size: 18px;
  color: #666;
  cursor: pointer;
}

.doctor-bottom-title span.on {
  color: #ff6736;
}

.doctor-bottom-title span.on:after {
  position: absolute;
  top: -2px;
  left: 0;
  content: "";
  width: 100%;
  height: 2px;
  background-color: #ff6736;
}

.doctor-bottom-title span + span {
  border-right: solid 1px #f1f1f1;
}

.doctor-bottom-time {
  height: 50px;
  font-size: 18px;
  color: #666;
  border-bottom: solid 1px #f1f1f1;
}

.doctor-bottom-time p + p {
  margin-left: 40px;
}

.doctor-bottom-time p span {
  color: #999;
}

.doctor-bottom h3.title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-weight: normal;
  font-size: 24px;
  color: #666;
  border-bottom: solid 1px #f1f1f1;
}

.doctor-bottom-introduce {
  padding: 20px;
  line-height: 1.6;
  font-size: 20px;
  color: #666;
}

.doctor-bottom h4.title {
  margin: 20px 0 30px;
  text-align: center;
  font-weight: normal;
  font-size: 24px;
  color: #666;
}

.doctor-bottom-server {
  width: 100%;
}

.doctor-bottom-server img {
  width: 100%;
}

.doctor-evaluate-title {
  height: 66px;
}

.doctor-evaluate-title span {
  position: relative;
  padding-left: 20px;
  margin-left: 15px;
  font-size: 16px;
  color: #666;
  cursor: pointer;
}

.doctor-evaluate-title span.on {
  color: #ff6736;
}

.doctor-evaluate-title span:before {
  position: absolute;
  left: 0;
  top: 50%;
  content: "";
  width: 12px;
  height: 12px;
  margin-top: -6px;
  border: solid 1px #ccc;
  border-radius: 12px;
}

.doctor-evaluate-title span.on:before {
  border-color: #ff6736;
}

.doctor-evaluate-title span.on:after {
  position: absolute;
  left: 4.5px;
  top: 50%;
  content: "";
  width: 5px;
  height: 5px;
  margin-top: -1px;
  background-color: #ff6736;
  border-radius: 50%;
}

.doctor-evaluate-list {
  padding: 30px 130px 30px 20px;
  border-top: solid 1px #f1f1f1;
}

.doctor-evaluate-list-left img {
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 80px;
}

.doctor-evaluate-list-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  padding-top: 1px;
}

.doctor-evaluate-name {
  margin-top: 14px;
  font-size: 16px;
  color: #333;
}

.doctor-evaluate-score {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

.doctor-evaluate-score img {
  width: 18px;
  height: 18px;
  margin-left: 5px;
}

.doctor-evaluate-introduce {
  line-height: 32px;
  margin-top: 5px;
  font-size: 14px;
  color: #999;
}

.doctor-evaluate-introduce p + p {
  font-size: 12px;
}

.doctor-evaluate-img img {
  width: 290px;
  height: 200px;
  margin: 15px 0 0 40px;
}

.doctor-evaluate-img img:nth-of-type(3n + 1) {
  margin-left: 0;
}

.doctor-evaluate-reply p {
  width: 100%;
  height: 63px;
  line-height: 63px;
  padding-left: 20px;
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  background-color: #ff6736;
}

.doctor-basice-score {
  margin-top: 20px;
}

.doctor-basice-score img {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}
</style>