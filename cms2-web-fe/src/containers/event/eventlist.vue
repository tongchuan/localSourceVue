<template>
  <div class="container userhome">
    <div class="row">
      <div class="col-xs-8 bg">
        <div class="title-nav">
          <span class="title">赛事活动</span>
        </div>
        <div class="new-right">
          <div v-for="item in eventStore.eventList.list" class="row event-list-row">
            <div class="col-xs-4">
              <router-link :to="{ path: '/eventdetail/'+item.id }"><img v-bind:src="item.pic_path" v-bind:title="item.title" v-bind:alt="item.title" /></router-link>
            </div>
            <div class="col-xs-8">
              <h4><router-link :to="{ path: '/eventdetail/'+item.id }"><span style="color:#900">[{{item.event_status}}]</span> {{item.title}}</router-link></h4>
              <p>{{item.event_time | dateF}} </p>
              <p>{{item.description}}</p>
            </div>
          </div>
          <!-- <div class="match-list">
            <div  class="list-item clearfix">
              <router-link :to="{ path: '/eventdetail/'+item.id }">

              <div class="list-main" style="width:auto">

              </div>
              </router-link>
            </div>
          </div> -->
          <!-- <ul>
            <li v-for="(item,index) in eventStore.eventList.list">
              <span>{{item.event_time | dateF}}</span>
              <router-link :to="{ path: '/eventdetail/'+item.id }">{{index+1}} 、{{item.title}}</router-link>
            </li>
          </ul> -->
        </div>
        <div class="page">
          <page v-bind:total="eventStore.eventList.count" v-bind:rows="rows" v-bind:page="page" v-bind:set-page="setPage" />
        </div>
      </div>
      <div class="col-xs-4 pr">
        <div class="bg" style="padding: 0 15px;">
          <div class="title-nav">
            <span class="title">最新资讯列表</span>
            <router-link :to="{ path: '/news'}"><span class="more">MORE + </span></router-link>
          </div>
          <div class="new-right new-title-img">
            <ul>
              <li v-for="(item,index) in newsStore.newsList.list">
                <span>{{item.time | dateF}}</span>
                <img src="/static/img/news.png" v-bind:alt="item.title" v-bind:title="item.title">
                <router-link :to="{ path: '/newsdetail/'+item.id }">{{item.title}}</router-link>
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
import page from '@/components/common/page'
import { EVENT_GET_LIST_DATA } from '@/store/modules/eventStore'
import { NEWS_GET_LIST_DATA } from '@/store/modules/newsStore'
import { GET_PHOTO_LIST } from '@/store/modules/photoStore'
export default {
  name: 'EventList',
  data () {
    return {
      total: 0,
      rows: 20, // 一页几条
      page: 1 // 当前页
    }
  },
  created () {
    console.log('created')
    this.eventStore.eventList = Object.assign({})
    let that = this
    that.getListData()
    this.newsStore.newsList = Object.assign({})
    that.NEWS_GET_LIST_DATA({start: 0, length: 20})
    this.photoStore.photoListItem = Object.assign({})
    this.GET_PHOTO_LIST({start: 0, length: 4})
  },
  mounted () {
    console.log('mounted')
  },
  computed: {
    ...mapGetters({
      eventStore: 'eventStore',
      newsStore: 'newsStore',
      photoStore: 'photoStore',
      userStore: 'userStore'
    })
  },
  components: {
    page
  },
  methods: {
    ...mapActions([EVENT_GET_LIST_DATA, NEWS_GET_LIST_DATA, GET_PHOTO_LIST]),
    getListData () {
      let that = this
      this.EVENT_GET_LIST_DATA({start: (that.page - 1) * that.rows, length: that.rows})
    },
    setPage (page) {
      let that = this
      that.page = page
      that.getListData()
    },
    beforeDestory () {
      this.eventStore.eventList = Object.assign({})
      this.newsStore.newsList = Object.assign({})
    }
  }
}
</script>
<style type="text/css">

</style>
