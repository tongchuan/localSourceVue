<template>
  <div class="tebu-load">
    <div v-if="end">
      <span class="load-text">没有更多了哦~</span>
    </div>
    <div v-else>
      <span class="icon icon-load"></span>
      <span class="load-text">正在加载...</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'load',
    props: ['end']
  }
</script>

<style lang="scss">
  @import "../common/scss/mixin.scss";
  .tebu-load {
    font-size: 0;
    text-align: center;
  }
  .icon-load {
    display: inline-block;
    width: px2rem(30px);
    height: px2rem(30px);
    margin-top: px2rem(25px);
    background-repeat: no-repeat;
    background-size: px2rem(30px) px2rem(30px);
    background-image: url(../assets/icon-load.png);
    vertical-align: top;
    animation: LoadMore 1.5s linear infinite;
  }
  .load-text {
    font-size: px2rem(26px);
    line-height: px2rem(80px);
    margin-left: px2rem(15px);
  }
  @keyframes LoadMore {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
