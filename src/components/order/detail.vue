<template>
  <div id="order">
    <my-head :login="login"/>
    <section>
      <!-- <template v-if="type == 1">
        <div class="order-success flex-start-center">
          <img src="../../../static/img/icon-order-success.png">
          <p class="flex-start-start">订单提交成功，请在
            <span>26分46秒</span>内完成支付！（逾期将自动取消订单）
          </p>
        </div>
      </template> -->
      <template>
        <div v-if="type == 3 || type == 4" class="order-logistics">
          <h3>物流信息</h3>
          <div>
            <el-timeline :reverse="reverse">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.timestamp"
              >{{activity.content}}</el-timeline-item>
            </el-timeline>
          </div>
        </div>
      </template>
      <div class="order-message">
        <div class="order-list" v-for="(item, index) in shop" :key="index">
          <div class="order-list-title flex-start-center">
            <img src="../../../static/img/icon-shop-white.png">
            {{item.name}}
          </div>
          <div
            class="order-goods-list flex-start-start"
            v-for="(goods, idx) in item.list"
            :key="idx"
          >
            <img :src="goods.img">
            <div class="order-goods-right">
              <div class="order-goods-title flex-between-start">
                <span>商品信息</span>
                <p>
                  <span>单价</span>
                  <span>数量</span>
                  <span>优惠券</span>
                  <span>小计</span>
                  <span>订单状态</span>
                </p>
              </div>
              <div class="order-goods-main">
                <div class="order-goods-name flex-between-start">
                  <span>{{goods.name}}</span>
                  <p>
                    <span>￥{{goods.price}}</span>
                    <span>x{{goods.amount}}</span>
                    <span>-10.00</span>
                    <span>￥{{goods.price}}</span>
                    <span style="color: #ff4a60;">待发货</span>
                  </p>
                </div>
                <p>规格：
                  <span>{{goods.size}}</span>
                </p>
                <p>订单备注：{{goods.backup}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-detail-message">
        <p>订单编号：
          <span>{{orderCode}}</span>
        </p>
        <p>下单时间：
          <span>{{orderTime}}</span>
        </p>
        <p>收货人姓名：
          <span>{{orderName}}</span>
        </p>
        <p>联系电话：
          <span>{{orderTel}}</span>
        </p>
        <p>收货地址：
          <span>{{orderAddress}}</span>
        </p>
      </div>
      <div class="order-last">
        <p>
          <span>合计运费：</span>
          <span>￥{{postPrice}}</span>
        </p>
        <p>
          <span>应付总额：</span>
          <span>￥{{total}}</span>
        </p>
        <div>
          <template v-if="type == 1">
            <span>去付款</span>
          </template>
          <template v-if="type == 2">
            <span>确认收货</span>
          </template>
          <template v-if="type == 3">
            <span>确认发货</span>
          </template>
          <template v-if="type == 3">
            <span>去评价</span>
          </template>
          <template v-else>
            <span>提交订单</span>
          </template>
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
      type: 2,
      shop: [
        {
          name: "店铺名称",
          list: [
            {
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
              name: "凯胜（KASON）速度型高碳纤维钛金属羽毛球拍单拍TSF 100Ti",
              size: "L",
              price: "109.00",
              amount: 1,
              little: "99.00",
              backup: "ddd"
            },
            {
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
              name: "凯胜（KASON）速度型高碳纤维钛金属羽毛球拍单拍TSF 100Ti",
              size: "L",
              price: "109.00",
              amount: 1,
              little: "99.00",
              backup: "ddd"
            }
          ]
        },
        {
          name: "店铺名称",
          list: [
            {
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
              name: "凯胜（KASON）速度型高碳纤维钛金属羽毛球拍单拍TSF 100Ti",
              size: "L",
              price: "109.00",
              amount: 1,
              little: "99.00",
              backup: "ddd"
            },
            {
              img:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
              name: "凯胜（KASON）速度型高碳纤维钛金属羽毛球拍单拍TSF 100Ti",
              size: "L",
              price: "109.00",
              amount: 1,
              little: "99.00",
              backup: "ddd"
            }
          ]
        }
      ],
      orderCode: "GYB190528123456",
      orderTime: "2019-04-06",
      orderName: "钢铁侠",
      orderTel: "12345678912",
      orderAddress: "广东省深圳市南山区东滨城花园城3楼709",
      coupon: "",
      postPrice: "0.00",
      total: "90.00",
      reverse: true,
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15"
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13"
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11"
        }
      ]
    };
  },
  components: {
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  created() {
    console.log(this.$route.query.orderId);
    if(this.userInfo && this.$route.query.orderId){
      this.getDetail();
    }else if(!this.userInfo){
      this.$message.closeAll();
      this.$message.warning("请先登陆");
    }else if(!this.userInfo){
      this.$message.closeAll();
      this.$message.error("查询失败");
      this.$$router.go(-1);
    }
    
  },
  methods: {
    getDetail(){
      this.post('/yiqi-api/api/perorder/orderinfo',{token:this.userInfo.token,id:this.$route.query.orderId}).then(res=>{
        console.log(res)
      }).catch(err=>{})
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
#order {
  background-color: #fff;
}

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
  margin: 0 auto 100px;
  border-top: solid 1px #f1f1f1;
}

.order-way {
  margin-top: 29px;
}

.order-way h6 {
  font-weight: normal;
  font-size: 16px;
  color: #666;
}

.order-way-list {
  margin-top: 12px;
}

.order-address {
  margin-top: 30px;
}

.order-address h6 {
  font-weight: normal;
  font-size: 16px;
  color: #666;
}

.order-address a {
  display: block;
  width: 697px;
  padding: 15px;
  margin-top: 15px;
  font-size: 16px;
  color: #666;
  border: solid 1px #ccc;
}

.order-address a span.name {
  margin-right: 20px;
  color: #333;
}

.order-address a div + div {
  margin-top: 10px;
}

.order-message h3 {
  margin: 30px 0 0;
  font-weight: normal;
  font-size: 16px;
  color: #666;
}

.order-list {
  margin-top: 16px;
  border: solid 1px #ff6736;
}

.order-list-title {
  width: 100%;
  padding: 0 20px;
  height: 40px;
  font-size: 14px;
  color: #fff;
  background-color: #ff6736;
}

.order-list-title img {
  width: 22px;
  height: 21px;
  margin-right: 10px;
}

.order-goods-list {
  padding: 30px 20px 20px;
}

.order-goods-list + .order-goods-list {
  border-top: solid 1px #ff6736;
}

.order-goods-list img {
  width: 100px;
  height: 100px;
  margin: 30px 40px 0 0;
}

.order-goods-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.order-goods-title {
  height: 40px;
}

.order-goods-title span {
  width: 300px;
  font-size: 16px;
  color: #999;
}

.order-goods-title p span {
  display: inline-block;
  width: 140px;
  text-align-last: center;
}

.order-goods-main p {
  margin-top: 8px;
  font-size: 14px;
  color: #666;
}

.order-goods-main p span {
  color: #333;
}

.order-goods-name span {
  width: 300px;
  font-size: 16px;
  color: #333;
}

.order-goods-name p span {
  display: inline-block;
  width: 140px;
  text-align-last: center;
  color: #333;
}

.order-other a {
  width: 100%;
  height: 56px;
  margin-top: 30px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
  background-color: #f7f7f7;
}

.order-other a img {
  width: 16px;
  height: 9px;
  transform: rotate(-90deg);
}

.order-last {
  text-align: right;
  margin-top: 50px;
}

.order-last p {
  font-size: 16px;
  color: #999;
}

.order-last span {
  display: inline-block;
  width: 200px;
}

.order-last p + p {
  margin-top: 10px;
  color: #333;
}

.order-last p + p span {
  color: #ff6736;
}

.order-last div span {
  display: inline-block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  background-color: #ff6736;
}

.nursing-order {
  margin-top: 20px;
}

.order-success {
  padding: 30px 0;
  font-size: 16px;
  color: #333;
  border-bottom: solid 1px #f1f1f1;
}

.order-success img {
  width: 36px;
  height: 36px;
  margin-right: 18px;
}

.order-success p span {
  color: #ff6736;
}

.order-detail-message {
  margin-top: 60px;
  font-size: 16px;
  color: #999;
}

.order-detail-message p + p {
  margin-top: 12px;
}

.order-detail-message p span {
  color: #333;
}

.order-logistics {
  padding: 30px 0;
  font-size: 16px;
  color: #333;
  border-bottom: solid 1px #f1f1f1;
}

.order-logistics h3 {
  font-weight: normal;
  font-size: 18px;
  color: #333;
}

.order-logistics > div {
  margin-top: 20px;
  padding: 0 30px;
}
</style>

<style>
.search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff6736;
}

.search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #ff6736;
}

#car .el-radio__input.is-checked .el-radio__inner {
  border-color: #ff6736;
  background-color: #ff6736;
}

#car .el-radio__input.is-checked + .el-radio__label {
  color: #ff6736;
}
</style>