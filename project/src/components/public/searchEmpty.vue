<template>
  <div id="searchEmpty" class="flex-start-center flex-column">
    <img src="../../../static/img/empty.png" />
    <p>啊噢~！这里没有你想要的结果哦，换一个搜索关键词试试</p>
  </div>
</template>

<script>
  export default {
    name: 'searchEmpty'
  }
</script>

<style scoped>
  #searchEmpty {
    width: 100%;
    margin-top: 120px;
  }
  
  #searchEmpty img {
    width: 380px;
    height: 318px;
  }
  
  #searchEmpty p {
    margin-top: 30px;
    font-size: 18px;
    color: #333;
  }
</style>