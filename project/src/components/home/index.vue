<template>
  <div id="home">
    <my-head :login='login' />
    <section>
      <div class="banner">
        <img :src="home.banner" />
      </div>
      <div class="section-center">
        <div class="notice flex-start-start">
          <div class="notice-left">
            <img :src="home.banner" />
          </div>
          <div class="notice-right">
            <div class="notice-right-title">
              <h3>公告栏</h3>
              <div class="flex-between-center">
                <span>Bulletin board</span>
                <router-link to="/notice">更多公告 >></router-link>
              </div>
            </div>
            <div class="notice-right-main">
              <ul>
                <li v-for="item in home.noticeList">
                  <router-link class="flex-between-center" :to="{ path: 'noticeDatail', query: { id: item.id }}">
                    <p>{{item.text}}</p>
                    <span>{{item.time}}</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="health-consult">
          <div class="home-title">
            <img src="../../../static/img/home-title-1.png" />
          </div>
          <div class="health-consult-main">
            <ul class="flex-start-start flex-wrap">
              <li v-for="item in home.health">
                <router-link :to="item.url">
                  <img :src="item.img" />
                  <span>{{item.name}}</span>
                  <div class="health-consult-hover flex-center-center flex-column">
                    <p>{{item.name}}</p>
                    <p>{{item.introduce}}</p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="nursing">
          <div class="home-title">
            <img src="../../../static/img/home-title-2.png" />
            <router-link to="/moreNursing">全部护工 >></router-link>
          </div>
          <div class="nursing-main">
            <div class="nursing-main-list-1 flex-start-start">
              <router-link to="/" v-for="(item , index) in home.nursingList1" :key="index">
                <img class="nursing-main-photo" :src="item.img" />
                <div class="nursing-main-list-message">
                  <p>{{item.level}}</p>
                  <p>姓名： {{item.name}}</p>
                  <div class="nursing-score flex-center-start">
                    <template v-for="(star, starIndex) in 5">
                      <img v-if="item.score > starIndex" src="../../../static/img/star-on.png" />
                      <img v-else src="../../../static/img/star-off.png" />
                    </template>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="health-consult-main nursing-main-list-2">
              <ul class="flex-start-start">
                <li v-for="item in home.nursingList2">
                  <router-link to="/">
                    <img :src="item.img" />
                    <span>{{item.name}}</span>
                    <div class="health-consult-hover flex-center-center flex-column">
                      <p>{{item.name}}</p>
                      <p>{{item.introduce}}</p>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="recommend">
          <div class="home-title">
            <img src="../../../static/img/home-title-3.png" />
          </div>
          <div class="banner">
            <img :src="home.banner" />
          </div>
          <div class="recommend-list flex-start-start flex-wrap">
            <router-link to="/" v-for="(item, index) in home.recommendList" :key="index">
              <img :src="item.img" />
              <div class="recommend-list-message">
              	<p>{{item.name}}</p>
              	<div class="flex-between-center">
              		<span>￥{{item.price}}</span>
              		<span>已售：{{item.sold}}件</span>
              	</div>
              </div>
            </router-link>
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
  import Foot from '../public/allFoot.vue';
  export default {
    name: 'home',
    props: {
    	url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 0,
          searchShow: false,
          url: this.url
        },
        home: {
          banner: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          noticeList: [{
              id: '1',
              text: '公告标题公告标题公告标题告标题告标题公告标标题告标...',
              time: '2019-4-26'
            },
            {
              id: '1',
              text: '公告标题公告标题公告标题告标题告标题公告标标题告标...',
              time: '2019-4-26'
            },
            {
              id: '1',
              text: '公告标题公告标题公告标题告标题告标题公告标标题告标...',
              time: '2019-4-26'
            },
            {
              id: '1',
              text: '公告标题公告标题公告标题告标题告标题公告标标题告标...',
              time: '2019-4-26'
            },
            {
              id: '1',
              text: '公告标题公告标题公告标题告标题告标题公告标标题告标...',
              time: '2019-4-26'
            },
            {
              id: '1',
              text: '公告标题公告标题公告标题告标题告标题公告标标题告标...',
              time: '2019-4-26'
            },
            {
              id: '1',
              text: '公告标题公告标题公告标题告标题告标题公告标标题告标...',
              time: '2019-4-26'
            },
            {
              id: '1',
              text: '公告标题公告标题公告标题告标题告标题公告标标题告标...',
              time: '2019-4-26'
            },
            {
              id: '1',
              text: '公告标题公告标题公告标题告标题告标题公告标标题告标...',
              time: '2019-4-26'
            }
          ],
          health: [{
              url: '',
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '名医榜',
              introduce: '私人定制 安全放心'
            },
            {
              url: '',
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '私人医生',
              introduce: '私人定制 安全放心'
            },
            {
              url: '',
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '医辅名师',
              introduce: '私人定制 安全放心'
            },
            {
              url: '',
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '专业陪诊',
              introduce: '私人定制 安全放心'
            },
            {
              url: '',
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '健康咨询',
              introduce: '私人定制 安全放心'
            }
          ],
          nursingList1: [{
              id: 22,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              level: '金牌护工',
              name: '李XX',
              score: 3
            },
            {
              id: 23,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              level: '金牌护工',
              name: '李XX',
              score: 4
            },
            {
              id: 24,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              level: '金牌护工',
              name: '李XX',
              score: 5
            },
            {
              id: 25,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              level: '金牌护工',
              name: '李XX',
              score: 3
            }
          ],
          nursingList2: [{
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '家庭陪护',
              introduce: '免排队 方便快捷'
            },
            {
              id: 2,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '医院陪护',
              introduce: '免排队 方便快捷'
            },
            {
              id: 3,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '母婴陪护',
              introduce: '免排队 方便快捷'
            }
          ],
          recommendList: [{
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              sold: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              sold: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              sold: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              sold: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              sold: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              sold: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              sold: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              sold: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              sold: '1108'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: 'ICEPACK大小颗粒',
              price: '69.00',
              sold: '1108'
            }
          ]
        }
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'my-foot': Foot
    }
  }
