<template>
  <div id="food">
    <my-head :login='login' />
    <section class="flex-between-start">
      <div class="notice-menu flex-start-start flex-column">
        <span v-for="(item, index) in noticeMenu" :class="{on : noticeMenuType == index}" @click="noticeMenuType = index" :key="index">{{item}}</span>
      </div>
      <div class="notice-list">
        <router-link v-for="(item, index) in communityList" :key="index" :to="{ path: '/community/detail', query: { id: item.id }}">
          <div class="community-list flex-start-start">
            <img :src="item.img" />
            <div class="community-list-right">
              <h4>{{item.name}}</h4>
              <p class="price">￥{{item.price}}</p>
              <p>已售：{{item.amount}}件</p>
            </div>
          </div>
        </router-link>
        <div class="search-page flex-center-start" v-if="pageTotal>10">
          <el-pagination background @current-change="pageChange" layout="prev, pager, next" :total="pageTotal">
          </el-pagination>
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
  import Foot from '../public/allFoot.vue';
  export default {
    name: 'food',
    props: {
      url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 8,
          searchShow: false,
          url: this.url
        },
        noticeMenu: [
          "中医馆",
          "牙科诊所",
          "儿科诊所",
          "眼科",
          "社区服务站",
          "特色诊所"
        ],
        noticeMenuType: 0,
        pageTotal: 60,
        communityList: [{
            id: 2,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: 'ICEPACK大小颗粒',
            price: '69.00',
            amount: '1108'
         },
         {
            id: 2,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: 'ICEPACK大小颗粒',
            price: '69.00',
            amount: '1108'
          },
          {
            id: 2,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: 'ICEPACK大小颗粒',
            price: '69.00',
            amount: '1108'
          }
        ]
      }
    },
    components: {
      'my-head': Head,
      'right-float': Float,
      'my-foot': Foot
    },
    methods: {
      pageChange: function(val) {
        console.log(val)
      }
    }
  }
</script>

<style scoped>
  #food {
    background-color: #fff;
  }
  
  section {
    position: relative;
    width: 1200px;
    margin: 30px auto 60px;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
  
  section {
    width: 1200px;
    margin: 40px auto 100px;
  }
  
  .notice-menu {
    width: 90px;
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
    width: 1052px;
    border: solid 1px #f1f1f1;
  }
  
  .community-list {
    padding: 20px;
  }
  
  .notice-list a+a .community-list {
    border-top: solid 1px #f1f1f1;
  }
  
  .community-list img {
    width: 334px;
    height: 200px;
    margin-right: 20px;
  }
  
  .community-list-right {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
  }
  
  .community-list-right h4 {
    font-size: 20px;
    color: #333;
  }
  
  .community-list-right p {
    margin-top: 15px;
    font-size: 16px;
    color: #666;
  }
  
  .community-list-right p.price {
    color: #ff4a60;
  }
  
  .search-page {
    margin: 30px 0;
  }
</style>

<style>
  .search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6736;
  }
  
  .search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #ff6736;
  }
</style>