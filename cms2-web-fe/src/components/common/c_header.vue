<template>
  <div class="header logtop">
    <div class="container">

      <div class="row topbackground">
        <router-link :to="{ path: '/' }"><img class="img_logo" src="/static/img/top_2.png"></router-link>
        <img class="img_logo2" src="/static/img/top_1.png">
    <div class="container logo-body">
      <div class="row">
        <div class="col-xs-3 logo-tel">
          <ul>
            <li>
              <span class="" v-if="!userStore.user.id">
                <a href="javascript:void(0)" v-on:click="showLogin">登录</a> |
                <router-link :to="{ path: '/register' }">注册</router-link>
              </span>
              <span class="" v-if="userStore.user.id">
                您好，<router-link class="alink" :to="{ path: '/user' }">{{userStore.user.username}}</router-link>
                &nbsp;<a href="javascript:void" v-on:click="qiandao">签到</a>
                <a href="javascript:void(0)" v-on:click="loginout">退出</a>
              </span>
            </li>
            <li>
              <img src="/static/images/imlogo.png" style="width: 40px;margin-right: -20px;" alt="">
              QQ客服：<a href="http://wpa.qq.com/msgrd?v=3&uin=2353771179&site=qq&menu=yes" target="blank">2353771179</a></li>
            <li>工作时间：每周一至周五10:00-17:00</li>
          </ul>
        </div>
      </div>
    </div>


  </div>
</div>
<div class="banner-menu-nav">
  <div class="menu-nav container">
    <div class="row" v-bind:test="routeName">
      <div class="col-xs-2" v-bind:class="{'selected': this.routeName=='Index'}">
        <router-link :to="{ path: '/' }" >首页</router-link>
      </div>
      <div class="col-xs-2" v-bind:class="{'selected': this.routeName=='NewsList' || this.routeName=='NewsDetail'}">
        <router-link :to="{ path: '/news' }">资讯</router-link>
      </div>
      <div class="col-xs-2" v-bind:class="{'selected': this.routeName=='EventList' || this.routeName=='EventDetail' || this.routeName=='Signup'}">
        <router-link :to="{ path: '/event' }">赛事活动</router-link>
      </div>
      <!-- <div class="col-xs-2" v-bind:class="{'selected': this.routeName=='GoodsList'||this.routeName=='GoodsDetail'}">
        <router-link :to="{ path: '/goods' }">商城</router-link>
      </div> -->
      <div class="col-xs-2">
        <a target="_blank" href="https://weidian.com/?userid=1233461354&ifr=shopdetail&wfr=c">商城</a>
      </div>
      <div class="col-xs-2" v-bind:class="{'selected': this.routeName=='PhotoList'||this.routeName=='PhotoDetail'}">
        <router-link :to="{ path: '/photo' }">视频图集</router-link>
      </div>
      <div class="col-xs-2" v-bind:class="{'selected': this.routeName!='Index' &&
      this.routeName!='NewsList' &&
      this.routeName!='NewsDetail' &&
      this.routeName!='EventList' &&
      this.routeName!='EventDetail' &&
      this.routeName!='Signup'
      && this.routeName!='GoodsList' &&
      this.routeName!='GoodsDetail' &&
      this.routeName!='PhotoList' &&
      this.routeName!='PhotoDetail'}">
        <a href="javascript:void(0)" v-on:click="userzhongxin">个人中心</a>
      </div>
    </div>
  </div>
</div>
  </div>
</template>
<script>

// import userlogin from '@/components/userlogin'
import { USER_LOGIN_OUT } from '@/store/modules/userStore'
import { POINT_SIGNIN_DATA } from '@/store/modules/pointStore'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'c_header',
  data () {
    return {
      routeName: this.$route.name,
      usershow: false
    }
  },
  components: {
    // userlogin
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    })
  },
  methods: {
    ...mapActions([USER_LOGIN_OUT, POINT_SIGNIN_DATA]),
    showLogin () {
      this.$root.$emit('userOpen', {})
      // this.usershow = true
    },
    // cancel (data) {
    //   this.usershow = false
    // },
    userzhongxin () {
      // console.log(!this.userStore.user.id)
      if (!this.userStore.user.id) {
        // this.usershow = true
        this.$root.$emit('userOpen', {})
      } else {
        this.$router.replace({ path: '/user' })
      }
    },
    loginout () {
      let that = this
      that.USER_LOGIN_OUT([{}, (data) => {
        this.$router.replace({ path: '/' })
      }])
    },
    qiandao () {
      let that = this
      that.POINT_SIGNIN_DATA([{}, (err, data) => {
        if (err !== undefined) {
          that.$Message.info('签到失败！')
        } else {
          if (Number(data.errno) === 0) {
            that.$Message.info(data.msg)
          } else {
            that.$Message.info(data.msg)
          }
          // console.log(data)
        }
      }])
    }
  },
  watch: {
    '$route.name' (val, oldVal) {
      this.routeName = val
      // console.log(val, oldVal)
    }
  }
}
</script>
<style>
.logtop{
  position: relative;
  height: 200px;
  background:#e76401 url('/static/img/top_3.png');
  /*background:#dd5f03 url('/static/img/top.png');*/
  background-repeat: no-repeat;
  background-position: top center;
  background-size: auto 100%;
  margin-bottom: 50px;

}
.topbackground .img_logo{
  position: absolute;
  left: 0;
  top: 0;
}
.topbackground .img_logo2{
  position: absolute;
  left: 50%;
  margin-left: -200px;
}
.topbackground{
  height: 200px;
  /*background:#e76401 url('/static/img/top3.jpg');*/
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100% 100%;
  position: relative;
}
.banner-menu-nav{
  background: #333333;
  position: absolute;
  left: 0;
  bottom: -50px;
  width: 100%;
  text-align: center;
}
.row .logo-tel li,
.logo-tel a,
.logo-tel a:link,
.logo-tel a:visited,
.logo-tel a:hover,
.logo-tel a:active{
  color: #fff;
}
.banner-menu-nav .row .col-xs-2 a{
  display: block;
  margin: 0 -15px;
}
.banner-menu-nav .row .col-xs-2.selected,
.banner-menu-nav .row .col-xs-2 a:hover{
  background: #000
}
</style>
