<template>
  <div id="DrugDetail">
    <my-head :login="login"/>
    <section>
      <div class="shop-top flex-start-start">
        <div class="shop-top-left">
          <el-carousel trigger="click" height="373px">
            <el-carousel-item v-for="(item, index) in drug.imageurl" :key="index">
              <img :src="item">
            </el-carousel-item>
          </el-carousel>
          <div class="drug-oper flex-start-center">
            <span class="flex-start-center">
              <img src="../../../static/img/icon-share.png">
              分享
            </span>
            <span class="flex-start-center" @click="collectBtn(collect ? 0 : 1)">
              <img
                :src="collect ? '../../../static/img/icon-collect-hover.png' : '../../../static/img/left-float-3.png'"
              >
              收藏
            </span>
            <span class="flex-start-center">
              <img src="">
              收藏夹
            </span>
          </div>
        </div>
        <div class="shop-top-right">
          <div class="drug-title flex-start-center">
            <span>{{drug.drugtyp}}</span>
            {{drug.name}}
          </div>
          <p class="flex-start-start">
            通用名:
            <span>{{drug.publicname}}</span>
          </p>
          <p class="flex-start-start">
            生产企业:
            <span>{{drug.producers}}</span>
          </p>
          <p class="flex-start-start">
            功能主治:
            <span class="t-omit">{{drug.function}}</span>
          </p>
          <p class="drug-careful">注:{{drug.remark}}</p>
          <p class="drug-copy flex-start-center">
            <span>批准文</span>
            {{drug.approvalnumber}}
            <span class="copy" @click="copyBind">复制</span>
            <a :href="drug.link">国家食药监局官网查询</a>
          </p>
          <p class="flex-start-start">
            <span>药品需要处理流程：</span>
          </p>
          <div class="drug-process flex-between-start">
            <div class="flex-start-center flex-column" v-for="(item,index) in process">
              <span>{{index+1}}</span>
              <span>{{item}}</span>
            </div>
          </div>
          <p class="doctor-other-amount flex-start-center">
            <span>选择数量:</span>
            <input type="number" v-model="drug.amount" @change="amountChange">
          </p>
          <p class="drug-search">
            <router-link :to="{ path: '/drug/list', query: { id: drug.id ,menu : login.menu}}">搜索有此药的药店</router-link>
          </p>
        </div>
      </div>
      <div class="doctor-bottom">
        <div class="doctor-bottom-title">
          <h3>说明书</h3>
        </div>
        <div class="doctor-bottom-main" v-html="drug.instructions"></div>
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
  name: "DrugDetail",
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
      process: [
          "填写需求量",
          "搜索有此药的药店",
          "一键通知药房备药",
          "药店自提"
        ],
      drug: {
        imgList: [
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg"
        ],
        type: "处方药",
        name: "板蓝根冲剂&规格",
        generalName: "通用名通用名通用名",
        company: "企业名称企业名称",
        drugFunction: "主要用于清热解毒介绍奥开治疗扁桃腺炎眼流行性桃桃腺",
        careful: "本品为处方药，取药需凭医生处方",
        process: [
          "填写需求量",
          "搜索有此药的药店",
          "一键通知药房备药",
          "药店自提"
        ],
        amount: 1,
        code: "KGNIW5528712",
        link: "javascript:;"
      },
      collect: false
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
    if (this.$route.query.id) {
      this.getGoodsInfo();
    } else {
      this.$message.closeAll();
      this.$message.error("查询药品信息错误");
      this.$router.go(-1);
    }
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    collectBtn(num){
      if(this.userInfo){
      let title = ''
      if(num === 0){
        title = '取消收藏'
      }else if(num === 1){
        title = '收藏'
      };
      console.log('title = ' + title)
      this.post('/yiqi-api/api/perother/bcadd',{type:num,id:this.$route.query.id,token:this.userInfo.token}).then(res=>{
        console.log(res)
        this.collect = !this.collect;
      }).catch(err=>{})
        
      }else{
        this.$message.closeAll();
        this.$message.warning('请先登陆');
      }
    },
    getGoodsInfo(){
      this.post('/yiqi-api/api/drug/info',{infoId:this.$route.query.id}).then(res=>{
        this.drug = res.data;
      }).catch(err=>{})
    },
    amountChange: function() {
      if (this.drug.amount < 1) {
        this.drug.amount = 1;
      } else if (this.drug.amount > 90) {
        this.drug.amount = 90;
      }
    },
    copyBind: function() {
      var that = this;
      this.$message({
        message: "复制成功",
        type: "success"
      });
    }
  }
};
</script>

