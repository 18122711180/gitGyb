<template>
  <div id="nurseIndex">
    <my-head :login="login"/>
    <section>
      <div class="banner">
        <!-- <img :src="nurse.banner" /> -->
        <el-carousel height="510px">
          <el-carousel-item v-for="(item,index) in nurseBanner" :key="index">
            <a :href="item.imgurl ? item.imgurl : '#'">
              <img :src="item.imgsrc">
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="section-center">
        <div class="nurse-menu flex-between-start">
          <div
            class="nurse-menu-list flex-center-center flex-column"
            v-for="(item, index) in nursingMenu"
            :key="index"
          >
            <img :src="item.img">
            <span>{{item.name}}</span>
          </div>
        </div>
        <div class="health-consult-main nursing-main-list-2">
          <ul class="flex-start-start">
            <li v-for="(item,index) in nursingList2" :key="index">
              <router-link :to="({path:item.url,query:{menu:2,type:item.name}})">
                <img :src="item.img">
                <span>{{item.name}}</span>
                <div class="health-consult-hover flex-center-center flex-column">
                  <p>{{item.name}}</p>
                  <p>{{item.introduce}}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="nursing-main">
          <div class="nursing-main-title">
            <img src="../../../static/img/nurse-title-1.png">
            <router-link :to="{path:'/nurse/list',query:{menu:2,type:'医院陪诊'}}">更多医院陪诊 >></router-link>
          </div>
          <div class="nursing-list flex-start-start">
            <router-link :to="{ path: '/nurse/detail', query: { id: item.id, menu:login.menu}}" class="nursing-list-main" v-for="(item,index) in nursingListData" :key="index">
              <img :src="item.photo">
              <div class="nursing-list-bottom">
                <div class="nursing-list-basic flex-start-start">
                  <span>{{item.name}}</span>
                  <span>{{item.sex}}</span>
                  <span>{{item.age}}岁</span>
                </div>
                <p>所服务医院:
                  <span>{{item.hospitalname}}</span>
                </p>
                <p>陪护公司:
                  <span>{{item.companyname}}</span>
                </p>
                <!-- <p class="flex-start-center">
                  好评率:
                  <span>{{item.evaluate}}</span>
                  <img
                    v-for="(star , idx) in 5"
                    :key="idx"
                    :src="item.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                  >
                </p> -->
                <div class="nursing-list-contact" @click.prevent="contactphone(item.phone)">
                  <span>联系公司</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="nursing-main">
          <div class="nursing-main-title">
            <img src="../../../static/img/nurse-title-2.png">
            <router-link :to="{path:'/nurse/list',query:{menu:2,type:'家庭陪诊'}}">更多家庭陪诊 >></router-link>
          </div>
          <div class="nursing-list flex-start-start">
            <router-link :to="{ path: '/nurse/detail', query: { id: item.id, menu:login.menu}}" class="nursing-list-main" v-for="(item,index) in nursingListData2" :key="index">
              <img :src="item.photo">
              <div class="nursing-list-bottom">
                <div class="nursing-list-basic flex-start-start">
                  <span>{{item.name}}</span>
                  <span>{{item.sex}}</span>
                  <span>{{item.age}}岁</span>
                </div>
                <p>所服务医院:
                  <span>{{item.hospitalname}}</span>
                </p>
                <p>陪护公司:
                  <span>{{item.companyname}}</span>
                </p>
                <!-- <p class="flex-start-center">
                  好评率:
                  <span>{{item.evaluate}}</span>
                  <img
                    v-for="(star , idx) in 5"
                    :key="idx"
                    :src="item.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                  >
                </p> -->
                <div class="nursing-list-contact" @click.prevent="contactphone(item.phone)">
                  <span>联系公司</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="nursing-main">
          <div class="nursing-main-title">
            <img src="../../../static/img/nurse-title-3.png">
            <router-link :to="{path:'/nurse/list',query:{menu:2,type:'母婴陪诊'}}">更多母婴陪诊 >></router-link>
          </div>
          <div class="nursing-list flex-start-start">
            <router-link :to="{ path: '/nurse/detail', query: { id: item.id, menu:login.menu}}" class="nursing-list-main" v-for="(item,index) in nursingListData3" :key="index">
              <img :src="item.photo">
              <div class="nursing-list-bottom">
                <div class="nursing-list-basic flex-start-start">
                  <span>{{item.name}}</span>
                  <span>{{item.sex}}</span>
                  <span>{{item.age}}岁</span>
                </div>
                <p>所服务医院:
                  <span>{{item.hospitalname}}</span>
                </p>
                <p>陪护公司:
                  <span>{{item.companyname}}</span>
                </p>
                <!-- <p class="flex-start-center">
                  好评率:
                  <span>{{item.evaluate}}</span>
                  <img
                    v-for="(star , idx) in 5"
                    :key="idx"
                    :src="item.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'"
                  >
                </p> -->
                <div class="nursing-list-contact" @click.prevent="contactphone(item.phone)">
                  <span>联系公司</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
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
  name: "nurseIndex",
  props: {
    url: ""
  },
  data() {
    return {
      login: {
        state: true,
        name: "hhy",
        menu: 2,
        searchShow: false,
        url: this.url
      },
      nurse: {
        banner:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg"
      },
      nurseBanner: [],
      nursingMenu: [
        {
          img: "../../../static/img/nurse-icon-1.png",
          name: "100%实名认证"
        },
        {
          img: "../../../static/img/nurse-icon-2.png",
          name: "0中介费"
        },
        {
          img: "../../../static/img/nurse-icon-3.png",
          name: "24小时接单"
        },
        {
          img: "../../../static/img/nurse-icon-4.png",
          name: "不满意换退"
        }
      ],
      nursingList2: [
        {
            id: 1,
            url:'/nurse/list',
            img: "../../../static/img/nurse-1.png",
            name: "家庭陪护",
            introduce: "免排队 方便快捷"
          },
          {
            id: 2,
            url:'/nurse/list',
            img: "../../../static/img/nurse-2.png",
            name: "医院陪护",
            introduce: "免排队 方便快捷"
          },
          {
            id: 3,
            url:'/nurse/list',
            img: "../../../static/img/nurse-3.png",
            name: "母婴陪护",
            introduce: "免排队 方便快捷"
          }
      ],
      nursingListData: [],
      nursingListData2: [],
      nursingListData3: []
    };
  },
  components: {
    props: ["login"],
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  created() {
    this.getNursingBanner();
    this.getnurse()
    this.getnurse2()
    this.getnurse3()
  },
  methods: {
    getNursingBanner() {
      this.post("/yiqi-api/api/duuser/getimage", { type: 6 })
        .then(res => {
          this.nurseBanner = res.data;
        })
        .catch(err => {});
    },
    getnurse(){
      var that = this;
      var newform = {
        age: "",
        sex: "",
        workey: "",
        workstate: "",
        servetime: "",
        workage: "",
        servehospitalname: "",
        servetyle: "医院陪护"
      }
      this.post('yiqi-api/api/hg/hglist', newform)
        .then(res => {
          var i=0;
          res.data.map(value => {
            value.list.map(secondvalue => {
              secondvalue.phone = value.cphone;
              if(i<4){
                that.nursingListData.push(secondvalue)
              }
              i++;
            })
          })
          console.log(that.nursingList)
        })
        .catch(err => {
        });
    },
    getnurse2(){
      var that = this;
      var newform = {
        age: "",
        sex: "",
        workey: "",
        workstate: "",
        servetime: "",
        workage: "",
        servehospitalname: "",
        servetyle: "家庭陪护"
      }
      this.post('yiqi-api/api/hg/hglist', newform)
        .then(res => {
          var i=0;
          res.data.map(value => {
            value.list.map(secondvalue => {
              secondvalue.phone = value.cphone;
              if(i<4){
                that.nursingListData2.push(secondvalue)
              }
              i++;
            })
          })
        })
        .catch(err => {
        });
    },
    getnurse3(){
      var that = this;
      var newform = {
        age: "",
        sex: "",
        workey: "",
        workstate: "",
        servetime: "",
        workage: "",
        servehospitalname: "",
        servetyle: "母婴陪护"
      }
      this.post('yiqi-api/api/hg/hglist', newform)
        .then(res => {
          var i=0;
          res.data.map(value => {
            value.list.map(secondvalue => {
              secondvalue.phone = value.cphone;
              if(i<4){
                that.nursingListData3.push(secondvalue)
              }
              i++;
            })
          })
        })
        .catch(err => {
        });
    },
    contactphone(val){
      this.$alert('公司联系方式', val, {
          confirmButtonText: '确定'
        });
    }
  }
};
</script>

