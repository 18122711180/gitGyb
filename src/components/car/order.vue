<template>
  <div id="car">
    <my-head :login="login" />
    <section>
      <div class="order-way" v-if="shop.type == 3">
        <h6>选择配送方式</h6>
        <div class="order-way-list">
          <el-radio-group v-model="radio" @change="getTotal()">
            <el-radio :label="0">送货上门</el-radio>
            <el-radio :label="1">自提</el-radio>
            <el-radio :label="2">快递速运</el-radio>
          </el-radio-group>
        </div>
      </div>
      <template v-if="shop.type == 3 && radio == 0">
        <div class="order-way">
          <el-radio-group v-model="gotime" @change="getapptime">
            <el-radio :label="0">立即送出</el-radio>
            <el-radio :label="1">预约送达（{{apptime}}）</el-radio>
          </el-radio-group>
        </div>
      </template>
      <template v-if="shop.type == 3 && (!radio || radio == 2)">
        <!-- <div class="order-address">
          <h6>收货地址</h6>
          <div class="address" @click="addVisible = true">
            <div>
              <span class="name">{{this.addressOne.receivername}}</span>
              <span>{{this.addressOne.mobile}}</span>
            </div>
            <div>{{this.addressOne.areaadress}}{{this.addressOne.addressdetail}}</div>
          </div>
        </div>-->
        <div class="order-address" v-if="!addressOne">
          <h6>收货地址</h6>
          <router-link class="address" :to="({path:'/order/account',query:{id:infoId}})">
            <div>添加收货地址</div>
          </router-link>
        </div>
        <div class="order-address" v-else>
          <h6>收货地址</h6>
          <router-link class="address" :to="({path:'/order/account',query:{id:infoId}})">
            <div>
              <span class="name">{{addressOne.receivername}}</span>
              <span>{{addressOne.mobile}}</span>
            </div>
            <div>{{addressOne.areaadress}}{{addressOne.addressdetail}}</div>
          </router-link>
        </div>
      </template>
      <div class="order-message">
        <h3>确认订单信息</h3>
        <div class="order-list">
          <div class="order-list-title flex-start-center">
            <img src="../../../static/img/icon-shop-white.png" />
            商品信息
          </div>
          <div
            class="order-goods-list flex-start-start"
            v-for="(goods, idx) in shop.shoplist"
            :key="idx"
          >
            <img :src="goods.shopimage" />
            <div class="order-goods-right">
              <div class="order-goods-title flex-between-start">
                <span>商品信息</span>
                <p>
                  <span>单价</span>
                  <span>数量</span>
                  <!-- <span>小计</span> -->
                </p>
              </div>
              <div class="order-goods-main">
                <div class="order-goods-name flex-between-start">
                  <span>{{goods.shoptitle}}</span>
                  <p>
                    <span>￥{{goods.price}}</span>
                    <span>x{{goods.shopcount}}</span>
                    <!-- <span>￥{{goods.price}}</span> -->
                  </p>
                </div>
                <!-- <p>
                  规格：
                  <span>{{goods.size}}</span>
                </p>-->
                <!-- <p>订单备注：{{goods.backup}}</p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="nursing-order">
        <el-form
          :model="nRuleForm"
          :rules="nRules"
          ref="nRuleForm"
          label-width="140px"
          class="demo-ruleForm"
        >
          <el-form-item label="选择配送方式" prop="radio">
            <el-radio v-model="nRuleForm.radio" label="1">个人</el-radio>
            <el-radio v-model="nRuleForm.radio" label="2">企业</el-radio>
          </el-form-item>
          <template v-if="nRuleForm.radio==2">
            <el-form-item label="本人姓名" prop="name">
              <el-input v-model="nRuleForm.name" placeholder="请输入代叫人姓名"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="tel">
              <el-input v-model="nRuleForm.tel" placeholder="请输入手机号">></el-input>
            </el-form-item>
            <el-form-item lable="代人挂号"></el-form-item>
            <el-form-item lable="身份证号" prop="card1">
              <el-input v-model="nRuleForm.card1" placeholder="请输入身份证号"></el-input>
            </el-form-item>
            <el-form-item lable="就诊卡号" prop="card2">
              <el-input v-model="nRuleForm.card2" placeholder="就诊卡号"></el-input>
            </el-form-item>
            <el-form-item lable="医保卡号" prop="card3">
              <el-input v-model="nRuleForm.car31" placeholder="医保卡号"></el-input>
            </el-form-item>
          </template>
        </el-form>
      </div>-->
      <div class="order-other">
        <template>
          <p class="other flex-between-center">
            优惠券
            <span>
              0
              <img src="../../../static/img/xiala.png" />
            </span>
          </p>
          <!-- <el-select v-if="couponData.length" v-model="couponList" placeholder="请选择">
            <el-option
              v-for="item in couponData"
              :key="item.id"
              :label="item.couponname"
              :value="item.id"
            ></el-option>
          </el-select>-->
        </template>
        <p style="cursor: pointer" class="other flex-between-center" @click="dialogVisible = true">
          发票
          <span>
            {{invoice ? invoice : "本次不开具发票"}}
            <img src="../../../static/img/xiala.png" />
          </span>
        </p>
      </div>
      <div class="order-last">
        <template v-if="shop.type">
        <p v-if="radio == 0">
          <span>运费：</span>
          <span>￥{{shop.distribution}}</span>
        </p>
        <p v-if="radio == 2">
          <span>配送费：</span>
          <span>￥{{shop.expressprice}}</span>
        </p>
        </template>
        <p>
          <span>应付总额：</span>
          <span>￥{{newTotal}}</span>
        </p>
        <div>
          <span @click="submit" style="cursor: pointer;">提交订单</span>
        </div>
      </div>
    </section>
    <right-float />
    <my-foot />
    <el-dialog title="发票信息" :visible.sync="dialogVisible" width="50%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="140px"
        class="demo-ruleForm"
      >
        <el-form-item label>
          <el-radio-group v-model="ruleForm.radio">
            <el-radio-button label="1">电子发票</el-radio-button>
            <el-radio-button label="2">纸质发票</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="发票选项" prop="options">
          <el-radio v-model="ruleForm.options" label="1">企业</el-radio>
          <el-radio v-model="ruleForm.options" label="2">个人</el-radio>
        </el-form-item>
        <el-form-item label="发票抬头" prop="name">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名/企业名称"></el-input>
        </el-form-item>
        <el-form-item label="纳税人识别号" prop="code">
          <el-input v-model="ruleForm.code" placeholder="请输入纳税人识别号">></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="tel">
          <el-input v-model="ruleForm.tel" placeholder="请输入手机号">></el-input>
        </el-form-item>
        <el-form-item :label="ruleForm.radio == 1 ? '邮箱地址' : '收货地址'" prop="address">
          <el-input
            v-model="ruleForm.address"
            :placeholder="ruleForm.radio == 1 ? '用于接收电子发票' : '用于接收纸质发票'"
          >></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="invoicebtn">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="发票信息" :visible.sync="dialogTime" width="50%">
      <div>
        <el-form ref="form" :model="formtime" label-width="80px">
          <el-form-item label="选择日期">
            <el-select v-model="formtime.date" placeholder="选择日期">
              <el-option label="今天" value="今天"></el-option>
              <el-option label="明天" value="明天"></el-option>
              <el-option label="后天" value="后天"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="选择时间">
            <el-select v-model="formtime.time" placeholder="选择时间">
              <el-option
                v-for="(item, index) in timeselect"
                :key="index"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTime = false">取 消</el-button>
        <el-button type="primary" @click="timeok">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="收货地址" :visible.sync="addVisible" width="50%">
      <div class="order-address">
        <div
          class="address"
          v-for="(item,index) in shopOlder.receaddres"
          :key="index"
          @click="addressOne = item,addVisible =false"
        >
          <div>
            <span class="name">{{item.receivername}}</span>
            <span>{{item.mobile}}</span>
          </div>
          <div>{{item.areaadress}}{{item.addressdetail}}</div>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="微信支付" :visible.sync="imgshow" width="40%">
      <div class="order-address" style="display: flex; align-items: center; justify-content: center; height: 40vh">
        <img :src="wximg" style="width: 300px; height: 300px" />
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Foot from "../public/allFoot.vue";
import { mapGetters } from "vuex";
import { getOrder, getAddress } from "@/utils/auth";
import { throws } from "assert";
export default {
  name: "car",
  props: {
    url: ""
  },
  data() {
    return {
      addVisible: false,
      login: {
        state: true,
        name: "hhy",
        menu: 8,
        searchShow: false,
        orderShow: true,
        url: this.url
      },
      nursing: true,
      radio: 0,
      address: {
        name: "张先生",
        tel: "139****2369",
        address: "深圳市南山区招商街道沿山路43号创业壹号C101室"
      },
      shopOlder: {},
      addressOne: "",
      postPrice: "0.00",
      total: "90.00",
      dialogVisible: false,
      dialogTime: false,
      ruleForm: {
        name: "",
        code: "",
        tel: "",
        areaId: "",
        radio: "1",
        options: "1",
        address: ""
      },
      rules: {
        options: [
          {
            required: true,
            message: "请选择发票选项",
            trigger: "change"
          }
        ],
        name: [
          {
            required: true,
            message: "请输入收货人名字",
            trigger: "blur"
          }
        ],
        code: [
          {
            required: true,
            message: "请输入纳税人识别号",
            trigger: "blur"
          }
        ],
        tel: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "blur"
          },
          {
            min: 11,
            max: 11,
            message: "请输入11位的手机号码",
            trigger: "blur"
          }
        ],
        address: [
          {
            required: true,
            message: "请输入地址",
            trigger: "blur"
          }
        ]
      },
      shop: "",
      newTotal: "",
      couponPrice: 0,
      couponData: [],
      couponList: "",
      invoice: "",
      infoId: "",
      gotime: 0,
      apptime: "今天",
      formtime: {
        date: "今天",
        time: 0
      },
      timeselect: [],
      nRuleForm: {
        name: "",
        tel: "",
        radio: "1",
        card1: "",
        card2: "",
        card3: ""
      },
      nRules: {
        name: [
          {
            required: true,
            message: "请输入收货人名字",
            trigger: "blur"
          }
        ],
        tel: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "blur"
          },
          {
            min: 11,
            max: 11,
            message: "请输入11位的手机号码",
            trigger: "blur"
          }
        ],
        card1: [
          {
            required: true,
            message: "请输入身份证号",
            trigger: "blur"
          }
        ],
        card2: [
          {
            required: true,
            message: "请输入就诊卡号",
            trigger: "blur"
          }
        ],
        card3: [
          {
            required: true,
            message: "请输入医保卡号",
            trigger: "blur"
          }
        ]
      },
      wximg: '',
      imgshow: false
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  components: {
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  },
  created() {
    // console.log(this.$route.query);
    // if (this.userInfo) {
    //   this.getOlder();
    // } else {
    //   this.$message.closeAll();
    //   this.$message.warning("请先登陆！");
    // }
    this.shop = getOrder();
    this.addressOne = getAddress();
    this.infoId = this.$route.query.id;
    this.couponData = this.shop.coupon;
    this.getTotal();
    var time = new Date();
    this.apptime += time.getHours() + 1 + ":00";

    var hours = time.getHours();
    for (var i = 0; i < 12; i++) {
      hours++;
      if (hours > 23) {
        this.timeselect.push({
          id: i,
          name: this.click(hours - 24) + ":00"
        });
      } else {
        this.timeselect.push({
          id: i,
          name: this.click(hours) + ":00"
        });
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getTotal() {
      var that = this,
        total = 0;
      if (that.shop.type == 3) {
        if (that.radio == 0) {
          total =
            parseInt(
              that.shop.countprice * 100 +
                that.shop.distribution * 100 -
                that.couponPrice * 100
            ) / 100;
        } else if (that.radio == 1) {
          total =
            parseInt(that.shop.countprice * 100 - that.couponPrice * 100) / 100;
        } else {
          total =
            parseInt(
              that.shop.countprice * 100 +
                that.shop.expressprice * 100 -
                that.couponPrice * 100
            ) / 100;
        }
      } else {
        total =
          parseInt(that.shop.countprice * 100 - that.couponPrice * 100) / 100;
      }
      console.log(total);
      if (total <= 0) {
        total = "0.01";
      }
      this.newTotal = total;
    },
    invoicebtn() {
      var that = this;
      if (!this.ruleForm.name) {
        this.$message.error("请输入发票抬头");
        return;
      }
      if (!this.ruleForm.code) {
        this.$message.error("请输入纳税人识别号");
        return;
      }
      if (!this.ruleForm.tel) {
        this.$message.error("请输入手机号码");
        return;
      }

      if (this.ruleForm.tel.length < 11) {
        this.$message.error("请输入11位的手机号码");
        return;
      }

      if (!this.ruleForm.address) {
        this.$message.error("请输入邮箱地址");
        return;
      }

      this.invoice = this.ruleForm.name;
      this.dialogVisible = false;
    },
    getapptime() {
      if (this.gotime == 1) {
        this.dialogTime = true;
      }
    },
    submit() {
      var that = this;
      var addressid = 0;
      var couponid = 0;
      var orderinvoice = 0;
      if (this.invoice) {
        orderinvoice = 1;
      }
      

      if(this.shop.type == 3 && (!this.radio || this.radio == 2)){
        if(!this.addressOne){
          this.$message.error("请输入地址");
        return;
        }
        if (this.addressOne) {
        addressid = this.addressOne.id;
      }
      }
      var newform = {
        token: this.userInfo.token,
        orderName: this.shop.shoplist[0].shopname,
        orderBody: this.shop.shoplist[0].shoptitle,
        orderByPrice: this.shop.shoplist[0].price,
        orderImage: this.shop.shoplist[0].shopimage,
        orderpaytype: 4,
        orderId: this.shop.infoid,
        addressid: addressid,
        couponid: couponid,
        dispatchingtype: this.radio,
        deliverytime: this.apptime,
        orderinvoice: orderinvoice,
        invtype: Number(this.ruleForm.radio),
        invobject: Number(this.ruleForm.options),
        invrise: this.ruleForm.name,
        identifynumber: this.ruleForm.code,
        mobile: this.ruleForm.tel,
        invaddress: this.ruleForm.address,
        orderType: Number(this.shop.shopType)
      };

      this.post("/yiqi-api/api/perorder/AliPayOrder", newform)
        .then(res => {
          console.log(res);
          this.imgshow = true;
          this.wximg = "http://120.79.226.99:8080/yiqi-api/api/perorder/createQrCode?data="+res.data.wxk.code_url          
        })
        .catch(err => {
          // this.$message.error(err.msg);
        });
    },
    click: function(a) {
      if (a < 10) {
        a = "0" + a;
      }
      return a;
    },
    timeok() {
      this.dialogTime = false;
      this.apptime =
        this.formtime.date + this.timeselect[this.formtime.time].name;
    }
  }
};
</script>

<style scoped>
#car {
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
  margin: 0 auto 100px;
  border-top: solid 1px #f1f1f1;
}

