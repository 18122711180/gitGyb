<template>
	<div id="rightFloat" class="flex-start-end flex-column">
		<a class="right-menu flex-center-center" v-for="item in menu" :href="item.url">
			<span>{{item.name}}</span>
			<img :src="item.img"/>
		</a>
	</div>
</template>

<script>
	export default {
    	name: 'rightFloat',
    	data(){
    		return{
    			menu: [
    				{
    					url: 'javascript:;',
    					img: '../../../static/img/left-float-1.png',
    					name: '个人中心'
    				},
    				{
    					url: 'javascript:;',
    					img: '../../../static/img/left-float-2.png',
    					name: '商城'
    				},
    				{
    					url: 'javascript:;',
    					img: '../../../static/img/left-float-3.png',
    					name: '收藏'
    				},
    				{
    					url: 'javascript:;',
    					img: '../../../static/img/left-float-4.png',
    					name: '反馈'
    				},
    				{
    					url: 'javascript:;',
    					img: '../../../static/img/left-float-5.png',
    					name: '二维码'
    				}
    			]
    		}
    	}
	}
</script>

<style>
	#rightFloat{
		position: fixed;
		right: 0;
		top: 50%;
		-webkit-transform: -webkit-translateY(-50%);
		transform: translateY(-50%);
	}
	
	.right-menu{
		width: 42px;
		height: 42px;
		margin: 5px 10px 0 0;
		background-color: #7a6e6f;
		border-radius: 5px;
	}
	
	.right-menu span{
		display: none;
		margin-right: 10px;
		font-size: 14px;
		color: #fff;
	}
	
	.right-menu:hover{
		width: auto;
		padding: 0 17px 0 13px;
		margin-right: 0;
		background-color: #ff6736;
	}
	
	.right-menu:hover span{
		display: inline-block;
	}
</style>