<template>
  <div id="allHead">
    <div :style="{'height' :  login.orderShow ? '162px' : '212px'}"></div>
    <div class="head-float">
      <div class="header">
        <div class="state">
          <div class="state-main flex-between-center">
            <div class="state-main-left flex-start-center">
              <router-link class="state-main-home" to="/">共医宝首页</router-link>
              <span v-if="!areaName.length" @click="dialogVisible = true">深圳</span>
              <span
                v-else
                @click="dialogVisible = true"
              >{{areaName[0]}}-{{areaName[1]}}-{{areaName[2]}}</span>
            </div>
            <div class="state-main-right flex-start-center">
              <template v-if="!userInfo">
                <p>
                  请
                  <router-link to="/login">登录</router-link>
                </p>
                <router-link to="/register">免费注册</router-link>
                <span>|</span>
                <span style="cursor: pointer;" @click="logintis">我的订单</span>
                <span style="cursor: pointer;" @click="logintis">购物车</span>
              </template>
              <template v-else>
                <span @click="loginout" style="cursor: pointer;">{{userInfo.username}}</span>
                <!-- <router-link to="/register"></router-link> -->
                <span>|</span>
                <router-link to="/order">我的订单</router-link>
                <router-link to="/car">购物车</router-link>
              </template>

              <router-link to="/foo">商家入驻</router-link>
              <router-link to="/foo">客户服务</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="head-second-bg">
        <div class="flex-between-center head-second">
          <img class="head-logo" src="../../../static/img/logo.png" />
          <div class="head-search flex-start-center">
            <img src="../../../static/img/icon-search.png" />
            <input v-model="searchVal" @focus="switchover" placeholder="请输入保健食品、医疗器械、药品" />
            <!-- placeholder="请输入医院、名师、专业陪诊、医生、护工、保健食品、药品" -->
            <span @click="search">搜索</span>
          </div>
          <img class="head-ad" src="../../../static/img/jz.png" />
        </div>
      </div>
      <div class="head-menu" v-if="!login.orderShow">
        <!-- <div class="head-menu-mean flex-start-start">
          <router-link :class="{on : login.menu == index}" v-for="(item , index) in menu" :to="item.url" :key="index">{{item.name}}</router-link>
        </div>-->
        <div class="head-menu-mean flex-start-start" v-if="!login.searchShow">
          <router-link
            :class="{on : login.menu == index}"
            v-for="(item , index) in menu"
            :to="item.url"
            :key="index"
          >{{item.name}}</router-link>
        </div>
        <div class="head-menu-mean flex-start-start" v-else>
          <router-link
            :class="{on : login.menu == index}"
            v-for="(item , index) in menu2"
            :to="item.url"
            :key="index"
          >{{item.name}}</router-link>
        </div>
      </div>
    </div>
    <el-dialog title="地区选择" :visible.sync="dialogVisible">
      <el-cascader
        class="area"
        v-model="areaId"
        :options="areaData"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
      ></el-cascader>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import placeJs from "../../../static/js/place.js";
