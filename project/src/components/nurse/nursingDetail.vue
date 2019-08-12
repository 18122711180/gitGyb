<template>
  <div id="accompanyingDetail">
    <my-head :login='login' />
    <section>
      <div class="doctor-top flex-between-start">
        <div class="doctor-top-left flex-start-start">
          <div class="doctor-evaluate">
            <img :src="doctor.img" />
            <p>
              <span>服务{{doctor.serviceTime}}次</span>
              <span>好评率{{doctor.evaluate}}%</span>
            </p>
            <div class="flex-start-center doctor-basice-score">
              <img v-for="(img, idx) in 5" :src="doctor.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'" />
            </div>
            <p><span class="follow" :class="{on: follow}" @click="follow = !follow">{{follow ? "已关注" : "关注"}}</span></p>
          </div>
          <div class="doctor-message">
            <div class="doctor-basice flex-start-center">
              <span>{{doctor.name}}</span>
              <span>{{doctor.sex}}</span>
              <span>{{doctor.age}}岁</span>
              <span>{{doctor.level}}</span>
            </div>
            <div class="doctor-other">

              <p><span>所属公司：</span>{{doctor.company}}</p>
              <p><span>所服务医院：</span>{{doctor.address}}</p>
              <p><span>养老护理员证：</span>{{doctor.cardState1 ? "有" : "无"}} <span>健康证：</span>{{doctor.cardState2 ? "有" : "无"}}</p>
              <p>
                <span>服务价格：</span>
                <span class="price">￥{{doctor.servicePrice}}</span>
              </p>
              <template v-if="type != 2">
                <p>护理级别：</p>
                <div class="doctor-other-service flex-start-start flex-wrap">
                  <span v-for="(item, index) in nursingLevelData" :class="{on : nursingLevel == index}" @click="nursingLevel = index">{{item}}</span>
                </div>
                <p>选择服务：</p>
                <div class="doctor-other-service flex-start-start flex-wrap">
                  <span v-for="(item, index) in serviceTimeData" :class="{on : serviceTime == index}" @click="serviceTimeBind(index)">{{item}}</span>
                </div>
                <p>选择服务时间：</p>
                <div class="doctor-service-time">
                  <el-date-picker v-model="serviceStartDate" type="datetime" placeholder="选择开始日期时间" @change="serviceTimeChange">
                  </el-date-picker>
                  至
                  <el-date-picker v-model="serviceEndDate" type="datetime" :disabled="serviceTime != 3 ? true : false" placeholder="选择结束日期时间">
                  </el-date-picker>
                </div>
              </template>
              <template v-else>
              	<p>选择服务：</p>
                <div class="doctor-other-service flex-start-start flex-wrap">
                  <span v-for="(item, index) in otherPayData" :class="{on : otherPay == index}" @click="otherPay = index">{{item}}</span>
                </div>
                <p>选择服务时间：</p>
                <div class="doctor-service-time">
                  <el-date-picker v-model="serviceStartDate" type="datetime" placeholder="选择开始日期时间">
                  </el-date-picker>
                  至
                  <el-date-picker v-model="serviceEndDate" type="datetime" placeholder="选择结束日期时间">
                  </el-date-picker>
                </div>
              </template>

            </div>
            <div class="doctor-btn flex-start-start">
              <span>立即购买</span>
            </div>
          </div>
        </div>
        <div class="doctor-top-right">
          <img :src="doctor.hospitalImg" />
          <p>{{doctor.hospital}}</p>
          <p><span>联系电话：</span>{{doctor.tel}}</p>
          <p><span>详细地址：</span>{{doctor.address}}</p>
        </div>
      </div>
      <div class="doctor-bottom">
        <div class="doctor-bottom-title flex-start-start">
          <span :class="{on : doctorDetailType == 1}" @click="doctorDetailType = 1">简介及服务</span>
          <span :class="{on : doctorDetailType == 2}" @click="doctorDetailType = 2">评价</span>
        </div>
        <template v-if="doctorDetailType == 1">
          <h4 class="title">服务对象</h4>
          <div class="doctor-bottom-server">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg" />
          </div>
          <h4 class="title">服务内容</h4>
          <div class="doctor-bottom-server">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg" />
          </div>
          <h4 class="title">服务须知</h4>
          <div class="doctor-bottom-server">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg" />
          </div>
          <h4 class="title">个人简介</h4>
          <div class="doctor-bottom-server">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg" />
          </div>
        </template>
        <template v-else>
          <div class="doctor-evaluate-title flex-start-center">
            <span :class="{on: evaluateType == 1}" @click="evaluateType = 1">全部(568)</span>
            <span :class="{on: evaluateType == 2}" @click="evaluateType = 2">好评(568)</span>
            <span :class="{on: evaluateType == 3}" @click="evaluateType = 3">中评(568)</span>
            <span :class="{on: evaluateType == 4}" @click="evaluateType = 4">差评(568)</span>
            <span :class="{on: evaluateType == 5}" @click="evaluateType = 5">有图(568)</span>
          </div>
          <div class="doctor-evaluate-main">
            <div class="doctor-evaluate-list flex-start-start" v-for="item in evaluaterList">
              <div class="doctor-evaluate-list-left">
                <img :src="item.img" />
              </div>
              <div class="doctor-evaluate-list-right">
                <div class="doctor-evaluate-name">
                  <p>{{item.name}}</p>
                </div>
                <div class="doctor-evaluate-score flex-start-center">
                  <span>综合评分</span>
                  <img v-for="(items, idx) in 5" :src="item.score > idx ? '../../../static/img/star-on.png' : '../../../static/img/star-off.png'" />
                </div>
                <div class="doctor-evaluate-introduce">
                  <p>{{item.introduce}}</p>
                  <p>{{item.time}}</p>
                </div>
                <div class="doctor-evaluate-img flex-start-start flex-wrap">
                  <img v-for="img in item.imgList" :src="img" />
                </div>
                <div class="doctor-evaluate-reply">
                  <p>医生回复：{{item.reply}}</p>
                </div>
              </div>
            </div>
          </div>
        </template>

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
    name: 'accompanyingDetail',
    props: {
      url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 2,
          searchShow: false,
          url: this.url
        },
        serviceTime: 0,
        serviceTimeData: [
          '月卡',
          '季卡',
          "年卡",
          "补差价"
        ],
        nursingLevel: 0,
        nursingLevelData: [
          "A级护理",
          "B级护理",
          "C级护理",
          "D级护理"
        ],
        otherPay: 0,
        otherPayData: [
          "预付款",
          "尾款"
        ],
        amount: 1,
        doctorDetailType: 1,
        evaluateType: 1,
        serviceStartDate: '',
        serviceEndDate: '',
        follow: false,
        doctor: {
          img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          workTime: '12',
          serviceTime: '89',
          evaluate: '98',
          name: '韩冬梅',
          sex: '女',
          age: '30',
          score: 5,
          type: '医院陪诊',
          level: '主治医师',
          company: '所属陪护公司名称',
          address: '江西赣州市立医院',
          sales: '90',
          cardState1: true,
          cardState2: true,
          servicePrice: '69.00',
          hospital: '江西赣州市立医院',
          tel: '0755-1234567',
          address: '深圳市南山区东滨路xxxx南山人民医院',
          hospitalImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          timeWeek: '周一至周五',
          timeAm: '09：00至17：00',
          timePm: '14:00至17:00'
        },
        evaluaterList: [{
            img: 'http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg',
            name: '用户名123456',
            score: 5,
            introduce: '最近一些日子，连续看了好几位耳鼻喉科的医生，每个医生个人风格，施治的观念都不相同，但是，无一例外，都拥有精湛的医术，高尚的医德以及对患者温暖体贴的态度。张医生就是这样的一位好医生。医生关爱患者，患者也应该理解支持医生的工作。患病是痛苦的，但是碰到张医生是幸运的，谢谢！',
            time: '3月29日 14：32',
            imgList: [
              'http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg',
              'http://img5.imgtn.bdimg.com/it/u=4146353662,901106135&fm=26&gp=0.jpg',
              'http://img3.imgtn.bdimg.com/it/u=2858381158,2003264847&fm=26&gp=0.jpg'
            ],
            reply: '谢谢您的支持与鼓励！！！'
          },
          {
            img: 'http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg',
            name: '用户名123456',
            score: 5,
            introduce: '最近一些日子，连续看了好几位耳鼻喉科的医生，每个医生个人风格，施治的观念都不相同，但是，无一例外，都拥有精湛的医术，高尚的医德以及对患者温暖体贴的态度。张医生就是这样的一位好医生。医生关爱患者，患者也应该理解支持医生的工作。患病是痛苦的，但是碰到张医生是幸运的，谢谢！',
            time: '3月29日 14：32',
            imgList: [
              'http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg',
              'http://img5.imgtn.bdimg.com/it/u=4146353662,901106135&fm=26&gp=0.jpg',
              'http://img3.imgtn.bdimg.com/it/u=2858381158,2003264847&fm=26&gp=0.jpg'
            ],
            reply: '谢谢您的支持与鼓励！！！'
          },
          {
            img: 'http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg',
            name: '用户名123456',
            score: 5,
            introduce: '最近一些日子，连续看了好几位耳鼻喉科的医生，每个医生个人风格，施治的观念都不相同，但是，无一例外，都拥有精湛的医术，高尚的医德以及对患者温暖体贴的态度。张医生就是这样的一位好医生。医生关爱患者，患者也应该理解支持医生的工作。患病是痛苦的，但是碰到张医生是幸运的，谢谢！',
            time: '3月29日 14：32',
            imgList: [
              'http://img0.imgtn.bdimg.com/it/u=1923368568,3957327670&fm=26&gp=0.jpg',
              'http://img5.imgtn.bdimg.com/it/u=4146353662,901106135&fm=26&gp=0.jpg',
              'http://img3.imgtn.bdimg.com/it/u=2858381158,2003264847&fm=26&gp=0.jpg'
            ],
            reply: '谢谢您的支持与鼓励！！！'
          }
        ],
        type: 2
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'my-foot': Foot
    },
    mounted() {
      //  	this.type = this.$router.query.type
    },
    methods: {
      amountChange: function() {
        if(this.amount < 1) {
          this.amount = 1
        } else if(this.amount > this.doctor.surplus) {
          this.amount = this.doctor.surplus
        }
      },
      serviceTimeBind: function(index) {
        var that = this
        that.serviceTime = index
        that.serviceTimeChange()
      },
      serviceTimeChange: function() {
        var that = this
        var dTime = new Date()
        var startTime = Date.parse(that.serviceStartDate)
        var time = 0;
        switch(that.serviceTime) {
          case 0:
            time = 30
            break;
          case 1:
            time = 90
            break;
          case 2:
            time = 365
            break;
          case 3:
            return;
        }
        that.serviceEndDate = dTime.setTime(startTime + time * 86400000)
      }
    }
  }
