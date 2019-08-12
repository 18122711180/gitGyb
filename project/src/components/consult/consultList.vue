<template>
  <div id="consult">
    <my-head :login='login' />
    <section>
    	<div class="notice-menu flex-start-start flex-column">
        <span v-for="(item, index) in noticeMenu" :class="{on : noticeMenuType == index}" @click="noticeMenuType = index">{{item}}</span>
      </div>
      <div class="notice-list">
        <notice-list :list="noticeList"></notice-list>
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
        noticeMenu: [
          "热门推荐",
          "全部资讯",
          "生活健康",
          "生活护理",
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
            timeL: '19:01'
          },
          {
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            title: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相',
            introduce: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导',
            type: '生活健康',
            consult: '咨询人发布信息',
            date: '2019-4-26',
            timeL: '19:01'
          },
          {
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            title: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相',
            introduce: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导',
            type: '生活健康',
            consult: '咨询人发布信息',
            date: '2019-4-26',
            timeL: '19:01'
          },
          {
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            title: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相',
            introduce: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导',
            type: '生活健康',
            consult: '咨询人发布信息',
            date: '2019-4-26',
            timeL: '19:01'
          },
          {
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
            title: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相',
            introduce: '百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相百种疾病可导致眩晕，出现百种疾疾病可导',
            type: '生活健康',
            consult: '咨询人发布信息',
            date: '2019-4-26',
            timeL: '19:01'
          }
        ]
      }
    },
    components: {
      'my-head': Head,
      'right-float': Float,
      'notice-list': Notice,
      'my-foot': Foot
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
  
  img {
    width: 100%;
    height: 100%;
  }
  
  section {
    width: 1200px;
    margin: 40px auto 100px;
  }
  
  .notice-menu {
  	position: fixed;
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
  	margin-left: 148px;
    width: 1052px;
  }
  
</style>