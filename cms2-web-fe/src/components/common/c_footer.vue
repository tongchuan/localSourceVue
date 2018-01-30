<template>
  <!-- <div class="app foot">
    <div class="container foot-nav">
      <ul>
        <li><router-link :to="{ path: '/' }">特跑首页</router-link></li>
        <li><router-link :to="{ path: 'list' }">跑步资讯</router-link></li>
        <li><router-link :to="{ path: 'form' }">赛事报名</router-link></li>
        <li><router-link :to="{ path: 'home' }">赛事结果</router-link></li>
        <li><router-link :to="{ path: 'home' }">积分商城</router-link></li>
        <li><router-link :to="{ path: 'home' }">个人中心</router-link></li>
      </ul>
    </div>
    <div class="container desc">
      <span class="fr">© 2015 TripWay - Material UI Template.</span><span class="fl">St Stephen's House, Colston Ave, Bristol BS1 4ST, UK  /  Telephone: +1 800 603 6035</span>
    </div>
  </div> -->
  <div class="app"  style="background:#e76401;color:#fff;height: 180px;padding: 40px 0 0 0;">
    <div class="container" style="position:relative">
      <img src="/static/img/code.jpg" style="position:absolute;right:0;height:120px;top:40px;top:0" alt="">
      <p class="aboute">
        <!-- <a v-for="(item,index) in newsStore.footNewsList.list" key=“index” v-bind:href="'/#/newsdetail/'+item.id">{{item.title}}</a> -->
        <router-link v-for="(item,index) in newsStore.footNewsList.list" key=“index” :to="{ path: '/newsdetail/'+item.id+'/0' }">{{item.title}}</router-link>
      </p>
      <p class="footer">Copyright2005-2017 <a href="http://www.centurysports.com.cn" style="text-decoration: underline;">www.centurysports.com.cn</a>北京迅驰体育管理有限公司 京公网安备110105008007京ICP备06033156号
        <!-- 版权所有 京ICP证XXXXXX 京公安备XXXXXX -->
      </p>
    </div>
  </div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { FOOT_NEWS_GET_LIST_DATA } from '@/store/modules/newsStore'

export default {
  name: 'foorter',
  data () {
    return {}
  },
  created () {
    this.FOOT_NEWS_GET_LIST_DATA({config_type: 1, start: 0, length: 10})
    // FOOT_NEWS_GET_LIST_DATA
  },
  computed: {
    ...mapGetters({
      newsStore: 'newsStore'
    })
  },
  methods: {
    ...mapActions([FOOT_NEWS_GET_LIST_DATA])
  }
}
</script>
<style>

</style>
