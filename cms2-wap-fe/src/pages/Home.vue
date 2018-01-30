<template>
  <div class="home">
    <swipe class="home-swipe" :show-indicators="homeStore.slideShow.length > 1">
      <swipe-item
        class="swipe-item"
        v-for="(item, index) in homeStore.slideShow"
        :key="item.id"
      >
        <a :href="item.click_url" :target="item.target">
          <img :src="item.big_url">
        </a>
      </swipe-item>
    </swipe>
    <div class="home-sort">
      <ul class="clearfix">
        <li class="sort-item first">
          <a href="https://weidian.com/?userid=1233461354&ifr=shopdetail&wfr=c">
            <span class="icon icon-topic"></span>
            <span class="sort-text">商城</span>
          </a>
        </li>
        <li class="sort-item">
          <router-link to="/photo">
            <span class="icon icon-photo"></span>
            <span class="sort-text">图集</span>
          </router-link>
        </li>
        <li class="sort-item">
          <a href="javascript:;" @click="showService">
            <span class="icon icon-live"></span>
            <span class="sort-text">客服</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="home-event-con">
      <div class="home-event">
        <h3 class="event-title">推荐赛事</h3>
        <t-list
          v-for="(item, index) in homeStore.event"
          :key="item.id"
          :class="index === homeStore.event.length - 1 ? 'last' : ''"
          :item="item"
        />
      </div>
    </div>
    <t-foot />
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vue-swipe'
  import { mapGetters, mapActions } from 'vuex'
  import { SLIDE_SHOW, EVENT } from '@/store/modules/homeStore'
  import Foot from '@/components/Foot'
  import List from '@/components/List'
  export default {
    name: 'home',
    computed: {
      ...mapGetters([
        'homeStore'
      ])
    },
    methods: {
      ...mapActions([
        SLIDE_SHOW,
        EVENT
      ]),
      showService () {
        this.$Message.info('QQ客服：2353771179')
      }
    },
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem,
      't-foot': Foot,
      't-list': List
    },
    created () {
      this.SLIDE_SHOW()
      this.EVENT()
    }
  }
</script>

<style lang="scss">
  @import "../common/css/vue-swipe.css";
  @import "../common/scss/mixin.scss";
  .home-swipe {
    height: px2rem(270px);
    margin-bottom: px2rem(30px);
  }
  .swipe-item a {
    display: block;
    width: 100%;
    height: px2rem(270px);
  }
  .swipe-item img {
    width: 100%;
    height: px2rem(270px);
  }
  .home-sort {
    margin-bottom: px2rem(20px);
  }
  .sort-item {
    float: left;
    width: px2rem(238px);
    margin-left: px2rem(3px);
    font-size: 0;
    text-align: center;
    background: #fff;
  }
  .sort-item a {
    display: block;
    width: 100%;
    height: px2rem(128px);
    padding-top: px2rem(40px);
  }
  .sort-item.first {
    margin-left: 0;
  }
  .sort-item .icon {
    display: inline-block;
    width: px2rem(48px);
    height: px2rem(46px);
    background-repeat: no-repeat;
    background-size: px2rem(48px) auto;
    background-position: center center;
  }
  .icon-topic {
    background-image: url(../assets/icon-mall-active.png);
  }
  .icon-live {
    background-image: url(../assets/icon-live.png);
  }
  .icon-photo {
    background-image: url(../assets/icon-photo.png);
  }
  .sort-text {
    display: block;
    font-size: px2rem(26px);
    line-height: 1;
    margin-top: px2rem(6px);
    text-align: center;
  }
  .home-event-con {
    padding-bottom: px2rem(98px);
  }
  .home-event {
    padding: px2rem(20px) px2rem(17px);
    background: #fff;
    overflow: hidden;
    min-height: px2rem(300px);
  }
  .event-title {
    position: relative;
    font-size: px2rem(26px);
    line-height: 1;
    padding-left: px2rem(14px);
    margin-bottom: px2rem(14px);
    font-weight: 400;
  }
  .event-title:before {
    content: "";
    position: absolute;
    left: 0;
    top: px2rem(2px);
    width: px2rem(2px);
    height: px2rem(22px);
    background: #f04529;
  }
  [data-dpr="1"] .event-title:before {
    top: 0;
  }
</style>
