<template>
  <div id="complain">
    <my-head :login='login' />
    <section>
      <div class="exchange-top flex-start-start">
        <img :src="goods.img">
        <div class="exchange-top-right">
          <h3>{{goods.name}}</h3>
          <p><span>规格：</span>{{goods.size}}</p>
        </div>
      </div>
      <div class="exchange-bottom">
        <div class="exchange-bottom-list">
          <p>请选择投诉类型</p>
          <div class="exchange-bottom-list-right flex-start-start">
            <span class="exchange-bottom-list-radio" :class="{on: serviceType == 0}" @click="serviceType = 0">纠纷</span>
            <span class="exchange-bottom-list-radio" :class="{on: serviceType == 1}" @click="serviceType = 1">不良反应</span>
            <span class="exchange-bottom-list-radio" :class="{on: serviceType == 2}" @click="serviceType = 2">质量事故</span>
          </div>
        </div>
        <template v-if="serviceType == 0">
          <div class="exchange-bottom-list">
            <p>请选择投诉类型:</p>
            <div class="exchange-bottom-list-right">
              <textarea placeholder="请简单描述您遇到的问题" v-model="questionDetail"></textarea>
            </div>
          </div>
          <div class="exchange-bottom-list">
            <p>上传图片:</p>
            <div class="exchange-bottom-list-right">
              <div class="flex-start-start flex-wrap">
                <template v-for="(image , index) in imageList" v-if="imageList.length">
                  <div class="weui-uploader__file">
                    <img class="weui-uploader__img" :src="image.url" />
                    <img class='img-delete' src='img/img-delete.png' @click='previewImageDelete(index)' />
                  </div>
                </template>
                <el-upload class="avatar-uploader" action="" list-type="picture-card" :show-file-list="false" :multiple="true" ref="upload" :file-list="imageList" :limit="maxImageLength" :on-success="previewImage" :on-exceed="overImage">
                  <div class="weui-uploader__input-box">
                    <div class="weui-uploader__input">{{imageList.length}}/5</div>
                  </div>
                </el-upload>
              </div>
            </div>
          </div>
        </template>

        <template v-else-if="serviceType == 1">
          <div class="exchange-title">
            <p>A.患者资料</p>
          </div>
          <div class="exchange-bottom-list">
            <p>患者姓名:</p>
            <div class="exchange-bottom-list-right">
              <input placeholder="请输入患者名字" v-model="formA.name" />
            </div>
          </div>
          <div class="exchange-bottom-list">
            <p>年龄:</p>
            <div class="exchange-bottom-list-right">
              <input placeholder="请输入患者年龄" v-model="formA.age" />
            </div>
          </div>
          <div class="exchange-bottom-list">
            <p>性别:</p>
            <div class="exchange-bottom-list-right flex-start-start">
              <span class="exchange-bottom-list-radio" :class="{on: formA.sexType == 0}" @click="formA.sexType = 0">男</span>
              <span class="exchange-bottom-list-radio" :class="{on: formA.sexType == 1}" @click="formA.sexType = 1">女</span>
            </div>
          </div>
          <div class="exchange-bottom-list">
            <p>预期治疗病或费用:</p>
            <div class="exchange-bottom-list-right">
              <textarea placeholder="请输入预期治疗病或费用" v-model="formA.price"></textarea>
            </div>
          </div>
          <div class="exchange-title">
            <p>A.不良事件情况</p>
          </div>
          <div class="exchange-bottom-list">
            <p>事件主要表现:</p>
            <div class="exchange-bottom-list-right">
              <textarea placeholder="请输入相应内容..." v-model="formB.expressive"></textarea>
            </div>
          </div>
          <div class="exchange-bottom-list">
            <p>事件发生得日期:</p>
            <div class="exchange-bottom-list-right">
              <el-date-picker v-model="formB.date" type="date" placehloder="选择日期">
              </el-date-picker>
            </div>
          </div>
          <div class="exchange-bottom-list">
            <p>医疗器械得实际使用场所:</p>
            <div class="exchange-bottom-list-right">
              <textarea placeholder="请输入相应内容..." v-model="formB.place"></textarea>
            </div>
          </div>
          <div class="exchange-bottom-list">
            <p>事件的后果:</p>
            <div class="exchange-bottom-list-right flex-start-start flex-wrap" style="width: 600px">
              <span class="exchange-bottom-list-radio" :class="{on: formB.sequel == 0}" @click="formB.sequel = 0">死亡</span>
              <span class="exchange-bottom-list-radio" :class="{on: formB.sequel == 1}" @click="formB.sequel = 1">威胁生命</span>
              <span class="exchange-bottom-list-radio" :class="{on: formB.sequel == 2}" @click="formB.sequel = 2">机体功能永久损伤</span>
              <span class="exchange-bottom-list-radio" :class="{on: formB.sequel == 3}" @click="formB.sequel = 3">需要内，外科治疗避免上述永久损伤</span>
              <span class="exchange-bottom-list-radio" :class="{on: formB.sequel == 4}" @click="formB.sequel = 4">其他（再事件陈述中说明）</span>
            </div>
            <div class="exchange-bottom-list-right">
              <textarea placeholder="请输入事件陈述内容..." v-model="formB.sentence"></textarea>
            </div>
          </div>
          <div class="exchange-bottom-list">
            <p>操作人员:</p>
            <div class="exchange-bottom-list-right flex-start-start flex-wrap" style="width: 600px">
              <span class="exchange-bottom-list-radio" :class="{on: formB.oper == 0}" @click="formB.oper = 0">专业人员</span>
              <span class="exchange-bottom-list-radio" :class="{on: formB.oper == 1}" @click="formB.oper = 1">非专业人员</span>
              <span class="exchange-bottom-list-radio" :class="{on: formB.oper == 2}" @click="formB.oper = 2">患者</span>
              <span class="exchange-bottom-list-radio" :class="{on: formB.oper == 3}" @click="formB.oper = 3">其他</span>
            </div>
          </div>
          <div class="exchange-bottom-list">
            <p>植入日期（若植入）:</p>
            <div class="exchange-bottom-list-right">
              <el-date-picker v-model="formB.planDate" type="date" placehloder="选择日期">
              </el-date-picker>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="exchange-bottom-list complain-accident">
            <div class="exchange-bottom-list-right flex-start-start flex-column">
              <span class="exchange-bottom-list-radio" :class="{on: accidentType == 0}" @click="accidentType = 0">1、危及生命</span>
              <span class="exchange-bottom-list-radio" :class="{on: accidentType == 1}" @click="accidentType = 1">2、导致机体功能得永久性伤害或机体机构得永久性损伤</span>
              <span class="exchange-bottom-list-radio" :class="{on: accidentType == 2}" @click="accidentType = 2">3、必须采取医疗措施才能避免上述永久性伤害或者损伤</span>
            </div>
          </div>
        </template>

        <div class="exchange-submit" @click="submit">
          <span>提交</span>
        </div>
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
        goods: {
          img: 'http://a.huchiu.com/gwcss_js_image/images/home-img-pic2.png',
          name: '凯胜（KASON）速度型高碳纤维钛金属羽毛球拍单拍',
          size: 'L',
          amount: 1,
          price: '109.00'
        },
        questionDetail: '',
        formA: {
          name: '',
          age: '',
          sexType: 0,
          price: ''
        },
        formB: {
          expressive: '',
          place: '',
          date: '',
          sequel: 0,
          sentence: '',
          oper: 0,
          planDate: ''
        },
        serviceType: 0,
        accidentType: 0,
        imageList: [],
        maxImageLength: 5
      }
    },
    components: {
      'my-head': Head,
      'right-float': Float,
      'my-foot': Foot
    },
    methods: {
      previewImage: function(res, file, fileList) {
        var that = this
        for(var i in fileList) {
          that.imageList = fileList
        }
      },
      previewImageDelete: function(index) {
        this.imageList.splice(index, 1)
        this.$refs.upload.uploadFiles = this.imageList
      },
      overImage: function() {
        this.$message.error('上传图片不能超过9张')
      },
      submit: function() {
        var that = this
        if(that.serviceType == 0) {
          if(!that.questionDetail) {
            this.$message.error('请输入问题描述')
            return
          }
          if(!that.imageList.length) {
            this.$message.error('请上传图片')
            return
          }
        } else if(that.serviceType == 1) {
          if(!that.formA.name) {
            this.$message.error('请输入患者名字')
            return
          }
          if(!that.formA.age) {
            this.$message.error('请输入患者年龄')
            return
          }
          if(!that.formA.price) {
            this.$message.error('请输入预期治疗病或费用')
            return
          }
          if(!that.formB.expressive) {
            this.$message.error('请输入事件主要表现')
            return
          }
          if(!that.formB.date) {
            this.$message.error('请选择事件发生的日期')
            return
          }
          if(!that.formB.place) {
            this.$message.error('请输入医疗器械得实际使用场所')
            return
          }
          if(!that.formB.sentence) {
            this.$message.error('请输入事件陈述内容')
            return
          }
          if(!that.formB.planDate) {
            this.$message.error('请选择植入时间')
            return
          }
        }
      }
    }
  }
