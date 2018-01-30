<template lang="html">
  <div class="container userhome">
    <div class="row">
      <div class="col-xs-8 bg">
        <div class="title-nav">
          <p class="title">
            <router-link :to="{ path: '/'}">首页</router-link> >
            <router-link :to="{ path: '/photo'}">视频图集</router-link> >
            {{ photoName }}</p>
          <!-- <span class="title">视频图集</span> -->
        </div>
        <div class="form-group row">
          <div class="col-xs-4" style="padding:10px 0 0 0">
            <input type="text" class="form-control" @keyup.13="setPage(page)" v-model="imgkeyword" placeholder="参赛号">
          </div>
          <div class="col-xs-1" style="padding:10px 0 0 0">
            <button type="button" @click="setPage(page)" class="btn btn-warning">搜索</button>
          </div>
        </div>

        <div class="photo-list baguetteBoxOne">
          <ul class="gallery">
            <li v-for="(item,index) in photoStore.photoalbum.list" style="width:25%;height:245px;float:left;">
              <div class="clearfix" style="width:100%;height:100%;border:1px solid #d2d2d2;background:#f1f1f1">
                <a v-bind:href="item.big_url" v-bind:data-caption="item.title"><img ref="refsimgs" v-on:load="img(index,$event)" style="width:100%;" v-on:click="imglistClick($event)" v-bind:src="item['120x120_url']"></a>
                <p class="item-title">{{item.title}}<a  @click="downphoto(item)" class="alink">下载</a></p>
              </div>
            </li>
          </ul>
          <!-- <ul class="">
            <li class="gallery" style="width:33.3%">
              <div v-for="(item,index) in photoStore.photoalbum.list" v-if="index%3==0" class="item photo-item">
                <a v-bind:href="item.big_url" v-bind:data-caption="item.title"><img v-bind:src="item['120x120_url']"></a>
                <div class="item-title">{{item.title}}<a  @click="downphoto(item)" class="alink">下载</a></div>
              </div>
            </li>
            <li class="gallery" style="width:33.3%">
              <div v-for="(item,index) in photoStore.photoalbum.list" v-if="index%3==1" class="item photo-item">
                <a v-bind:href="item.big_url" v-bind:data-caption="item.title"><img v-bind:src="item['120x120_url']"></a>
                <div class="item-title">{{item.title}}<a  @click="downphoto(item)" class="alink">下载</a></div>
              </div>
            </li>
            <li class="gallery" style="width:33.3%">
              <div v-for="(item,index) in photoStore.photoalbum.list" v-if="index%3==2" class="item photo-item">
                <a v-bind:href="item.big_url" v-bind:data-caption="item.title"><img v-bind:src="item['120x120_url']"></a>
                <div class="item-title">{{item.title}}<a @click="downphoto(item)" class="alink">下载</a></div>
              </div>
            </li>
          </ul> -->
        </div>
        <div class="clearfix">

        </div>
        <div class="page" style="display:black;width:100%">
          <page v-bind:total="photoStore.photoalbum.count" v-bind:rows="rows" v-bind:page="page" v-bind:set-page="setPage" />
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
      <!-- {{photoStore.photoalbum}} -->
 </div>
</template>

<script>
import page from '@/components/common/page'
import baguettebox from 'baguettebox.js'
import 'baguettebox.js/dist/baguetteBox.css'
import { mapGetters, mapActions } from 'vuex'
import { GET_PHOTO_ALBUM, GET_PHOTO_DOWN } from '@/store/modules/photoStore'
import { GOODS_GET_LIST_DATA } from '@/store/modules/goodsStore'
import { EVENT_GET_LIST_DATA } from '@/store/modules/eventStore'
export default {
  name: 'NewsDetail',
  data () {
    return {
      imgkeyword: '',
      id: this.$route.params.id,
      total: 0,
      rows: 20, // 一页几条
      page: 1 // 当前页
    }
  },
  created () {
    let that = this
    this.photoStore.photoListItem = Object.assign({})
    this.eventStore.eventList = Object.assign({})

    that.getListData()
    this.EVENT_GET_LIST_DATA({start: 0, length: 20})
  },
  components: {
    page
  },
  computed: {
    ...mapGetters({
      photoStore: 'photoStore',
      goodsStore: 'goodsStore',
      eventStore: 'eventStore',
      userStore: 'userStore'
    }),
    photoName () {
      let name = ''
      name = this.photoStore.photoalbum.list && this.photoStore.photoalbum.list.length > 0 ? this.photoStore.photoalbum.list[0].category : ''
      return name
    }
  },
  methods: {
    ...mapActions([GET_PHOTO_ALBUM, EVENT_GET_LIST_DATA, GOODS_GET_LIST_DATA, GET_PHOTO_DOWN]),
    getListData () {
      let that = this
      this.GET_PHOTO_ALBUM([{keyword: that.imgkeyword, id: that.id, start: (that.page - 1) * that.rows, length: that.rows}, () => {
        that.$nextTick(() => {
          baguettebox.run('.gallery', {animation: 'fadeIn'})
        })
      }])
    },
    imglistClick (event) {
      if (!this.userStore.user.uid) {
        event.preventDefault()
        if (window.event) {
          window.event.cancelBubble = true
        } else {
          event.stopPropagation()
        }
        this.$root.$emit('userOpen', {})
        return
      }
    },
    img (index, e) {
      let thatimg = this.$refs.refsimgs[index]
      // let w = 0, h = 0
      let x = thatimg.width / thatimg.height
      // let y = thatimg.height / thatimg.width
      if (x > 1) {
        thatimg.style.width = '100%;'
        thatimg.style.height = 'auto'
      } else if (x < 1) {
        thatimg.style.width = 'auto'
        thatimg.style.height = '200px'
      } else {
        thatimg.style.width = '100%'
      }
    },
    setPage (page) {
      // console.log(page)
      let that = this
      that.page = page
      that.getListData()
    },
    downphoto (item) {
      let that = this
      if (!this.userStore.user.id) {
        this.$root.$emit('userOpen', {})
      } else {
        that.GET_PHOTO_DOWN([{photo_id: item.photo_id}, (error, data) => {
          if (error === undefined) {
            if (Number(data.errno) === 0) {
              window.open(data.data.pic)
              // console.log('xizzai')
            } else {
              this.$Modal.error({
                title: '错误提示',
                content: data.msg
              })
            }
          } else {
            this.$Modal.error({
              title: '错误提示',
              content: '网络错误，请稍后重试！'
            })
          }
        }])
      }
    }
  },
  watch: {
    '$route.params' () {
      let that = this
      this.photoStore.photoListItem = Object.assign({})
      this.eventStore.eventList = Object.assign({})

      that.getListData()
      this.EVENT_GET_LIST_DATA({start: 0, length: 20})
    }
  }
}
</script>
<style lang="css">
</style>
