<template>
  <div class="container userhome">
    <div class="row">
      <div class="col-xs-8 bg">
        <div class="title-nav">
          <span class="title">视频图集</span>
          <!-- <a href="#"><span class="more">MORE + </span></a> -->
        </div>
        <div class="photo-list clearfix baguetteBoxOne gallery">
          <ul class="clearfix">
            <li v-for="(item,index) in photoStore.photoListItem.list">
              <div class="item">
                <router-link :to="{ path: '/photodetail/'+item.album_id }"><img v-bind:src="item.thumb" alt=""></router-link>
                <div class="item-title">{{item.title}}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="page" style="display:black;width:100%">
          <page v-bind:total="photoStore.photoListItem.count" v-bind:rows="rows" v-bind:page="page" v-bind:set-page="setPage" />
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

      </div>

    </div>
 </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
// import baguettebox from 'baguettebox.js'
// import 'baguettebox.js/dist/baguettebox.css'
import page from '@/components/common/page'
import { GET_PHOTO_LIST } from '@/store/modules/photoStore'
import { GOODS_GET_LIST_DATA } from '@/store/modules/goodsStore'
import { EVENT_GET_LIST_DATA } from '@/store/modules/eventStore'
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
    page
  },
  beforeCreate () {
    // this.goodsStore.goodsList.list = []
  },
  created () {
    let that = this
    this.photoStore.photoListItem = Object.assign({})
    this.eventStore.eventList = Object.assign({})
    that.getListData()
    this.EVENT_GET_LIST_DATA({start: 0, length: 20})
    // this.NEWS_GET_LIST_DATA({start: (that.page - 1) * that.rows, length: that.rows})
  },
  mounted () {
    // console.log('mounted')
    // baguettebox.run('.gallery', {animation: 'fadeIn'})
  },
  computed: {
    ...mapGetters({
      photoStore: 'photoStore',
      goodsStore: 'goodsStore',
      eventStore: 'eventStore'
    })
  },
  methods: {
    ...mapActions([GET_PHOTO_LIST, EVENT_GET_LIST_DATA, GOODS_GET_LIST_DATA]),
    getListData () {
      let that = this
      this.GET_PHOTO_LIST({start: (that.page - 1) * that.rows, length: that.rows})
      //   , (data) => {
      //   console.log('callback')
      //   // baguettebox.run('.gallery', {animation: 'fadeIn'})
      //   setTimeout(function () {
      //     baguettebox.run('.gallery', {animation: 'fadeIn'})
      //   }, 0)
      // }])
    },
    setPage (page) {
      let that = this
      that.page = page
      that.getListData()
    }
  }
  // beforeDestory () {
  //   this.newsStore.photoListItem = Object.assign({})
  //   this.eventStore.eventList = Object.assign({})
  //   console.log('destroyed')
  //   console.log(this)
  // }
}
</script>
<style scoped>

</style>
