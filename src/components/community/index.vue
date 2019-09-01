<template>
  <div id="communityIndex">
    <my-head :login="login"/>
    <section>
      <div class="notice-menu flex-start-start flex-column">
        <span
          v-for="(item, index) in listData"
          :class="{on : noticeMenuType == index}"
          @click="noticeMenuType = index"
          :key="index"
        >{{item.typename}}</span>
      </div>
      <div class="notice-list">
        <router-link
          v-for="(item, index) in listData[noticeMenuType].list"
          :key="index"
          :to="{ path: '/shop/index', query: { id: item.stroeid , menu:3 }}"
        >
          <div class="community-list flex-start-start">
            <img :src="item.storelogo">
            <div class="community-list-right">
              <h4>{{item.stroename}}</h4>
              <p>
                <span>电话：</span>
                {{item.storenumber}}
              </p>
              <p>
                <span>地址：</span>
                {{item.storeaddress}}
              </p>
            </div>
          </div>
        </router-link>
        <!-- <div class="search-page flex-center-start" v-if="pageTotal>10">
          <el-pagination
            background=""
            @current-change="pageChange"
            layout="prev, pager, next"
            :total="pageTotal"
          ></el-pagination>
        </div> -->
      </div>
    </section>
    <right-float/>
    <my-foot/>
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Foot from "../public/allFoot.vue";
export default {
  name: "communityIndex",
  props: {
    url: ""
  },
  data() {
    return {
      login: {
        state: true,
        name: "hhy",
        menu: 3,
        searchShow: false,
        url: this.url
      },
      listData:[{list:[]}],
      noticeMenu: [
        "中医馆",
        "牙科诊所",
        "儿科诊所",
        "眼科",
        "社区服务站",
        "特色诊所"
      ],
      noticeMenuType: 0,
      pageTotal: 60,
      communityList: [
        {
          id: 2,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "诊所名称",
          tel: "0755-5889088",
          address: "广东省深圳市南山区东滨路xxxx展览馆3号路西"
        },
        {
          id: 2,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "诊所名称",
          tel: "0755-5889088",
          address: "广东省深圳市南山区东滨路xxxx展览馆3号路西"
        },
        {
          id: 2,
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
          name: "诊所名称",
          tel: "0755-5889088",
          address: "广东省深圳市南山区东滨路xxxx展览馆3号路西"
        }
      ]
    };
  },
  components: {
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  methods: {
    pageChange: function(val) {
      console.log(val);
    },
    getList() {
      this.post("/yiqi-api/api/store/tzlist")
        .then(res => {
          if (res.code === 0) {
            this.listData = res.data;
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getList();
  }
};
</script>

<style scoped>
#communityIndex {
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
  width: 1052px;
  margin-left: 148px;
  border: solid 1px #f1f1f1;
}

.community-list {
  padding: 20px;
}

.notice-list a + a .community-list {
  border-top: solid 1px #f1f1f1;
}

.community-list img {
  width: 334px;
  height: 200px;
  margin-right: 20px;
}

.community-list-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.community-list-right h4 {
  font-size: 20px;
  color: #333;
}

.community-list-right p {
  margin-top: 15px;
  font-size: 16px;
  color: #666;
}

.community-list-right p span {
  color: #999;
}

.search-page {
  margin: 30px 0;
}
</style>

<style>
.search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff6736;
}

.search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #ff6736;
}
</style>