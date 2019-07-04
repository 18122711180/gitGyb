<template>
  <div id="consult">
    <my-head :login='login' />
    <section>
    <div class="hospital-sort">
    	<span :class="{ on : sortType == 1}" @click="sortType =1">综合排序</span>
    	<span :class="{ on : sortType == 2 , up : sortLevel}" @click="sortType =2 , sortLevel = !sortLevel">医院等级</span>
    </div>
      <div class="hospital-list">
        <div class="hospital-list-main" v-for="(item, index) in hospitalList" :key="index">
          <router-link to="/hospitalDetail" class="flex-start-start">
            <img :src="item.img" />
            <div class="hospital-list-main-right">
              <h3>{{item.name}}</h3>
              <p>{{item.name}}</p>
              <p>电话:{{item.tel}}</p>
              <p class="flex-start-center"><span>{{item.type}}</span>{{item.introduce}}</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="search-page flex-center-start" v-if="pageTotal>10">
        <el-pagination background @current-change="pageChange" layout="prev, pager, next" :total="pageTotal">
        </el-pagination>
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
    name: 'consult',
    props: {
      url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 1,
          searchShow: false,
          url: this.url
        },
        pageTotal: 60,
        sortType: 1,
        sortLevel: false,
        hospitalList: [{
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '赣州市人民医院 北院（老院）',
            address: '章贡区红旗大道17号',
            tel: '0755-5889088',
            type: '特色',
            introduce: '中医儿科、神经内科、脊椎外科中医儿科、神经内科、脊椎外科'
          },
          {
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '赣州市人民医院 北院（老院）',
            address: '章贡区红旗大道17号',
            tel: '0755-5889088',
            type: '特色',
            introduce: '中医儿科、神经内科、脊椎外科中医儿科、神经内科、脊椎外科'
          },
          {
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '赣州市人民医院 北院（老院）',
            address: '章贡区红旗大道17号',
            tel: '0755-5889088',
            type: '特色',
            introduce: '中医儿科、神经内科、脊椎外科中医儿科、神经内科、脊椎外科'
          },
          {
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '赣州市人民医院 北院（老院）',
            address: '章贡区红旗大道17号',
            tel: '0755-5889088',
            type: '特色',
            introduce: '中医儿科、神经内科、脊椎外科中医儿科、神经内科、脊椎外科'
          }
        ]
      }
    },
    components: {
      props: ['login'],
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
  #consult{
    background-color: #fff;
  }
  
  section {
  	position: relative;
    width: 1200px;
    margin: 30px auto 60px;
  }
  
  .hospital-sort{
  	position: absolute;
  	right: 20px;
  	top: 27px;
  	font-size: 16px;
  	color: #999;
  }
  
  .hospital-sort span{
  	cursor: pointer;
  }
  
  .hospital-sort span+span{
  	position: relative;
  	padding-right: 22px;
  	margin-left: 10px;
  }
  
  .hospital-sort span.on{
  	color: #ff6736;
  }
  
  .hospital-sort span.on:after{
  	border-top-color: #ff6736;
  }
  
  .hospital-sort span.on.up:after{
  	border-top-color: transparent;
  	border-bottom-color: #ff6736;
  }
  
  .hospital-sort span+span:after{
  	position: absolute;
  	right: 0;
  	top: 3px;
  	content: "";
  	width: 1px;
  	height: 1px;
  	border-top: solid 12px #ccc;
  	border-right: solid 6px transparent;
  	border-left: solid 6px transparent;
  	border-bottom: solid 12px transparent;
  }
  
  .hospital-sort span+span.up:after{
  	top: -9px;
  	border-bottom: solid 12px #ccc;
  	border-top: solid 12px transparent;
  }
  
  .hospital-list {
    border: solid 1px #f5f7fa;
  }
  
  .hospital-list-main a {
    padding: 38px 20px 40px;
  }
  
  .hospital-list .hospital-list-main+.hospital-list-main {
    border-top: solid 1px #f5f7fa;
  }
  
  .hospital-list-main img {
    width: 334px;
    height: 200px;
    margin-right: 20px;
  }
  
  .hospital-list-main-right {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    line-height: 1;
  }
  
  .hospital-list-main-right h3 {
    width: 100%;
    font-size: 20px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .hospital-list-main-right p {
    width: 100%;
    margin-top: 15px;
    font-size: 16px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .hospital-list-main-right p span {
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-right: 10px;
    font-size: 16px;
    color: #fff;
    background-color: #ff6736;
    border-radius: 5px;
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