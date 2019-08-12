<template>
  <div id="order">
    <my-head :login='login' />
    <section class="flex-between-start">
      <order-left :num="menuNum" :otherLink="true" />
      <div class="order-main">
        <h3>我的收藏</h3>
        <div class="order-frame">
          <div class="order-menu flex-start-center">
            <span v-for="(item, index) in orderMenu" :class="{on : orderMenuType == index}" @click="orderMenuType = index" :key="index">{{item}}</span>
          </div>
          <div class="collect">
            <template v-if="orderMenuType == 0">
              <goods-list :list="collect.goodsList"></goods-list>
            </template>
            <template v-else-if="orderMenuType == 1">
              <div class="health-shop-main">
                <div class="health-shop-list" v-for="(item, index) in collect.shop" :key="index">
                  <div class="health-shop-list-top flex-start-start">
                    <img :src="item.img" />
                    <div class="health-shop-list-name">
                      <div>{{item.name}}</div>
                      <router-link to="/">进入店铺</router-link>
                    </div>
                  </div>
                  <goods-list :list="collect.goodsList"></goods-list>
                </div>
              </div>
            </template>
            <template v-else-if="orderMenuType == 2">
              <div class="notice-list">
                <div class="float-doctor-message flex-start-start" v-for="(item , index) in collect.doctorList" :key="index">
                  <div class="float-doctor-message-left">
                    <img :src="item.img" />
                  </div>
                  <div class="doctor-list-main">
                    <div class="doctor-list-basic flex-start-center">
                      <span>{{item.name}}</span>
                      <span>{{item.sex}}</span>
                      <span>{{item.level}}</span>
                      <span class="float-doctor-follow" :class="{on : item.state}">{{item.state ? "在线" : "离线"}}</span>
                    </div>
                    <div class="doctor-list-message">
                      <p>内科:{{item.type}}</p>
                      <p>{{item.address}}</p>
                      <p>擅长：{{item.goodAt}}</p>
                    </div>
                  </div>
                  <div class="float-doctor-message-right flex-start-start">
                    <span>从业{{item.workTime}}年</span>
                    <span>好评率{{item.evaluate}}%</span>
                  </div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="notice-list">
                <notice-list :list="collect.noticeList"></notice-list>
              </div>
            </template>
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
  import Order from '../public/orderLeft.vue';
  import Goods from '../public/goodsList.vue';
  import Notice from '../public/noticeList.vue';
  import Foot from '../public/allFoot.vue';
  export default {
    name: 'order',
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
          orderShow: true,
          url: this.url
        },
        menuNum: 5,
        orderMenuType: 0,
        orderMenu: [
          "商品（15）",
          "店铺（15）",
          "医生（15）",
          "文章（15）"
        ],
        collect: {
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
          doctorList: [{
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            sex: '女',
            level: '主治医师',
            type: '妇产科&生殖中心',
            address: '江西赣州市立医院',
            goodAt: '骨性牙列不齐，各种正畸技术',
            workTime: '12',
            evaluate: '98',
            state: false
          }, {
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            sex: '女',
            level: '主治医师',
            type: '妇产科&生殖中心',
            address: '江西赣州市立医院',
            goodAt: '骨性牙列不齐，各种正畸技术',
            workTime: '12',
            evaluate: '98',
            state: false
          }, {
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            sex: '女',
            level: '主治医师',
            type: '妇产科&生殖中心',
            address: '江西赣州市立医院',
            goodAt: '骨性牙列不齐，各种正畸技术',
            workTime: '12',
            evaluate: '98'
          }, {
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            sex: '女',
            level: '主治医师',
            type: '妇产科&生殖中心',
            address: '江西赣州市立医院',
            goodAt: '骨性牙列不齐，各种正畸技术',
            workTime: '12',
            evaluate: '98',
            state: false
          }, {
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            sex: '女',
            level: '主治医师',
            type: '妇产科&生殖中心',
            address: '江西赣州市立医院',
            goodAt: '骨性牙列不齐，各种正畸技术',
            workTime: '12',
            evaluate: '98',
            state: false
          }, {
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            sex: '女',
            level: '主治医师',
            type: '妇产科&生殖中心',
            address: '江西赣州市立医院',
            goodAt: '骨性牙列不齐，各种正畸技术',
            workTime: '12',
            evaluate: '98',
            state: false
          }, {
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            sex: '女',
            level: '主治医师',
            type: '妇产科&生殖中心',
            address: '江西赣州市立医院',
            goodAt: '骨性牙列不齐，各种正畸技术',
            workTime: '12',
            evaluate: '98',
            state: false
          }, {
            id: 1,
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            name: '韩冬梅',
            sex: '女',
            level: '主治医师',
            type: '妇产科&生殖中心',
            address: '江西赣州市立医院',
            goodAt: '骨性牙列不齐，各种正畸技术',
            workTime: '12',
            evaluate: '98',
            state: true
          }],
          noticeList: [{
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              title: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相',
              introduce: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导',
              type: '生活健康',
              consult: '咨询人发布信息',
              date: '2019-4-26',
              time: '19:01'
            },
            {
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              title: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相',
              introduce: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导',
              type: '生活健康',
              consult: '咨询人发布信息',
              date: '2019-4-26',
              time: '19:01'
            },
            {
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              title: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相',
              introduce: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导',
              type: '生活健康',
              consult: '咨询人发布信息',
              date: '2019-4-26',
              time: '19:01'
            },
            {
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              title: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相',
              introduce: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导',
              type: '生活健康',
              consult: '咨询人发布信息',
              date: '2019-4-26',
              time: '19:01'
            },
            {
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              title: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相',
              introduce: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导',
              type: '生活健康',
              consult: '咨询人发布信息',
              date: '2019-4-26',
              time: '19:01'
            }
          ]
        }
      }
    },
    components: {
      'my-head': Head,
      'right-float': Float,
      'order-left': Order,
      'goods-list': Goods,
      'notice-list': Notice,
      'my-foot': Foot
    },
    methods: {}
  }
