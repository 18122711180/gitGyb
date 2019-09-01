<template>
  <div id="car">
    <my-head :login="login"/>
    <section>
      <div class="order-main">
        <h3>购物车</h3>
        <div class="order-frame">
          <template v-if="orderList.length">
            <div class="order-list-title flex-start-center">
              <span>订单详情</span>
              <span>单价</span>
              <span>数量</span>
              <span>小计</span>
              <span>操作</span>
            </div>
            <div class="order-list">
              <div class="order-list-main">
                <!-- <div class="order-list-top flex-start-center">
                  <img
                    @click="shopSelect(index)"
                    class="car-select"
                    :src="item.state ? '../../../static/img/car-select-on.png' : '../../../static/img/car-select-off.png'"
                  >
                  <img class="car-icon-shop" src="../../../static/img/icon-shop.png">
                  <span>{{item.name}}</span>
                </div>-->
                <div
                  class="order-list-bottom flex-start-start"
                  v-for="(list, idx) in orderList"
                  :key="idx"
                >
                  <div class="order-list-message flex-between-center">
                    <img
                      @click="goodsSelect(idx)"
                      class="car-select"
                      :src="list.state ? '../../../static/img/car-select-on.png' : '../../../static/img/car-select-off.png'"
                    >
                    <div class="order-list-message-left flex-start-start">
                      <img :src="list.showimg">
                      <div class="order-list-message-basic">
                        <div class="order-list-message-name">
                          <span>{{list.shopname}}</span>
                        </div>
                        <!-- <p>{{list.shopprice}}</p> -->
                      </div>
                    </div>
                  </div>
                  <div class="order-list-price order-list-bottom-div flex-center-center">
                    <span>￥{{list.shopprice}}</span>
                  </div>
                  <div class="order-list-amount order-list-bottom-div flex-center-center">
                    <input
                      type="number"
                      v-model="list.shopnumber"
                      @change="list.shopnumber <= 0 ? list.shopnumber = 1 : '',allStatistics(orderList)"
                    >
                  </div>
                  <div class="order-list-price order-list-bottom-div flex-center-center">
                    <span>￥{{list.shopprice * list.shopnumber}}</span>
                  </div>
                  <div class="order-list-oper order-list-bottom-div flex-center-center">
                    <span @click="delShop(list.id,idx)">删除</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="car-btn flex-start-start">
              <div class="car-btn-left flex-between-center">
                <div class="car-btn-delete flex-start-start">
                  <p @click="allSelect">
                    <img
                      class="car-select"
                      :src="selectAll ? '../../../static/img/car-select-on.png' : '../../../static/img/car-select-off.png'"
                    >全选
                  </p>
                  <!-- <span>删除选中服务/商品</span> -->
                </div>
                <div class="car-btn-total flex-start-center">
                  <p>
                    已选择
                    <span>{{statistics.num}}</span>件
                  </p>
                  <div class="flex-center-end flex-column">
                    <span>总计(不含运费)</span>
                    <span>¥{{statistics.monery}}</span>
                  </div>
                </div>
              </div>
              <span class="car-btn-right" @click="jiesuan">去结算</span>
            </div>
          </template>
          <template v-else>
            <div class="searchEmpty flex-start-center flex-column">
              <img src="../../../static/img/car-empty.png">
              <p>您的购物车还是空的，赶紧行动吧</p>
              <router-link to="/">返回首页</router-link>
            </div>
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
  name: "car",
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
      selectAll: false,
      orderList: [],
      statistics: {
        num: 0,
        monery: 0
      }
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  components: {
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  created() {
    if (this.userInfo) {
      this.getCar();
    } else {
      this.$message.closeAll();
      this.$message.warning("请先登陆！");
    }
  },
  methods: {
    jiesuan() {
      if (this.userInfo) {
        let v = {
          token: this.userInfo.token,
          ids: ""
        };
        this.orderList.forEach((item, index) => {
          if (item.state) {
            console.log(item);
            if (v.ids === "") {
              v.ids = `${item.pid},${item.shopnumber},0`;
            } else {
              v.ids = `${v.ids}-${item.pid},${item.shopnumber},0`;
            }
          }
        });
        console.log(v);
        this.post("/yiqi-api/api/shop/shopbuy", v)
          .then(res => {
            if (res.code === 0) {
              this.$router.push({
                path: "/car/order",
                query: { shoptype: res.data.shoptype, id: res.data.id }
              });
            }
          })
          .catch(err => {});
      } else {
        this.$message.closeAll();
        this.$message.warning("请先登陆！");
      }
    },
    getCar() {
      this.post("/yiqi-api/api/shop/Hospcar", { token: this.userInfo.token })
        .then(res => {
          res.data.map((item, index, arr) => {
            return (item.state = true);
          });
          this.orderList = res.data;
          console.log(this.orderList);
          this.allStatistics(this.orderList);
        })
        .catch(err => {});
    },
    goodsSelect: function(idx) {
      var that = this;
      that.orderList[idx].state = !that.orderList[idx].state;
      that.selectAll = true;
      that.orderList.map(function(val) {
        if (!val.state) {
          that.selectAll = false;
        }
      });
      this.allStatistics(this.orderList);
    },
    shopSelect: function(index) {
      var that = this;
      that.selectAll = true;
      if (that.orderList[index].state) {
        that.orderList[index].state = false;
        that.orderList[index].list.map(function(val, idx) {
          val.state = false;
        });
      } else {
        that.orderList[index].state = true;
        that.orderList[index].list.map(function(val, idx) {
          val.state = true;
        });
      }
      that.orderList.map(function(val) {
        if (!val.state) {
          that.selectAll = false;
        }
      });
    },
    allSelect: function() {
      var that = this;
      if (that.selectAll) {
        that.selectAll = false;
        this.statistics.num = 0;
        this.statistics.monery = 0;
        that.orderList.map(function(val) {
          val.state = false;
        });
      } else {
        that.selectAll = true;
        this.statistics.num = 0;
        this.statistics.monery = 0;
        that.orderList.map(function(val) {
          that.statistics.num += val.shopnumber - 0;
          that.statistics.monery += val.shopprice * val.shopnumber;
          val.state = true;
        });
      }
    },
    allStatistics(orderList) {
      this.statistics.num = 0;
      this.statistics.monery = 0;
      this.selectAll = true;
      orderList.forEach((val, index) => {
        console.log(val.state);
        console.log(orderList);
        if (val.state) {
          this.statistics.num += val.shopnumber - 0;
          this.statistics.monery = this.addNum(
            this.statistics.monery,
            val.shopprice * val.shopnumber
          );
          // this.statistics.monery += val.shopprice * val.shopnumber;
        } else {
          this.selectAll = false;
        }
      });
    },
    addNum(arg1, arg2) {
      var r1, r2, m;
      try {
        r1 = arg1.toString().split(".")[1].length;
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length;
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2));
      return (arg1 * m + arg2 * m) / m;
    },
    delShop(id, index) {
      this.post("/yiqi-api/api/shop/romveshopcar", {
        token: this.userInfo.token,
        id: id
      })
        .then(res => {
          console.log(res);
          this.$message.closeAll();
          this.$message.success("删除成功");
          this.orderList.splice(index, 1);
          this.allStatistics();
        })
        .catch(err => {
          console.log(err);
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
  padding: 20px;
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

.order-list-main {
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

.order-list-top span {
  font-size: 14px;
  color: #333;
}

.car-select {
  width: 16px;
  height: 16px;
  margin-right: 18px;
  cursor: pointer;
}

.car-icon-shop {
  width: 22px;
  height: 21px;
  margin-right: 9px;
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

.order-list-message-basic {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.order-list-message-name {
  width: 100%;
  font-size: 16px;
  color: #111;
}

.order-list-message-name span {
  display: inline-block;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.order-list-message-basic p {
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

.order-list-oper span {
  margin: 0 5px;
  font-size: 14px;
  color: #ff6736;
  cursor: pointer;
}

.order-list-amount input {
  width: 80px;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  border: solid 1px #ccc;
  outline: none;
}

.car-btn {
  margin-top: 40px;
}

.car-btn-left {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  height: 60px;
  padding: 0 20px;
  background-color: #fff;
  border: solid 1px #e5e5e5;
  border-right: none;
}

.car-btn-delete {
  font-size: 14px;
  color: #333;
}

.car-btn-delete span {
  margin-left: 29px;
}

.car-btn-right {
  width: 140px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  border: solid 1px #ff6736;
  background-color: #ff6736;
  cursor: pointer;
}

.car-btn-total p {
  margin-right: 39px;
  font-size: 14px;
  color: #666;
}

.car-btn-total p span {
  color: #ff6736;
}

.car-btn-total div {
  font-size: 14px;
  color: #666;
}

.car-btn-total div span + span {
  margin-top: 5px;
  font-size: 18px;
  color: #ff6736;
}

.searchEmpty {
  width: 100%;
  margin: 120px 0 40px;
}

.searchEmpty img {
  width: 317px;
  height: 243px;
}

.searchEmpty p {
  margin-top: 30px;
  font-size: 18px;
  color: #333;
}

.searchEmpty a {
  display: inline-block;
  width: 130px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-top: 40px;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  background-color: #ff6736;
}
</style>

<style>
.search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff6736;
}

.search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #ff6736;
}

#car .head-second-bg {
  background-color: #fafafa;
}
</style>