<style scoped>
#nurseIndex {
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
  margin: 0 auto 60px;
}

.nurse-menu {
  margin: 30px 0;
}

.nurse-menu-list {
  width: 289px;
  height: 200px;
}

.nurse-menu-list img {
  width: auto;
  height: auto;
}

.nurse-menu-list span {
  margin-top: 15px;
  font-size: 24px;
  color: #fff;
}

.nurse-menu-list:nth-of-type(1) {
  background-color: #54c6ea;
}

.nurse-menu-list:nth-of-type(2) {
  background-color: #2dd8cf;
}

.nurse-menu-list:nth-of-type(3) {
  background-color: #8ee3aa;
}

.nurse-menu-list:nth-of-type(4) {
  background-color: #4cc3fd;
}

.health-consult-main a > span {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 22px;
  color: #fff;
  background-color: rgba(255, 103, 54, 0.72);
}

.nursing-main-list-2.health-consult-main li {
  position: relative;
  width: 390px;
  height: 472px;
  margin-top: 0;
}

.nursing-main-list-2.health-consult-main li + li {
  margin-left: 15px;
}

.nursing-main-list-2 .health-consult-hover {
  background-color: rgba(28, 27, 27, 0.72);
}

.health-consult-hover {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  font-size: 30px;
  color: #fff;
  background-color: rgba(255, 103, 54, 0.72);
  display: none;
}

