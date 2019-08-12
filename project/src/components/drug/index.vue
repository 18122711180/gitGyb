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
            <router-link :to="{ path: '/drug/detail', query: { id: item.id }}" v-for="(item,index) in drug.list" :key="index">
              <img :src="item.img" />
              <p>{{item.name}}</p>
            </router-link>
          </div>
        </div>
        <div class="drug-kind">
          <div class="drug-title">
            <img src="../../../static/img/drug-title-2.png" />
          </div>
          <div class="drug-kind-list flex-start-start flex-wrap">
            <router-link :to="{ path: '/drug/detail', query: { id: item.id }}" v-for="(item,index) in drug.list" :key="index">
              <img :src="item.img" />
              <p>{{item.name}}</p>
            </router-link>
          </div>
        </div>
        <div class="drug-consult flex-start-start">
          <div class="notice-menu flex-start-start flex-column">
            <span v-for="(item, index) in noticeMenu" :class="{on : noticeMenuType == index}" @click="noticeMenuType = index">{{item}}</span>
          </div>
          <div class="notice-list">
            <notice-list :list="noticeList"></notice-list>
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
        drug: {
          banner: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          list: [{
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '腹痛腹泻'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '腹痛腹泻'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '腹痛腹泻'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '腹痛腹泻'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '腹痛腹泻'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '腹痛腹泻'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '腹痛腹泻'
            }
          ]
        },
        noticeMenu: [
          "药品质量问题",
          "用药信息",
          "养生保健",
          "优生优育"
        ],
        noticeMenuType: 0,
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
  
  .drug-kind-list a:nth-child(n+5) {
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