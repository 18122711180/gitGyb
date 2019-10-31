<template>
  <div id="goodsDetail">
    <my-head :login="login"/>
    <section>
      <div class="doctor-top flex-between-start">
        <div class="doctor-top-left flex-start-start">
          <div class="doctor-evaluate">
            <img class="doctor-evaluate-img doctor-img" :src="doctorData.showimglist[goodsImgType]">
            <div class="goods-img-list flex-start-start">
              <!-- <div class="flex-center-center" :class="{on: goodsImgType == index}" @mouseover="imgOver(index)" v-for="(item,index) in doctor.imgList" :key="item"> -->
              <div
                class="flex-center-center"
                :class="{on: goodsImgType == index}"
                @mouseover="imgOver(index)"
                v-for="(item,index) in  doctorData.showimglist"
                :key="index"
              >
                <img :src="item">
              </div>
            </div>
          </div>
          <div class="doctor-message">
            <div class="doctor-other">
              <h3>{{doctorData.name}}</h3>
              <p>
                <span>商品价格：</span>
                <span class="price" v-if="doctorData.costprice">￥{{doctorData.costprice}}</span>
                <span class="price" v-else>￥{{doctorData.shopprice}}</span>
                <span class="old-price" v-if="doctorData.costprice">￥{{doctorData.shopprice}}</span>
              </p>
              <div class="doctor-other-amount flex-start-center">
                <p>选择数量：</p>
                <input type="number" v-model="amount" @change="amountChange">
              </div>
              <p>
                <span>选择规格：</span>
              </p>
              <div class="doctor-other-service flex-start-start flex-wrap">
                <span
                  v-for="(item, index) in doctorData.shopmeal"
                  :key="index"
                  :class="{on : serviceTimeType == index}"
                  @click="serviceTimeType = index"
                >{{item.mname}}</span>
              </div>
            </div>
            <div class="doctor-btn flex-start-start">
              <span @click="purchase(doctorData)">立即购买</span>
              <span @click="addCart(doctorData)">加入购物车</span>
            </div>
          </div>
        </div>
        <!-- <div class="doctor-top-right">
          <img :src="doctorData.storeimage">
          <p>{{doctorData.storename}}</p>
          <p><span>联系电话：</span>{{doctorData.tel}}</p>
          <p><span>详细地址：</span>{{doctorData.address}}</p>
        </div> -->
      </div>
      <div class="doctor-bottom">
        <div class="doctor-bottom-title flex-start-start">
          <span :class="{on : doctorDetailType == 1}" @click="doctorDetailType = 1">商品详情</span>
          <span :class="{on : doctorDetailType == 2}" @click="getComment(),doctorDetailType = 2">评价</span>
          <!-- <span :class="{on : doctorDetailType == 3}" @click="doctorDetailType = 3">参数</span> -->
        </div>
        <template v-if="doctorDetailType == 1">
          <h3 class="title">产品详情</h3>
          <div class="doctor-bottom-server" v-html="doctorData.detail">
            <!-- <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg" /> -->
          </div>
        </template>
        <template v-else-if="doctorDetailType == 2">
          <!-- <div class="doctor-evaluate-title flex-start-center">
            <span :class="{on: evaluateType == 1}" @click="evaluateType = 1">全部(568)</span>
            <span :class="{on: evaluateType == 2}" @click="evaluateType = 2">好评(568)</span>
            <span :class="{on: evaluateType == 3}" @click="evaluateType = 3">中评(568)</span>
            <span :class="{on: evaluateType == 4}" @click="evaluateType = 4">差评(568)</span>
            <span :class="{on: evaluateType == 5}" @click="evaluateType = 5">有图(568)</span>
          </div>-->
          <div class="doctor-evaluate-main" v-if="commentData.length > 0">
            <div
              class="doctor-evaluate-list flex-start-start"
              v-for="(item,index) in commentData"
              :key="index"
            >
              <div class="doctor-evaluate-list-left">
                <img :src="item.ruimage">
              </div>
              <div class="doctor-evaluate-list-right">
                <div class="doctor-evaluate-name">
                  <p>{{item.name}}</p>
                </div>
                <div class="doctor-evaluate-score flex-start-center">
                  <!-- <span>综合评分</span>
                  <img
                    v-for="(items, idx) in 5"
                    :src="item.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                  >-->
                </div>
                <div class="doctor-evaluate-introduce">
                  <p>{{item.message}}</p>
                  <p>{{item.time}}</p>
                </div>
                <div class="doctor-evaluate-img flex-start-start flex-wrap">
                  <!-- <img v-for="img in item.imgList" :src="img"> -->
                  <img v-if="item.image" :src="item.image">
                  <img v-if="item.image1" :src="item.image1">
                  <img v-if="item.image2" :src="item.image2">
                </div>
                <!-- <div class="doctor-evaluate-reply">
                  <p>{{item.sreply.storename}}：{{item.sreply.smassage}}</p>
                </div>-->
              </div>
            </div>
          </div>
        </template>
        <template wx-else>
          <div class="doctor-bottom-server"></div>
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
import { setOrder } from "@/utils/auth";
import { mapGetters } from "vuex";
export default {
  name: "goodsDetail",
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
        menu: 1,
        searchShow: false,
        url: this.url
      },
      serviceTimeType: 0,
      serviceTimeData: ["规格1", "规格2"],
      amount: 1,
      doctorDetailType: 1,
      evaluateType: 1,
      goodsImgType: 0,
      doctorData: "",
      doctor: {},
      evaluaterList: [
        {
          id: "",
          image: "",
          image1: "",
          image2: "",
          isok: "",
          isokcount: "",
          message: "",
          quality: "",
          ruimage: "",
          runame: "",
          sreply: {
            smassage: "12",
            storeid: "",
            storename: "12"
          },
          star: "",
          star1: "",
          star2: "",
          time: ""
        }
      ],
      commentData: []
    };
  },
  components: {
    props: ["login"],
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  watch: {
    // doctorDetailType: function(num) {
    //   if (num === 2) {
    //     console.log()
    //     this.getComment();
    //   }
    // }
  },
  mounted() {
    // this.doctor.img = this.doctor.imgList[0];
  },
  created() {
    if (this.$route.query.id) {
      this.login.menu = this.$route.query.menu;
      this.getMsg();
    } else {
      this.$message.error("查询药品详情失败");
      // this.$router.back(-1);
    }
  },
  methods: {
    //获取评论
    getComment() {
      let self = this;
      if (this.doctorData.pid) {
        let v = {};
        v.id = this.doctorData.pid;
        if (this.userInfo) {
          v.token = this.userInfo.token;
        }
        this.post("/yiqi-api/api/perother/evaluatelist", v)
          .then(res => {
            this.commentData = res.data;
          })
          .catch(err => {});
      }
    },
    purchase(doctorData) {
      if (this.userInfo) {
        if (doctorData === "") {
          this.$message.error("购买失败，请刷新后再试");
        } else {
          let cartData = {};
          cartData.token = this.userInfo.token;
          cartData.ids = `${doctorData.pid},${this.amount},0`;
          this.post("/yiqi-api/api/shop/shopbuy", cartData)
            .then(res => {
              if (res.code === 0) {
                // this.$router.push({path:'/car/order',query:{shoptype:res.data.shoptype,id:res.data.id}})
                this.order2(res.data.id, res.data.shoptype);
              }
            })
            .catch(err => {});
        }
      } else {
        this.$message.closeAll();
        this.$message.warning("请先登陆！");
      }
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
          this.$message.error(err);
        });
    },
    // 添加购物车
    addCart(doctorData) {
      if (this.userInfo) {
        if (doctorData === "") {
          this.$message.error("加入购物车失败，请刷新后再试");
        } else {
          let cartData = {};
          cartData.token = this.userInfo.token;
          cartData.pid = doctorData.pid;
          cartData.pname = doctorData.name;
          cartData.mid = 0;
          cartData.mname = "";
          cartData.price = doctorData.costprice
            ? doctorData.costprice
            : doctorData.shopprice;
          cartData.number = this.amount;
          this.post("/yiqi-api/api/shop/addshopcar", cartData)
            .then(res => {
              if (res.code === 0) {
                this.$message.success("添加购物车成功");
              }
            })
            .catch(err => {});
        }
      } else {
        this.$message.warning("请先登陆！");
      }
    },
    getMsg() {
      this.post("/yiqi-api/api/shop/productsInformation", {
        pid: this.$route.query.id
      })
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.doctorData = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    amountChange: function() {
      if (this.amount < 1) {
        this.amount = 1;
      } else if (this.amount > this.doctor.surplus) {
        this.amount = this.doctor.surplus;
      }
    },
    imgOver: function(index) {
      var that = this;
      that.goodsImgType = index;
      that.doctor.img = that.doctor.imgList[index];
    }

  }
};
</script>


<style scoped>
#goodsDetail {
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
  width: 360px;
  margin-right: 20px;
}

.doctor-evaluate-img {
  /* width: 360px;
  height: 360px; */
}

.doctor-message {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.doctor-other {
  line-height: 1;
}

.doctor-other h3 {
  font-size: 16px;
  color: #333;
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

.doctor-other p span.old-price {
  text-decoration: line-through;
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
  min-width: 120px;
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

.goods-img-list {
  margin-top: 20px;
}

.goods-img-list div {
  width: 58px;
  height: 58px;
  border: solid 1px #f1f1f1;
  cursor: pointer;
}

.goods-img-list div.on {
  border-color: #ff6736;
}

.goods-img-list div + div {
  margin-left: 17px;
}

.goods-img-list img {
  width: auto;
  height: auto;
  max-height: 100%;
  max-width: 100%;
}

.doctor-img {
  width: 360px;
  height: 360px;
}
</style>







