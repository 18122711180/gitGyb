<template>
  <div id="telLogin">
    <login-head/>
    <section class="flex-start-start">
      <div class="login-left">
        <div class="login-left-title flex-between-center">
          <h3>手机快捷登录</h3>
          <div>
            <p>返回
              <router-link to="/login">登录>></router-link>
            </p>
          </div>
        </div>
        <div class="login-left-main">
          <el-form ref="form" :model="form" label-width="90px">
            <el-form-item class="login-left-input" label="手机号码：">
              <el-input v-model="form.tel" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <div class="flex-start-start login-left-yz">
              <el-form-item class="login-left-input" label="">
                <el-input
                  v-model="form.yzCode"
                  placeholder="输入效验码"
                  :suffix-icon="form.yzCode == identifyCode ? 'el-icon-success' : ''"
                ></el-input>
              </el-form-item>
              <div class="verify-box" @click="refreshCode">
                <Sidentify :identifyCode="identifyCode" :contentWidth="110" :contentHeight="40"/>
              </div>
            </div>
            <div class="flex-start-start login-left-code">
              <el-form-item class="login-left-input" label="验证码：">
                <el-input v-model="form.code" placeholder="输入验证码"></el-input>
              </el-form-item>
              <span v-if="!timeStart" style="cursor: pointer;" class="get-code" @click="getCode">获取验证码</span>
              <span v-else class="get-code">{{time}}</span>
            </div>
            <div class="login-left-checked flex-start-start">
              <div class="login-left-empty"></div>
              <div class="login-left-submit">
                <span style="cursor: pointer;" @click="telLoginBtn">立即登录</span>
              </div>
            </div>
          </el-form>
        </div>
      </div>
      <div class="login-right">
        <img src="../../../static/img/login-banner.png">
      </div>
    </section>
    <my-foot/>
  </div>
</template>

<script>
import Head from "../public/loginHead";
import Foot from "../public/allFoot";
import Sidentify from "../public/identify";
import { validUsername } from "@/utils/validate";
export default {
  name: "telLogin",
  data() {
    return {
      form: {
        tel: "",
        yzCode: "",
        code: ""
      },
      code: '',
      time: 0,
      timeStart: false,
      yz: false,
      identifyCode: ""
    };
  },
  components: {
    "login-head": Head,
    "my-foot": Foot,
    Sidentify: Sidentify
  },
  mounted() {
    this.refreshCode();
  },
  methods: {
    //立即登录
    telLoginBtn() {
      // console.log('identifyCode = ' + this.identifyCode)
      if (!validUsername(this.form.tel)) {
        this.$message.error("手机号码格式错误");
        return false;
      }
       if (this.form.yzCode === "") {
        this.$message.error("请先输入效验码");
        return;
      }else if (this.form.yzCode != this.identifyCode){
        this.$message.error("效验码错误");
        return;
      };
      // if (this.form.code != this.code) {
      //   this.$message.error("验证码错误");
      //   return false;
      // }
      this.$store.dispatch("user/telLogin", this.form).then(res=>{
        this.$router.push({ path: "/" });
      }).catch(err=>{
        console.log(err)
      })
    },
    getCode: function() {
      if (this.form.yzCode === "") {
        this.$message.error("请先输入效验码");
        return;
      }else if (this.form.yzCode != this.identifyCode){
        this.$message.error("效验码错误");
        return;
      }
      if (!validUsername(this.form.tel)) {
        this.$message.error("手机号码格式错误");
        return false;
      }
      this.time = 60;
      this.timeStart = true;
      this.countdown();
      this.post("/yiqi-api/api/User/SendCode", {
        mobile: this.form.tel,
        sendtype: 1
      })
        .then(res => {
          this.code = res.msg;
          this.$message({
            type: "success",
            message: "发送成功"
          });
          console.log('this.code = ' +this.code)
          console.log(res)
        })
        .catch(err => {});
    },
    countdown() {
      var that = this;
      var timeStart = setInterval(function() {
        if (that.time <= 0) {
          that.timeStart = false;
          clearInterval(timeStart);
        } else {
          that.time--;
        }
      }, 1000);
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(4);
    },
    makeCode(l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.randomNum(0, 9);
      }
    }
  }
};
</script>

<style scoped>
#telLogin {
  background-color: #fff;
}

section {
  width: 1200px;
  margin: 80px auto 138px;
  border-top: solid 2px #ff6736;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.14);
}

.login-left {
  width: 50%;
  height: 580px;
}

.login-right {
  width: 50%;
  height: 580px;
}

.login-right img {
  width: 100%;
  height: 100%;
}

.login-left-title {
  padding: 0 30px 0 40px;
  height: 60px;
  border-bottom: solid 1px #ddd;
}

.login-left-title h3 {
  font-size: 16px;
  color: #333;
}

.login-left-title p {
  font-size: 12px;
  color: #666;
}

.login-left-title p a {
  color: #ff6736;
}

.login-left-main {
  width: 391px;
  padding-top: 30px;
  margin: 0 109px 0 100px;
}

.el-form-item {
  margin: 30px 0 0;
}

.login-left-input input {
  border-radius: 0;
}

.get-code {
  width: 110px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 30px 0 0 10px;
  font-size: 14px;
  color: #ff6736;
  border: solid 1px #ff6736;
}

.login-left-code .el-form-item,
.login-left-yz .el-form-item {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.login-left-yz .verify-box {
  width: 110px;
  height: 40px;
  line-height: 40px;
  margin: 30px 0 0 10px;
}

.login-left-yz .el-icon-success {
  color: #10cb10;
}

.login-left-checked {
  margin-top: 30px;
}

.login-left-empty {
  width: 90px;
}

.login-left-submit {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.login-left-submit span {
  display: inline-block;
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background-color: #ff6736;
}
</style>