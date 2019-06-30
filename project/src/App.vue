<template>
  <div id="app">
    <router-view :url="url"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
  	return{
  		url: 'http://120.79.226.99:8080'
  	}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
