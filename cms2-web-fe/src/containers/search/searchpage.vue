<template lang="html">
  <div class="container userhome">
    <div class="row">
      <div class="col-xs-8 bg newsdetail">
        <div class="title-nav">
          <span class="title">搜索 >> {{getName}} “{{value}}”</span>
        </div>
        <!-- 资讯 -->
        <div v-if="$route.params.type==1" class="new-right new-title-img">
          <!-- {{newsStore.newsList.newsearch}} -->
          <ul>
            <newsitem v-for="(item,index) in newsStore.newsList.newsearch" key="index+'news'" v-bind:item="item" v-bind:index="index" />
          </ul>
        </div>
        <!-- 图片 -->
        <div v-else-if="$route.params.type==2" class="photo-list clearfix baguetteBoxOne gallery">
          <ul class="clearfix">
            <li v-for="(item,index) in photoStore.photoListItem.list">
              <div class="item">
                <router-link :to="{ path: '/photodetail/'+item.album_id }"><img v-bind:src="item.thumb" alt=""></router-link>
                <div class="item-title">{{item.title}}</div>
              </div>
            </li>
          </ul>
        </div>
        <!-- 赛事 -->
        <div v-else-if="$route.params.type==3" class="">
          <div v-for="item in eventStore.eventsearch.list" class="row event-list-row">
            <div class="col-xs-4">
              <router-link :to="{ path: '/eventdetail/'+item.id }"><img v-bind:src="item.pic_path" v-bind:title="item.title" v-bind:alt="item.title" /></router-link>
            </div>
            <div class="col-xs-8">
              <h3><router-link :to="{ path: '/eventdetail/'+item.id }">{{item.title}}</router-link></h3>
              <p>{{item.event_time | dateF}}</p>
              <p>{{item.description}}</p>
            </div>
          </div>
        </div>
        <!-- 产品 -->
        <div v-else-if="$route.params.type==4" class="">
          <div class="index-jifen index-jifen-list clearfix">
            <ul index-jifen-list>
              <goodsitem v-for="(item,index) in goodsStore.goodsList.list" key="index+'goods'" v-bind:item="item" v-bind:index="index"></goodsitem>
            </ul>
          </div>
        </div>
        <div v-else>
          暂无内容
        </div>
        <div class="page" v-if="count>0" style="display:black;width:100%">
          <page v-bind:total="count" v-bind:rows="rows" v-bind:page="page" v-bind:set-page="setPage" />
        </div>
        <div v-else class="" style="text-align:center; color:#900; font-size:20px; line-height:50px;">
          <p>没有搜索到您搜索的信息</p>
        </div>
        <!-- {{$route.params.type}} -->
      </div>
      <div class="col-xs-4" style="padding-right: 0">
        <div class="bg" v-if="$route.params.type!=2" style="padding: 0 15px 15px; margin-top: 15px;">
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
        <div class="bg" v-if="$route.params.type!=3" style="padding: 0 15px;">
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
    <!-- {{this.$route.params.type}}
    {{this.$route.params.value}} -->
<!--
    {{this.type}}
    {{this.value}} -->
  </div>
</template>

<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex'

import { NEWA_SEARCH } from '@/store/modules/newsStore'
import { GET_PHOTO_LIST } from '@/store/modules/photoStore'
import { EVENT_GET_LIST_DATA, EVENT_SEARCH } from '@/store/modules/eventStore'
import { GOODS_GET_LIST_DATA } from '@/store/modules/goodsStore'
import goodsitem from '@/components/goods/goodsitem'
export default {
  name: 'searchPage',
  data () {
    return {
      total: 0,
      rows: 20, // 一页几条
      page: 1, // 当前页
      type: this.$route.params.type,
      value: this.$route.params.value
    }
  },
  created () {
    let that = this
    that.getDataSearch()
    if (Number(that.$route.params.type) !== 2) {
      that.GET_PHOTO_LIST({start: 0, length: 10})
    } else {
      this.eventStore.eventList = Object.assign({})
      this.EVENT_GET_LIST_DATA({start: 0, length: 20})
    }
    that.$root.$emit('searchUpdateData', {
      id: that.type,
      value: that.value
    })
  },
  // beforeUpdate () {
  //   console.log('beforeUpdate')
  //   console.log(this.type)
  //   console.log(this.value)
  //   // this.type = this.$route.params.type
  //   // this.value = this.$route.params.value
  //   // this.getDataSearch()
  // },
  computed: {
    ...mapGetters({
      newsStore: 'newsStore',
      photoStore: 'photoStore',
      eventStore: 'eventStore',
      goodsStore: 'goodsStore'
    }),
    count () {
      let that = this
      let num = 0
      if (Number(that.$route.params.type) === 1) {
        num = !isNaN(that.newsStore.newsearch.count) ? that.newsStore.newsearch.count : 0
      }
      if (Number(that.$route.params.type) === 2) {
        num = !isNaN(that.photoStore.photoListItem.count) ? that.photoStore.photoListItem.count : 0
      }
      if (Number(that.$route.params.type) === 3) {
        console.log(that.eventStore.eventsearch)
        num = !isNaN(that.eventStore.eventsearch.count) ? that.eventStore.eventsearch.count : 0
      }
      if (Number(that.$route.params.type) === 4) {
        num = !isNaN(that.goodsStore.goodsList.count) ? that.goodsStore.goodsList.count : 0
      }
      return num
    },
    getName () {
      return [
        {id: 1, name: '资讯'},
        {id: 2, name: '图片'},
        {id: 3, name: '赛事'},
        {id: 4, name: '产品'}
      ][Number(this.$route.params.type) - 1].name
    }
  },
  components: {
    goodsitem
  },
  methods: {
    ...mapActions([GET_PHOTO_LIST, EVENT_GET_LIST_DATA, EVENT_SEARCH, NEWA_SEARCH, GOODS_GET_LIST_DATA]),
    setPage (page) {
      let that = this
      that.page = page
      that.getDataSearch()
    },
    getDataSearch () {
      let that = this
      // 资讯
      if (Number(that.$route.params.type) === 1) {
        that.newsStore.newsearch = Object.assign({})
        that.NEWA_SEARCH({start: (that.page - 1) * that.rows, length: that.rows, keyword: that.$route.params.value})
      }
      // 图片
      if (Number(that.$route.params.type) === 2) {
        that.photoStore.photoListItem = Object.assign({})
        that.GET_PHOTO_LIST({start: (that.page - 1) * that.rows, length: that.rows, keyword: that.$route.params.value})
      }
      // 赛事
      if (Number(that.$route.params.type) === 3) {
        that.eventStore.eventsearch = Object.assign({})
        that.EVENT_SEARCH({start: (that.page - 1) * that.rows, length: that.rows, keyword: that.$route.params.value})
      }
      // 产品
      if (Number(that.$route.params.type) === 4) {
        that.goodsStore.goodsList = Object.assign({})
        that.GOODS_GET_LIST_DATA({start: (that.page - 1) * that.rows, length: that.rows, keyword: that.$route.params.value})
      }
    }
  },
  watch: {
    '$route.params' (to, form) {
      let that = this
      this.type = to.type
      this.value = to.value
      this.getDataSearch()
      if (Number(that.$route.params.type) !== 2) {
        that.GET_PHOTO_LIST({start: 0, length: 10})
      } else {
        this.eventStore.eventList = Object.assign({})
        this.EVENT_GET_LIST_DATA({start: 0, length: 20})
      }
      that.$root.$emit('searchUpdateData', {
        id: that.type,
        value: that.value
      })
    }
  }
}
</script>

<style lang="css">
</style>