.order-way {
  margin-top: 29px;
}

.order-way h6 {
  font-weight: normal;
  font-size: 16px;
  color: #666;
}

.order-way-list {
  margin-top: 12px;
}

.order-address {
  margin-top: 30px;
}

.order-address h6 {
  font-weight: normal;
  font-size: 16px;
  color: #666;
}

.order-address .address {
  display: block;
  width: 697px;
  padding: 15px;
  margin-top: 15px;
  font-size: 16px;
  color: #666;
  border: solid 1px #ccc;
}

.order-address .address span.name {
  margin-right: 20px;
  color: #333;
}

.order-address .address div + div {
  margin-top: 10px;
}

.order-message h3 {
  margin: 30px 0 0;
  font-weight: normal;
  font-size: 16px;
  color: #666;
}

.order-list {
  margin-top: 16px;
  border: solid 1px #ff6736;
}

.order-list-title {
  width: 100%;
  padding: 0 20px;
  height: 40px;
  font-size: 14px;
  color: #fff;
  background-color: #ff6736;
}

.order-list-title img {
  width: 22px;
  height: 21px;
  margin-right: 10px;
}

.order-goods-list {
  padding: 30px 20px 20px;
}

.order-goods-list + .order-goods-list {
  border-top: solid 1px #ff6736;
}

