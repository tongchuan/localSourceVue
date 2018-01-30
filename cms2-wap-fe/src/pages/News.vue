<template>
  <div
    class="news"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="60"
  >
    <router-link
      class="news-item"
      v-for="(item, index) in newsStore.list"
      :to="'/newsdetail/' + item.id"
      :key="item.id"
    >
      <img v-if="item.s_pic" :src="item.s_pic">
      <h4>{{item.title}}</h4>
      <p>{{item.intro}}</p>
      <div class="news-foot">
        {{item.category}}
        {{getDate(item.time)}}
        {{getTime(item.time)}}
        阅读 {{item.sort}}
      </div>
    </router-link>
    <t-load :end="newsStore.end" />
    <t-foot />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { LIST_MORE } from '@/store/modules/newsStore'
  import infiniteScroll from 'vue-infinite-scroll'
  import Load from '@/components/Load'
  import Foot from '@/components/Foot'
  export default {
    name: 'news',
    data () {
      return {
        start: 0
      }
    },
    directives: {
      infiniteScroll
    },
    computed: {
      ...mapGetters([
        'newsStore'
      ]),
      busy () {
        return this.newsStore.busy
      }
    },
    methods: {
      ...mapActions([
        LIST_MORE
      ]),
      loadMore () {
        if (!this.newsStore.init || this.newsStore.end) {
          return
        }
        this.start = this.start + 5
        this.LIST_MORE(this.start)
      },
      getDate (time) {
        return time.split(' ')[0].slice(5)
      },
      getTime (time) {
        return time.split(' ')[1].slice(0, 5)
      }
    },
    created () {
      this.LIST_MORE(this.start)
    },
    components: {
      't-load': Load,
      't-foot': Foot
    }
  }
</script>

<style lang="scss">
  @import "../common/scss/mixin.scss";
  .news {
    padding-bottom: px2rem(100px);
  }
  .news-item {
    display: block;
    padding: px2rem(20px) px2rem(20px) px2rem(15px);
    background: #fff;
    margin-bottom: px2rem(20px);
    img {
      display: block;
      width: px2rem(680px);
      height: px2rem(400px);
    }
    h4 {
      margin-top: px2rem(28px);
      line-height: 1;
      font-size: px2rem(28px);
      color: #2d2d2d;
    }
    p {
      margin-top: px2rem(16px);
      line-height: 1;
      font-size: px2rem(24px);
      color: #808080;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .news-foot {
    margin-top: px2rem(26px);
    line-height: 1;
    font-size: px2rem(20px);
    color: #aeaeae;
  }
</style>
