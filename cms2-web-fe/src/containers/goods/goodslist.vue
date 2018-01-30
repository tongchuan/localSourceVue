<template>
  <div class="container userhome">
    <!-- {{goodsStore}} -->
    <div class="row">
      <div class="col-xs-8 bg">
        <div class="title-nav">
          <span class="title">商城</span>
        </div>
        <div class="index-jifen index-jifen-list clearfix">
          <ul index-jifen-list>
            <goodsitem v-for="(item,index) in goodsStore.goodsList.list" v-bind:key="index+'goods'" v-bind:item="item" v-bind:index="index"></goodsitem>
          </ul>
        </div>
        <div class="page" style="display:block">
          <page v-bind:total="goodsStore.goodsList.count" v-bind:rows="rows" v-bind:page="page" v-bind:set-page="setPage" />
        </div>
      </div>
      <div class="col-xs-4 pr">
        <div class="bg" style="padding: 0 15px;">
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
import { GOODS_GET_LIST_DATA } from '@/store/modules/goodsStore'
import { NEWS_GET_LIST_DATA } from '@/store/modules/newsStore'
import { GET_PHOTO_LIST } from '@/store/modules/photoStore'
import goodsitem from '@/components/goods/goodsitem'
export default {
  name: 'GoodsList',
  data () {
    return {
      total: 0,
      rows: 9, // 一页几条
      page: 1 // 当前页
    }
  },
  components: {
    page,
    goodsitem
  },
  created () {
    let that = this
    that.goodsStore.goodsList = Object.assign({})
    that.getListData()
    // this.newsStore.newsList = Object.assign({})
    // that.NEWS_GET_LIST_DATA({start: 0, length: 20})
    this.photoStore.photoListItem = Object.assign({})
    this.GET_PHOTO_LIST({start: 0, length: 10})
  },
  computed: {
    ...mapGetters({
      goodsStore: 'goodsStore',
      newsStore: 'newsStore',
      photoStore: 'photoStore'
    })
  },
  methods: {
    ...mapActions([GOODS_GET_LIST_DATA, NEWS_GET_LIST_DATA, GET_PHOTO_LIST]),
    getListData () {
      let that = this
      this.GOODS_GET_LIST_DATA({start: (that.page - 1) * that.rows, length: that.rows})
    },
    setPage (page) {
      let that = this
      that.page = page
      that.getListData()
    }
  }
}
</script>
<style type="text/css">

</style>