.order-goods-list img {
  width: 100px;
  height: 100px;
  margin: 30px 40px 0 0;
}

.order-goods-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.order-goods-title {
  height: 40px;
}

.order-goods-title span {
  width: 300px;
  font-size: 16px;
  color: #999;
}

.order-goods-title p span {
  display: inline-block;
  width: 140px;
  text-align-last: center;
}

.order-goods-main p {
  margin-top: 8px;
  font-size: 14px;
  color: #666;
}

.order-goods-main p span {
  color: #333;
}

.order-goods-name span {
  width: 300px;
  font-size: 16px;
  color: #333;
}

.order-goods-name p span {
  display: inline-block;
  width: 140px;
  text-align-last: center;
  color: #333;
}

.order-other .other {
  width: 100%;
  height: 56px;
  margin-top: 30px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;
  background-color: #f7f7f7;
}

.order-other .other img {
  width: 16px;
  height: 9px;
  transform: rotate(-90deg);
}

.order-last {
  text-align: right;
  margin-top: 50px;
}

.order-last p {
  font-size: 16px;
  color: #999;
}

.order-last span {
  display: inline-block;
  width: 200px;
}

.order-last p + p {
  margin-top: 10px;
  color: #333;
}

.order-last p + p span {
  color: #ff6736;
}

.order-last div span {
  display: inline-block;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #fff;
  border-radius: 5px;
  background-color: #ff6736;
}

.nursing-order {
  margin-top: 20px;
}
</style>

<style>
.search-page .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #ff6736;
}

.search-page .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #ff6736;
}

#car .el-radio__input.is-checked .el-radio__inner {
  border-color: #ff6736;
  background-color: #ff6736;
}

#car .el-radio__input.is-checked + .el-radio__label {
  color: #ff6736;
}
</style>