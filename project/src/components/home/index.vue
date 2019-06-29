<template>
  <div id="home">
  	<my-head :login='login'/>
  	<right-float />
  	<my-foot />
  </div>
</template>

<script>
	import Head from '../public/allHead.vue';
	import Float from '../public/rightFloat.vue';
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
      'right-float': Float,
      'my-foot': Foot
    },
  }
</script>

<style>

</style>