</script>

<style scoped>
  #home {
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
  
  .notice-left {
    width: 500px;
    height: 500px;
    margin-right: 40px;
  }
  
  .notice-right {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    height: 500px;
    overflow: hidden;
  }
  
  .notice-right-title h3 {
    font-size: 30px;
    color: #333;
  }
  
  .notice-right-title div {
    margin-top: 15px;
  }
  
  .notice-right-title span {
    font-size: 20px;
    color: #999;
  }
  
  .notice-right-title a {
    font-size: 16px;
    color: #333;
  }
  
  .notice-right-main ul li {
    margin-top: 26px;
  }
  
  .notice-right-main ul li+li {
    margin-top: 20px;
  }
  
  .notice-right-main p {
    position: relative;
    width: 500px;
    padding-left: 20px;
    font-size: 20px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .notice-right-main p:before {
    position: absolute;
    left: 0;
    top: 50%;
    content: "";
    width: 1px;
    height: 1px;
    margin-top: -7px;
    border-style: solid;
    border-width: 7px;
    border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #333;
  }
  
  .notice-right-main span {
    font-size: 14px;
    color: #999;
  }
  
  .notice-right-main a:hover p,
  .notice-right-main a:hover span {
    color: #ff6736;
  }
  
  .notice-right-main a:hover p:before {
    border-left-color: #ff6736;
  }
  
  .home-title {
    position: relative;
    margin: 60px 0 30px;
    text-align: center;
  }
  
  .home-title img {
    width: auto;
    height: auto;
  }
  
  .home-title a {
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 16px;
    color: #333;
  }
  
  .health-consult-main li {
    position: relative;
    width: 390px;
    height: 488px;
    margin: 15px 15px 0 0;
  }
  
  .health-consult-main li:last-of-type {
    margin-right: 0;
  }
  
  .health-consult-main li:first-of-type,
  .health-consult-main li:nth-of-type(2) {
    width: 593px;
    height: 447px;
    margin: 0;
  }
  
  .health-consult-main li:first-of-type {
    margin-right: 14px;
  }
  
  .health-consult-main a>span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
    color: #fff;
    background-color: rgba(255, 103, 54, .72);
  }
  
  .health-consult-hover {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    font-size: 30px;
    color: #fff;
    background-color: rgba(255, 103, 54, .72);
    display: none;
  }
  
  .health-consult-hover p+p {
    margin-top: 24px;
    font-size: 24px;
  }
  
  .health-consult-main li:hover a>span {
    display: none;
  }
  
  .health-consult-main li:hover .health-consult-hover {
    display: -webkit-flex;
    display: flex;
  }
  
  .nursing-main-list-1 a {
    width: 288px;
    height: 472px;
    font-size: 0;
  }
  
  .nursing-main-list-1 a+a {
    margin-left: 16px;
  }
  
  .nursing-main-photo {
    height: 365px;
  }
  
  .nursing-main-list-message {
    width: 100%;
    height: 107px;
    padding-top: 14px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #ff6736;
    border: solid 1px #f1f1f1;
    border-top: none;
  }
  
  .nursing-main-list-message p+p {
    margin-top: 10px;
    font-size: 16px;
    color: #333;
  }
  
  .nursing-score {
    margin-top: 7px
  }
  
  .nursing-score img {
    width: 18px;
    height: 18px;
  }
  
  .nursing-score img+img {
    margin-left: 5px;
  }
  
  .nursing-main-list-2.health-consult-main {
    margin-top: 15px;
  }
  
  .nursing-main-list-2.health-consult-main li:nth-of-type(n) {
    width: 390px;
    height: 472px;
    margin-top: 0;
  }
  
  .nursing-main-list-2.health-consult-main li+li {
    margin-left: 15px;
  }
  
  .nursing-main-list-2 .health-consult-hover {
    background-color: rgba(28, 27, 27, .72);
  }
  
  .recommend .banner {
    height: 500px;
  }
  
  .recommend-list{
  	padding-top: 15px;
  	font-size: 0;
  }
  
  .recommend-list a{
  	width: 228px;
  	height: 300px;
  	margin: 15px 0 0 15px;
  	border-radius: 5px;
  	overflow: hidden;
  }
  
  .recommend-list a:nth-of-type(5n+1){
  	margin-left: 0;
  }
  
  .recommend-list img{
  	width: 228px;
  	height: 228px;
  }
  
  .recommend-list-message{
  	width: 100%;
  	height: 70px;
  	line-height: 1;
  	padding: 8px 16px 0;
  	border: solid 1px #f1f1f1;
  	border-top: none;
  }
  
  .recommend-list-message p{
  	font-weight: bold;
  	font-size: 16px;
  	color: #666;
  }
  
  .recommend-list-message div{
  	margin-top: 12px;
  	font-size: 16px;
  	color: #ff4a60;
  }
  
  .recommend-list-message div span+span{
  	font-size: 12px;
  	color: #666;
  }
</style>