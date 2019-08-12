<template>
  <div id="drug">
    <my-head :login='login' />
    <section>
      <div class="banner">
        <img :src="drug.banner" />
      </div>
      <div class="section-center">
        <div class="drug-consult flex-start-start">
          <div class="notice-menu flex-start-start flex-column">
            <span v-for="(item, index) in noticeMenu" :class="{on : noticeMenuType == index}" @click="noticeMenuType = index">{{item}}</span>
          </div>
          <div class="notice-list flex-start-start flex-wrap">
            <router-link :to="{ path: '/drug/detail', query: { id: item.id }}" v-for="(item,index) in drug.list" :key="index">
              <div class="common-top flex-center-center">
                <img :src="item.img" />
              </div>
              <div class="common-bottom">
                <h4 class="flex-start-center">
              		<span>{{item.type}}</span>
              		{{item.name}}
              	</h4>
                <p class="introduce">主治功能{{item.introduce}}</p>
                <p>生产企业：{{item.company}}</p>
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
              name: '板蓝根冲剂',
              type: '处方药',
              introduce: '主要用于清热解毒介绍奥开治疗扁桃治疗炎眼流行性桃桃腺炎、流行性腺炎、流行性桃腺炎、流行性腺炎、流行性',
              company: '厂家名称厂家名称'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '板蓝根冲剂',
              type: '处方药',
              introduce: '主要用于清热解毒介绍奥开治疗扁桃治疗炎眼流行性桃桃腺炎、流行性腺炎、流行性',
              company: '厂家名称厂家名称'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '板蓝根冲剂',
              type: '处方药',
              introduce: '主要用于清热解毒介绍奥开治疗扁桃治疗炎眼流行性桃桃腺炎、流行性腺炎、流行性',
              company: '厂家名称厂家名称'
            },
            {
              id: 1,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '板蓝根冲剂',
              type: '处方药',
              introduce: '主要用于清热解毒介绍奥开治疗扁桃治疗炎眼流行性桃桃腺炎、流行性腺炎、流行性',
              company: '厂家名称厂家名称'
            }
          ]
        },
        noticeMenu: [
          "药品分类一",
          "药品分类二",
          "药品分类三",
          "药品分类四"
        ],
        noticeMenuType: 0,
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
    margin: 30px auto 60px;
  }
  
  .notice-menu {
    width: 110px;
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
    margin-left: 40px;
  }
  
  .notice-list a {
    width: 341px;
    height: 409px;
    margin: 0 0 13px 13px;
    border: solid 1px #f1f1f1;
  }
  
  .notice-list a:nth-child(3n+1) {
    margin-left: 0;
  }
  
  .common-top {
    width: 100%;
    height: 280px;
  }
  
  .common-bottom {
    padding: 12px;
  }
  
  .common-bottom h4 {
    font-size: 16px;
    font-weight: normal;
    color: #666;
  }
  
  .common-bottom h4 span {
    width: 60px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-right: 10px;
    font-size: 14px;
    color: #ff6736;
    border: solid 1px #ff6736;
  }
  
  .common-bottom p {
    width: 100%;
    margin-top: 14px;
    font-size: 14px;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .common-bottom p.introduce {
  	white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
</style>