<template>
  <div class="foot-body">
    <div class="tebu-foot">
      <ul class="clearfix">
        <li class="foot-item">
          <router-link to="/home">
            <span class="icon icon-home"></span>
            <span class="foot-text">首页</span>
          </router-link>
        </li>
        <li class="foot-item">
          <router-link to="/race">
            <span class="icon icon-event"></span>
            <span class="foot-text">赛事</span>
          </router-link>
        </li>
        <li class="foot-item">
          <router-link to="/news">
            <span class="icon icon-news"></span>
            <span class="foot-text">资讯</span>
          </router-link>
        </li>
        <li class="foot-item">
          <a href="https://weidian.com/?userid=1233461354&ifr=shopdetail&wfr=c">
            <span class="icon icon-mall"></span>
            <span class="foot-text">商城</span>
          </a>
        </li>
        <li class="foot-item">
          <router-link to="/user">
            <span class="icon icon-personal"></span>
            <span class="foot-text">个人</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'foot'
  }
</script>

<style lang="scss">
  @import "../common/scss/mixin.scss";
  .tebu-foot {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: px2rem(720px);
    margin: auto;
    border-top: 1px solid #dbdcde;
    background: #fff;
  }
  .foot-item {
    float: left;
    width: 20%;
  }
  .foot-item a {
    display: block;
    width: 100%;
    height: px2rem(88px);
    padding-top: px2rem(9px);
  }
  .foot-item .icon {
    display: block;
    width: px2rem(40px);
    height: px2rem(47px);
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: px2rem(40px) px2rem(47px);
  }
  .icon-home {
    background-image: url(../assets/icon-home.png);
  }
  .icon-event {
    background-image: url(../assets/icon-event.png);
  }
  .icon-news {
    background-image: url(../assets/icon-news.png);
  }
  .icon-mall {
    background-image: url(../assets/icon-mall.png);
  }
  .icon-personal {
    background-image: url(../assets/icon-personal.png);
  }
  .router-link-active .icon-home {
    background-image: url(../assets/icon-home-active.png);
  }
  .router-link-active .icon-event {
    background-image: url(../assets/icon-event-active.png);
  }
  .router-link-active .icon-news {
    background-image: url(../assets/icon-news-active.png);
  }
  .router-link-active .icon-mall {
    background-image: url(../assets/icon-mall-active.png);
  }
  .router-link-active .icon-personal {
    background-image: url(../assets/icon-personal-active.png);
  }
  .foot-text {
    display: block;
    font-size: px2rem(22px);
    line-height: 1;
    margin-top: px2rem(4px);
    color: #b4b4b4;
    text-align: center;
  }
  .router-link-active .foot-text {
    color: #e27520;
  }
</style>
