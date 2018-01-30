<template>
  <div class="container userhome">
    <div class="row">
      <div class="col-xs-8 bg">
        <div class="title-nav">
          <span class="title">资讯</span>
        </div>
        <div class="new-right new-title-img">
          <ul>
            <newsitem v-for="(item,index) in newsStore.newsList.list" key="index+'news'" v-bind:item="item" v-bind:index="index" />
          </ul>
        </div>
        <div class="page">
          <page v-bind:total="newsStore.newsList.count" v-bind:rows="rows" v-bind:page="page" v-bind:set-page="setPage" />
        </div>
      </div>
      <div class="col-xs-4 pr">
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
<script>
import { mapGetters, mapActions } from 'vuex'
import page from '@/components/common/page'
import { NEWS_GET_LIST_DATA } from '@/store/modules/newsStore'
import { GOODS_GET_LIST_DATA } from '@/store/modules/goodsStore'
import { EVENT_GET_LIST_DATA } from '@/store/modules/eventStore'
import { GET_PHOTO_LIST } from '@/store/modules/photoStore'
import newsitem from '@/components/news/newsitem'
export default {
  name: 'NewsList',
  data () {
    return {
      total: 0,
      rows: 20, // 一页几条
      page: 1 // 当前页
    }
  },
  components: {
    page,
    newsitem
  },
  beforeCreate () {
    // this.goodsStore.goodsList.list = []
  },
  created () {
    let that = this
    this.newsStore.newsList = Object.assign({})
    this.eventStore.eventList = Object.assign({})
    that.getListData()
    this.EVENT_GET_LIST_DATA({start: 0, length: 10})
    this.photoStore.photoListItem = Object.assign({})
    this.GET_PHOTO_LIST({start: 0, length: 4})
    // this.NEWS_GET_LIST_DATA({start: (that.page - 1) * that.rows, length: that.rows})
  },
  computed: {
    ...mapGetters({
      newsStore: 'newsStore',
      goodsStore: 'goodsStore',
      eventStore: 'eventStore',
      photoStore: 'photoStore'
    })
  },
  methods: {
    ...mapActions([NEWS_GET_LIST_DATA, EVENT_GET_LIST_DATA, GOODS_GET_LIST_DATA, GET_PHOTO_LIST]),
    getListData () {
      let that = this
      this.NEWS_GET_LIST_DATA({start: (that.page - 1) * that.rows, length: that.rows})
    },
    setPage (page) {
      let that = this
      that.page = page
      that.getListData()
    }
  },
  beforeDestory () {
    this.newsStore.newsList = Object.assign({})
    this.eventStore.eventList = Object.assign({})
  }
}
</script>
<style scoped>

</style>
