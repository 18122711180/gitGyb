<template>
  <div id="exchangeDetial">
    <my-head :login="login" />
    <section style="min-height:60vh">
      <!-- <div class="exchange-top flex-start-start">
        <img :src="goods.img">
        <div class="exchange-top-right">
          <p>
            <span>{{goods.name}}</span>
            <span>{{goods.level}}</span>
          </p>
          <p>
            <span>{{goods.sex}}</span>
            <span>{{goods.age}}岁</span>
          </p>
        </div>
      </div>-->
      <!-- <div class="exchaneg-bottom">
        <div class="exchange-bottom-list flex-start-start">
          <span class="exchange-bottom-list-left">
            <i>*</i>申请原因:
          </span>
          <div class="exchange-bottom-list-right">
            <p>{{goods.reason}}</p>
          </div>
        </div>
        <div class="exchange-bottom-list flex-start-start">
          <span class="exchange-bottom-list-left">
            <i>*</i>退款金额:
          </span>
          <div class="exchange-bottom-list-right">
            <p class="price">￥{{goods.price}}</p>
          </div>
        </div>
        <div class="exchange-bottom-list flex-start-start">
          <span class="exchange-bottom-list-left">退款说明:</span>
          <div class="exchange-bottom-list-right">
            <p>{{goods.detail}}</p>
          </div>
        </div>
      </div>-->
    </section>
    <right-float />
    <my-foot />
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Foot from "../public/allFoot.vue";
import { mapGetters } from "vuex";
export default {
  name: "exchangeDetial",
  props: {
    url: ""
  },
  data() {
    return {
      login: {
        state: true,
        name: "hhy",
        menu: 8,
        searchShow: false,
        orderShow: true,
        url: this.url
      },
      type: 0,
      list: ""
    };
  },
  components: {
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  mounted() {
    this.post("/yiqi-api/api/perorder/refuntlist", {
      token: this.userInfo.token
    })
      .then(res => {
        if (res.data.length) {
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].id == this.$route.query.id) {
              this.post("/yiqi-api/api/perorder/refuntinfo", {
                token: this.userInfo.token,
                id: this.$route.query.id,
                type: res.data[i].type
              })
                .then(res2 => {
                  this.list = res2.data;
                })
                .catch(err => {});
              return;
            }
          }
        }
      })
      .catch(err => {});
  },
  methods: {}
};
</script>

<style scoped>
#exchangeDetial {
  background-color: #fff;
}

section {
  width: 1200px;
  margin: 30px auto 60px;
}

.exchange-top {
  padding-bottom: 40px;
  border-bottom: solid 1px #f1f1f1;
}

.exchange-top img {
  width: 160px;
  height: 160px;
  margin-right: 30px;
  border-radius: 5px;
}

.exchange-top-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  font-size: 18px;
  color: #333;
}

.exchange-top-right p + p {
  margin-top: 15px;
  font-size: 14px;
  color: #999;
}

.exchange-top-right p span + span {
  margin-left: 15px;
}

.exchange-bottom-list {
  margin-top: 20px;
  line-height: 1.4;
  font-size: 16px;
  color: #333;
}

.exchange-bottom-list-left {
  width: 100px;
  text-align: right;
  margin-right: 10px;
}

.exchange-bottom-list-left i {
  font-style: normal;
  font-size: 14px;
  color: #ff4a60;
}

.exchange-bottom-list-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.exchange-bottom-list-right .price {
  color: #ff4a60;
}

.exchange-submit span {
  display: inline-block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  background-color: #ff6736;
  cursor: pointer;
}
</style>