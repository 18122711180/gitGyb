<template>
  <div id="rightFloat" class="flex-start-end flex-column">
    <!-- <a class="right-menu flex-center-center" v-for="item in menu" :href="item.url">
			<span>{{item.name}}</span>
			<img :src="item.img"/>
    </a>-->
    <template v-if="!userInfo">
      <a @click="logintis" class="right-menu flex-center-center" v-for="(item,index) in menu" :key="index">
        <span>{{item.name}}</span>
        <img :src="item.img" />
      </a>
    </template>
    <template v-else>
      <router-link
        :to="item.url"
        class="right-menu flex-center-center"
        v-for="(item,index) in menu"
        :key="index"
      >
        <span>{{item.name}}</span>
        <img :src="item.img" />
      </router-link>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "rightFloat",
  data() {
    return {
      menu: [
        // {
        // 	url: 'javascript:;',
        // 	img: '../../../static/img/left-float-1.png',
        // 	name: '个人中心'
        // },
        {
          url: "/health/index",
          img: "../../../static/img/left-float-2.png",
          name: "商城"
        },
        {
          url: "/order/collect",
          img: "../../../static/img/left-float-3.png",
          name: "收藏"
        },
        {
          url: "",
          img: "../../../static/img/left-float-4.png",
          name: "反馈"
        },
        {
          url: "",
          img: "../../../static/img/left-float-5.png",
          name: "二维码"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    logintis() {
      this.$message.error("请先登录");
    }
  }
};
</script>

<style>
#rightFloat {
  position: fixed;
  right: 0;
  top: 50%;
  z-index: 666;
  -webkit-transform: -webkit-translateY(-50%);
  transform: translateY(-50%);
}

.right-menu {
  width: 42px;
  height: 42px;
  margin: 5px 10px 0 0;
  background-color: #7a6e6f;
  border-radius: 5px;
  cursor: pointer;
}

.right-menu span {
  display: none;
  margin-right: 10px;
  font-size: 14px;
  color: #fff;
}

.right-menu:hover {
  width: auto;
  padding: 0 17px 0 13px;
  margin-right: 0;
  background-color: #ff6736;
}

.right-menu:hover span {
  display: inline-block;
}
</style>