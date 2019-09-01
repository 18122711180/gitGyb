<template>
  <div id="hospital">
    <my-head :login='login' @searchCentent="searchCentent"/>
    <section>
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
      <!-- <div class="search-page flex-center-start" v-if="pageTotal>10">
        <el-pagination background @current-change="pageChange" layout="prev, pager, next" :total="pageTotal">
        </el-pagination>
      </div> -->
      <search-empty v-if="!hospitalList.length"/>
    </section>
    <right-float />
    <my-foot />
  </div>
</template>

<script>
  import Head from '../public/allHead.vue';
  import Float from '../public/rightFloat.vue';
  import Foot from '../public/allFoot.vue';
  import searchEmpty from '../public/searchEmpty.vue';
  export default {
    name: 'hospital',
    props: {
      url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 0,
          searchShow: true,
          url: this.url
        },
        pageTotal: 60,
        hospitalList: []
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'search-empty': searchEmpty,
      'my-foot': Foot
    },
    methods: {
      pageChange: function(val) {
        console.log(val)
      },
      searchCentent(val){
        // this.post('')
      }
    }
  }
</script>

<style scoped>
  #hospital {
    background-color: #fff;
  }
  
  section {
    width: 1200px;
    margin: 30px auto 60px;
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