<style scoped>
#DrugDetail {
  background-color: #fff;
}

section {
  width: 1200px;
  margin: 30px auto 60px;
}

.shop-top {
  padding-bottom: 40px;
}

.shop-top-left {
  width: 808px;
}

.shop-top-left img {
  width: 100%;
  height: 373px;
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

.drug-title {
  font-size: 16px;
  color: #333;
}

.drug-title span {
  height: 20px;
  padding: 0 10px;
  line-height: 20px;
  margin-right: 10px;
  font-size: 14px;
  color: #ff6736;
  border: solid 1px #ff6736;
}

.shop-top-right p {
  margin-top: 10px;
  line-height: 1.4;
  font-size: 16px;
  color: #999;
}

.shop-top-right p span {
  -webkit-flex: 1;
  flex: 1;
  color: #666;
}

.shop-top-right p.drug-careful {
  color: #ff4a60;
}

.shop-top-right p.drug-copy span {
  flex: none;
}

.shop-top-right p.drug-copy span.copy {
  width: 33px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  margin: 0 10px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  background-color: #ff6736;
}

.shop-top-right p.drug-copy a {
  margin-left: 5px;
  font-size: 14px;
  color: #2e65e6;
  text-decoration: underline;
}

.drug-process {
  position: relative;
  margin-top: 15px;
}

.drug-process:before {
  position: absolute;
  left: 0;
  top: 8px;
  content: "";
  width: 100%;
  height: 1px;
  background-color: #999;
}

.drug-process div {
  position: relative;
  font-size: 12px;
  color: #999;
}

.drug-process div span:first-child {
  position: relative;
  width: 16px;
  height: 16px;
  line-height: 16px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 14px;
  color: #999;
  border: solid 1px #999;
  border-radius: 16px;
  background-color: #fff;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.drug-process div:first-child:after {
  position: absolute;
  left: 0;
  top: 6px;
  content: "";
  width: 50%;
  height: 4px;
  background-color: #fff;
}

.drug-process div:last-child:after {
  position: absolute;
  right: 0;
  top: 6px;
  content: "";
  width: 50%;
  height: 4px;
  background-color: #fff;
}

.shop-top-right p.doctor-other-amount {
  margin-top: 25px;
}

.shop-top-right p.doctor-other-amount span {
  flex: none;
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

.drug-search a {
  display: inline-block;
  width: 160px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background-color: #ff6736;
  border-radius: 5px;
}

.drug-oper {
  margin-top: 30px;
}

.drug-oper span {
  font-size: 16px;
  color: #666;
  cursor: pointer;
}

.drug-oper span + span {
  margin-left: 20px;
}

.drug-oper span img {
  width: auto;
  height: auto;
  margin-right: 5px;
}

.doctor-bottom-title {
  margin: 30px 0;
  text-align: center;
}

.doctor-bottom-title h3 {
  display: inline-block;
  position: relative;
  font-size: 20px;
  color: #333;
}

.doctor-bottom-title h3:before {
  position: absolute;
  left: -45px;
  top: 50%;
  content: "";
  width: 40px;
  height: 2px;
  margin-top: 1px;
  background-color: #ff6736;
}

.doctor-bottom-title h3:after {
  position: absolute;
  right: -45px;
  top: 50%;
  content: "";
  width: 40px;
  height: 2px;
  margin-top: 1px;
  background-color: #ff6736;
}
</style>