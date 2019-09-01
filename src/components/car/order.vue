<template>
  <div id="car">
    <my-head :login="login"/>
    <section>
      <div class="order-way" v-if="shopOlder.shopType === 1 || shopOlder.shopType === 3">
        <h6>选择配送方式</h6>
        <div class="order-way-list">
          <el-radio-group v-model="radio">
            <el-radio :label="1">送货上门</el-radio>
            <el-radio :label="2">自提</el-radio>
            <el-radio :label="3">快递速运</el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="order-address" v-if="shopOlder.receaddres.length > 0">
        <h6>收货地址</h6>
        <div class="address" @click="addVisible = true">
          <div>
            <span class="name">{{this.addressOne.receivername}}</span>
            <span>{{this.addressOne.mobile}}</span>
          </div>
          <div>{{this.addressOne.areaadress}}{{this.addressOne.addressdetail}}</div>
        </div>
      </div>
      <div class="order-address" v-else>
        <h6>收货地址</h6>
        <router-link class="address" to="/order/account">
          <div>添加收货地址</div>
        </router-link>
      </div>
      <!-- <div class="order-message">
        <h3>确认订单信息</h3>
        <div class="order-list" v-for="(item, index) in shop">
          <div class="order-list-title flex-start-center">
            <img src="../../../static/img/icon-shop-white.png">
            {{item.name}}
          </div>
          <div
            class="order-goods-list flex-start-start"
            v-for="(goods, idx) in item.list"
            :key="idx"
          >
            <img :src="goods.img">
            <div class="order-goods-right">
              <div class="order-goods-title flex-between-start">
                <span>商品信息3</span>
                <p>
                  <span>单价</span>
                  <span>数量</span>
                  <span>小计</span>
                </p>
              </div>
              <div class="order-goods-main">
                <div class="order-goods-name flex-between-start">
                  <span>{{goods.name}}</span>
                  <p>
                    <span>￥{{goods.price}}</span>
                    <span>x{{goods.amount}}</span>
                    <span>￥{{goods.price}}</span>
                  </p>
                </div>
                <p>
                  规格：
                  <span>{{goods.size}}</span>
                </p>
                <p>订单备注：{{goods.backup}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>-->
      <div class="nursing-order" v-if="nursing">
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
      </div>
      <div class="order-other">
        <p class="other flex-between-center">
          优惠券
          <span>
            <img src="../../../static/img/xiala.png">
          </span>
        </p>
        <p class="other flex-between-center">
          发票
          <span>
            <img src="../../../static/img/xiala.png">
          </span>
        </p>
      </div>
      <div class="order-last">
        <p>
          <span>合计运费：</span>
          <span>￥{{shopOlder.expressprice}}</span>
        </p>
        <p>
          <span>应付总额：</span>
          <span>￥{{shopOlder.shoplist.price}}</span>
        </p>
        <div>
          <span>提交订单</span>
        </div>
      </div>
    </section>
    <right-float/>
    <my-foot/>
    <el-dialog title="发票信息" :visible.sync="dialogVisible" width="50%">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="140px"
        class="demo-ruleForm"
      >
        <el-form-item label="">
          <el-radio-group v-model="ruleForm.radio">
            <el-radio-button label="1">电子发票</el-radio-button>
            <el-radio-button label="2">纸质发票</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="发票选项" prop="options">
          <el-radio v-model="ruleForm.options" label="1">个人</el-radio>
          <el-radio v-model="ruleForm.options" label="2">企业</el-radio>
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
        <el-button type="primary" @click="dialogVisible = false">确定</el-button>
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
  </div>
</template>

<script>
import Head from "../public/allHead.vue";
import Float from "../public/rightFloat.vue";
import Foot from "../public/allFoot.vue";
import { mapGetters } from "vuex";
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
      radio: 1,
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
      }
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
    console.log(this.$route.query);
    if (this.userInfo) {
      this.getOlder();
    } else {
      this.$message.closeAll();
      this.$message.warning("请先登陆！");
    }
  },
  methods: {
    getOlder() {
      this.post("/yiqi-api/api/Server/getservic", {
        infoId: this.$route.query.id,
        shoptype: this.$route.query.shoptype,
        token: this.userInfo.token
      })
        .then(res => {
          if (res.data.receaddres.length) {
            try {
              res.data.receaddres.forEach((item, index) => {
                if (item.isdefault === 1) {
                  this.addressOne = item;
                  throw new Error("找到了1");
                } else if (index === res.data.receaddres.length - 1) {
                  this.addressOne = res.data.receaddres[0];
                  throw new Error("找到了2");
                }
              });
            } catch (err) {
              console.log(err + "3");
            }
          }
          this.shopOlder = res.data;
        })
        .catch(err => {});
    },
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