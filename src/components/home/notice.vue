<template>
  <div id="notice">
    <my-head :login="login"/>
    <section>
      <div class="notice-menu flex-start-start flex-column">
        <span
          v-for="(item, index) in noticeMenu"
          :key="index"
          :class="{on : noticeMenuType == index}"
          @click="noticeMenuType = index"
        >{{item}}</span>
      </div>
      <div class="notice-list">
        <notice-list ></notice-list>
      </div>
    </section>
    <right-float/>
    <my-foot/>
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Notice from "../public/announcement.vue";
import Foot from "../public/allFoot.vue";
import { create } from "domain";
export default {
  name: "notice",
  props: {
    url: ""
  },
  data() {
    return {
      login: {
        state: true,
        name: "hhy",
        menu: 0,
        searchShow: false,
        url: this.url
      },
      // noticeMenu: ["公示公告", "法律法规", "产品召回", "质量公告"],
      noticeMenu: ["公示公告"],
      noticeMenuType: 0,
      noticeList: []
    };
  },
  components: {
    props: ["login"],
    "my-head": Head,
    "right-float": Float,
    "notice-list": Notice,
    "my-foot": Foot
  },
  created() {
  },
  methods: {
  }
};
</script>

<style scoped>
#notice {
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

.notice-menu span + span {
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