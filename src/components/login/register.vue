<template>
  <div id="register">
    <login-head/>
    <section class="flex-start-start">
      <div class="login-left">
        <div class="login-left-title flex-between-center">
          <h3>新用户注册</h3>
          <div>
            <p>我已经注册，现在就
              <router-link to="/login">登录>></router-link>
            </p>
          </div>
        </div>
        <div class="login-left-main">
          <el-form ref="form" :model="form" label-width="90px">
            <el-form-item class="login-left-input" label="手机号码：">
              <el-input ref="tel" v-model="form.tel" auto-complete="new-accounts" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item class="login-left-input" auto-complete="new-password" label="输入密码：">
              <el-input v-model="form.psd" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item class="login-left-input" label="确认密码：">
              <el-input v-model="form.psdSure" auto-complete="new-password" placeholder="再次输入密码" show-password></el-input>
            </el-form-item>
            <div class="flex-start-start login-left-code">
              <el-form-item class="login-left-input" label="验证码：">
                <el-input v-model="form.code" placeholder="输入验证码"></el-input>
              </el-form-item>
              <span v-if="!timeStart" class="get-code" @click="getCode">获取验证码</span>
              <span v-else class="get-code">{{time}}</span>
            </div>
            <div class="login-left-checked flex-start-start">
              <div class="login-left-empty"></div>
              <div class="login-left-agreement flex-start-center">
                <el-checkbox v-model="form.checked"></el-checkbox>
                <p class="xs" @click="read">我已阅读并接受《共医保用户协议》</p>
              </div>
            </div>
            <div class="login-left-checked flex-start-start">
              <div class="login-left-empty"></div>
              <div class="login-left-submit">
                <span @click="registerBtn">立即注册</span>
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
import Head from "../public/loginHead.vue";
import Foot from "../public/allFoot.vue";
import { validUsername } from "@/utils/validate";
import { mapGetters } from "vuex";
export default {
  name: "register",
  data() {
    return {
      form: {
        tel: "",
        psd: "",
        psdSure: "",
        code: "",
        checked: false
      },
      code: "",
      time: 0,
      timeStart: false
    };
  },
  computed: {
    ...mapGetters(["register"])
  },
  created() {
    this.form = this.register;
  },
  components: {
    "login-head": Head,
    "my-foot": Foot
  },
  methods: {
    read() {
      this.$store.dispatch("user/setRegister", this.form);
      this.$router.push({ path: "/agreement" });
    },
    registerBtn() {
      if (!validUsername(this.form.tel)) {
        this.$message.error("手机号码格式错误");
        return false;
      };
      if (
        this.form.psd === "" ||
        this.form.psd.length < 8 ||
        this.form.psd.length > 16
      ) {
        this.$message.error("密码长度为8到16为字符");
        return false;
      }
      if (this.form.psd !== this.form.psdSure) {
        this.$message.error("两次输入密码不一致");
        return false;
      }
      if (this.form.code != this.code) {
        this.$message.error("验证码错误");
        return false;
      }
      if (this.form.checked === false) {
        this.$message.error("请先阅读共医保用户协议");
        return false;
      }
      let login = {
        tel: this.form.tel,
        psd: "",
        checked: false
      };
      this.post("/yiqi-api/api/User/appregister", {
        mobile: this.form.tel,
        password: this.form.psd
      })
        .then(res => {
          console.log(res);
          this.$message.success("注册成功");
          this.$store.dispatch("user/setLogin", login);
          this.$router.push({ path: "/login" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    // this.$store.dispatch('user/login', this.loginForm).then((res) => {
    getCode() {
      // var that = this
      if (!validUsername(this.form.tel)) {
        this.$message.error("手机号码格式错误");
        return false;
      }
      this.time = 60;
      this.timeStart = true;
      this.countdown();
      this.post("/yiqi-api/api/User/SendCode", {
        mobile: this.form.tel,
        sendtype: 2
      })
        .then(res => {
          this.code = res.msg;
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
    }
  }
};
</script>

<style scoped>
#register {
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

.login-left-code .el-form-item {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
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

.login-left-checked {
  margin-top: 30px;
}

.login-left-empty {
  width: 90px;
}

.login-left-agreement p {
  font-size: 14px;
  color: #666;
}

.login-left-agreement p a {
  color: #ff6736;
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

<style>
.login-left-input input {
  border-radius: 0;
}

.login-left-agreement .el-checkbox {
  margin-right: 10px;
}

.login-left-agreement .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #ff6736;
  border-color: #ff6736;
}
</style>