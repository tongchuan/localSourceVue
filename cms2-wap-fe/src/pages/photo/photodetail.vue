<template lang="html">
  <div class="container userhome"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="false"
  infinite-scroll-distance="60"
  >
    <div class="row">
      <div class="col-xs-12 bg">
        <div class="title-nav">
          <p class="title">
            <router-link :to="{ path: '/'}">首页</router-link> >
            <router-link :to="{ path: '/photo'}">视频图集</router-link> >
            {{ photoName }}</p>
          <!-- <span class="title">视频图集</span> -->
        </div>
        <div class="form-group row">
          <div class="col-xs-8">
            <input type="text" class="form-control" @keyup.13="setPage(page)" v-model="imgkeyword" placeholder="参赛号">
          </div>
          <div class="col-xs-4">
            <button type="button" @click="setPage(page)" class="btn btn-warning">搜索</button>
          </div>
        </div>

        <div class="photo-list baguetteBoxOne">
          <ul class="gallery">
            <li v-for="(item,index) in photoStore.photoalbum.list" style="width:100%;height:auto;float:left;">
              <div class="clearfix" style="width:100%;height:100%;border:1px solid #d2d2d2;background:#f1f1f1">
                <a v-bind:href="item.big_url" v-bind:data-caption="item.title"><img ref="refsimgs" v-on:load="img(index,$event)" style="width:100%;" v-on:click="imglistClick($event)" v-bind:src="item['120x120_url']"></a>
                <h4 style="text-align:center;line-height:2em">{{item.title}}<a  @click="downphoto(item)" class="alink">下载</a></h4>
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
import infiniteScroll from 'vue-infinite-scroll'
import baguettebox from 'baguettebox.js'
import 'baguettebox.js/dist/baguetteBox.css'
import { mapGetters, mapActions } from 'vuex'
import { GET_PHOTO_ALBUM, GET_PHOTO_DOWN } from '@/store/modules/photoStore'
import Foot from '@/components/Foot'
export default {
  name: 'NewsDetail',
  data () {
    return {
      imgkeyword: '',
      id: this.$route.params.id,
      rows: 10, // 一页几条
      page: 1 // 当前页
    }
  },
  created () {
    let that = this
    this.photoStore.photoListItem = Object.assign({})
    that.getListData()
  },
  components: {
    't-foot': Foot
  },
  computed: {
    ...mapGetters({
      photoStore: 'photoStore',
      userStore: 'userStore'
    }),
    photoName () {
      let name = ''
      name = this.photoStore.photoalbum.list && this.photoStore.photoalbum.list.length > 0 ? this.photoStore.photoalbum.list[0].category : ''
      return name
    }
  },
  directives: {
    infiniteScroll
  },
  methods: {
    ...mapActions([GET_PHOTO_ALBUM, GET_PHOTO_DOWN]),
    getListData () {
      let that = this
      this.GET_PHOTO_ALBUM([{keyword: that.imgkeyword, id: that.id, start: (that.page - 1) * that.rows, length: that.rows}, () => {
        that.$nextTick(() => {
          baguettebox.run('.gallery', {animation: 'fadeIn'})
        })
      }])
    },
    setPage (page) {
      // console.log(page)
      let that = this
      this.rows = 10
      that.getListData()
    },
    imglistClick (event) {
      // if (!this.userStore.user.uid) {
      //   event.preventDefault()
      //   if (window.event) {
      //     window.event.cancelBubble = true
      //   } else {
      //     event.stopPropagation()
      //   }
      //   this.$root.$emit('userOpen', {})
      //   return
      // }
    },
    loadMore () {
      let that = this
      // console.log('wwwwwwwww')
      this.rows = this.rows + 5
      that.getListData()
    },
    img (index, e) {
      // let thatimg = this.$refs.refsimgs[index]
      // // let w = 0, h = 0
      // let x = thatimg.width / thatimg.height
      // // let y = thatimg.height / thatimg.width
      // if (x > 1) {
      //   thatimg.style.width = '100%;'
      //   thatimg.style.height = 'auto'
      // } else if (x < 1) {
      //   thatimg.style.width = 'auto'
      //   thatimg.style.height = '200px'
      // } else {
      //   thatimg.style.width = '100%'
      // }
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

      that.getListData()
    }
  }
}
</script>
<style lang="css">
</style>
