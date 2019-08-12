<template>
  <div id="drug">
    <my-head :login='login' />
    <section>
      <div class="notice-list">
        <goods-list :list="goodsList"></goods-list>
      </div>
      <search-empty v-if="!goodsList.length"/>
    </section>
    <right-float />
    <my-foot />
  </div>
</template>

<script>
  import Head from '../public/allHead.vue';
  import Float from '../public/rightFloat.vue';
  import Goods from '../public/goodsList.vue';
  import searchEmpty from '../public/searchEmpty.vue';
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
          menu: 8,
          searchShow: true,
          url: this.url
        },
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
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'goods-list': Goods,
      'search-empty': searchEmpty,
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
  
  section {
    width: 1200px;
    margin: 40px auto 100px;
  }
</style>