<template>
  <div id="notice">
    <my-head :login='login' />
    <section>
      <div class="notice-list">
        <notice-list :list="noticeList"></notice-list>
      </div>
      <search-empty v-if="!noticeList.length"/>
    </section>
    <right-float />
    <my-foot />
  </div>
</template>

<script>
  import Head from '../public/allHead.vue';
  import Float from '../public/rightFloat.vue';
  import Notice from '../public/noticeList.vue';
  import searchEmpty from '../public/searchEmpty.vue';
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
          menu: 5,
          searchShow: true,
          url: this.url
        },
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
      'search-empty': searchEmpty,
      'my-foot': Foot
    }
  }
</script>

<style scoped>
  #consult {
    background-color: #fff;
  }
  
  img {
    width: 100%;
    height: 100%;
  }
  
  section {
    width: 1200px;
    margin: 40px auto 100px;
  }
</style>