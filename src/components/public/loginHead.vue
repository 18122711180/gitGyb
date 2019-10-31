<template>
	<div id="loginHead">
		<div class="head flex-start-center">
			<img @click="backhome" src="../../../static/img/logo.png"/>
			<div>
				<p>用户中心</p>
				<p>www.xxxxxxxxx.com</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'loginHead',
		methods: {
			backhome(){
				this.$router.push("/");
			}
		}
	}
</script>

<style>
	#loginHead{
		width: 100%;
		border-bottom: solid 1px #eee;
	}
	
	.head{
		width: 1200px;
		height: 100px;
		margin: 0 auto;
	}
	
	.head img{
		width: 180px;
		margin: 0 40px 0 20px;
		cursor: pointer;
	}
	
	.head div{
		position: relative;
		margin-left: 40px;
	}
	
	.head div:before{
		position: absolute;
		left: -40px;
		top: 50%;
		content: "";
		width: 1px;
		height: 24px;
		margin-top: -12px;
		background-color: #eee;
	}
	
	.head div p{
		line-height: 1;
		font-size: 18px;
		color: #333;
	}
	
	.head div p+p{
		margin-top: 10px;
		font-size: 14px;
		color: #666;
	}
</style>