</script>

<style scoped>
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
  
  .order-main {
    width: 1050px;
  }
  
  .order-main h3 {
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    font-weight: normal;
    font-size: 16px;
    color: #333;
    background-color: #fff;
  }
  
  .order-frame {
    width: 100%;
    padding: 0 20px 40px;
    margin-top: 10px;
    background-color: #fff;
  }
  
  .order-menu {
    height: 60px;
    font-size: 14px;
    color: #666;
  }
  
  .order-menu span {
    line-height: 18px;
    height: 18px;
    padding: 0 26px;
    cursor: pointer;
  }
  
  .order-menu span:first-child {
    padding-left: 0;
  }
  
  .order-menu span.on {
    color: #ff6736;
  }
  
  .health-shop-list {
    margin-bottom: 40px;
  }
  
  .health-shop-list+.health-shop-list {
    border-top: solid 1px #f1f1f1;
  }
  
  .health-shop-list-top {
    margin-top: 40px;
  }
  
  .health-shop-list-top img {
    width: 100px;
    height: 100px;
    margin-right: 30px;
    border-radius: 5px;
  }
  
  .health-shop-list-name {
    font-size: 18px;
    color: #16px;
  }
  
  .health-shop-list-name a {
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
  
  .notice-list {
    margin-top: 20px;
  }
  
  .float-doctor-message {
    padding: 30px 20px;
    border-top: solid 1px #f1f1f1;
  }
  
  .float-doctor-message-left img {
    width: 160px;
    height: 160px;
    margin-right: 15px;
  }
  
  .doctor-list-main {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    margin-right: 20px;
  }
  
  .doctor-list-basic {
    font-size: 18px;
    color: #333;
  }
  
  .doctor-list-basic span+span {
    margin-left: 5px;
  }
  
  .doctor-list-basic span:last-of-type {
    width: 50px;
    height: 30px;
    line-height: 30px;
    margin-left: 60px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #999;
    border-radius: 5px;
  }
  
  .doctor-list-basic span.on:last-of-type {
    background-color: #ff6736;
  }
  
  .doctor-list-message p {
    margin-top: 10px;
    font-size: 16px;
    color: #999;
  }
  
  .float-doctor-message-right span {
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #ff6736;
    background-color: #fff;
    border: solid 1px #ff6736;
    border-radius: 40px;
  }
  
  .float-doctor-message-right span+span {
    margin-left: 20px;
  }
</style>

<style>
  .search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6736;
  }
  
  .search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #ff6736;
  }
  
  #order .head-second-bg {
    background-color: #fafafa;
  }
  
  .collect .shop-goods-list a:nth-of-type(5n+1) {
    margin-left: 15px;
  }
  
  .collect .shop-goods-list a:nth-of-type(4n+1) {
    margin-left: 0;
  }
</style>