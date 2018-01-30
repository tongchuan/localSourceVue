<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import "./common/scss/mixin.scss";
  html,
  body {
    background: #f3f4f8 !important;
    color: #333 !important;
  }
  body {
    width: px2rem(720px);
    margin: 0 auto !important;
  }
  img {
    display: block;
  }
  a {
    color: inherit !important;
  }
  a:hover {
    text-decoration: none !important;
  }
  .clearfix:after {
    content: "";
    display: block;
    clear: both;
  }
  .container{
    width: 100% !important;
  }
</style>
