<template>
	<div id="allFoot">
		<div class="foot">
			<div class="friend-link flex-center-start">
				<span>友情链接</span>
				<a v-for="item in friendShip" :href="item.url">{{item.name}}</a>
			</div>
			<div class="foot-first">
				<p><span v-for="item in card">{{item}}</span></p>
				<p>{{permit}}</p>
				<p>{{icp}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
    	name: 'allFoot',
    	data (){
    		return{
    			friendShip: [
    				{
    					url: 'javascript:;',
    					name: '国家食品药品监督总局'
    				},
    				{
    					url: 'javascript:;',
    					name: '江西省药品监督管理局'
    				},
    				{
    					url: 'javascript:;',
    					name: '国家食品药品监督总局'
    				}
    			],
    			card: [
    				'医疗器械网络交易服务第三平台备案凭证：（赣）网械平台备字【2018】第00002号',
    				'互联网药品信息服务资格证：（赣）-经营性-2018-0006'
    			],
    			permit: '中华人民共和国增值电信业务经营许可证：B2-20190860和B2-20190021	网络食品交易第三方平台提供者备案号：赣网食A3607000001',
    			icp: 'ICP备案号：赣ICP备18003636号-1'
    		}
    	}
	}
</script>

<style>
	#allFoot{
		width: 100%;
		padding: 36px 0 29px;
		background-color: #333;
	}
	
	.foot{
		width: 1200px;
		margin: 0 auto;
	}
	
	.friend-link span{
		margin-right: 15px;
		font-size: 14px;
		color: #ff4a60;
	}
	
	.friend-link a{
		margin-left: 40px;
		font-size: 14px;
		color: #fff;
	}
	
	.friend-link a:hover{
		text-decoration: underline;
	}
	
	.foot-first{
		margin-top: 15px;
	}
	
	.foot-first p{
		margin-top: 15px;
		text-align: center;
		font-size: 14px;
		color: #fff;
	}
	
	.foot-first p span{
		margin: 0 10px;
	}
</style>