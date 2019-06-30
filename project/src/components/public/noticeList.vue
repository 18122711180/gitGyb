<template>
  <div id="noticeList">
    <div class="notice-list" v-for="(item , index) in list" :key="index">
      <router-link class="flex-start-start" to="/">
        <img class="notice-list-left" :src="item.img" />
        <div class="notice-list-right flex-between-start flex-column">
          <div class="notice-list-right-main">
            <h3>{{item.title}}</h3>
            <p>{{item.introduce}}</p>
          </div>
          <div class="notice-list-right-message flex-between-center">
            <div class="notice-list-consult flex-start-center">
              <span>{{item.type}}</span>
              <span>{{item.consult}}</span>
            </div>
            <div class="notice-list-time flex-start-center">
              <span>{{item.date}}</span>
              <span>{{item.time}}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'notice',
    props: {
      list: ''
    },
  }
</script>

<style>
  .notice-list {
    width: 100%;
  }
  
  .notice-list a {
    padding-bottom: 40px;
    border-bottom: solid 1px #f5f7fa;
  }
  
  .notice-list div+div a {
    padding-top: 40px;
  }
  
  .notice-list-left {
    width: 150px;
    height: 150px;
    margin-right: 40px;
  }
  
  .notice-list-right {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    height: 150px;
  }
  
  .notice-list-right-main {
    width: 100%;
    line-height: 1;
  }
  
  .notice-list-right-main h3 {
    width: 100%;
    font-size: 20px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .notice-list-right-main p {
    width: 100%;
    line-height: 1.6;
    margin-top: 16px;
    font-size: 18px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  
  .notice-list-right-message {
    font-size: 14px;
    color: #999;
  }
  
  .notice-list-consult span {
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    border: solid 1px #f1f1f1;
  }
  
  .notice-list-consult span+span {
    margin-left: 20px;
    border: none;
  }
  
  .notice-list-time span+span {
    margin-left: 20px;
  }
</style>