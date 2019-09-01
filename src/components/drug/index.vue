<template>
  <div id="drug">
    <my-head :login='login' />
    <section>
      <div class="banner">
        <img :src="drug.banner" />
      </div>
      <div class="section-center">
        <div class="drug-kind">
          <div class="drug-title">
            <img src="../../../static/img/drug-title-1.png" />
          </div>
          <div class="drug-kind-list flex-start-start flex-wrap">
            <router-link :to="{ path: '/drug/common', query: { id: item.id ,menu : login.menu , dif : 1}}" v-for="(item,index) in drugClass.list" :key="index">
              <!-- <img :src="item.img" /> -->
              <p>{{item.value}}</p>
            </router-link>
          </div>
        </div>
        <div class="drug-kind">
          <div class="drug-title">
            <img src="../../../static/img/drug-title-2.png" />
          </div>
          <div class="drug-kind-list flex-start-start flex-wrap">
            <router-link :to="{ path: '/drug/detail', query: { id: item.id ,menu : login.menu , dif : 2}}" v-for="(item,index) in drugClass.list1" :key="index">
              <!-- <img :src="item.img" /> -->
              <p>{{item.value}}</p>
            </router-link>
          </div>
        </div>
        <div class="drug-consult flex-start-start">
          <div class="notice-menu flex-start-start flex-column">
            <span v-for="(item, index) in noticeMenu" :class="{on : noticeMenuType === item.lable}" :key="index" @click="noticeMenuType = item.lable">{{item.value}}</span>
          </div>
          <div class="notice-list">
            <notice-list :keynum="noticeMenuType"></notice-list>
            <!-- <notice-list :keynum="noticeList"></notice-list> -->
          </div>
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
  import Notice from '../public/noticeList.vue';
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
        },
        drugClass:[],
        drug: {
          banner: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          list: [{
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '腹痛腹泻'
            }
          ]
        },
        noticeMenu: [
          {lable:4,value:'热门推荐'},
          {lable:1,value:'生活健康'},
          {lable:2,value:'生活护理'},
          {lable:3,value:'优生优育'}
        ],
        noticeMenuType: 4
      }
    },
    created(){
      this.getDrugClass();
    },
    methods:{
      getDrugClass(){
        this.post('/yiqi-api/api/drug/druginfo').then(res=>{
          this.drugClass = res.data;
        }).catch(err=>{

        })
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'notice-list': Notice,
      'my-foot': Foot
    }
  }
</script>

<style scoped>
  #drug {
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
    margin: 0 auto 60px;
  }
  
  .drug-title {
    margin: 40px 0 35px;
    text-align: center;
  }
  
  .drug-title img {
    width: 175px;
    height: 63px;
  }
  
  .drug-kind-list a {
    position: relative;
    width: 228px;
    height: 300px;
    margin-left: 15px;
    border: solid 1px #f1f1f1;
  }
  
  .drug-kind-list a:nth-child(5n+1) {
    margin-left: 0;
  }
  
  .drug-kind-list a:nth-child(n+6) {
    margin-top: 15px;
  }
  
  .drug-kind-list a img {
    width: 100%;
    height: 225px;
  }
  
  .drug-kind-list a p {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 46px;
    line-height: 46px;
    text-align: center;
    padding: 0 5px;
    font-size: 24px;
    color: #fff;
    background-color: #ff6736;
  }
  
  .drug-consult{
  	margin-top: 50px;
  }
  
  .notice-menu {
    width: 130px;
  }
  
  .notice-menu span {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    color: #666;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .notice-menu span+span {
    margin-top: 10px;
  }
  
  .notice-menu span.on {
    color: #fff;
    background-color: #ff6736;
  }
  
  .notice-menu span:hover {
    color: #fff;
    background-color: #ff6736;
  }
  
  .notice-list {
  	-webkit-flex: 1;
  	flex: 1;
  	min-width: 0;
  	margin-left: 60px;
  }
</style>