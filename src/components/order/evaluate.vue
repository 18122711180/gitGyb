<template>
  <div id="exchange">
    <my-head :login="login" />
    <section>
      <!-- <div class="exchange-top flex-start-start">
        <img :src="goods.img">
        <div class="exchange-top-right">
          <h3>{{goods.name}}</h3>
          <p><span>规格：{{goods.size}}</span>x{{goods.amount}}</p>
          <p class="price">￥{{goods.price}}</p>
        </div>
      </div>-->
      <div class="exchange-bottom">
        <div class="evaluate-title">
          <h3>评价</h3>
        </div>
        <div class="evaluate-score" v-if="type < 3">
          <template>
            <div class="exchange-bottom-list flex-start-center">
              <span class="exchange-bottom-list-left exchange-bottom-list-left-center">服务态度:</span>
              <div class="exchange-bottom-list-right flex-start-center">
                <img
                  @click="goodsScore = index+1"
                  v-for="(item ,index) in 5"
                  :src="goodsScore > index ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                  :key="index"
                />
              </div>
            </div>
            <div class="exchange-bottom-list flex-start-center">
              <span class="exchange-bottom-list-left exchange-bottom-list-left-center">专业手法:</span>
              <div class="exchange-bottom-list-right flex-start-center">
                <img
                  @click="goodsScore2 = index+1"
                  v-for="(item ,index) in 5"
                  :src="goodsScore2 > index ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                  :key="index"
                />
              </div>
            </div>
            <div class="exchange-bottom-list flex-start-center">
              <span class="exchange-bottom-list-left exchange-bottom-list-left-center">店铺评分:</span>
              <div class="exchange-bottom-list-right flex-start-center">
                <img
                  @click="goodsScore3 = index+1"
                  v-for="(item ,index) in 5"
                  :src="goodsScore3 > index ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                  :key="index"
                />
              </div>
            </div>
          </template>
          <!-- <template>
            <div class="exchange-bottom-list flex-start-center">
              <span class="exchange-bottom-list-left exchange-bottom-list-left-center">问题描述:</span>
              <div class="exchange-bottom-list-right flex-start-center">
                <img
                  @click="goodsScore = index+1"
                  v-for="(item ,index) in 5"
                  :src="goodsScore > index ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                  :key="index"
                />
              </div>
            </div>
          </template>-->
        </div>
        <div class="exchange-bottom-list flex-start-start">
          <span class="exchange-bottom-list-left exchange-bottom-list-left-center">问题描述:</span>
          <div class="exchange-bottom-list-right">
            <textarea placeholder="请简单描述你的问题" v-model="questionDetail"></textarea>
          </div>
        </div>
        <div class="exchange-bottom-list flex-start-start">
          <span class="exchange-bottom-list-left exchange-bottom-list-left-center">上传图片:</span>
          <div class="exchange-bottom-list-right">
            <div class="flex-start-start flex-wrap">
              <template v-if="imageList.length">
                <div class="weui-uploader__file" v-for="(image , index) in imageList" :key="index">
                  <img
                    class="weui-uploader__img"
                    :src="'http://oss.jiuzhenjk.com/'+image.response.key"
                  />
                  <img
                    class="img-delete"
                    src="../../../static/img/img-delete.png"
                    @click="previewImageDelete(index)"
                  />
                </div>
              </template>
              <el-upload
                class="avatar-uploader"
                action="https://up-z0.qiniup.com"
                list-type="picture-card"
                :show-file-list="false"
                :data="postData"
                ref="upload"
                :file-list="imageList"
                :limit="maxImageLength"
                :on-success="previewImage"
                :on-exceed="overImage"
              >
                <div class="weui-uploader__input-box">
                  <div class="weui-uploader__input">{{imageList.length}}/3</div>
                </div>
              </el-upload>
            </div>
          </div>
        </div>
        <div class="exchange-bottom-list flex-start-start">
          <span class="exchange-bottom-list-left exchange-bottom-list-left-center"></span>
          <div class="exchange-bottom-list-right">
            <div class="exchange-submit">
              <span @click="submit">提交评价</span>
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
import Foot from "../public/allFoot.vue";
import { mapGetters } from "vuex";
export default {
  name: "exchange",
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
      questionDetail: "",
      imageList: [],
      maxImageLength: 3,
      goodsScore: 0,
      goodsScore2: 0,
      goodsScore3: 0,
      type: "",
      postData: {
        token: ""
      }
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
  mounted() {
    this.type = this.$route.query.type;
    this.post("/yiqi-api/api/perother/qiniutoken")
      .then(res => {
        this.postData.token = res.data;
      })
      .catch(err => {});
  },
  methods: {
    previewImage: function(res, file, fileList) {
      var that = this;
      this.imageList = fileList;
      // for (var i in fileList) {
      //   that.imageList = fileList;
      // }
    },
    previewImageDelete: function(index) {
      this.imageList.splice(index, 1);
      this.$refs.upload.uploadFiles = this.imageList;
    },
    overImage: function() {
      this.$message.error("上传图片不能超过3张");
    },
    submit() {
      var that = this;
      if (that.type < 3) {
        if (!that.goodsScore) {
          this.$message.error("请给服务态度评分");
          return;
        }
        if (!that.goodsScore2) {
          this.$message.error("请给专业评分");
          return;
        }
        if (!that.goodsScore3) {
          this.$message.error("请给店铺评分分");
          return;
        }
      }

      if (!that.questionDetail) {
        this.$message.error("请填写问题描述");
        return;
      }

      var imagefile= "",
          imagefile1= "",
          imagefile2= "";
      if(this.imageList.length >= 3){
        imagefile2 = this.imageList[2].response.key
      }

      if(this.imageList.length >= 2){
        imagefile = this.imageList[1].response.key
      }
      if(this.imageList.length >= 1){
        imagefile = this.imageList[0].response.key
      }

      this.post("/yiqi-api/api/perother/evaluate", {
        token: this.userInfo.token,
        servertype: 3,
        servertypename: '投诉',
        message: this.questionDetail,
        imagefile: imagefile,
        imagefile1: imagefile1,
        imagefile2: imagefile2,
        oid: this.$route.query.id,
        storeid: this.$route.query.storeid,
        pid: this.$route.query.pid,
        star: that.goodsScore,
        star1: that.dgoodsScore2,
        star2: that.goodsScore3
      })
        .then(res => {
          this.$message.success("提交成功");
          this.$router.push({path: "/order"});
          // this.orderList
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
#exchange {
  background-color: #fff;
}

section {
  width: 1200px;
  margin: 30px auto 60px;
}

.exchange-top img {
  width: 160px;
  height: 160px;
  margin-right: 30px;
  border-radius: 5px;
}

.exchange-top-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.exchange-top-right h3 {
  line-height: 1.6;
  font-size: 18px;
  color: #333;
}

.exchange-top-right p {
  margin-top: 15px;
  font-size: 16px;
  color: #999;
}

.exchange-top-right p span {
  margin-right: 50px;
  color: #333;
}

.exchange-top-right p.price {
  color: #ff4a60;
}

.exchange-bottom-list {
  margin-top: 20px;
}

.exchange-bottom-list-1 {
  padding: 20px 0;
}

.exchange-bottom-list-left {
  width: 100px;
  text-align: right;
  margin-right: 10px;
  font-size: 16px;
  color: #333;
}

.exchange-bottom-list-left-center {
  line-height: 40px;
}

.exchange-bottom-list-left i {
  font-style: normal;
  font-size: 14px;
  color: #ff4a60;
}

.exchange-bottom-list-right {
  width: 600px;
}

.exchange-bottom-list-radio {
  position: relative;
  padding-left: 20px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
}

.exchange-bottom-list-radio + .exchange-bottom-list-radio {
  margin-left: 60px;
}

.exchange-bottom-list-radio::before {
  position: absolute;
  left: 0;
  top: 50%;
  content: "";
  width: 12px;
  height: 12px;
  margin-top: -6px;
  border-radius: 12px;
  border: solid 1px #ccc;
  box-sizing: border-box;
}

.exchange-bottom-list-radio.on {
  color: #ff6736;
}

.exchange-bottom-list-radio.on::before {
  border-color: #ff6736;
}

.exchange-bottom-list-radio.on::after {
  position: absolute;
  left: 3px;
  top: 50%;
  content: "";
  margin-top: -3px;
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background-color: #ff6736;
}

.exchange-bottom-list-right textarea {
  width: 100%;
  height: 120px;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: solid 1px #ccc;
  resize: none;
}

.weui-uploader__file {
  position: relative;
  margin-right: 9px;
  margin-bottom: 9px;
}

.weui-uploader__img {
  display: block;
  width: 120px;
  height: 120px;
}

.img-delete {
  position: absolute;
  right: -7px;
  top: -7px;
  width: 21px;
  height: 21px;
  cursor: pointer;
}

.weui-uploader__input-box {
  float: left;
  position: relative;
  margin-right: 9px;
  margin-bottom: 9px;
  width: 120px;
  height: 120px;
  border: 1px solid #d9d9d9;
}

.weui-uploader__input-box:before,
.weui-uploader__input-box:after {
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #d9d9d9;
}

.weui-uploader__input-box:before {
  width: 2px;
  height: 39.5px;
}

.weui-uploader__input-box:after {
  width: 39.5px;
  height: 2px;
}

.weui-uploader__input-box:active {
  border-color: #999;
}

.weui-uploader__input-box:active:before,
.weui-uploader__input-box:active:after {
  background-color: #999;
}

.weui-uploader__input {
  position: absolute;
  left: 0;
  bottom: 8px;
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.exchange-submit span {
  display: inline-block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  background-color: #ff6736;
  cursor: pointer;
}

.evaluate-title {
  position: relative;
  width: 100%;
  height: 1px;
  margin: 50px 0 30px;
  background-color: #f1f1f1;
}

.evaluate-title h3 {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 0 50px;
  font-size: 20px;
  font-weight: normal;
  color: #333;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

.evaluate-title h3:before {
  position: absolute;
  left: 0;
  top: 50%;
  content: "";
  width: 40px;
  height: 2px;
  margin-top: -1px;
  background-color: #ff6736;
}

.evaluate-title h3:after {
  position: absolute;
  right: 0;
  top: 50%;
  content: "";
  width: 40px;
  height: 2px;
  margin-top: -1px;
  background-color: #ff6736;
}

.evaluate-score {
  font-size: 16px;
  color: #333;
}

.evaluate-score img {
  margin-right: 5px;
  cursor: pointer;
}
</style>
<style>
.exchange-bottom-list-right .el-select {
  width: 100%;
}

.el-upload--picture-card {
  width: 120px;
  height: 120px;
}

.el-upload--picture-card {
  border: none;
}

.el-upload--picture-card:hover,
.el-upload:focus {
  color: #999;
}
</style>