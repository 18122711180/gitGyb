<template>
  <div id="allHead">
    <div class="header">
      <div class="state">
        <div class="state-main flex-between-center">
          <div class="state-main-left flex-start-center">
            <router-link class="state-main-home" to="/home">共医宝首页</router-link>
          </div>
          <div class="state-main-right flex-start-center">
            <template v-if="!login.state">
              <p>请
                <router-link to="/home">登录</router-link>
              </p>
              <router-link to="/register">免费注册</router-link>
            </template>
            <template v-else>
              <router-link to="/register">{{login.name}}</router-link>
            </template>
            <span>|</span>
            <router-link to="/foo">我的订单</router-link>
            <router-link to="/foo">商家入驻</router-link>
            <router-link to="/foo">客户服务</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="head-second-bg">
      <div class="flex-between-center head-second">
        <img class="head-logo" src="../../../static/img/logo.png" />
        <div class="head-search flex-start-center">
          <img src="../../../static/img/icon-search.png" />
          <input type="" placeholder="请输入医院、名师、专业陪诊、医生、护工、保健食品、药品"/>
          <span>搜索</span>
        </div>
        <img class="head-ad" src="../../../static/img/jz.png" />
      </div>
    </div>
    <div class="head-menu">
    	<div class="head-menu-mean flex-start-start">
    		<router-link :class="{on : login.menu == index}" v-for="(item , index) in menu" :to="item.url" :key="index">{{item.name}}</router-link>
    	</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'allHead',
    props: {
      login: ''
    },
    data() {
      return {
      	menu: [
      		{
      			name: '首页',
      			url: '/home'
      		},
      		{
      			name: '健康咨询',
      			url: '/home'
      		},
      		{
      			name: '护工陪护',
      			url: '/home'
      		},
      		{
      			name: '特诊社区',
      			url: '/home'
      		},
      		{
      			name: '月子会所',
      			url: '/home'
      		},
      		{
      			name: '健康商城',
      			url: '/home'
      		},
      		{
      			name: '购药信息',
      			url: '/home'
      		},
      		{
      			name: '医疗器械',
      			url: '/home'
      		},
      		{
      			name: '保健食品',
      			url: '/home'
      		}
      	]
      }
    },
  }
</script>

<style>
  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 300;
  }
  
  .state {
    width: 100%;
    height: 40px;
    background-color: #ededed;
  }
  
  .state-main {
    width: 1200px;
    margin: 0 auto;
  }
  
  .state-main-left,
  .state-main-right {
    height: 40px;
    font-size: 16px;
    color: #999;
  }
  
  .state-main-home {
    position: relative;
    padding-left: 27px;
    color: #999;
  }
  
  .state-main-home:after {
    position: absolute;
    left: 0;
    top: 50%;
    content: "";
    width: 20px;
    height: 18px;
    margin-top: -9px;
    background: url(../../../static/img/icon-home.png);
    background-size: 100% 100%;
  }
  
  .state-main-right span {
    margin-left: 26px;
  }
  
  .state-main-right p a {
    margin-left: 0;
    color: #ff6736;
  }
  
  .state-main-right a {
    margin-left: 26px;
    color: #999;
  }
  
  .head-second-bg{
  	margin-top: 40px;
  	background-color: #fff;;
  }
  
  .head-second {
    width: 1200px;
    height: 122px;
    margin: 0 auto;
  }
  
  .head-logo {
    width: 108px;
  }
  
  .head-search {
    width: 746px;
    height: 40px;
    border: solid 1px #ff6736;
    border-radius: 40px;
  }
  
  .head-search img {
    width: 20px;
    margin: 0 20px;
  }
  
  .head-second input {
    -webkit-flex: 1;
    flex: 1;
    height: 38px;
    font-size: 14px;
    color: #999;
    border: none;
    outline: none;
  }
  
  .head-ad {
    width: 182px;
  }
  
  .head-search span{
  	width: 85px;
  	height: 40px;
  	line-height: 40px;
  	text-align: center;
  	font-size: 14px;
  	color: #fff;
  	background-color: #ff6736;
  	border-radius: 0 40px 40px 0;
  	cursor: pointer;
  }
  
  .head-menu{
  	width: 100%;
  	background-color: #ff916e;
  }
  
  .head-menu-mean{
  	width: 1200px;
  	margin: 0 auto;
  }
  
  .head-menu-mean a{
  	height: 50px;
  	line-height: 50px;
  	padding: 0 33px;
  	font-size: 16px;
  	color: #fff;
  }
  
  .head-menu-mean a.on{
  	background-color: #ff6736;
  }
  
  .head-menu-mean a:hover{
  	background-color: #ff6736;
  }
</style>