import { setInfo, setPlace, getPlace } from "@/utils/auth";
// const axios = require('axios');
import { mapGetters } from "vuex";
export default {
  name: "allHead",
  props: {
    login: "",
    url: ""
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  data() {
    return {
      menu: [
        {
          name: "首页",
          url: "/"
        },
        {
          name: "健康咨询",
          url: "/consult/index"
        },
        {
          name: "护工陪护",
          url: "/nurse/index"
        },
        {
          name: "特诊社区",
          url: "/community/index"
        },
        {
          name: "月子会所",
          url: "/confinement/index"
        },
        {
          name: "健康商城",
          url: "/health/index"
        },
        {
          name: "购药信息",
          url: "/drug/index"
        },
        {
          name: "医疗器械",
          url: "/military/index"
        },
        {
          name: "保健食品",
          url: "/food/index"
        }
      ],
      menu2: [
        // {
        //   id: 1,
        //   name: "医院",
        //   url: "/hospital/list"
        // },
        // {
        //   id: 2,
        //   name: "私人医生",
        //   url: "/private"
        // },
        // {
        //   id: 3,
        //   name: "陪诊员",
        //   url: "/accompanying"
        // },
        // {
        //   id: 4,
        //   name: "医辅名师",
        //   url: "/physician"
        // },
        // {
        //   id: 5,
        //   name: "护工陪护",
        //   url: "/nurse"
        // },
        // {
        //   id: 6,
        //   name: "健康资讯",
        //   url: "/consult"
        // },
        {
          id: 1,
          name: "保健食品",
          url: "/food"
        },
        {
          id: 2,
          name: "医疗器械",
          url: "/military"
        },
        {
          id: 3,
          name: "药品",
          url: "/drug"
        }
      ],
      dialogVisible: false,
      searchVal: "",
      areaData: areajson, // 省市区json
      areaId: [], //省市区id
      areaName: [] //省市区名字
    };
  },
  mounted() {
    let place = getPlace();
    if (!!place && typeof place != "undefined") {
      this.areaName = place;
    }
  },
  methods: {
    switchover() {
      console.log(this.$route);
      if (!this.login.searchShow) {
        this.$router.push({
          path: "/food"
        });
      }
    },
    handleChange: function(item) {
      var that = this;
      that.areaName = that.palceSelect(item);
      setPlace(that.areaName);
    },
    logintis(){
      this.$message.error("请先登录");
    },
    search() {
      if (this.searchVal !== "") {
        this.$emit("searchCentent", this.searchVal);
      } else {
        this.$message.closeAll();
        this.$message.error("搜索条件不能为空！");
      }

      // var that = this;
      // console.log(that.login.menu);
      // that.$router.push({
      //   path: "/"
      // });
      //      axios.post(
      //          that.login.url + '/yiqi-api/api/shop/merchantenter', {
      //
      //          }, {
      //            headers: {
      //              'Content-Type': 'application/json'
      //            }
      //          }
      //        )
      //        .then(function(res) {
      //          console.log(res)
      //          if(res.data.code == 0) {
      //            sessionStorage.setItem('searchSubmit', that.searchVal)
      //
      //          } else {
      //
      //          }
      //
      //        })
      //        .catch(function(error) {
      //          console.log(error);
      //        });
    },
    palceSelect(item) {
      var that = this;
      var placeArray = new Array();
      for (var i in areajson) {
        if (areajson[i].value == item[0]) {
          placeArray.push(areajson[i].label);
          for (var j in areajson[i].children) {
            if (areajson[i].children[j].value == item[1]) {
              placeArray.push(areajson[i].children[j].label);
              for (var k in areajson[i].children[j].children) {
                if (areajson[i].children[j].children[k].value == item[2]) {
                  placeArray.push(areajson[i].children[j].children[k].label);
                  return placeArray;
                }
              }
            }
          }
        }
      }
    },
    loginout() {
      var that = this;
      that
        .$confirm("是否退出登录", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          that.$message({
            type: "success",
            message: "退出成功!"
          });
          setInfo("");
          that.$router.push({ path: "/login" });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style>
.head-float {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
}

.state {
  width: 100%;
  height: 40px;
  background-color: #ededed;
}

.state-main {
  width: 1200px;
  margin: 0 auto;
}

.state-main-left,
.state-main-right {
  height: 40px;
  font-size: 16px;
  color: #999;
}

.state-main-left span {
  position: relative;
  margin-left: 32px;
  padding-left: 20px;
  cursor: pointer;
}

.state-main-left span:after {
  position: absolute;
  left: 0;
  top: 50%;
  content: "";
  width: 14px;
  height: 16px;
  margin-top: -8px;
  background: url(../../../static/img/icon-position.png);
  background-size: 100% 100%;
}

.state-main-home {
  position: relative;
  padding-left: 27px;
  color: #999;
}

.state-main-home:after {
  position: absolute;
  left: 0;
  top: 50%;
  content: "";
  width: 20px;
  height: 18px;
  margin-top: -9px;
  background: url(../../../static/img/icon-home.png);
  background-size: 100% 100%;
}

.state-main-right span {
  margin-left: 26px;
}

.state-main-right p a {
  margin-left: 0;
  color: #ff6736;
}

.state-main-right a {
  margin-left: 26px;
  color: #999;
}

.head-second-bg {
  background-color: #fff;
}

.head-second {
  width: 1200px;
  height: 122px;
  margin: 0 auto;
}

.head-logo {
  width: 108px;
}

.head-search {
  width: 746px;
  height: 40px;
  border: solid 1px #ff6736;
  border-radius: 40px;
}

.head-search img {
  width: 20px;
  margin: 0 20px;
}

.head-second input {
  -webkit-flex: 1;
  flex: 1;
  height: 38px;
  font-size: 14px;
  color: #999;
  border: none;
  outline: none;
}

.head-ad {
  width: 182px;
}

.head-search span {
  width: 85px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  background-color: #ff6736;
  border-radius: 0 40px 40px 0;
  cursor: pointer;
}

.head-menu {
  width: 100%;
  background-color: #ff916e;
}

.head-menu-mean {
  width: 1200px;
  margin: 0 auto;
}

.head-menu-mean a {
  height: 50px;
  line-height: 50px;
  padding: 0 33px;
  font-size: 16px;
  color: #fff;
}

.head-menu-mean a.on {
  background-color: #ff6736;
}

.head-menu-mean a:hover {
  background-color: #ff6736;
}

.area {
  width: 300px;
}
</style>