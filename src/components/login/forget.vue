<template>
  <div id="forget">
    <login-head />
    <section class="flex-start-start">
      <div class="login-left">
        <div class="login-left-title flex-between-center">
          <h3>找回密码</h3>
          <div>
            <p>返回
              <router-link to="/login">登录>></router-link>
            </p>
          </div>
        </div>
        <div class="login-left-main flex-start-center flex-column">
          <div class="login-left-step flex-start-start">
            <p class="flex-start-center flex-column" :class="{on : stepType == index}" v-for="(item , index) in step" :key="index">
              <span>{{index+1}}</span>
              <span>{{item}}</span>
            </p>
          </div>

          <div class="login-left-step-1" v-if="stepType == 0">
            <el-form ref="form" :model="form" label-width="90px">
              <el-form-item class="login-left-input" label="手机号码：">
                <el-input v-model="form.tel" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <div class="flex-start-start login-left-yz">
                <el-form-item class="login-left-input" label="">
                  <el-input v-model="form.yzCode" placeholder="输入效验码" :suffix-icon='form.yzCode == identifyCode ? "el-icon-success" : ""'></el-input>
                </el-form-item>
                <div class="verify-box" @click="refreshCode">
                  <Sidentify :identifyCode="identifyCode" :contentWidth="110" :contentHeight="40" />
                </div>
              </div>
              <div class="login-left-checked flex-start-start">
                <div class="login-left-empty"></div>
                <div class="login-left-submit" @click="submit1">
                  <span>下一步</span>
                </div>
              </div>
            </el-form>
          </div>

          <div class="login-left-step-2 flex-start-center flex-column" v-else-if="stepType == 1">
            <div class="login-left-step-2-tis">
              <p>共医保已向您的手机<span>{{myTel}}</span> 发送了短信验证码，请及时查收！</p>
            </div>
            <el-form ref="form" :model="form2" label-width="90px">
              <div class="flex-start-start login-left-code">
                <el-form-item class="login-left-input" label="验证码：">
                  <el-input v-model="form2.code" placeholder="输入验证码"></el-input>
                </el-form-item>
                <span v-if="!timeStart" class="get-code" @click="getCode">获取验证码</span>
                <span v-else class="get-code">{{time}}</span>
              </div>
              <div class="login-left-checked flex-start-start">
                <div class="login-left-empty"></div>
                <div class="login-left-submit" @click="submit2">
                  <span>下一步</span>
                </div>
              </div>
            </el-form>
          </div>

          <div class="login-left-step-3" v-else-if="stepType == 2">
            <el-form ref="form" :model="form3" label-width="90px">
              <el-form-item class="login-left-input" label="新密码：">
                <el-input v-model="form3.newPsd" placeholder="请新输入密码" show-password></el-input>
              </el-form-item>
              <el-form-item class="login-left-input" label="确认密码：">
                <el-input v-model="form3.psdSure" placeholder="再次确定新密码" show-password></el-input>
              </el-form-item>
              <div class="login-left-checked flex-start-start">
                <div class="login-left-empty"></div>
                <div class="login-left-submit" @click="submit3">
                  <span>下一步</span>
                </div>
              </div>
            </el-form>
          </div>

          <div class="login-left-step-4" v-else-if="stepType == 3">
          	<img src="../../../static/img/forget-success.png"/>
          	<div class="login-left-step-4-success">
            		<p>恭喜您，修改共医保密码成功!</p>
            		<p>请妥善保管好您的密码！</p>
            	</div>
            <div class="login-left-go">
            	<router-link to="/login">去登录</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <my-foot />
  </div>
</template>

<script>
  import Head from '../public/loginHead.vue';
  import Foot from '../public/allFoot.vue';
  import Sidentify from '../public/identify';
  export default {
    name: 'forget',
    data() {
      return {
        form: {
          tel: '',
          yzCode: ''
        },
        form2: {
          code: ''
        },
        form3: {
          newPsd: '',
          psdSure: ''
        },
        time: 0,
        timeStart: false,
        stepType: 0,
        step: [
          '填写手机号码',
          '身份验证',
          '重置密码',
          '完成'
        ],
        yz: false,
        identifyCode: '',
        myTel: ''
      }
    },
    components: {
      'login-head': Head,
      'my-foot': Foot,
      'Sidentify': Sidentify
    },
    mounted() {
      this.refreshCode()
    },
    methods: {
      submit1: function() {
        var that = this
        that.stepType = 1
      },
      submit2: function() {
        var that = this
        that.stepType = 2
      },
      submit3: function() {
        var that = this
        that.stepType = 3
      },
      getCode: function() {
        var that = this
        console.log(that.yz)
        if(!that.yz) {
          that.$message.error("请先输入效验码")
          return
        }
        that.timeStart = true
        that.time = 60
        that.countdown()
      },
      countdown() {
        var that = this
        var timeStart = setInterval(function() {
          if(that.time <= 0) {
            that.timeStart = false
            clearInterval(timeStart)
          } else {
            that.time--
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
        for(let i = 0; i < l; i++) {
          this.identifyCode += this.randomNum(0, 9)
        }
      }
    }
  }
</script>

<style scoped>
  #forget {
    background-color: #fff;
  }
  
  section {
    width: 1200px;
    margin: 80px auto 138px;
    border-top: solid 2px #ff6736;
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, .14);
  }
  
  .login-left {
    width: 100%;
    height: 580px;
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
  
  .login-left-step {
    margin-top: 80px;
  }
  
  .login-left-step p {
    position: relative;
    height: 65px;
  }
  
  .login-left-step p+p {
    margin-left: 200px;
  }
  
  .login-left-step p+p:after {
    position: absolute;
    left: -200px;
    top: 19px;
    content: "";
    width: 200px;
    height: 2px;
    background-color: #eee;
  }
  
  .login-left-step p span:first-of-type {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #ddd;
    border-radius: 40px;
  }
  
  .login-left-step p.on span:first-of-type {
    background-color: #ff6736;
  }
  
  .login-left-step p span+span {
    position: absolute;
    left: 50%;
    top: 50px;
    width: 120px;
    margin-left: -60px;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  
  .login-left-step p.on span+span {
    color: #ff6736;
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
  
  .login-left-step-1,
  .login-left-step-3 {
    width: 410px;
    margin-top: 60px;
  }
  
  .login-left-step-2 {
    margin-top: 80px;
  }
  
  .login-left-step-2-tis {
    font-size: 16px;
    color: #333;
  }
  
  .login-left-step-2-tis span {
    color: #ff6736;
  }
  
  .login-left-step-4{
  	margin-top: 60px;
  	text-align: center;
  }
  
  .login-left-step-4 img{
  	width: 100px;
  }
  
  .login-left-step-4-success{
  	margin-top: 20px;
  	text-align: center;
  	font-size: 18px;
  	color: #ff6736;
  }
  
  .login-left-step-4-success p+p{
  	margin-top: 24px;
  	font-size: 14px;
  	color: #666;
  }
  
  .login-left-go a {
    display: inline-block;
    width: 320px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    margin-top: 40px;
    font-size: 16px;
    color: #fff;
    background-color: #ff6736;
  }
</style>