.health-consult-hover p + p {
  margin-top: 24px;
  font-size: 24px;
}

.health-consult-main li:hover a > span {
  display: none;
}

.health-consult-main li:hover .health-consult-hover {
  display: -webkit-flex;
  display: flex;
}

.nursing-main + .nursing-main {
  padding-top: 10px;
}

.nursing-main-title {
  position: relative;
  margin: 39px 0 20px;
  text-align: center;
}

.nursing-main-title img {
  width: 175px;
  height: 63px;
}

.nursing-main-title a {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 16px;
  color: #333;
  cursor: pointer;
}

.nursing-list-main {
  width: 289px;
  height: 479px;
  border: solid 1px #f1f1f1;
}

.nursing-list-main+.nursing-list-main{
  margin-left:14px;
}

.nursing-list-main img {
  width: 100%;
  height: 280px;
}

.nursing-list-bottom {
  line-height: 1;
  padding: 24px 15px 0;
  font-size: 16px;
  color: #333;
}

.nursing-list-bottom p {
  width: 100%;
  margin-top: 15px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nursing-list-bottom p span {
  color: #666;
}

.nursing-list-bottom p img {
  width: 18px;
  height: 18px;
  margin-left: 5px;
}

.nursing-list-basic span + span {
  margin-left: 5px;
}

.nursing-list-contact {
  margin-top: 15px;
}

.nursing-list-contact span {
  display: inline-block;
  width: 90px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  border-radius: 30px;
  background-color: #ff6736;
}
</style>