<template>
  <div>
    <router-link :to="'/race/' + item.id" class="event-item">
      <img :src="item.pic_path">
      <span class="event-foot">
        <span class="event-foot-title">{{item.title}}</span>
        <span class="event-timeb">开始时间：{{beginTime(item.event_time)}}</span>
        <span class="event-time"></span>
      </span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props: ['item'],
    methods: {
      beginTime (time) {
        return time.split(' ')[0]
      }
    }
  }
</script>

<style lang="scss">
  @import "../common/scss/mixin.scss";
  .event-item {
    position: relative;
    display: block;
    width: 100%;
    height: px2rem(300px);
    margin-bottom: px2rem(20px);
  }
  .last .event-item {
    margin-bottom: 0;
  }
  .event-item img {
    width: 100%;
    height: px2rem(300px);
  }
  .event-foot {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: px2rem(72px);
    background: rgba(0, 0, 0, .6);
    color: #fff;
  }
  .event-foot-title {
    display: block;
    font-size: px2rem(22px);
    line-height: 1;
    padding: px2rem(14px) 0 px2rem(10px) px2rem(6px);
  }
  .event-timeb {
    display: block;
    font-size: px2rem(18px);
    line-height: 1;
    padding-left: px2rem(8px);
  }
</style>
