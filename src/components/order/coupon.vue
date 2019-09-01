<template>
  <div id="order">
    <my-head :login="login"/>
    <section class="flex-between-start">
      <order-left :num="menuNum" :otherLink="true"/>
      <div class="order-main">
        <!-- <h3>我的订单</h3> -->
        <div class="order-frame">
          <div class="order-menu flex-start-center">
            <span
              v-for="(item, index) in orderMenu"
              :class="{on : orderMenuType == index}"
              @click="orderMenuType = index"
              :key="index"
            >{{item}}</span>
          </div>
          <div class="coupon flex-start-start">
            <div class="coupon-list" v-for="(item,index) in couponList" :key="index">
              <img :src="'../../../static/img/coupon-'+(orderMenuType+1)+'.png'">
              <div class="coupon-main">
                <p class="price">￥
                  <span>{{item.couponAmount}}</span>
                </p>
                <p>{{item.couponName}}</p>
                <p v-if="item.couponType == 1">现金券</p>
                <p v-if="item.couponType == 2">满{{item.fullUseCondition}}使用</p>
                <!-- <p>{{item.instructions}}</p> -->
                <p class="time">{{item.beginDate}} - {{item.endDate}}</p>
                <template v-if="item.status == 1">
                  <span class="btn xs">立即使用</span>
                </template>
                <template v-else>
                  <span class="btn off">{{orderMenuType == 2 ? "已使用" : "已过期"}}</span>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <right-float/>
    <my-foot/>
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Order from "../public/orderLeft.vue";
import Foot from "../public/allFoot.vue";
import { mapGetters } from "vuex";
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
      menuNum: 4,
      orderMenuType: '',
      orderMenu: ["未使用", "已使用", "已过期"],
      couponList: [
        {
          id: 1,
          price: "10",
          denomination: "无门槛10元券",
          company: "【同仁堂店铺】",
          timeLimit: "2019/05/20-2019/06/20"
        },
        {
          id: 1,
          price: "10",
          denomination: "无门槛10元券",
          company: "【同仁堂店铺】",
          timeLimit: "2019/05/20-2019/06/20"
        },
        {
          id: 1,
          price: "10",
          denomination: "无门槛10元券",
          company: "【同仁堂店铺】",
          timeLimit: "2019/05/20-2019/06/20"
        },
        {
          id: 1,
          price: "10",
          denomination: "无门槛10元券",
          company: "【同仁堂店铺】",
          timeLimit: "2019/05/20-2019/06/20"
        }
      ],
      discountData:{}
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
  watch:{
    orderMenuType:function(val){
      console.log('val == ' + val)
      if(val === 0){
        this.couponList = this.discountData.list1;
      }else if(val === 1){
        this.couponList = this.discountData.list2;
      }else if(val === 2){
        this.couponList = this.discountData.list3;
      }
    }
  },
  created(){
    if(this.userInfo){
      this.getDiscount();
    }else if(!this.userInfo){
      this.$message.closeAll();
      this.$message.warning("请先登陆");
    }
  },
  methods: {
    getDiscount(){
      this.post("/yiqi-api/api/perCoupon/list",{token:this.userInfo.token}).then(res=>{
        this.discountData = res.data;
        this.orderMenuType = 0;
        console.log(res)
      }).catch(err=>{})
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

.coupon-list {
  position: relative;
  width: 237px;
  height: 300px;
  margin-left: 24px;
  overflow: hidden;
}

.coupon-list img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.coupon-list:nth-child(4n + 1) {
  margin-left: 0;
}

.coupon-list:nth-child(n + 5) {
  margin-top: 24px;
}

.coupon-main {
  position: relative;
  padding: 10px 36px 0;
  line-height: 1;
  z-index: 3;
}

.coupon-main p {
  margin-top: 8px;
  font-size: 12px;
  color: #fff;
}

.coupon-main p.price {
  margin: 50px 0 46px;
  font-weight: bold;
  font-size: 22px;
}

.coupon-main p.price span {
  font-size: 36px;
}

.coupon-main p.time {
  margin-top: 15px;
}

.coupon-main span.btn {
  display: block;
  width: 130px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #ff6736;
  margin: 40px auto 0;
  background-color: #fff;
  border-radius: 40px;
}

.coupon-main span.btn.off {
  color: #999;
  background-color: #fff;
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