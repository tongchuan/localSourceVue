<template>
  <div class="detail bg">
    <div class="detail-head">
      <div v-if="false">
        <img v-if="newsStore.news_detail.b_pic" :src="newsStore.news_detail.b_pic">
      	<div class="detail-title">{{newsStore.news_detail.title}}</div>
      	<div class="detail-intro">
      		<p>类型：{{newsStore.news_detail.category}}  发布时间：{{newsStore.news_detail.time}} </p>
      		<p>{{newsStore.news_detail.intro}}</p>
      	</div>
      	<div class="s-intro">
      		<img v-if="newsStore.news_detail.s_pic" :src="newsStore.news_detail.s_pic">
      	</div>
      </div>
    	<div class="detail-content" v-html="newsStore.news_detail.content" >{{newsStore.news_detail.content}}</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { NEWS_DETAIL } from '@/store/modules/newsStore'
  export default {
    name: 'news_detail',
    data () {
      return {
        id: this.$route.params.id
      }
    },
    computed: {
      ...mapGetters([
        'newsStore'
      ])
    },
    methods: {
      ...mapActions([
        NEWS_DETAIL
      ])
    },
    created () {
      this.NEWS_DETAIL({id: this.id})
    }
  }
</script>

<style lang="scss">
  @import "../../common/scss/mixin.scss";
  .detail-head {
    img {
      display: block;
      width: 100% !important;
      height: auto !important;
      margin: px2rem(10px) auto;
    }
  }
  .detail {
    padding-bottom: px2rem(40px);
  }
  .detail-head {
    position: relative;
    width: px2rem(720px);
    height: px2rem(308px);
    img {
      width: 100%;
      height: px2rem(308px);
    }
  }
  .detail-title {
  	text-align:center;
  	font-size:18px;
  	padding: px2rem(10px);
  }
  .detail-intro p{
  	padding: px2rem(2px);
  	text-indent:px2rem(40px);
  }
  .s-intro img{
  	height: px2rem(156px);
  }
  .detail-content {
    padding: px2rem(20px);
  }
</style>
