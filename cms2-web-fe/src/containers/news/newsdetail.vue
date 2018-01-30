<template>
  <div class="container userhome">
    <div class="row">
      <div class="col-xs-8 bg newsdetail">
        <div class="details-title">
          {{newsStore.newsDetail.info && newsStore.newsDetail.info.title}}
          <span>发布时间：{{newsStore.newsDetail.info &&newsStore.newsDetail.info.time}}</span>
        </div>
        <div class="details-content news-details" v-html="newsStore.newsDetail.info && newsStore.newsDetail.info.content">
        </div>
      </div>
      <div class="col-xs-4">
        <div class="bg" style="padding: 0 15px;">
          <div class="title-nav">
            <span class="title">最新赛事列表</span>
            <router-link :to="{ path: '/event'}"><span class="more">MORE + </span></router-link>
          </div>
          <div class="new-right">
            <ul>
              <li v-for="(item,index) in eventStore.eventList.list">
                <span>{{item.event_time | dateF}}</span>
                <router-link :to="{ path: '/eventdetail/'+item.id }">{{index+1}} 、{{item.title}}</router-link>
              </li>
            </ul>
          </div>
        </div>



        <div class="bg" style="padding: 0 15px; margin-top: 15px;">
          <div class="title-nav">
            <span class="title">视频图集</span>
            <router-link :to="{ path: '/photo'}"><span class="more">MORE + </span></router-link>
          </div>
          <div class="right-photo clearfix">
            <ul>
              <li v-for="(item,index) in photoStore.photoListItem.list">
                <div class="item">
                  <router-link :to="{ path: '/photodetail/'+item.album_id }"><img v-bind:src="item.thumb" alt=""></router-link>
                  <div class="item-title">{{item.title}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>

    </div>
 </div>
</template>
<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex'
import { NEWS_GET_DETAIL } from '@/store/modules/newsStore'
import { EVENT_GET_LIST_DATA } from '@/store/modules/eventStore'
import { GET_PHOTO_LIST } from '@/store/modules/photoStore'
import $ from 'jquery'
export default {
  name: 'NewsDetail',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  created () {
    let that = this
    that.newsStore.newsDetail.info = Object.assign({})
    that.NEWS_GET_DETAIL({id: that.id})
    that.eventStore.eventList = Object.assign({})
    that.EVENT_GET_LIST_DATA({start: 0, length: 20})
    this.photoStore.photoListItem = Object.assign({})
    this.GET_PHOTO_LIST({start: 0, length: 10})
  },
  // mounted () {
  //   console.log(this.$route.params.top)
  //   if (this.$route.params.top) {
  //     $(window).scrollTop(0)
  //     $('body').scrollTop(0)
  //     $('html').scrollTop(0)
  //   }
  // },
  computed: {
    ...mapGetters({
      newsStore: 'newsStore',
      eventStore: 'eventStore',
      photoStore: 'photoStore'
    })
  },
  methods: {
    ...mapActions([NEWS_GET_DETAIL, EVENT_GET_LIST_DATA, GET_PHOTO_LIST])
  },
  watch: {
    '$route.params' (newVal, oldVal) {
      // console.log(newVal, oldVal)
      let that = this
      that.newsStore.newsDetail.info = Object.assign({})
      that.NEWS_GET_DETAIL({id: that.$route.params.id})
      that.eventStore.eventList = Object.assign({})
      that.EVENT_GET_LIST_DATA({start: 0, length: 20})
      this.photoStore.photoListItem = Object.assign({})
      this.GET_PHOTO_LIST({start: 0, length: 10})
      if (newVal.top === '0') {
        $(window).scrollTop(0)
        $('body').scrollTop(0)
        $('html').scrollTop(0)
      }
    },
    '$route.params.top' (newVal, oldVal) {
      if (newVal === '0') {
        $(window).scrollTop(0)
        $('body').scrollTop(0)
        $('html').scrollTop(0)
      }
    }
  }
}
</script>
<style type="text/css">

</style>
