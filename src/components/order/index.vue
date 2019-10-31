<template>
  <div id="order">
    <my-head :login="login" />
    <section class="flex-between-start">
      <order-left :num="menuNum" @scrollNum="menuChange" />
      <div class="order-main">
        <h3>我的订单</h3>
        <div class="order-frame">
          <div class="order-menu flex-start-center">
            <span
              v-for="(item, index) in orderMenu"
              :class="{on : orderMenuType == index}"
              @click="orderMenuType = index , getOrderform()"
              :key="index"
            >{{item}}</span>
          </div>
          <div class="order-list-title flex-start-center">
            <span>订单详情</span>
            <span>金额</span>
            <span>状态</span>
            <span>操作</span>
          </div>
          <div class="order-list">
            <div class="order-list-main" v-for="(item,index) in orderList" :key="index">
              <div class="order-list-top flex-between-center">
                <div>
                  <span>{{item.date}}</span>
                  <span>订单编号：{{item.logistics}}</span>
                </div>
                <!-- <span v-if="item.type == 1" class="residue">支付剩余时间：{{item.residueTime}}</span> -->
              </div>
              <div class="order-list-bottom flex-start-start" v-for="(val,i) in item.list" :key="i">
                <div class="order-list-message flex-between-center">
                  <div class="order-list-message-left flex-start-start">
                    <img :src="val.image" />
                    <div class="order-list-message-basic">
                      <div class="order-list-message-name">
                        <span>{{val.name}}</span>
                        <!-- <span>{{item.sex}}</span>
                        <span>{{item.level}}</span>-->
                      </div>
                      <p>{{val.sname}}</p>
                    </div>
                  </div>
                  <p class="order-list-message-right">x{{val.shopcount}}</p>
                </div>
                <div class="order-list-price order-list-bottom-div flex-center-center">
                  <span>{{val.price}}</span>
                </div>
                <div class="order-list-state order-list-bottom-div flex-center-center flex-column">
                  <span
                    v-if="menuNum === 0 || menuNum === 1 || menuNum === '0' || menuNum === '1'"
                  >{{item.state | ForderFormType}}</span>
                  <span
                    v-if="menuNum === 2 || menuNum === 3 || menuNum === '2' || menuNum === '3'"
                  >{{item.state | SorderFormType}}</span>
                  <!-- <span>(退款中)</span> -->
                  <!-- <router-link :to="({path:'/order/detail',query:{orderId:val.recordid}})">订单详情</router-link> -->
                </div>
                <div class="order-list-oper order-list-bottom-div flex-center-center flex-column">
                  <!-- <span class="on">立即付款</span>
                  <p>
                    <span>投诉</span>
                    <span v-if="item.state === 4 || item.state === 6 || item.state === 7">删除</span>
                  </p>-->
                  <p>
                    <span @click="serverOther(item,1)" v-if="menuNum < 3 && (item.state == 3 || item.state == 4)">投诉</span>
                    <span @click="evaluaterder(item, menuNum)" v-if="item.state == 4 && item.isComment == 0">待评价</span>
                    <span @click="cancleorder(item, 1)" v-if="item.state == 2">申请退款</span>
                    <span @click="cancleorder(item, 2)" v-if="item.state == 1">取消订单</span>
                    <span @click="payment(item)" v-if="item.state == 1">立即付款</span>
                    <span @click="rufunddetail(item)" v-if="item.state == 7 || item.state == 5 || item.state == 8">退款详情</span>
                    <!-- <span v-if="menuNum < 3 && item.isnavigation == 1 && item.state == 3">消费码</span> -->
                    <span @click="serverOther(item,2)" v-if="menuNum > 2 && item.state == 4">申请售后</span>
                    <span @click="remindorder(item)" v-if="menuNum > 2 && item.state == 2">提醒发货</span>
                    <span @click="serverOther(item,2)" v-if="menuNum > 2 && item.state == 3">退换货</span>
                    <span @click="ordersure(item)" v-if="menuNum > 2 && item.state == 3">确认收货</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <right-float />
    <my-foot />
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Order from "../public/orderLeft.vue";
import Foot from "../public/allFoot.vue";
import { mapGetters } from "vuex";
import { setOrder } from "@/utils/auth";
export default {
  name: "order",
  props: {
    url: ""
  },
  data() {
    return {
      login: {
        state: true,
        name: "hhy",
        menu: 8,
        searchShow: false,
        orderShow: true,
        url: this.url
      },
      menuNum: 0,
      orderMenuType: 0,
      orderMenu: ["全部订单", "待付款", "待接单", "进行中", "已完成"],
      orderList: []
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  components: {
    "my-head": Head,
    "right-float": Float,
    "order-left": Order,
    "my-foot": Foot
  },
  mounted() {},
  created() {
    if (this.$route.query.num) {
      this.menuNum = this.$route.query.num;
    }
    if (this.userInfo) {
      this.getOrderform();
    } else {
      this.$message.closeAll();
      this.$message.warning("请先登陆！");
    }
    console.log(this.menuNum);
  },
  methods: {
    getOrderform() {
      let v = {};
      v.token = this.userInfo.token;
      v.ordertype = this.menuNum - 0 + 1;
      v.orderstate = this.orderMenuType;
      
      this.post("/yiqi-api/api/perorder/list", {
        token: this.userInfo.token,
        ordertype: this.menuNum - 0 + 1,
        orderstate: this.orderMenuType
      })
        .then(res => {
          console.log(res);
          // this.orderList
          this.orderList = res.data;
        })
        .catch(err => {});
    },
    pageChange: function(val) {
      console.log(val);
    },
    menuChange: function(num) {
      console.log(132);
      console.log(num);
      this.menuNum = num;
      this.getOrderform();
    },
    cancleorder(item, type) {
      var pid = 0;
      var storeid = 0;
      var that = this;
      if (item.pid) {
        pid = item.pid;
      }
      if (!!item.storeid) {
        storeid = item.storeid;
      }
      this.$router.push({
        path: "/order/cancle",
        query: { id: item.id, pid: pid, storeid: storeid, type: type }
      });
    },
    serverOther(item,type){
      var pid = 0;
      var storeid = 0;
      var that = this;
      var url = "";
      if (item.pid) {
        pid = item.pid;
      }
      if (!!item.storeid) {
        storeid = item.storeid;
      }
      if(type == 2){
        url = "/order/exchange"
      }else{
        url = "/order/complain"
      }
      this.$router.push({
        path: url,
        query: { id: item.id, pid: pid, storeid: storeid }
      });
    },
    rufunddetail(item){
      var that = this;
      this.$router.push({
        path: "/order/exchange/detail",
        query: { id: item.id }
      });
    },
    payment(item){
      var that = this;
      var formData = {
        infoId: item.infoid,
        shoptype: item.shoptype,
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
    },
    ordersure(item){
      var formData = {
        id: item.id,
        token: this.userInfo.token
      };
      this.post("/yiqi-api/api/perother/confirmorder", formData)
        .then(res => {
          this.$message.success("确认收货成功");
          this.getOrderform()
        })
        .catch(err => {
          this.$message.error("确认收货失败");
        });
    },
    remindorder(){
      var formData = {
        id: item.id,
        token: this.userInfo.token
      };
      this.post("/yiqi-api/api/perorder/addhirs", formData)
        .then(res => {
          this.$message.success("提醒成功");
          this.getOrderform()
        })
        .catch(err => {
          this.$message.error("操作失败");
        });
    },
    evaluaterder(item, type){
      var pid = 0;
      var storeid = 0;
      var that = this;
      if (item.pid) {
        pid = item.pid;
      }
      if (!!item.storeid) {
        storeid = item.storeid;
      }
      this.$router.push({
        path: "/order/evaluate",
        query: { id: item.id, pid: pid, storeid: storeid, type: type }
      });
    }
  }
};
</script>

<style scoped>
section {
  position: relative;
  width: 1200px;
  margin: 30px auto 60px;
}

img {
  width: 100%;
  height: 100%;
}

section {
  width: 1200px;
  margin: 40px auto 100px;
}

.order-main {
  width: 1050px;
}

.order-main h3 {
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  font-weight: normal;
  font-size: 16px;
  color: #333;
  background-color: #fff;
}

.order-frame {
  width: 100%;
  padding: 0 20px 40px;
  margin-top: 10px;
  background-color: #fff;
}

.order-menu {
  height: 60px;
  font-size: 14px;
  color: #666;
}

.order-menu span {
  line-height: 18px;
  height: 18px;
  padding: 0 26px;
  cursor: pointer;
}

.order-menu span:first-child {
  padding-left: 0;
  border-right: solid 1px #f1f1f1;
}

.order-menu span.on {
  color: #ff6736;
}

.order-list-title {
  width: 100%;
  height: 34px;
  font-size: 14px;
  color: #666;
  background-color: #f7f7f7;
}

.order-list-title span {
  text-align: center;
}

.order-list-title span:first-child {
  -webkit-flex: 1;
  flex: 1;
}

.order-list-title span + span {
  width: 140px;
}

.order-list {
  margin-top: 20px;
}

.order-list-top {
  width: 100%;
  height: 34px;
  padding: 0 20px;
  font-size: 12px;
  color: #666;
  background-color: #f7f7f7;
}

.order-list-top span + span {
  margin-left: 35px;
}

.order-list-top .residue {
  color: #ff4a60;
}

.order-list-bottom {
  width: 100%;
  height: 120px;
  background-color: #fff;
  border: solid 1px #e5e5e5;
  border-top: none;
}

.order-list-message {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  height: 120px;
  padding: 0 50px 0 20px;
}

.order-list-bottom-div {
  width: 140px;
  border-left: solid 1px #e5e5e5;
}

.order-list-message-left {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  margin-right: 20px;
}

.order-list-message-left img {
  width: 80px;
  height: 80px;
  margin-right: 16px;
  border-radius: 5px;
}

.order-list-message-name {
  font-size: 16px;
  color: #111;
}

.order-list-message-name span + span {
  margin-left: 5px;
  font-size: 14px;
  color: #666;
}

.order-list-message-service {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}

.order-list-message-right {
  font-size: 12px;
  color: #333;
}

.order-list-price {
  font-size: 14px;
  color: #ff4a60;
}

.order-list-state span {
  font-size: 14px;
  color: #666;
}

.order-list-state a {
  margin-top: 5px;
  font-size: 14px;
  color: #ff6736;
}

.order-list-oper a {
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  background-color: #ff6736;
}

.order-list-oper p {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.order-list-oper p span {
  margin: 5px 0;
  font-size: 14px;
  color: #ff6736;
  cursor: pointer;
}
</style>

<style>
.search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff6736;
}

.search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #ff6736;
}

#order .head-second-bg {
  background-color: #fafafa;
}
</style>