<template>
  <div id="register">
    <login-head />
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
              <el-input v-model="form.tel" placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item class="login-left-input" label="输入密码：">
              <el-input v-model="form.psd" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item class="login-left-input" label="确认密码：">
              <el-input v-model="form.psdSure" placeholder="再次输入密码" show-password></el-input>
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
            		<p>我已阅读并接受《 <router-link to="/agreement">共医保用户协议</router-link>》</p>
            	</div>
            </div>
            <div class="login-left-checked flex-start-start">
            	<div class="login-left-empty"></div>
            	<div class="login-left-submit">
            		<span>立即注册</span>
            	</div>
            </div>
          </el-form>
        </div>
      </div>
      <div class="login-right">
      	<img src="../../../static/img/login-banner.png"/>
      </div>
    </section>
    <my-foot />
  </div>
</template>

<script>
  import Head from '../public/loginHead.vue';
  import Foot from '../public/allFoot.vue';
  export default {
    name: 'register',
    data() {
      return {
        form: {
          tel: '',
          psd: '',
          padSure: '',
          code: '',
          read: false,
          checked: false
        },
        time: 0,
        timeStart:false
      }
    },
    components: {
      'login-head': Head,
      'my-foot': Foot,
    },
    methods: {
    	getCode: function(){
    		var that = this
    		that.timeStart = true
    		that.time = 60
    		that.countdown()
    	},
    	countdown(){
    		var that = this
    		var timeStart = setInterval(function(){ 
    			if(that.time <= 0){
    				that.timeStart = false
    				clearInterval(timeStart)
    			}else{
    				that.time--
    			}
    		}, 1000);
    	}
    }
  }
</script>

<style scoped>
  #register {
    background-color: #fff;
  }
  
  section {
    width: 1200px;
    margin: 80px auto 138px;
    border-top: solid 2px #ff6736;
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, .14);
  }
  
  .login-left {
    width: 50%;
    height: 580px;
  }
  
  .login-right {
    width: 50%;
    height: 580px;
  }
  
  .login-right img{
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
  
  .login-left-code .el-form-item{
  	-webkit-flex: 1;
  	flex: 1;
  	min-width: 0;
  }
  
  .get-code{
  	width: 110px;
  	height: 40px;
  	line-height: 40px;
  	text-align: center;
  	margin: 30px 0 0 10px;
  	font-size: 14px;
  	color: #ff6736;
  	border: solid 1px #ff6736;
  }
  
  .login-left-checked{
  	margin-top: 30px;
  }
  
  .login-left-empty{
  	width: 90px;
  }
  
  .login-left-agreement p{
  	font-size: 14px;
  	color: #666;
  }
  
  .login-left-agreement p a{
  	color: #ff6736;
  }
  
  .login-left-submit{
  	-webkit-flex: 1;
  	flex: 1;
  	min-width: 0;
  }
  
  .login-left-submit span{
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
  
  .login-left-agreement .el-checkbox{
  	margin-right: 10px;
  }
  
  .login-left-agreement .el-checkbox__input.is-checked .el-checkbox__inner{
  	background-color: #ff6736;
  	border-color: #ff6736;
  }
</style>