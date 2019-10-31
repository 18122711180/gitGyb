<template>
  <div id="famousDetail">
    <my-head :login="login" />
    <section>
      <div class="doctor-top flex-between-start">
        <div class="doctor-top-left flex-start-start">
          <div class="doctor-evaluate">
            <img :src="doctor.dimagesrc" />
            <p>
              <span>从业{{doctor.workage}}年</span>
              <span>好评率{{doctor.quality}}%</span>
            </p>
            <!-- <p><span class="follow" :class="{on: doctor.follow}" @click="doctor.follow = !doctor.follow">{{doctor.workstate}}</span></p> -->
          </div>
          <div class="doctor-message">
            <div class="doctor-basice flex-start-center">
              <span>{{doctor.dname}}</span>
              <span>{{doctor.dsex}}</span>
              <span>{{doctor.dlevel}}</span>
              <!-- <p class="flex-start-center">
                <span class="doctor-basice-state" :class="{on : doctor.state}">{{doctor.workstate}}</span>
              </p>-->
            </div>
            <div class="doctor-other">
              <p>{{doctor.ddepartmentname}}</p>
              <p>{{doctor.dcompanyname}}</p>
              <p>{{doctor.dexperience}}</p>
              <template>
                <p>
                  <span>服务项目：</span>
                  <span class="price">￥{{serverpricetype}}</span>
                </p>

                <div class="doctor-other-service flex-start-start flex-wrap">
                  <span
                    v-for="(item, index) in nursingLevelData"
                    :key="index"
                    :class="{on : nursingLevel == index}"
                    @click="serverselect(index,item.id)"
                  >{{item.serverename}}</span>
                </div>
                <template v-if="serviceTimeData.length">
                  <p>选择项目：</p>
                  <div class="doctor-other-service flex-start-start flex-wrap">
                    <span
                      v-for="(item, index) in serviceTimeData"
                      :class="{on : serviceTimeType == index}"
                      @click="serviceTimeType = index"
                      :key="index"
                    >{{item.servername}}</span>
                  </div>
                </template>
                <p>选择服务时间：</p>
                <div class="doctor-service-time">
                  <el-date-picker
                    value-format="yyyy-MM-dd HH"
                    format="yyyy-MM-dd HH"
                    v-model="serviceStartDate"
                    type="datetime"
                    placeholder="选择开始日期时间"
                    :picker-options="pickerOptions"
                    @change="serviceTimeChange"
                  ></el-date-picker>
                </div>
              </template>
            </div>
            <div class="doctor-btn flex-start-start">
              <el-button
                style="background: #ff6736"
                v-if="nursingLevelData.length"
                type="warning"
                @click="submit"
              >立即购买</el-button>
              <el-button style="background: rgb(241, 158, 131);" disabled v-else type="warning">暂无服务</el-button>
            </div>
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
      <div class="doctor-bottom" v-if="nursingLevelData.length">
        <div class="doctor-bottom-title flex-start-start">
          <span :class="{on : doctorDetailType == 1}" @click="doctorDetailType = 1">简介及服务</span>
          <span :class="{on : doctorDetailType == 2}" @click="doctorDetailType = 2,getEstimate()">评价</span>
        </div>
        <template v-if="doctorDetailType == 1">
          <!-- <div class="doctor-bottom-time flex-center-center">
            <p>
              <span>工作时间:</span>
              {{doctor.workweek}}
            </p>
            <p>{{doctor.workweek}}</p>
          </div>
          <h3 class="title">个人简介</h3>
          <div class="doctor-bottom-introduce" v-html="nursingLevelData[nursingLevel].serverprocess">
          </div>-->
          <h4 class="title">服务流程</h4>
          <div class="doctor-bottom-server" v-html="nursingLevelData[nursingLevel].serverprocess"></div>
        </template>
        <template v-if="doctorDetailType == 2">
          <!-- <div class="doctor-evaluate-title flex-start-center">
            <span :class="{on: evaluateType == 1}" @click="evaluateType = 1">全部(568)</span>
            <span :class="{on: evaluateType == 2}" @click="evaluateType = 2">好评(568)</span>
            <span :class="{on: evaluateType == 3}" @click="evaluateType = 3">中评(568)</span>
            <span :class="{on: evaluateType == 4}" @click="evaluateType = 4">差评(568)</span>
            <span :class="{on: evaluateType == 5}" @click="evaluateType = 5">有图(568)</span>
          </div>-->
          <div class="doctor-evaluate-main">
            <div
              class="doctor-evaluate-list flex-start-start"
              v-for="(item,index) in evaluaterList"
              :key="index"
            >
              <div class="doctor-evaluate-list-left">
                <img :src="item.ruimage" />
              </div>
              <div class="doctor-evaluate-list-right">
                <div class="doctor-evaluate-name">
                  <p>{{item.runame}}</p>
                </div>
                <!-- <div class="doctor-evaluate-score flex-start-center">
                  <span>综合评分</span>
                  <img
                    v-for="(items, idx) in 5"
                    :key="idx"
                    :src="item.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                  >
                </div>-->
                <div class="doctor-evaluate-introduce">
                  <p>{{item.message}}</p>
                  <p>{{item.time}}</p>
                </div>
                <div class="doctor-evaluate-img flex-start-start flex-wrap">
                  <img :src="item.image" v-if="item.image" />
                  <img :src="item.image1" v-if="item.image1" />
                  <img :src="item.image2" v-if="item.image" />
                </div>
                <div class="doctor-evaluate-reply">
                  <p>{{item.sreply.storename}}：{{item.sreply.smassage}}</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </section>
    <right-float />
    <my-foot />
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Foot from "../public/allFoot.vue";
import { mapGetters } from "vuex";
import { setOrder } from "@/utils/auth";
export default {
  name: "famousDetail",
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
      serviceTimeData: [],
      serviceType2: 0,
      serviceData2: [],
      serviceType3: 0,
      serviceData3: ["是", "否"],
      amount: 1,
      doctorDetailType: 1,
      evaluateType: 1,
      serviceDate: "",
      doctor: {},
      evaluaterList: [],
      serverpricetype: "",
      priceType: 1,
      priceType2: "",
      nursingLevel: 0,
      nursingLevelData: [],
      detailChoiceType: "",
      serviceStartDate: "",
      serviceEndDate: "",
      pickerOptions: {},
      secondList: "",
      serviceTime: 0
    };
  },
  created() {
    var that = this;
    this.login.menu = this.$route.query.menu;
    if (this.$route.query.id) {
      this.getDetails();
    } else {
      this.$message.closeAll();
      this.$message.error("查询错误");
      this.$router.go(-1);
    }

    var newtime = new Date();
    var startTime =
      newtime.getFullYear() +
      "-" +
      that.addzore(newtime.getMonth() + 1) +
      "-" +
      that.addzore(newtime.getDate());
    this.serviceStartDate =
      newtime.getFullYear() +
      "-" +
      that.addzore(newtime.getMonth() + 1) +
      "-" +
      that.addzore(newtime.getDate()) +
      " " +
      that.addzore(newtime.getHours());
    this.serviceEndDate = this.serviceStartDate;
    that.pickerOptions = {
      disabledDate(time) {
        let nowDate = new Date(startTime);
        return time.getTime() < nowDate - 86400000;
      }
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
  methods: {
    getDetails() {
      this.post("/yiqi-api/api/health/SRDoctorInformation", {
        infoId: this.$route.query.id
      })
        .then(res => {
          this.doctor = res.data;
          this.nursingLevelData = res.data.bdlist;
          if (this.nursingLevelData.length) {
            this.serverpricetype = res.data.bdlist[0].serverprice;
            this.detailChoiceType = res.data.bdlist[0].id;
            this.getproject();
          }
          console.log(res);
        })
        .catch(err => {});
    },
    getEstimate() {
      this.post("/yiqi-api/api/perother/doctorevaluatelist", {
        id: this.$route.query.id
      })
        .then(res => {
          console.log(res);
          this.evaluaterList = res.data;
        })
        .catch(err => {});
    },
    serverselect(index, id) {
      this.nursingLevel = index;
      this.detailChoiceType = id;
      this.getproject();
    },
    getproject() {
      var that = this;
      var newform = {
        doctorid: this.$route.query.id,
        serverpricetypeid: this.detailChoiceType
      };

      this.post("/yiqi-api/api/health/doctorserviceorder", newform)
        .then(res => {
          this.serviceTimeData = [];
          this.serviceData2 = [];
          this.secondList = res.data;
          this.serverpricetype = res.data.serviceprice;
          if (!!res.data.list2.length) {
            that.serviceTimeType = 0;
            that.serverpricetype = res.data.list2[0].serviceprice;
            that.priceType = res.data.list2[0].serverid;
            this.serviceTimeData = res.data.list2;
          } else {
            this.serviceTimeData = [];
          }
        })
        .catch(err => {
          this.$message.error(err.msg);
        });
    },
    amountChange: function() {
      if (this.amount < 1) {
        this.amount = 1;
      }
    },

    serviceTimeChange: function() {
      var that = this;
      var dTime = new Date();
      var newtime = that.serviceStartDate.split(" ");

      var startTime = Date.parse(newtime[0]);
      var time = 0;
      if (that.detailChoiceType == 16) {
        time = 30;
      } else if (that.detailChoiceType == 17) {
        time = 90;
      } else if (that.detailChoiceType == 18) {
        time = 365;
      } else if (that.detailChoiceType == 22) {
        time = 0;
      }

      var endtime = new Date(startTime + time * 86400000);
      this.serviceEndDate =
        endtime.getFullYear() +
        "-" +
        that.addzore(endtime.getMonth() + 1) +
        "-" +
        that.addzore(endtime.getDate()) +
        " " +
        newtime[1];
    },

    addzore(val) {
      if (val < 10) {
        val = "0" + val.toString();
      }
      return val;
    },

    submit() {
      var that = this;
      if (!this.userInfo) {
        this.$message.error("请先登录");
        return;
      }

      var serviccount = 1;
      var servicebegan = this.serviceStartDate + ":00";
      if (that.detailChoiceType == 15 || that.detailChoiceType == 22) {
        serviccount = that.amount;
        servicebegan = "";
      }

      var formData = {
        doctorid: Number(this.$route.query.id),
        serverpricetype: parseInt(this.detailChoiceType),
        serverpriceprojecttype: this.priceType,
        serverpriceprojecttypenam: 0,
        servicebegan: servicebegan,
        note: "",
        serviccount: serviccount,
        servicename: this.secondList.servername,
        servertype: 2,
        serviceimage: this.secondList.dimagesrc,
        token: this.userInfo.token
      };
      this.post("/yiqi-api/api/Server/doctorservic", formData)
        .then(res => {
          console.log(res.data);
          that.order2(res.data.id, res.data.shoptype);
        })
        .catch(err => {
          this.$message.error(err.msg);
        });
    },

    order2(infoId, shoptype) {
      var that = this;
      var formData = {
        infoId: infoId,
        shoptype: shoptype,
        token: this.userInfo.token
      };
      this.post("/yiqi-api/api/Server/getservic", formData)
        .then(res => {
          setOrder(res.data);
          this.$router.push({
            path: "/car/order",
            query: { id: this.$route.query.id }
          });
        })
        .catch(err => {
          this.$message.error(err.msg);
        });
    }
  }
};
</script>

<style scoped>
#famousDetail {
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
</style>