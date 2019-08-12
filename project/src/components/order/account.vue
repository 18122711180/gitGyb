<template>
  <div id="order">
    <my-head :login='login' />
    <section class="flex-between-start">
      <order-left :num="menuNum" :otherLink="true" />
      <div class="order-main">
        <h3>账号设置</h3>
        <div class="order-frame">
          <div class="order-menu flex-start-center">
            <span v-for="(item, index) in orderMenu" :class="{on : orderMenuType == index}" @click="orderMenuType = index" :key="index">{{item}}</span>
          </div>
          <div class="account">
            <template v-if="orderMenuType == 0">
              <router-link to="/" class="account-address-title">
                <img src="../../../static/img/add-address.png" />
              </router-link>
              <div class="account-address-list" v-for="(item,index) in addressList" :key="index">
                <div class="account-address-list-top flex-between-center">
                  <p class="flex-start-center">
                    {{item.name}}
                    <span>{{item.tel}}</span>
                    <span class="on" v-if="item.state">默认</span>
                  </p>
                  <div>
                    <span>删除</span>
                    <span>编辑</span>
                  </div>
                </div>
                <div class="account-address-list-bottom flex-between-center">
                  <p>{{item.address}}</p>
                  <span v-if="!item.state">设为默认地址</span>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="account-psd">
                <el-form ref="form" :model="form" label-width="80px">
                  <el-form-item label="设置密码">
                    <el-input v-model="form.psd" placeholder="请输入新密码" show-password></el-input>
                  </el-form-item>
                  <el-form-item label="确认密码">
                    <el-input v-model="form.surePsd" placeholder="再次确定新密码" show-password @blur="surePsdBlur"></el-input>
                  </el-form-item>
                  <el-form-item label="">
                    <el-button type="primary">提交</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
    <right-float />
    <my-foot />
    <el-dialog :title="orderMenuType == 0 ? '编辑收货人地址' : '恭喜您，修改共医保密码成功!'" :visible.sync="dialogVisible" width="30%">
      <template v-if="orderMenuType == 0">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="收货人" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="tel">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="选择地区" prop="areaId">
            <el-cascader v-model="ruleForm.areaId" :options="areaData" :props="{ expandTrigger: 'hover' }" @change="handleChange">
            </el-cascader>
          </el-form-item>
          <el-form-item label="详情地址" prop="detail">
            <el-input type="textarea" v-model="ruleForm.detail" resize="none"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisible = false">保存</el-button>
			  </span>
      </template>
      <template v-else>
        <span>请妥善保管好您的密码！</span>
        <span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisible = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisible = false">重新登录</el-button>
			  </span>
      </template>

    </el-dialog>
  </div>
</template>

