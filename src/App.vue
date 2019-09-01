<template>
  <div id="app">
    <!-- <router-view :url="url"/> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      url: "http://120.79.226.99:8080"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.xs {
  cursor: pointer;
}
.omit {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.t-omit {
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
a {
  text-decoration: none;
  color: #333;
}
</style>
