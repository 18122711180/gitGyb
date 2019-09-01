<template>
  <div id="noticeList">
    <div class="notice-list" v-for="(item , index) in news.list" :key="index">
      <router-link
        class="flex-start-start"
        :to="{ path: '/consult/detail', query: { id: item.id , menu: 6}}"
      >
        <img class="notice-list-left" :src="item.imgsrc">
        <div class="notice-list-right flex-between-start flex-column">
          <div class="notice-list-right-main">
            <h3>{{item.title}}</h3>
            <!-- <p>{{item.introduce}}</p> -->
          </div>
          <div class="notice-list-right-message flex-between-center">
            <div class="notice-list-consult flex-start-center">
              <span v-if="item.advtype">
                {{item.advtype == 1 ? '公告' :''}}
                {{item.advtype == 2 ? '生活健康' :''}}
                {{item.advtype == 3 ? '生活护理' :''}}
                {{item.advtype == 4 ? '优生优育' :''}}
                </span>
              <span>阅读：{{item.visitcount}}</span>
            </div>
            <div class="notice-list-time flex-start-center">
              <span>{{item.date}}</span>
              <span>{{item.releasetime}}</span>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="search-page flex-center-start">
      <el-pagination
        background=""
        @current-change="pageChange"
        layout="prev, pager, next"
        :total="news.totalPage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "notice",
  props: {
    keynum: ""
  },
  data() {
    return {
      news: {
        currPage: 1,
        list: [],
        pageSize: 10,
        totalCount: 0,
        totalPage: 10
      }
    };
  },
  watch: {
    keynum: function(val) {
      console.log("key == " + val);
      this.news = {
        currPage: 1,
        list: [],
        pageSize: 10,
        totalCount: 0,
        totalPage: 10
      };
      this.getNews(val, 1);
    }
  },
  created() {
    console.log("keynum == " + this.keynum);
    this.getNews(this.keynum, 1);
  },
  methods: {
    getNews(key, page) {
      this.post("/yiqi-api/api/Home/Information", {
        btype: key,
        page: page,
        limit: 10
      })
        .then(res => {
          console.log(res);
          this.news = res.data;
        })
        .catch(err => {});
    },
    pageChange: function(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped>
.notice-list {
  width: 100%;
}

.notice-list a {
  padding-bottom: 40px;
  border-bottom: solid 1px #f5f7fa;
}

.notice-list div + div a {
  padding-top: 40px;
}

.notice-list-left {
  width: 150px;
  height: 150px;
  margin-right: 40px;
}

.notice-list-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  height: 150px;
}

.notice-list a:hover .notice-list-right-main h3 {
  color: #ff6736;
}

.notice-list-right-main {
  width: 100%;
  line-height: 1;
}

.notice-list-right-main h3 {
  width: 100%;
  font-size: 20px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.notice-list-right-main p {
  width: 100%;
  line-height: 1.6;
  margin-top: 16px;
  font-size: 18px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.notice-list-right-message {
  font-size: 14px;
  color: #999;
}

.notice-list-consult span {
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  border: solid 1px #f1f1f1;
}

.notice-list-consult span + span {
  margin-left: 20px;
  border: none;
}

.notice-list-time span + span {
  margin-left: 20px;
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