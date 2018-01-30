<template>
  <div class="container userhome"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="false"
  infinite-scroll-distance="60"
  style="padding-bottom: 100px;"
  >
    <div class="row">
      <div class="col-xs-12 bg">
        <h3 style="padding: 20px 0; text-align: center;">视频图集</h3>
        <div class="photo-list clearfix baguetteBoxOne gallery">
          <ul class="clearfix">
            <li v-for="(item,index) in photoStore.photoListItem.list">
              <div class="item">
                <router-link :to="{ path: '/photodetail/'+item.album_id }"><img v-bind:src="item.thumb" alt=""></router-link>
                <h4 style="padding: 15px 0 20px;">{{item.title}}</h4>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
    <t-foot />
 </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import infiniteScroll from 'vue-infinite-scroll'
import { GET_PHOTO_LIST } from '@/store/modules/photoStore'
import Foot from '@/components/Foot'
export default {
  name: 'NewsList',
  data () {
    return {
      rows: 10, // 一页几条
      page: 1 // 当前页
    }
  },
  directives: {
    infiniteScroll
  },
  created () {
    let that = this
    this.photoStore.photoListItem = Object.assign({})
    that.getListData()
  },
  computed: {
    ...mapGetters({
      photoStore: 'photoStore'
    })
  },
  components: {
    't-foot': Foot
  },
  methods: {
    ...mapActions([GET_PHOTO_LIST]),
    getListData () {
      let that = this
      this.GET_PHOTO_LIST({start: (that.page - 1) * that.rows, length: that.rows})
    },
    loadMore () {
      // console.log('wwwwwwwww')
      this.rows = this.rows + 5
      this.getListData()
    }
  }
}
</script>
<style scoped>
.photo-list{

}
.photo-list li img{
  width: 100%;
}
.photo-list li h4{
  text-align: center;
}
</style>
