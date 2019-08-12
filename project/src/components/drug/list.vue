<template>
  <div id="drug">
    <my-head :login='login' />
    <section>
      <div class="banner">
        <img :src="drug.banner" />
      </div>
      <div class="section-center">
        <div class="drug-list" v-for="(item, index) in drug.list" :key="index">
          <div class="drug-list-top flex-between-center">
            <div class="drug-list-top-message flex-start-start">
              <img class="photo" :src="item.img" />
              <div class="drug-list-top-message-right">
                <h3 class="flex-start-center">{{item.name}} <span>{{item.state}}</span></h3>
                <p>{{item.time}}</p>
                <p><span>地址:</span>{{item.address}}</p>
                <p class="green flex-start-center">
                  <img src="../../../static/img/doctor-sure.png" /> 医保定点
                  <img src="../../../static/img/doctor-sure.png" /> 送药上门服务
                  <img class="icon-why" src="../../../static/img/icon-why.png" style="cursor: pointer;" @click="openTis"/>
                </p>
                <p class="flex-start-center">
                  <span>电话:</span>{{item.tel}}
                  <img src="../../../static/img/doctor-tel.png" style="margin-left: 30px;" /> 在线驻店药师咨询
                </p>
              </div>
            </div>
            <div class="btn" @click="dialogFormVisible = true">
              一键通知药房备药
            </div>
          </div>
          <div class="drug-list-bottom">
            <el-table :data="item.list" border style="width: 100%">
              <el-table-column prop="name" label="药品名称" align="center" height="47" label-class-name="druge-list-bottom-title">
              </el-table-column>
              <el-table-column prop="amount" label="需求量" align="center" height="47" label-class-name="druge-list-bottom-title">
                <template slot-scope="scope">
                  <input class="drug-list-bottom-amount" type="number" v-model="scope.row.amount" @change=" scope.row.amount = amountChange(scope.row.amount)" />
                </template>
              </el-table-column>
              <el-table-column prop="size" align="center" label="规格" height="47" label-class-name="druge-list-bottom-title">
              </el-table-column>
              <el-table-column prop="price" align="center" label="价格" height="47" label-class-name="druge-list-bottom-title">
              </el-table-column>
            </el-table>
          </div>

        </div>
      </div>
    </section>
    <right-float />
    <my-foot />

    <el-dialog title="一键备药" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form">
        <el-form-item label="购药人姓名：" label-width="120px">
          <el-input v-model="form.myName"></el-input>
        </el-form-item>
        <el-form-item label="联系方式:：" label-width="120px">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="指导医生：" label-width="120px">
          <el-input v-model="form.doctorName"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="danger" @click="dialogFormVisible = false">一键通知</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import Head from '../public/allHead.vue';
  import Float from '../public/rightFloat.vue';
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
          menu: 6,
          searchShow: false,
          url: this.url
        },
        form: {
          myName: '',
          tel: '',
          doctorName: ''
        },
        dialogFormVisible: false,
        drug: {
          banner: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
          list: [{
              id: 11,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '益丰大药房',
              state: '营业中',
              time: '上午:0:00至12：00',
              address: '广东省深圳市南山区东滨路xxxx花园城',
              tel: '0755-1234567',
              list: [{
                  id: 1,
                  name: '感冒灵颗粒 (999)',
                  amount: 1,
                  size: '0.15g*6s /盒',
                  price: '89.00'
                },
                {
                  id: 1,
                  name: '感冒灵颗粒 (999)',
                  amount: 1,
                  size: '0.15g*6s /盒',
                  price: '89.00'
                }
              ]
            },
            {
              id: 11,
              img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg',
              name: '益丰大药房',
              state: '营业中',
              time: '上午:0:00至12：00',
              address: '广东省深圳市南山区东滨路xxxx花园城',
              tel: '0755-1234567',
              list: [{
                  id: 1,
                  name: '感冒灵颗粒 (999)',
                  amount: 1,
                  size: '0.15g*6s /盒',
                  price: '89.00'
                },
                {
                  id: 1,
                  name: '感冒灵颗粒 (999)',
                  amount: 1,
                  size: '0.15g*6s /盒',
                  price: '89.00'
                }
              ]
            }
          ]
        }
      }
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'right-float': Float,
      'my-foot': Foot
    },
    methods: {
      amountChange: function(val) {
        var that = this
        console.log(val)
        if(val < 1) {
          val = 1
        } else if(val > 90) {
          val = 90
        }
        return val
      },
      openTis: function(){
      	this.$alert('送药上门服务是由顾客所选药房提供，如您 需购买处方药，则请您备好职业医师开具的 纸质处方(非处方药则不需要)后联系药房 提供服务', '送药上门服务须知',  {
          confirmButtonText: '确定'
        })
      }
    }
  }
</script>

<style scoped>
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
  
  .drug-list {
    width: 100%;
    padding: 30px;
    margin-top: 30px;
    background-color: #fff;
  }
  
  .drug-list-top-message .photo {
    width: 200px;
    height: 120px;
    margin-right: 20px;
    border: solid 1px #f1f1f1;
  }
  
  .drug-list-top-message-right {
    line-height: 1;
  }
  
  .drug-list-top-message-right h3 {
    font-size: 20px;
    color: #666;
  }
  
  .drug-list-top-message-right h3 span {
    width: 48px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    margin-left: 20px;
    font-size: 12px;
    color: #fff;
    background-color: #ff6736;
    border-radius: 3px;
  }
  
  .drug-list-top-message-right p {
    margin-top: 14px;
    font-size: 16px;
    color: #666;
  }
  
  .drug-list-top-message-right p span {
    color: #999;
  }
  
  .drug-list-top-message-right p.green {
    color: #27B5B1;
  }
  
  .drug-list-top-message-right p img {
    width: auto;
    height: auto;
    margin-right: 5px;
  }
  
  .drug-list-top-message-right p img:nth-of-type(n+2) {
    margin-left: 8px;
  }
  
  .drug-list-top .btn {
    width: 160px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #ff6736;
    border-radius: 5px;
  }
  
  .drug-list-bottom {
    margin-top: 20px;
  }
</style>

<style>
  .el-table th.druge-list-bottom-title {
    height: 47px;
    line-height: 47px;
    padding: 0;
    color: #fff;
    background-color: #ff6736;
  }
  
  .drug-list-bottom-amount {
    height: 22px;
    width: 50px;
    text-align: center;
    outline: none;
    border: solid 1px #666
  }
</style>