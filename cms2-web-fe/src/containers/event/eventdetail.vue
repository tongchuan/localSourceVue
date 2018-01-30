<template>
  <div class="container userhome">
    <div class="row">
      <div class="col-xs-8 bg newsdetail">
        <div class="details-title">
          {{eventStore.eventDetail && eventStore.eventDetail.title}}
          <span>发布时间：{{eventStore.eventDetail &&eventStore.eventDetail.event_time}}</span>
        </div>
        <div class="details-content" v-html="eventStore.eventDetail && eventStore.eventDetail.content">

        </div>
        <!-- <div v-if="eventStore.eventDetail.is_already_up==0" style="text-align:center;padding-bottom:15px;">
          <button type="button" v-on:click="signup" class="btn btn-warning" name="button">我要报名</button>
        </div> -->
        <div style="text-align:center;padding-bottom:15px;">
          <button type="button" v-on:click="signup" class="btn btn-warning" name="button">我要报名</button>
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
 <!--
  <div>
    赛事
    {{eventStore.eventDetail}}
    {{id}}
  </div> -->
</template>
<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex'
import { EVENT_GET_DETAIL, EVENT_GET_LIST_DATA } from '@/store/modules/eventStore'
import { NEWS_GET_LIST_DATA } from '@/store/modules/newsStore'
import { GET_PHOTO_LIST } from '@/store/modules/photoStore'

export default {
  name: 'EventDetail',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  created () {
    let that = this
    that.eventStore.eventDetail = Object.assign({})
    that.EVENT_GET_DETAIL({id: that.id})
    this.newsStore.newsList = Object.assign({})
    that.NEWS_GET_LIST_DATA({start: 0, length: 20})
    this.eventStore.eventList = Object.assign({})
    this.EVENT_GET_LIST_DATA({start: 0, length: 10})
    this.photoStore.photoListItem = Object.assign({})
    this.GET_PHOTO_LIST({start: 0, length: 10})
  },
  computed: {
    ...mapGetters({
      eventStore: 'eventStore',
      userStore: 'userStore',
      newsStore: 'newsStore',
      photoStore: 'photoStore'
    })
  },
  methods: {
    ...mapActions([EVENT_GET_DETAIL, NEWS_GET_LIST_DATA, GET_PHOTO_LIST, EVENT_GET_LIST_DATA]),
    signup () {
      let that = this
      if (that.eventStore.eventDetail.event_status === '报名中') {
        if (Number(that.eventStore.eventDetail.is_third) === 1) {
          window.open(that.eventStore.eventDetail.third_path, '', '')
        } else {
          if (!this.userStore.user.id) {
            // this.usershow = true
            this.$root.$emit('userOpen', {})
          } else {
            that.$router.replace({ path: '/signup/' + that.id })
          }
        }
        return
      }
      let content = ''
      if (that.eventStore.eventDetail.event_status === '未开始报名') {
        content = '报名未开始，尽情期待'
      } else if (that.eventStore.eventDetail.event_status === '报名结束') {
        content = '报名已结束'
      } else if (that.eventStore.eventDetail.event_status === '已报名') {
        content = '您已经报名成功'
      } else {
        content = that.eventStore.eventDetail.event_status
      }
      that.$Modal.info({
        title: '提示信息',
        content: content
        // onOk: () => {
        //
        // }
      })
    }
  },
  watch: {
    '$route.params' (val, oldValue) {
      let that = this
      that.eventStore.eventDetail = Object.assign({})
      that.EVENT_GET_DETAIL({id: this.$route.params.id})
      this.newsStore.newsList = Object.assign({})
      that.NEWS_GET_LIST_DATA({start: 0, length: 20})
      this.photoStore.photoListItem = Object.assign({})
      this.GET_PHOTO_LIST({start: 0, length: 10})
    }
  }
}
</script>
<style type="text/css">

</style>
