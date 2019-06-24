<template>
  <div id="home">
  	<login-head />
  	<my-head :login='login'/>
  	<my-foot />
  </div>
</template>

<script>
	import Head from '../public/allHead.vue';
	import Foot from '../public/allFoot.vue';
  export default {
    name: 'home',
    data (){
    	return{
    		login: {
    			state: true,
    			name: 'hhy',
    			menu: 0
    		}
    	}
    },
    components: {
      props: ['login'],
      'my-head': Head,
      'my-foot': Foot
    },
  }
</script>

<style>

</style>