</script>

<style scoped>
  #complain {
    background-color: #f4f6f9;
  }
  
  section {
    width: 1200px;
    margin: 30px auto 60px;
    background-color: #fff;
  }
  
  .exchange-top {
    padding: 40px;
    border-bottom: solid 1px #f1f1f1;
  }
  
  .exchange-top img {
    width: 100px;
    height: 100px;
    margin-right: 30px;
    border-radius: 5px;
  }
  
  .exchange-top-right {
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
  }
  
  .exchange-top-right h3 {
    line-height: 1.6;
    font-size: 18px;
    color: #333;
  }
  
  .exchange-top-right p {
    margin-top: 15px;
    font-size: 16px;
    color: #999;
  }
  
  .exchange-top-right p span {
    color: #333;
  }
  
  .exchange-top-right p.price {
    color: #ff4a60;
  }
  
  .exchange-bottom {
    padding: 40px;
  }
  
  .exchange-bottom-list {
    margin-top: 30px;
  }
  
  .exchange-bottom-list p {
    font-size: 16px;
    color: #666;
  }
  
  .exchange-bottom-list-radio {
    position: relative;
    padding-left: 20px;
    margin-right: 60px;
    margin-top: 15px;
    font-size: 16px;
    color: #333;
    cursor: pointer;
  }
  
  .exchange-bottom-list-radio::before {
    position: absolute;
    left: 0;
    top: 50%;
    content: "";
    width: 12px;
    height: 12px;
    margin-top: -6px;
    border-radius: 12px;
    border: solid 1px #ccc;
    box-sizing: border-box;
  }
  
  .exchange-bottom-list-radio.on {
    color: #ff6736;
  }
  
  .exchange-bottom-list-radio.on::before {
    border-color: #ff6736;
  }
  
  .exchange-bottom-list-radio.on::after {
    position: absolute;
    left: 3px;
    top: 50%;
    content: "";
    margin-top: -3px;
    width: 6px;
    height: 6px;
    border-radius: 6px;
    background-color: #ff6736;
  }
  
  .exchange-bottom-list-right {
    margin-top: 15px;
  }
  
  .exchange-bottom-list-right textarea {
    width: 100%;
    height: 120px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: solid 1px #ccc;
    resize: none;
  }
  
  .weui-uploader__file {
    position: relative;
    margin-right: 9px;
    margin-bottom: 9px;
  }
  
  .weui-uploader__img {
    display: block;
    width: 120px;
    height: 120px;
  }
  
  .img-delete {
    position: absolute;
    right: -7px;
    top: -7px;
    width: 21px;
    height: 21px;
    cursor: pointer;
  }
  
  .weui-uploader__input-box {
    float: left;
    position: relative;
    margin-right: 9px;
    margin-bottom: 9px;
    width: 120px;
    height: 120px;
    border: 1px solid #d9d9d9;
  }
  
  .weui-uploader__input-box:before,
  .weui-uploader__input-box:after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background-color: #d9d9d9;
  }
  
  .weui-uploader__input-box:before {
    width: 2px;
    height: 39.5px;
  }
  
  .weui-uploader__input-box:after {
    width: 39.5px;
    height: 2px;
  }
  
  .weui-uploader__input-box:active {
    border-color: #999;
  }
  
  .weui-uploader__input-box:active:before,
  .weui-uploader__input-box:active:after {
    background-color: #999;
  }
  
  .weui-uploader__input {
    position: absolute;
    left: 0;
    bottom: 8px;
    width: 100%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 14px;
    color: #999;
  }
  
  .exchange-submit {
    margin-top: 20px;
  }
  
  .exchange-submit span {
    display: inline-block;
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
    background-color: #ff6736;
    cursor: pointer;
  }
  
  .complain-accident {
    padding: 20px 0;
    border-top: solid 1px #f1f1f1;
  }
  
  .complain-accident.exchange-bottom-list span {
    margin-top: 20px;
    margin-right: 0;
  }
  
  .exchange-title {
    position: relative;
    width: 100%;
    margin: 40px 0 20px;
  }
  
  .exchange-title p {
    display: inline-block;
    position: relative;
    height: 30px;
    line-height: 30px;
    padding-right: 30px;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    z-index: 33;
  }
  
  .exchange-title::after {
    position: absolute;
    left: 0;
    top: 50%;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #333;
  }
  
  .exchange-bottom-list-right input {
    width: 600px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    font-size: 16px;
    color: #333;
    border: solid 1px #ccc;
    outline: none;
  }
</style>
<style>
  .exchange-bottom-list-right .el-select {
    width: 100%;
  }
  
  .el-upload--picture-card {
    width: 120px;
    height: 120px;
  }
  
  .el-upload--picture-card {
    border: none;
  }
  
  .el-upload--picture-card:hover,
  .el-upload:focus {
    color: #999;
  }
  
  .el-input--prefix .el-input__inner {
    width: 300px;
  }
  
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