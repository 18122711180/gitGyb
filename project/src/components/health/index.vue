<template>
  <div id="health">
    <my-head :login='login' />
    <section>
      <div class="banner">
        <img :src="health.banner" />
      </div>
      <div class="section-center">
        <div class="health-shop">
          <div class="doctor-bottom-title flex-start-start">
            <span :class="{on : doctorDetailType == 1}" @click="doctorDetailType = 1">老年专区</span>
            <span :class="{on : doctorDetailType == 2}" @click="doctorDetailType = 2">日常用品</span>
            <span :class="{on : doctorDetailType == 3}" @click="doctorDetailType = 3">母婴用品</span>
            <span :class="{on : doctorDetailType == 4}" @click="doctorDetailType = 4">营养滋补</span>
            <span :class="{on : doctorDetailType == 5}" @click="doctorDetailType = 5">鲜花水果</span>
            <span :class="{on : doctorDetailType == 6}" @click="doctorDetailType = 6">临终关怀</span>
          </div>
          <div class="health-shop-main">
            <div class="health-shop-list" v-for="(item, index) in health.shop" :key="index">
              <div class="health-shop-list-top flex-start-start">
                <img :src="item.img" />
                <div class="health-shop-list-name">
                  <div>{{item.name}}</div>
                  <router-link to="/">进入店铺</router-link>
                </div>
              </div>
              <goods-list :list="health.goodsList"></goods-list>
            </div>
          </div>
        </div>

        <div class="drug-kind">
          <div class="drug-title">
            <img src="../../../static/img/health-title-1.png" />
          </div>
          <goods-list :list="health.goodsList"></goods-list>
        </div>
        <div class="drug-kind">
          <div class="drug-title">
            <img src="../../../static/img/health-title-2.png" />
          </div>
          <goods-list :list="health.goodsList"></goods-list>
        </div>
      </div>
    </section>
    <right-float />
    <my-foot />
  </div>
</template>

<script>
  import Head from '../public/allHead.vue';
  import Float from '../public/rightFloat.vue';
  import Goods from '../public/goodsList.vue';
  import Foot from '../public/allFoot.vue';
  export default {
    name: 'health',
    props: {
      url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 5,
          searchShow: false,
          url: this.url
        },
        doctorDetailType: 1,
        health: {
          banner: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          shop: [{
              id: 11,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '店铺名称店铺名称'
            },
            {
              id: 11,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '店铺名称店铺名称'
            }
          ],
          goodsList: [{
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              amount: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              amount: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              amount: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              amount: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              amount: '1108'
            }
          ],

        },
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'goods-list': Goods,
      'my-foot': Foot
    }
  }
</script>

<style scoped>
  #health {
    background-color: #fff;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
  
  .banner {
    width: 100%;
    height: 510px;
  }
  
  .section-center {
    width: 1200px;
    margin: 30px auto 60px;
  }
  
  .drug-title {
    margin: 40px 0 35px;
    text-align: center;
  }
  
  .drug-title img {
    width: 175px;
    height: 63px;
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
  
  .doctor-bottom-title span.on:after {
    position: absolute;
    top: -2px;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #ff6736;
  }
  
  .doctor-bottom-title span+span {
    border-right: solid 1px #f1f1f1;
  }
  
  .health-shop-main{
  	padding-top: 20px;
  }
  
  .health-shop-list{
  	margin-bottom: 40px;
  }
  
  .health-shop-list+.health-shop-list{
  	border-top: solid 1px #f1f1f1;
  }
  
  .health-shop-list-top{
  	margin-top: 40px;
  }
  
  .health-shop-list-top img{
  	width: 100px;
  	height: 100px;
  	margin-right: 30px;
  	border-radius: 5px;
  }
  
  .health-shop-list-name{
  	font-size: 18px;
  	color: #16px;
  }
  
  .health-shop-list-name a{
  	display: inline-block;
  	width: 90px;
  	height: 30px;
  	line-height: 30px;
  	text-align: center;
  	margin-top: 15px;
  	font-size: 14px;
  	color: #fff;
  	border-radius: 30px;
  	background-color: #ff6736;
  }
</style>