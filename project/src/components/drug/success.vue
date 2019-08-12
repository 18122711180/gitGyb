<template>
  <div id="drug">
    <my-head :login='login' />
    <section>
      <img class="drug-success-img" src="../../../static/img/icon-success.png"/>
      <div class="drug-tis">
      	<p><span>温馨提示</span>您的药品查询信息已发出，请您携带好处方前往该药房购药！</p>
      	<p @click="goBack">返回药店首页</p>
      </div>
      <div class="drug-statement">
      	<h4>声明：</h4>
      	<p>1、此平台仅提供药品相关信息查询服务，不提供或撮合供任何药品网上交易服务！</p>
      	<p>2、药品监督部门提示：如果发现本网站有任何直接或撮合销售药品行为，请保留证据，拨打1231举报！</p>
      </div>
    </section>
    <right-float />
    <my-foot />
  </div>
</template>

<script>
  import Head from '../public/allHead.vue';
  import Float from '../public/rightFloat.vue';
  import Foot from '../public/allFoot.vue';
  export default {
    name: 'drug',
    props: {
      url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 6,
          searchShow: false,
          url: this.url
        }
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'my-foot': Foot
    },
    methods: {
    	goBack: function(){
    		this.$router.go(-1)
    	}
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }
  
  section{
  	width: 1200px;
  	text-align: center;
  	margin: 30px auto 60px;
  }
  
  .drug-success-img{
  	width: 281px;
  	height: 161px;
  }
  
  .drug-tis p{
  	margin-top: 80px;
  	font-size: 16px;
  	color: #333;
  }
  
  .drug-tis p span{
  	color: #ff4a60;
  }
  
  .drug-tis p+p{
  	width: 180px;
  	height: 40px;
  	line-height: 40px;
  	text-align: center;
  	font-size: 14px;
  	color: #fff;
  	margin: 80px auto 0;
  	border-radius: 40px;
  	background-color: #ff6736;
  }
  
  .drug-statement{
  	display: inline-block;
  	margin: 120px auto 0;
  	text-align: left;
  	font-size: 16px;
  	color: #ff4000;
  }
  
  .drug-statement p{
  	margin-top: 20px;
  }
</style>