<script>
  import Head from '../public/allHead.vue';
  import Float from '../public/rightFloat.vue';
  import Order from '../public/orderLeft.vue';
  import Foot from '../public/allFoot.vue';
  import placeJs from '../../../static/js/place.js';
  export default {
    name: 'order',
    props: {
      url: ''
    },
    data() {
      return {
        login: {
          state: true,
          name: 'hhy',
          menu: 8,
          searchShow: false,
          orderShow: true,
          url: this.url
        },
        form: {
          psd: '',
          surePsd: ''
        },
        dialogVisible: true,
        menuNum: 6,
        orderMenuType: 0,
        orderMenu: [
          "收货地址",
          "修改密码"
        ],
        addressList: [{
            id: 11,
            state: true,
            name: '张显示',
            tel: '139****2369',
            address: '深圳市南山区招商街道沿山路43号创业壹号C101室'
          },
          {
            id: 11,
            state: false,
            name: '张显示',
            tel: '139****2369',
            address: '深圳市南山区招商街道沿山路43号创业壹号C101室'
          },
          {
            id: 11,
            state: false,
            name: '张显示',
            tel: '139****2369',
            address: '深圳市南山区招商街道沿山路43号创业壹号C101室'
          }
        ],
        ruleForm: {
          name: '',
          tel: '',
          areaId: '',
          detail: ''
        },
        rules: {
          name: [{
            required: true,
            message: '请输入收货人名字',
            trigger: 'blur',
          }],
          tel: [{
              required: true,
              message: '请输入手机号码',
              trigger: 'blur'
            },
            {
              min: 11,
              max: 11,
              message: '请输入11位的手机号码',
              trigger: 'blur'
            }
          ],
          detail: [{
            required: true,
            message: '请选择地区',
            trigger: 'change',
          }],
          detail: [{
            required: true,
            message: '请输入详情地址',
            trigger: 'blur',
          }],
        },
        areaData: areajson, // 省市区json
        areaName: ''
      }
    },
    components: {
      'my-head': Head,
      'right-float': Float,
      'order-left': Order,
      'my-foot': Foot
    },
    methods: {
      surePsdBlur: function() {
        var that = this
        if(that.form.psd != that.form.surePsd) {
          that.$message.error("两次密码不一致")
        }
      },
      handleChange: function(item) {
        var that = this
        that.areaName = that.palceSelect(item)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      palceSelect(item) {
        var that = this
        var placeArray = new Array()
        for(var i in areajson) {
          if(areajson[i].value == item[0]) {
            placeArray.push(areajson[i].label)
            for(var j in areajson[i].children) {
              if(areajson[i].children[j].value == item[1]) {
                placeArray.push(areajson[i].children[j].label)
                for(var k in areajson[i].children[j].children) {
                  if(areajson[i].children[j].children[k].value == item[2]) {
                    placeArray.push(areajson[i].children[j].children[k].label)
                    return placeArray
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</script>

<style scoped>
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
  
  .order-main {
    width: 1050px;
  }
  
  .order-main h3 {
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    font-weight: normal;
    font-size: 16px;
    color: #333;
    background-color: #fff;
  }
  
  .order-frame {
    width: 100%;
    padding: 0 20px 40px;
    margin-top: 10px;
    background-color: #fff;
  }
  
  .order-menu {
    height: 60px;
    font-size: 14px;
    color: #666;
  }
  
  .order-menu span {
    line-height: 18px;
    height: 18px;
    padding: 0 26px;
    cursor: pointer;
  }
  
  .order-menu span:first-child {
    padding-left: 0;
  }
  
  .order-menu span.on {
    color: #ff6736;
  }
  
  .account-address-title {
    margin-top: 20px;
  }
  
  .account-address-title img {
    width: 174px;
    height: 70px;
  }
  
  .account-address-list {
    width: 700px;
    padding: 20px;
    margin-top: 20px;
    font-size: 16px;
    color: #666;
    border: solid 1px #e5e5e5;
  }
  
  .account-address-list-top p {
    color: #333;
  }
  
  .account-address-list-top p span {
    margin-left: 20px;
    color: #666;
  }
  
  .account-address-list-top p span.on {
    width: 36px;
    height: 17px;
    line-height: 17px;
    text-align: center;
    margin-left: 10px;
    font-size: 12px;
    color: #ff6736;
    border: solid 1px #ff6736;
    border-radius: 3px;
  }
  
  .account-address-list-top div span {
    margin: 0 10px;
    font-size: 12px;
    color: #ccc;
    cursor: pointer;
  }
  
  .account-address-list-bottom {
    margin-right: 15px;
    line-height: 1.4;
  }
  
  .account-address-list-bottom p {
    width: 500px;
  }
  
  .account-address-list-bottom span {
    font-size: 12px;
    color: #ccc;
    cursor: pointer;
  }
  
  .account-psd {
    margin: 58px 360px 0 298px;
  }
</style>

<style>
  .search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #ff6736;
  }
  
  .search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #ff6736;
  }
  
  #order .head-second-bg {
    background-color: #fafafa;
  }
  
  .account-psd .el-button {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding: 0;
    background: #ff6736;
    border-color: #ff6736;
  }
</style>