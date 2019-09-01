<template>
  <div id="ShopDetail">
    <my-head :login="login"/>
    <section>
      <div class="shop-top flex-start-start">
        <div class="shop-top-left">
          <!-- <el-carousel trigger="click" height="373px">
            <el-carousel-item v-for="(item, index) in shopData.imagelist" :key="index"> -->
             <img :src="shopData.storeimage">
            <!-- </el-carousel-item>
          </el-carousel> -->
        </div>
        <div class="shop-top-right">
          <div class="shop-top-right-message flex-start-start">
            <div class="shop-photo">
              <img :src="shopData.headbgimg">
            </div>
            <div class="shop-photo-right">
              <h4>{{shopData.storename}}</h4>
              <div class="flex-start-center">
                <p class="flex-start-center">
                  <img src="../../../static/img/doctor-sure.png">医保定点
                </p>
                <!-- <span
                  @click="shopData.isfollo === 1 ? collect(0) : collect(1) "
                >{{shopData.isfollo === 1 ? "已关注" : "关注"}}</span> -->
              </div>
            </div>
          </div>
          <p>
            <span>地址:</span>
            {{shopData.address}}
          </p>
          <p>
            <span>店铺电话:</span>
            {{shopData.contactphone}}
          </p>
          <p>
            <span>营业状态:</span>
            {{shopData.state | manageState}}
          </p>
          <p>
            <span>营业时间:</span>
            {{shopData.managetime}}
          </p>
          <p>
            <span>经营类目:</span>
          </p>
          <div class="shop-manage-type flex-start-start">
            <span>{{shopData.stype}}</span>
            <!-- <span v-for="item in shop.manage" :key="item">{{item}}</span> -->
          </div>
        </div>
      </div>
      <div class="shop-search flex-start-center">
        <p>店铺名称 >></p>
        <div class="head-second">
          <div class="head-search flex-start-center">
            <img src="../../../static/img/icon-search.png">
            <input v-model="shopSearch" placeholder="请搜索店内商品">
            <span @click="shopSearchBind">搜索</span>
          </div>
        </div>
        <!-- <p>共{{shopData.shoplist.length}}件商品</p> -->
      </div>
      <div class="doctor-bottom">
        <div class="doctor-bottom-title flex-start-start">
          <span :class="{on : doctorDetailType == 1}" @click="doctorDetailType = 1">首页</span>
          <span :class="{on : doctorDetailType == 2}" @click="doctorDetailType = 2">商品
            <!-- <i>({{shopData.shoplist.length}})</i> -->
          </span>
          <span :class="{on : doctorDetailType == 3}" @click="doctorDetailType = 3">活动</span>
          <span :class="{on : doctorDetailType == 4}" @click="doctorDetailType = 4">评价
            <!-- <i>({{shopData.reviews.length}})</i> -->
          </span>
          <span :class="{on : doctorDetailType == 5}" @click="doctorDetailType = 5">医生
            <!-- <i>({{shopData.docto.length}})</i> -->
          </span>
          <span v-if="doctorDetailType === 6" :class="{on : doctorDetailType == 6}" @click="doctorDetailType = 6">搜索结果
            <!-- <i>({{shopData.docto.length}})</i> -->
          </span>
        </div>
        <template v-if="doctorDetailType == 1">
          <!-- <div class="shop-notice">
            <h3>公告栏</h3>
            <p>{{shop.notice}}</p>
          </div>-->
          <div class="shop-introduce">
            <h4 class="title">资质证书</h4>
            <div
              class="doctor-bottom-server"
              v-for="(item,index) in shopData.imagelist"
              :key="index"
            >
              <img :src="item">
            </div>
            <!-- <h4 class="title">店铺资质</h4>
            <div class="doctor-bottom-server">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg" />
            </div>-->
            <!-- <h4 class="title">GSP认证证书</h4>
            <div class="doctor-bottom-server">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg" />
            </div>
            <h4 class="title">药品经营许可证</h4>
            <div class="doctor-bottom-server">
              <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg" />
            </div>-->
          </div>
          <!-- <div class="shop-goods">
            <div class="shop-goods-title">
              <h3>实时榜单</h3>
              <p><span>每日10点更新品牌热销榜</span></p>
            </div>
            <div class="shop-goods-list flex-start-start">
              <router-link to="" v-for="(item,index) in goodsList" :key="index">
                <div class="shop-goods-list-img flex-center-center">
                  <img :src="item.img" />
                </div>
                <div class="shop-goods-list-message">
                  <p>{{item.name}}</p>
                  <div class="flex-between-center">
                    <span>￥{{item.price}}</span>
                    <span>已售：{{item.amount}}件</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="shop-goods">
            <div class="shop-goods-title">
              <h3>店铺推荐</h3>
              <p><span>精选商品,任您挑选</span></p>
            </div>
            <div class="shop-goods-list flex-start-start">
              <router-link to="" v-for="(item,index) in goodsList" :key="index">
                <div class="shop-goods-list-img flex-center-center">
                  <img :src="item.img" />
                </div>
                <div class="shop-goods-list-message">
                  <p>{{item.name}}</p>
                  <div class="flex-between-center">
                    <span>￥{{item.price}}</span>
                    <span>已售：{{item.amount}}件</span>
                  </div>
                </div>
              </router-link>
            </div>
          </div>-->
        </template>
        <template v-else-if="doctorDetailType == 2">
          <p class="select">
            <span
              :class="['xs', selectGoodsType === index ? 'ac' : '']"
              v-for="(va,index) in shopData.shoplist"
              :key="index"
              @click="selectGoodsType = index"
            >{{va.name}}</span>
          </p>
          <div class="shop-goods-list flex-start-start flex-wrap" v-if="shopData.shoplist.length > 0">
            <router-link :to="({path:'/goods/detail',query:{id:item.pid,menu:login.menu}})" v-for="(item,index) in shopData.shoplist[selectGoodsType].list" :key="index">
              <div class="shop-goods-list-img flex-center-center">
                <img :src="item.showimg">
              </div>
              <div class="shop-goods-list-message">
                <p>{{item.shopname}}</p>
                <div class="flex-between-center">
                  <span>￥{{item.shopprice}}</span>
                  <!-- <span>已售：{{item.amount}}件</span> -->
                </div>
              </div>
            </router-link>
          </div>
        </template>
        <template v-else-if="doctorDetailType == 3">
          <!-- <div class="shop-notice">
            <h3>公告栏</h3>
            <p>{{shop.notice}}</p>
          </div>-->
          <div class="shop-goods">
            <div class="shop-goods-title">
              <h3>实时榜单</h3>
              <p>
                <span>每日10点更新品牌热销榜</span>
              </p>
            </div>
            <div class="shop-goods-list flex-start-start">
              <router-link :to="({path:'/goods/detail',query:{id:item.pid,menu:login.menu}})" v-for="(item,index) in shopData.hotshop" :key="index">
                <div class="shop-goods-list-img flex-center-center">
                  <img :src="item.showimg">
                </div>
                <div class="shop-goods-list-message">
                  <p>{{item.shopname}}</p>
                  <div class="flex-between-center">
                    <span>￥{{item.shopprice}}</span>
                    <!-- <span>已售：{{item.amount}}件</span> -->
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="shop-goods">
            <div class="shop-goods-title">
              <h3>店铺推荐</h3>
              <p>
                <span>精选商品,任您挑选</span>
              </p>
            </div>
            <div class="shop-goods-list flex-start-start">
              <router-link :to="({path:'/goods/detail',query:{id:item.pid,menu:login.menu}})" v-for="(item,index) in shopData.jpshop" :key="index">
                <div class="shop-goods-list-img flex-center-center">
                  <img :src="item.showimg">
                </div>
                <div class="shop-goods-list-message">
                  <p>{{item.shopname}}</p>
                  <div class="flex-between-center">
                    <span>￥{{item.shopprice}}</span>
                    <!-- <span>已售：{{item.amount}}件</span> -->
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </template>
        <template v-else-if="doctorDetailType == 4">
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
              v-for="(item,index) in shopData.reviews"
              :key="index"
            >
              <div class="doctor-evaluate-list-left">
                <img :src="item.ruimage">
              </div>
              <div class="doctor-evaluate-list-right">
                <div class="doctor-evaluate-name">
                  <p>{{item.runame}}</p>
                </div>
                <!-- <div class="doctor-evaluate-score flex-start-center">
                  <span>综合评分</span>
                  <img v-for="(items, idx) in 5" :src="item.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'" />
                </div>-->
                <div class="doctor-evaluate-introduce">
                  <p>{{item.rmassage}}</p>
                  <p>{{item.rtime}}</p>
                </div>
                <div class="doctor-evaluate-img flex-start-start flex-wrap">
                  <!-- <img v-for="img in item.imgList" :src="img" /> -->
                  <img v-if="item.rimage1" :src="item.rimage1">
                  <img v-if="item.rimage2" :src="item.rimage2">
                  <img v-if="item.rimage3" :src="item.rimage3">
                </div>
                <!-- <div class="doctor-evaluate-reply">
                  <p>医生回复：{{item.reply.smassage}}</p>
                </div>-->
              </div>
            </div>
          </div>
        </template>
        <template v-else-if="doctorDetailType == 5">
          <div class="shop-personnel-list flex-start-start flex-wrap">
            <router-link to v-for="(item,index) in shopData.docto" :key="index">
              <div class="shop-personnel-list-img flex-center-center">
                <img :src="item.dimagesrc">
              </div>
              <div class="shop-personnel-list-message">
                <p>
                  <span>{{item.dname}}</span>
                  <span>{{item.dsex}}</span>
                </p>
                <p>
                  <span>擅长</span>
                  {{item.dexperience}}
                </p>
              </div>
            </router-link>
          </div>
        </template>
        <template v-else-if="doctorDetailType == 6">
           <div class="shop-goods">
            <div class="shop-goods-list flex-start-start">
              <router-link :to="({path:'/goods/detail',query:{id:item.pid,menu:login.menu}})" v-for="(item,index) in searchGoods" :key="index">
                <div class="shop-goods-list-img flex-center-center">
                  <img :src="item.showimg">
                </div>
                <div class="shop-goods-list-message">
                  <p>{{item.shopname}}</p>
                  <div class="flex-between-center">
                    <span>￥{{item.shopprice}}</span>
                    <!-- <span>已售：{{item.amount}}件</span> -->
                  </div>
                </div>
              </router-link>
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
  name: "ShopDetail",
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
      doctorDetailType: 1,
      selectGoodsType: 0,
      evaluateType: 1,
      shopData: {
        shoplist: [],
        reviews: [],
        docto: [],
        imagelist: [],
        shoplist: [],
        // shoplist: [{list:[]}],
        hotshop: [],
        jpshop: [],
        reviews: [],
      },
      searchGoods: {
        shoplist: [],
        reviews: [],
        docto: [],
      },
      shop: {
        imgList: [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg"
        ],
        photo:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
        name: "益丰大药店（深圳店）",
        follow: false,
        address: "广东省深圳市南山区东滨路xxxx花园城",
        tel: "0577-12345678",
        state: "营业中",
        time: "上午:9:00-12:00下午:14:00-17:00",
        manage: ["中西药品", "营养保健", "医疗器械"],
        amount: 1234,
        notice:
          "公告信息公告信息公告信息公告信息公告信息公告信息公告信息公告信息公告信息公告信息公告信息",
        goodsNum: 123,
        personnelNum: 222,
        commentNum: 155
      },
      shopSearch: "",
      evaluaterList: [
        {
          img:
            "http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg",
          name: "用户名123456",
          score: 5,
          introduce:
            "最近一些日子，连续看了好几位耳鼻喉科的医生，每个医生个人风格，施治的观念都不相同，但是，无一例外，都拥有精湛的医术，高尚的医德以及对患者温暖体贴的态度。张医生就是这样的一位好医生。医生关爱患者，患者也应该理解支持医生的工作。患病是痛苦的，但是碰到张医生是幸运的，谢谢！",
          time: "3月29日 14：32",
          imgList: [
            "http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg",
            "http://img5.imgtn.bdimg.com/it/u=4146353662,901106135&fm=26&gp=0.jpg",
            "http://img3.imgtn.bdimg.com/it/u=2858381158,2003264847&fm=26&gp=0.jpg"
          ],
          reply: "谢谢您的支持与鼓励！！！"
        },
        {
          img:
            "http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg",
          name: "用户名123456",
          score: 5,
          introduce:
            "最近一些日子，连续看了好几位耳鼻喉科的医生，每个医生个人风格，施治的观念都不相同，但是，无一例外，都拥有精湛的医术，高尚的医德以及对患者温暖体贴的态度。张医生就是这样的一位好医生。医生关爱患者，患者也应该理解支持医生的工作。患病是痛苦的，但是碰到张医生是幸运的，谢谢！",
          time: "3月29日 14：32",
          imgList: [
            "http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg",
            "http://img5.imgtn.bdimg.com/it/u=4146353662,901106135&fm=26&gp=0.jpg",
            "http://img3.imgtn.bdimg.com/it/u=2858381158,2003264847&fm=26&gp=0.jpg"
          ],
          reply: "谢谢您的支持与鼓励！！！"
        },
        {
          img:
            "http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg",
          name: "用户名123456",
          score: 5,
          introduce:
            "最近一些日子，连续看了好几位耳鼻喉科的医生，每个医生个人风格，施治的观念都不相同，但是，无一例外，都拥有精湛的医术，高尚的医德以及对患者温暖体贴的态度。张医生就是这样的一位好医生。医生关爱患者，患者也应该理解支持医生的工作。患病是痛苦的，但是碰到张医生是幸运的，谢谢！",
          time: "3月29日 14：32",
          imgList: [
            "http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg",
            "http://img5.imgtn.bdimg.com/it/u=4146353662,901106135&fm=26&gp=0.jpg",
            "http://img3.imgtn.bdimg.com/it/u=2858381158,2003264847&fm=26&gp=0.jpg"
          ],
          reply: "谢谢您的支持与鼓励！！！"
        }
      ],
      goodsList: [
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "ICEPACK大小颗粒",
          price: "69.00",
          amount: "1108"
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "ICEPACK大小颗粒",
          price: "69.00",
          amount: "1108"
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "ICEPACK大小颗粒",
          price: "69.00",
          amount: "1108"
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "ICEPACK大小颗粒",
          price: "69.00",
          amount: "1108"
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "ICEPACK大小颗粒",
          price: "69.00",
          amount: "1108"
        }
      ],
      personnelList: [
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          goodAt: "骨性牙列不齐、各种畸技术"
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          goodAt: "骨性牙列不齐、各种畸技术"
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          goodAt: "骨性牙列不齐、各种畸技术"
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          goodAt: "骨性牙列不齐、各种畸技骨性牙列不齐、各种畸技术"
        },
        {
          id: 1,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "韩冬梅",
          sex: "女",
          goodAt: "骨性牙列不齐、各种畸技术"
        }
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
    this.login.menu = this.$route.query.menu;
    if (!this.$route.query.id) {
      this.$router.go(-1);
      this.$message.closeAll();
      this.$message.error("查询店铺失败");
    } else {
      this.getShopMsg();
    }
  },
  methods: {
    getShopMsg() {
      let v = {};
      if (this.userInfo) {
        v = {
          storenid: this.$route.query.id,
          token: this.userInfo.token
        };
      } else {
        v = {
          storenid: this.$route.query.id
        };
      }
      this.post("/yiqi-api/api/shop/storenInfo", v)
        .then(res => {
          console.log(res);
          if (res.code === 0) {
            this.shopData = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    collect(num) {
      let title = "";
      if (num === 0) {
        title = "取消关注";
      } else if (num === 1) {
        title = "关注";
      } else {
        title = "";
      }
      if (this.userInfo) {
        console.log(typeof num);
        console.log(this.$route.query.id);
        if ((num === 0 || num === 1) && this.$route.query.id) {
          this.post("/yiqi-api/api/perother/bfadd", {
            id: this.$route.query.id - 0,
            type: num,
            token: this.userInfo.token
          })
            .then(res => {
              if (res.code === 0) {
                this.shopData.isfollo = num;
              }
            })
            .catch(err => {});
        } else {
          this.$message.error(`${title}失败，请刷新后再试`);
        }
      } else {
        this.$message.error(`${title}失败，请先登录`);
      }
    },
    shopSearchBind: function() {
      if (this.shopSearch === "") {
        this.$message.error("搜索内容不能为空");
      } else {
        if (this.$route.query.id) {
          this.post("/yiqi-api/api/shop/HospitalSearch", {
            storenid: this.$route.query.id,
            workey: this.shopSearch
          })
            .then(res => {
              if (res.code === 0) {
                this.doctorDetailType = 6;
                this.searchGoods = res.data
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("未知店铺，搜索失败");
        }
      }
    }
  }
};
</script>

<style scoped>
#ShopDetail {
  background-color: #fff;
}

section {
  width: 1200px;
  margin: 30px auto 60px;
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

.doctor-bottom-title span i {
  font-style: normal;
  color: #ff4a60;
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

.shop-top {
  padding-bottom: 40px;
  border-bottom: solid 1px #f1f1f1;
}

.shop-top-left {
  width: 808px;
  height: 373px;
}

.shop-top-left img {
  width: 100%;
  height: 100%;
}

.shop-top-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  margin-left: 20px;
}

.shop-photo {
  width: 160px;
  height: 100px;
}

.shop-photo img {
  width: 160px;
  height: 100px;
  border: solid 1px #f1f1f1;
}

.shop-photo-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  margin-left: 20px;
}

.shop-photo-right h4 {
  font-size: 20px;
  color: #666;
}

.shop-photo-right div {
  margin-top: 10px;
}

.shop-top-right .shop-photo-right p {
  margin-top: 0;
  font-size: 14px;
  color: #666;
}

.shop-photo-right img {
  width: 15px;
  height: 15px;
}

.shop-photo-right span {
  display: inline-block;
  height: 25px;
  line-height: 25px;
  margin-left: 15px;
  padding: 0 15px;
  font-size: 14px;
  color: #fff;
  background-color: #27b5b1;
  border-radius: 25px;
  cursor: pointer;
}

.shop-top-right p {
  margin-top: 10px;
  font-size: 16px;
  color: #666;
}

.shop-top-right p span {
  color: #999;
}

.shop-manage-type span {
  min-width: 90px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-top: 9px;
  font-size: 14px;
  color: #fff;
  border-radius: 5px;
  background-color: #ff6736;
}

.shop-manage-type span + span {
  margin-left: 15px;
}

.shop-search {
  margin-top: 30px;
}

.shop-search p {
  font-size: 16px;
  color: #666;
}

.shop-search p span {
  color: #ff6736;
}

.shop-notice {
  padding: 20px;
  text-align: center;
}

.shop-notice h3 {
  font-size: 20px;
  color: #666;
}

.shop-notice p {
  margin-top: 10px;
  font-size: 16px;
  color: #999;
}

.shop-introduce {
  padding: 20px 0;
  border: solid 1px #f1f1f1;
}

.shop-goods-title {
  padding: 40px 0 20px;
  text-align: center;
}

.shop-goods-title h3 {
  font-size: 30px;
  color: #333;
}

.shop-goods-title p span {
  display: inline-block;
  position: relative;
  padding: 5px 10px;
  font-size: 14px;
  color: #999;
}

.shop-goods-title p span:after {
  position: absolute;
  left: 0;
  bottom: 0;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #666;
}
.shop-goods-list{
  flex-wrap: wrap;
}
.shop-goods-list a {
  width: 228px;
  height: 300px;
  margin: 15px 0 0 15px;
  border: solid 1px #f1f1f1;
}

.shop-goods-list a:nth-of-type(5n + 1) {
  margin-left: 0;
}

.shop-goods-list a:hover {
  border-color: #ff6736;
}

.shop-goods-list-img {
  width: 100%;
  height: 225px;
}

.shop-goods-list-img img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.shop-goods-list-message {
  padding: 5px 20px;
  white-space: nowrap;
}
.shop-goods-list-message p {
  font-size: 18px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;

}

.shop-goods-list-message div {
  margin-top: 5px;
}

.shop-goods-list-message div span {
  font-size: 16px;
  color: #ff4a60;
}

.shop-goods-list-message div span + span {
  font-size: 12px;
  color: #666;
}

.shop-personnel-list a {
  width: 288px;
  height: 472px;
  margin: 15px 0 0 16px;
  border: solid 1px #f1f1f1;
}

.shop-personnel-list a:hover {
  border-color: #ff6736;
}

.shop-personnel-list a:nth-of-type(4n + 1) {
  margin-left: 0;
}

.shop-personnel-list-img {
  width: 100%;
  height: 355px;
}

.shop-personnel-list-img img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.shop-personnel-list-message {
  padding: 40px 30px 0;
}

.shop-personnel-list-message p {
  text-align: center;
  font-size: 16px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.shop-personnel-list-message p:first-of-type span + span {
  margin-left: 5px;
}

.shop-personnel-list-message p + p {
  margin-top: 17px;
  font-size: 14px;
  color: #666;
}

.shop-personnel-list-message p + p span {
  color: #999;
}
.select {
  width: 100%;
  padding: 30px 0;
}
.select span {
  display: inline-block;
  min-width: 90px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 4px;
  margin-right: 20px;
}
.select .ac {
  background-color: #ff6736;
  color: #fff;
}
</style>

<style>
.shop-search .head-second {
  width: auto;
  height: auto;
  margin: 0 30px;
}

.shop-search .head-search {
  width: 436px;
}
</style>