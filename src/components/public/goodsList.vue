<template>
  <div id="goodsList">
    <div class="shop-goods-list flex-start-start flex-wrap">
      <router-link :to="({path:'/goods/detail',query:{id:item.pid,menu:5}})" v-for="(item,index) in list" :key="index">
        <div class="shop-goods-list-img flex-center-center">
          <img :src="item.showimg" />
        </div>
        <div class="shop-goods-list-message">
          <p class="omit">{{item.shopname}}</p>
          <div class="flex-between-center">
            <span >￥{{item.shopprice}}</span>
            <!-- <span v-if="item.costprice" class="original-price">￥{{item.costprice}}</span> -->
            <!-- <span>已售：{{item.amount}}件</span> -->
          </div>
        </div>
      </router-link>
      <!-- <router-link :to="({path:'/goods/detail',query:{id:item.pid,menu:5}})" v-for="(item,index) in list" :key="index">
        <div class="shop-goods-list-img flex-center-center">
          <img :src="item.showimg" />
        </div>
        <div class="shop-goods-list-message">
          <p class="omit">{{item.shopname}}</p>
          <div class="flex-between-center">
            <span >￥{{item.shopprice}}</span>
            <span v-if="item.costprice" class="original-price">￥{{item.costprice}}</span>
            <span>已售：{{item.amount}}件</span>
          </div>
        </div>
      </router-link> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goodsList',
    props: {
      list: ''
    },
  }
</script>

<style scoped>
  .shop-goods-list a {
    width: 228px;
    height: 300px;
    margin: 15px 0 0 15px;
    border: solid 1px #f1f1f1;
  }
  
  .shop-goods-list a:nth-of-type(5n+1) {
    margin-left: 0;
  }
  
  .shop-goods-list a:hover {
    border-color: #ff6736;
  }
  
  .shop-goods-list-img {
    width: 100%;
    height: 225px;
  }
  
  .shop-goods-list-img img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  
  .shop-goods-list-message {
    padding: 5px 20px;
  }
  
  .shop-goods-list-message p {
    font-size: 18px;
    color: #666;
  }
  
  .shop-goods-list-message div {
    display: inline-block !important;
    margin-top: 5px;
  }
  
  .shop-goods-list-message div span {
    font-size: 16px;
    color: #ff4a60;
  }
  .shop-goods-list-message div .original-price {
    text-decoration:line-through;
  }
  
  .shop-goods-list-message div span+span {
    font-size: 12px;
    color: #666;
  }
</style>