<template>
  <div class="app">
    <!-- 首页banner -->
    <banner v-bind:data="bannerData" />
    <!-- 搜索 -->
    <!-- <search searchValue="" selectedId=1 /> -->
    <!-- 新闻+距离 -->
    <div class="container">
      <div class="row">
        <!-- 距离start -->
        <div class="index-news-right">
          <div class="right-time">
            {{dicStore.countdown.title}}
          </div>
          <div class="right-day">
            <span>{{liveDay}}</span>天
          </div>
          <a v-bind:href="dicStore.countdown.link" target="_blank"><img v-bind:src="dicStore.countdown.background_pic" alt=""></a>
        </div>
        <!-- 距离end -->
        <!--  新闻列表 -->
        <div class="index-news-left bg">
          <div class="title-nav">
            <span class="title">资讯列表</span>
            <router-link :to="{ path: '/news'}"><span class="more">MORE + </span></router-link>
          </div>
          <div class="new-left" id="focusMap" style="height:350px;width:375px">
            <focusmap v-bind:focusList="focusList" />
          </div>
          <div class="new-right new-title-img" style="width:auto;margin-left:375px;float:left;float:none">
            <ul>
              <newsitem v-for="(item,index) in newsStore.newsIndex" key="index+'news'" v-bind:item="item" v-bind:index="index" />
            </ul>
          </div>
        </div>
        <!-- 新闻列表end -->
      </div>
    </div>
    <!-- {{dicStore.bannerpic}} -->
    <banner2 v-bind:data="bannerpic" />

    <div class="container index-image-list">
      <!-- {{photoStore}} -->
      <div class="row">
        <p class="title">视频图集</p>
        <!-- <p class="desc">特跑每一个精彩的瞬间记录着一路走来所有的汗水与快乐</p> -->
        <ul class="index-image-title">
          <li v-for="item in photoTitle" v-bind:class="item===photokey ? 'active': ''" v-on:click="photokey=item">{{item}} </li>
        </ul>
        <ul class="image-list">
          <ul>
              <li v-for="list in photoContent" href="javascript:void(0)">
                <router-link :to="{ path: '/photodetail/'+photokey}">
                  <!-- <a v-bind:href="list['big_url']" v-bind:data-caption="list.title"> -->
                  <img v-bind:src="list['120x120_url']" v-bind:alt="list['title']+':'+list['desc']" v-bind:title="list['title']+':'+list['desc']">
                  <!-- </a> -->
                </router-link>
              </li>
          </ul>
        </ul>
        <!-- <ul class="image-list baguetteBoxOne gallery">
          <ul>
              <li v-for="list in photoContent" href="javascript:void(0)">
                <a v-bind:href="list['big_url']" v-bind:data-caption="list.title">
                <img v-bind:src="list['120x120_url']" v-bind:alt="list['title']+':'+list['desc']" v-bind:title="list['title']+':'+list['desc']">
                </a>
              </li>
          </ul>
        </ul> -->
      </div>
    </div>

    <div class="container index-jifen bg">
      <div class="title-nav">
        <span class="title">商城</span>
        <a href="https://weidian.com/?userid=1233461354&ifr=shopdetail&wfr=c"><span class="more">MORE + </span></a>
      </div>
      <ul class="index-jifen-list">
        <goodsitem v-for="(item,index) in goodsStore.goodsList.list" key="index+'goods'" v-bind:item="item" v-bind:index="index"></goodsitem>
        <!-- <li v-for="(item,index) in goodsStore.goodsList.list">
          <router-link :to="{ path: '/goodsdetail/'+item.goods_id }"><div class="item">
            <img v-bind:src="item.icon_url" v-bind:alt="item.name" v-bind:title="item.name">
            <p class="jifen-a">{{item.name}}  {{item.title}}</p>
            <p class="jifen-b"><span>{{item.point}}</span>分</p>
          </div></router-link>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
import baguettebox from 'baguettebox.js'
import 'baguettebox.js/dist/baguetteBox.css'
import { mapGetters, mapActions } from 'vuex'
import { NEWS_GET_INDEX_TOP } from '@/store/modules/newsStore'
import { GOODS_GET_LIST_DATA } from '@/store/modules/goodsStore'
import { GET_COUNTDOWN, SLIDESHOW, FOCUSPIC, BANNERPIC } from '@/store/modules/dicStore'
import { GET_NEW_PHOTO } from '@/store/modules/photoStore'
import banner from '@/components/common/banner'
import banner2 from '@/components/common/banner2'
import search from '@/components/common/search'
import focusmap from '@/components/common/focusmap'
import newsitem from '@/components/news/newsitem'
import goodsitem from '@/components/goods/goodsitem'
export default {
  name: 'Index',
  data () {
    return {
      // bannerData: [
      //   {image: '/static/images/banner.png', title: 'Title1', content: 'Content1'},
      //   {image: '/static/images/banner.png', title: 'Title2', content: 'Content2'},
      //   {image: '/static/images/banner.png', title: 'Title3', content: 'Content3'}
      // ],
      photokey: ''
    }
  },
  created () {
    let that = this
    this.NEWS_GET_INDEX_TOP({length: 9})
    this.GOODS_GET_LIST_DATA({start: 0, length: 4})
    this.GET_COUNTDOWN({})
    this.GET_NEW_PHOTO([{}, () => {
      that.$nextTick(() => {
        baguettebox.run('.gallery', {animation: 'fadeIn'})
      })
    }])
    this.SLIDESHOW({})
    this.FOCUSPIC({})
    this.BANNERPIC({})
  },
  components: {
    banner,
    banner2,
    search,
    focusmap,
    newsitem,
    goodsitem
  },
  computed: {
    ...mapGetters({
      newsStore: 'newsStore',
      goodsStore: 'goodsStore',
      dicStore: 'dicStore',
      photoStore: 'photoStore'
    }),
    bannerData () {
      let that = this
      let data = []
      that.dicStore.slideshow.forEach((item) => {
        data.push(Object.assign(item, {
          image: item.big_url,
          title: item.title,
          content: item.desc
        }))
      })
      // console.log(data)
      return data
    },
    focusList () { // 新闻焦点图
      let that = this
      let data = []
      that.dicStore.focuspic.forEach((item) => {
        data.push(Object.assign(item, {
          name: item.title,
          title: item.desc,
          image: item.big_url,
          link: item.click_url
        }))
      })
      return data
    },
    bannerpic () {
      if (this.dicStore.bannerpic) {
        let index = Math.floor((Math.random() * this.dicStore.bannerpic.length))
        // console.log(index)
        return this.dicStore.bannerpic[index]
      }
    },
    liveDay () {
      return Math.ceil(this.dicStore.countdown.time / 24 / 60 / 60)
    },
    photoTitle () {
      let that = this
      let data = []
      for (let list in that.photoStore.photoList.list) {
        if (that.photokey === '') {
          that.photokey = list
        }
        data.push(list)
      }
      return data
    },
    photoContent () {
      if (this.photoStore.photoList && this.photoStore.photoList.list && this.photokey !== '') {
        return this.photoStore.photoList.list[this.photokey]
      } else {
        return {}
      }
    }
  },
  methods: {
    ...mapActions([NEWS_GET_INDEX_TOP, GOODS_GET_LIST_DATA, GET_COUNTDOWN, GET_NEW_PHOTO, SLIDESHOW, FOCUSPIC, BANNERPIC]),
    photoClick (item) {
      if (this.item) {
        return this.photoStore.photoList.list[item]
      } else {
        return undefined
      }
    }
  }
}
</script>
<style>

</style>