</script>

<style scoped>
  #accompanyingDetail {
    background-color: #fff;
  }
  
  section {
    width: 1200px;
    margin: 30px auto 60px;
  }
  
  .doctor-top {
    padding: 30px 66px 40px 20px;
    border: solid 1px #f1f1f1;
  }
  
  .doctor-top-left {
    width: 760px;
  }
  
  .doctor-evaluate {
    width: 160px;
    margin-right: 20px;
  }
  
  .follow {
    display: inline-block;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    border-radius: 30px;
    border: solid 1px #27b5b1;
    background-color: #27b5b1;
    cursor: pointer;
  }
  
  .follow.on {
    color: #27b5b1;
    background-color: #fff;
  }
  
  .doctor-evaluate img {
    width: 160px;
    height: 160px;
  }
  
  .doctor-evaluate p {
    margin-top: 20px;
    font-size: 14px;
    color: #ff6736;
  }
  
  .doctor-message {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
  }
  
  .doctor-basice {
    font-size: 18px;
    color: #333;
  }
  
  .doctor-basice span+span {
    margin-left: 5px;
  }
  
  .doctor-basice-state {
    height: 30px;
    width: 50px;
    line-height: 30px;
    text-align: center;
    margin-left: 60px;
    font-size: 16px;
    color: #fff;
    background-color: #999;
    border-radius: 5px;
  }
  
  .doctor-basice-state.on {
    background-color: #ff6736;
  }
  
  .doctor-basice span+span.doctor-basice-follow {
    height: 25px;
    line-height: 25px;
    margin-left: 50px;
    padding: 0 15px;
    font-size: 14px;
    color: #fff;
    border-radius: 25px;
    background-color: #27b5b1;
  }
  
  .doctor-other {
    line-height: 1;
  }
  
  .doctor-other p {
    width: 100%;
    margin-top: 15px;
    font-size: 16px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .doctor-other p span {
    color: #999;
  }
  
  .doctor-other p span.price {
    font-size: 16px;
    color: #ff4a60;
  }
  
  .doctor-other-amount {
    margin-top: 15px;
  }
  
  .doctor-other-amount p {
    width: auto;
    margin-top: 0;
  }
  
  .doctor-other-amount span {
    width: 18px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 16px;
    color: #ccc;
    border: solid 1px #999;
    cursor: pointer;
  }
  
  .doctor-other-amount input {
    width: 60px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    font-size: 16px;
    color: #ccc;
    outline: none;
    border-radius: 0;
    border: solid 1px #999;
  }
  
  .doctor-other-service {
    width: 460px;
  }
  
  .doctor-other-service span {
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 20px 15px 0 0;
    font-size: 12px;
    color: #999;
    border: solid 1px #e5e5e5;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .doctor-other-service span.on {
    color: #fff;
    background-color: #ff6736;
    border-color: #ff6736;
  }
  
  .doctor-service-time {
    margin-top: 20px;
  }
  
  .doctor-btn {
    margin-top: 40px;
  }
  
  .doctor-btn span {
    width: 160px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    border: solid 1px #ff6736;
    background-color: #ff6736;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .doctor-top-right {
    width: 210px;
    padding: 15px;
    border: solid 1px #f1f1f1;
  }
  
  .doctor-top-right img {
    width: 180px;
    height: 240px;
  }
  
  .doctor-top-right p {
    line-height: 1.4;
    margin-top: 5px;
    font-size: 14px;
    color: #666;
  }
  
  .doctor-top-right p span {
    font-size: 14px;
    color: #999;
  }
  
  .doctor-bottom {
    margin-top: 20px;
  }
  
  .doctor-bottom-title {
    width: 100%;
    background-color: #f3f5f9;
  }
  
  .doctor-bottom-title span {
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    font-size: 18px;
    color: #666;
    cursor: pointer;
  }
  
  .doctor-bottom-title span.on {
    color: #ff6736;
  }
  
  .doctor-bottom-title span.on:after {
    position: absolute;
    top: -2px;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #ff6736;
  }
  
  .doctor-bottom-title span+span {
    border-right: solid 1px #f1f1f1;
  }
  
  .doctor-bottom-time {
    height: 50px;
    font-size: 18px;
    color: #666;
    border-bottom: solid 1px #f1f1f1;
  }
  
  .doctor-bottom-time p+p {
    margin-left: 40px;
  }
  
  .doctor-bottom-time p span {
    color: #999;
  }
  
  .doctor-bottom h3.title {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-weight: normal;
    font-size: 24px;
    color: #666;
    border-bottom: solid 1px #f1f1f1;
  }
  
  .doctor-bottom-introduce {
    padding: 20px;
    line-height: 1.6;
    font-size: 20px;
    color: #666;
  }
  
  .doctor-bottom h4.title {
    margin: 20px 0 30px;
    text-align: center;
    font-weight: normal;
    font-size: 24px;
    color: #666;
  }
  
  .doctor-bottom-server {
    width: 100%;
  }
  
  .doctor-bottom-server img {
    width: 100%;
  }
  
  .doctor-evaluate-title {
    height: 66px;
  }
  
  .doctor-evaluate-title span {
    position: relative;
    padding-left: 20px;
    margin-left: 15px;
    font-size: 16px;
    color: #666;
    cursor: pointer;
  }
  
  .doctor-evaluate-title span.on {
    color: #ff6736;
  }
  
  .doctor-evaluate-title span:before {
    position: absolute;
    left: 0;
    top: 50%;
    content: "";
    width: 12px;
    height: 12px;
    margin-top: -6px;
    border: solid 1px #ccc;
    border-radius: 12px;
  }
  
  .doctor-evaluate-title span.on:before {
    border-color: #ff6736;
  }
  
  .doctor-evaluate-title span.on:after {
    position: absolute;
    left: 4.5px;
    top: 50%;
    content: "";
    width: 5px;
    height: 5px;
    margin-top: -1px;
    background-color: #ff6736;
    border-radius: 50%;
  }
  
  .doctor-evaluate-list {
    padding: 30px 130px 30px 20px;
    border-top: solid 1px #f1f1f1;
  }
  
  .doctor-evaluate-list-left img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border-radius: 80px;
  }
  
  .doctor-evaluate-list-right {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
    padding-top: 1px;
  }
  
  .doctor-evaluate-name {
    margin-top: 14px;
    font-size: 16px;
    color: #333;
  }
  
  .doctor-evaluate-score {
    margin-top: 15px;
    font-size: 14px;
    color: #666;
  }
  
  .doctor-evaluate-score img {
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }
  
  .doctor-evaluate-introduce {
    line-height: 32px;
    margin-top: 5px;
    font-size: 14px;
    color: #999;
  }
  
  .doctor-evaluate-introduce p+p {
    font-size: 12px;
  }
  
  .doctor-evaluate-img img {
    width: 290px;
    height: 200px;
    margin: 15px 0 0 40px;
  }
  
  .doctor-evaluate-img img:nth-of-type(3n+1) {
    margin-left: 0;
  }
  
  .doctor-evaluate-reply p {
    width: 100%;
    height: 63px;
    line-height: 63px;
    padding-left: 20px;
    margin-top: 20px;
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
    background-color: #ff6736;
  }
  
  .doctor-basice-score {
    margin-top: 20px;
  }
  
  .doctor-basice-score img {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
</style>