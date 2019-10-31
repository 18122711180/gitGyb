<template>
  <div id="login">
    <login-head/>
    <section class="flex-start-start">
      <div class="login-left">
        <div class="login-left-title flex-between-center">
          <h3>
            老用户登录
            <span>/ 尊敬的共医宝用户，欢迎您回来</span>
          </h3>
          <div>
            <p>还没账号？立即
              <router-link to="/register">注册>></router-link>
            </p>
          </div>
        </div>
        <div class="login-left-main">
          <el-form ref="form" :model="form">
            <div class="login-left-input">
              <div class="flex-center-center login-left-input-img">
                <img src="../../../static/img/icon-personal.png">
              </div>
              <el-form-item class="login-left-input-main">
                <el-input v-model="form.tel" placeholder="请输入手机号"></el-input>
              </el-form-item>
            </div>
            <div class="login-left-input">
              <div class="flex-center-center login-left-input-img">
                <img src="../../../static/img/icon-password.png">
              </div>
              <el-form-item class="login-left-input-main">
                <el-input v-model="form.psd" placeholder="请输入密码" show-password></el-input>
              </el-form-item>
            </div>
            <div class="login-left-input flex-between-center">
              <!-- <div class="login-left-agreement">
                <el-checkbox v-model="form.checked">两周内免登录</el-checkbox>
              </div>-->
              <router-link to="/forget" class="login-left-forget">忘记密码>></router-link>
            </div>
            <div class="login-left-input">
              <span class="login-left-submit" @click="loginBtn">登录</span>
            </div>
            <div class="login-left-other flex-center-center" v-if="false">
              <img src="../../../static/img/login-wx.png">
              <img src="../../../static/img/login-qq.png">
            </div>
          </el-form>
        </div>
        <div class="tel-login">
          <router-link to="/telLogin">手机快捷登录>></router-link>
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
import { mapGetters } from "vuex";
import { validUsername } from "@/utils/validate";
export default {
  name: "login",
  data() {
    return {
      form: {
        tel: "",
        psd: ""
        // checked: false
      }
    };
  },
  computed: {
    ...mapGetters(["login"])
  },
  created() {
    this.form = this.login;
  },
  components: {
    "login-head": Head,
    "my-foot": Foot
  },
  methods: {
    loginBtn() {
      if (!validUsername(this.form.tel)) {
        this.$message.error("手机号码格式错误");
        return false;
      }
      if (
        this.form.psd === "" ||
        this.form.psd.length < 8 ||
        this.form.psd.length > 16
      ) {
        this.$message.error("密码长度为8到16为字符");
        return false;
      }
      this.$store
        .dispatch("user/login", this.form)
        .then(res => {
          this.$router.push({ path: "/" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
#login {
  background-color: #fff;
}

section {
  width: 1200px;
  margin: 80px auto 138px;
  border-top: solid 2px #ff6736;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.14);
}

.login-left {
  position: relative;
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

.login-left-title h3 span {
  font-weight: normal;
  font-size: 12px;
  color: #666;
}

.login-left-title p {
  font-size: 12px;
  color: #666;
}

.login-left-title p a {
  color: #ff6736;
}

.login-left-main {
  width: 320px;
  padding-top: 26px;
  margin: 0 150px 0 130px;
}

.login-left-input {
  position: relative;
  width: 100%;
  margin-top: 30px;
}

.login-left-input-img {
  position: absolute;
  left: 1px;
  top: 1px;
  width: 38px;
  height: 38px;
  background-color: #f3f3f3;
  border-radius: 4px 0 0 4px;
  z-index: 22;
}

.login-left-input-img img {
  width: 100%;
  height: 100%;
}

.login-left-forget {
  width: 100%;
  text-align: right;
  font-size: 14px;
  color: #ff6736;
}

.login-left-submit {
  display: inline-block;
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  background-color: #ff6736;
  cursor: pointer;
}

.login-left-other {
  margin-top: 60px;
}

.login-left-other img {
  width: 44px;
  height: 44px;
  margin: 0 20px;
}

.tel-login {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}

.tel-login a {
  display: inline-block;
  width: 100%;
  height: 66px;
  line-height: 66px;
  text-align: center;
  font-size: 18px;
  color: #666;
  background-color: #f3f3f3;
}
</style>
<style>
.el-form-item {
  margin: 30px 0 0;
}

.login-left-input-main .el-input input {
  padding: 0 10px 0 50px;
  border-color: #ddd;
}

.login-left-agreement .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #ff6736;
  border-color: #ff6736;
}

.login-left-agreement .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #ff6736;
}
</style>