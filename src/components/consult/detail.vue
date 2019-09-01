<template>
	<div id="consultDetail">
		<my-head :login="login"/>
		<section>
			<h2>{{consult.title}}</h2>
			<div class="consult-message">
				<p>
					<span>{{consult.type}}</span>
					<span>{{consult.consult}}</span>
				</p>
				<p>{{consult.date}} {{consult.time}}</p>
			</div>
			<div class="consult-introduce" v-html="consult.introduce"></div>
			<div class="consult-heplful">
				<p class="flex-center-center" @click="consult.helpful++">
					<img src="../../../static/img/forget-success.png">
					<span>有帮助({{consult.helpful}})</span>
				</p>
			</div>
			<div class="consult-comment">
				<h3>
					<span>精彩评论({{consult.comment}})</span>
				</h3>
				<div class="consult-comment-input flex-center-start">
					<input type="text" placeholder="写点什么吧..." v-model="commentVal">
					<span>留言</span>
				</div>
			</div>
			<div class="comment-main">
				<div
					class="comment-list flex-start-start"
					v-for="(item,index) in consult.commentList"
					:key="index"
				>
					<div class="comment-list-left">
						<img :src="item.img">
					</div>
					<div class="comment-list-right">
						<div class="comment-list-right-name">{{item.name}}</div>
						<div class="comment-list-right-introduce">{{item.introduce}}</div>
						<div class="flex-between-center comment-list-right-time">
							<span>{{item.time}}</span>
							<span @click="replyBtn = !replyBtn">回复</span>
						</div>
						<div class="comment-list-right-input" v-if="replyBtn">
							<input type="text" placeholder="请输入回复">
							<span>确认</span>
						</div>
						<div class="comment-list-right-reply">
							<div v-for="(items, idx) in item.reply">
								<span>{{items.name}}：</span>
								{{items.text}}
							</div>
						</div>
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
  name: "consultDetail",
  props: {
    url: ""
  },
  data() {
    return {
      login: {
        state: true,
        name: "hhy",
        menu: 1,
        searchShow: false,
        url: this.url
      },
      replyBtn: false,
      commentVal: "",
      consult: {
        title: "百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相！",
        type: "生活健康",
        consult: "咨询人发布信息",
        date: "2019-4-26",
        time: "19:01",
        introduce:
          "<p>百种疾病可导致眩晕，出现眩晕勿轻视！专家解开眩晕背后的真相！</p>",
        helpful: 123,
        comment: 652,
        commentList: [
          {
            img:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
            name: "用户名123456",
            introduce:
              "我是内容我是内容我是内容我是内容我是内容我是内容我是我是内容我是内容我是内容我是内容我是内容我是内容我是我是内容我是内容我是内容我是内容我是内容我内容我是内容我是内容我是内容我是内容内容我是内容我是内容我是内容我",
            time: "3月29日 14:32",
            reply: [
              {
                name: "用户12332",
                text: "我是内容我是内容我是内容我是内容我是"
              }
            ]
          },
          {
            img:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
            name: "用户名123456",
            introduce:
              "我是内容我是内容我是内容我是内容我是内容我是内容我是我是内容我是内容我是内容我是内容我是内容我是内容我是我是内容我是内容我是内容我是内容我是内容我内容我是内容我是内容我是内容我是内容内容我是内容我是内容我是内容我",
            time: "3月29日 14:32",
            reply: [
              {
                name: "用户12332",
                text: "我是内容我是内容我是内容我是内容我是"
              }
            ]
          },
          {
            img:
              "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3696080265,4026547851&fm=26&gp=0.jpg",
            name: "用户名123456",
            introduce:
              "我是内容我是内容我是内容我是内容我是内容我是内容我是我是内容我是内容我是内容我是内容我是内容我是内容我是我是内容我是内容我是内容我是内容我是内容我内容我是内容我是内容我是内容我是内容内容我是内容我是内容我是内容我",
            time: "3月29日 14:32",
            reply: [
              {
                name: "用户12332",
                text: "我是内容我是内容我是内容我是内容我是"
              }
            ]
          }
        ]
      }
    };
  },
  created() {
	this.login.menu = this.$route.query.menu;
	if(this.$route.query.id){
		this.newsInfo();
	}else{
		this.$message.error("查询详情失败")
	}
  },
  methods:{
	newsInfo(){
		// this.post()
	}
  },
  components: {
    props: ["login"],
    "my-head": Head,
    "right-float": Float,
    "my-foot": Foot
  }
};
</script>

<style scoped>
#consultDetail {
  background-color: #fff;
}

img {
  width: 100%;
  height: 100%;
}

section {
  width: 1200px;
  margin: 40px auto 100px;
}

section h2 {
  text-align: center;
  font-size: 30rpx;
  color: #333;
}

.consult-message p {
  text-align: right;
  margin-top: 10px;
  font-size: 16px;
  color: #999;
}

.consult-message p + p {
  margin-left: 10px;
}

.consult-introduce {
  margin-top: 20px;
}

.consult-heplful {
  margin-top: 50px;
}

.consult-heplful p {
  width: 150px;
  height: 60px;
  margin: 0 auto;
  font-size: 14px;
  color: #fff;
  background-color: #ff6736;
}

.consult-heplful img {
  width: 26px;
  height: 26px;
  margin-right: 10px;
  cursor: pointer;
}

.consult-comment h3 {
  text-align: center;
  margin-top: 40px;
}

.consult-comment h3 span {
  position: relative;
  font-size: 20rpx;
  color: #333;
}

.consult-comment h3 span:before {
  position: absolute;
  left: -50px;
  top: 50%;
  content: "";
  width: 40px;
  height: 2px;
  margin-top: -1px;
  background-color: #ff6736;
}

.consult-comment h3 span:after {
  position: absolute;
  right: -50px;
  top: 50%;
  content: "";
  width: 40px;
  height: 2px;
  margin-top: -1px;
  background-color: #ff6736;
}

.consult-comment-input {
  margin-top: 30px;
}

.consult-comment-input input {
  width: 550px;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  font-size: 16px;
  color: #ccc;
  border: solid 1px #ddd;
  border-right: none;
  outline: none;
  background-color: #f7f8fa;
}

.consult-comment-input span {
  width: 160px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  background-color: #ff6736;
}

.comment-list {
  margin: 30px 0;
}

.comment-list-left img {
  width: 80px;
  height: 80px;
  margin-right: 30px;
  border-radius: 80px;
}

.comment-list-right {
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
}

.comment-list-right-name {
  font-size: 16px;
  color: #333;
}

.comment-list-right-introduce {
  margin-top: 15px;
  line-height: 24px;
  font-size: 14px;
  color: #666;
}

.comment-list-right-time {
  margin-top: 15px;
  font-size: 12px;
  color: #666;
}

.comment-list-right-time span + span {
  cursor: pointer;
}

.comment-list-right-reply {
  margin-top: 15px;
  padding: 20px;
  font-size: 14px;
  color: #666;
  background-color: #f7f8fa;
  border-radius: 10px;
}

.comment-list-right-reply div + div {
  margin-top: 10px;
}

.comment-list-right-reply div span {
  color: #ff6736;
}

.comment-list-right-input {
  margin-top: 10px;
}

.comment-list-right-input input {
  width: 200px;
  height: 30px;
  padding: 0 10px;
  border: solid 1px #ccc;
  outline: none;
}

.comment-list-right-input span {
  line-height: 30px;
  font-size: 16px;
  color: #ff6736;
  cursor: pointer;
}
</style>