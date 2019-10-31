<template>
  <div id="hospitalList">
    <my-head :login="login"/>
    <section>
      <div class="hospital-sort">
        <!-- <span :class="{ on : sortType == 1}" @click="getHospital(0)">综合排序</span> -->
        <!-- <span
            :class="{ on : sortType == 2 , up : sortLevel}"
            @click="sortType =2 , sortLevel = !sortLevel"
        >医院等级</span>-->
        <el-dropdown class="dropdown">
          <span class="el-dropdown-link" @click="hospitalRank">综合排序</span>
        </el-dropdown>
        <el-dropdown class="dropdown" @command="handleCommandClass">
          <span class="el-dropdown-link">
            {{hospitalClassTitle}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              :command="item"
              v-for="(item,index) in hospitalClass"
              :key="index"
              :disabled="disabledDropdown"
            >{{item}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="hospital-list">
        <div class="hospital-list-main" v-for="(item, index) in hospitalList.list" :key="index">
          <router-link
            :to="{ path: '/hospitalDetail', query: { id: item.id , menu:0}}"
            class="flex-start-start"
          >
            <img :src="item.himagsrc">
            <div class="hospital-list-main-right">
              <h3>{{item.hname}}</h3>
              <p>{{item.haddress}}</p>
              <p>电话:{{item.hphone}}</p>
              <p class="flex-start-center">
                <span>特色</span>
                {{item.hcharacteristic}}
              </p>
            </div>
          </router-link>
        </div>
      </div>
      <!-- <div class="search-page flex-center-start" v-if="pageTotal>10">
        <el-pagination
          background=""
          @current-change="pageChange"
          layout="prev, pager, next"
          :total="pageTotal"
        ></el-pagination>
      </div> -->
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
  name: "hospitalList",
  // props: {
  //   url: ''
  // },
  data() {
    return {
      disabledDropdown:false,
      login: {
        state: true,
        name: "hhy",
        menu: 1,
        searchShow: false,
        url: this.url
      },
      pageTotal: 60,
      sortType: 1,
      sortLevel: false,
      hospitalList: [],
      hospitalClassTitle: "医院等级",
      hospitalClass: [
        "三级甲等",
        "三级乙等",
        "三级丙等",
        "二级甲等",
        "二级乙等",
        "二级丙等",
        "一级甲等",
        "一级乙等",
        "一级丙等",
        "不限"
      ],
      hospitalLists: []
    };
  },
  components: {
    // props: ['login'],
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  created() {
    this.getHospital({ orderbyTyope: 0 });
  },
  methods: {
    hospitalRank() {
      this.hospitalClassTitle = "医院等级";
      this.getHospital({ orderbyTyope: 0 });
    },
    handleCommandClass(command) {
      // this.$message("click on item " + command);
      this.hospitalClassTitle = command;
      this.getHospital({ orderbyTyopeKey: command });
    },
    getHospital(val) {
      this.post("/yiqi-api/api/health/Hospita", val)
        .then(res => {
          this.hospitalList = res.data;
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
#hospitalList {
  background-color: #fff;
}

section {
  position: relative;
  width: 1200px;
  margin: 30px auto 60px;
}

.hospital-sort {
  /* position: absolute;
  right: 20px;
  top: 27px; */
  font-size: 16px;
  color: #999;
  text-align: right;
}

.hospital-sort span {
  cursor: pointer;
}

.hospital-sort span + span {
  position: relative;
  padding-right: 22px;
  margin-left: 10px;
}

.hospital-sort span.on {
  color: #ff6736;
}

.hospital-sort span.on:after {
  border-top-color: #ff6736;
}

.hospital-sort span.on.up:after {
  border-top-color: transparent;
  border-bottom-color: #ff6736;
}

.hospital-sort span + span:after {
  position: absolute;
  right: 0;
  top: 3px;
  content: "";
  width: 1px;
  height: 1px;
  border-top: solid 12px #ccc;
  border-right: solid 6px transparent;
  border-left: solid 6px transparent;
  border-bottom: solid 12px transparent;
}

.hospital-sort span + span.up:after {
  top: -9px;
  border-bottom: solid 12px #ccc;
  border-top: solid 12px transparent;
}

.hospital-list {
  border: solid 1px #f5f7fa;
}

.hospital-list-main a {
  padding: 38px 20px 40px;
}

.hospital-list .hospital-list-main + .hospital-list-main {
  border-top: solid 1px #f5f7fa;
}

.hospital-list-main img {
  width: 334px;
  height: 200px;
  margin-right: 20px;
}

.hospital-list-main-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  line-height: 1;
}

.hospital-list-main-right h3 {
  width: 100%;
  font-size: 20px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hospital-list-main-right p {
  width: 100%;
  margin-top: 15px;
  font-size: 16px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.hospital-list-main-right p span {
  width: 50px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-right: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #ff6736;
  border-radius: 5px;
}
</style>

<style>
/* .search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff6736;
}

.search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #ff6736;
} */
.dropdown {
  padding: 3px 10px;
  font-size: 16px;
}
</style>