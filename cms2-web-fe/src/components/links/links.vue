<template lang="html">
<!-- <div class="container links bg">
  <div class="title-nav">
    <span class="title">合作单位 / Cooperative unit</span>
  </div>
  <ul class="clearfix">
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
    <li><a href="#"><img src="/static/1.png" alt=""></a></li>
  </ul>
</div> -->
<div class="menu-nav container" style="margin-top:15px">
  <div class="row">
    <ul>
      <li><router-link :to="{ path: '/' }">首页</router-link></li>
      <li><router-link :to="{ path: '/news' }">资讯</router-link></li>
      <li><router-link :to="{ path: '/event' }">赛事活动</router-link></li>
      <li><router-link :to="{ path: '/goods' }">商城</router-link></li>
      <li><router-link :to="{ path: '/photo' }">视频图集</router-link></li>
      <!-- <li><router-link :to="{ path: 'home' }">赛事结果</router-link></li> -->
      <li><router-link :to="{ path: '/user' }">个人中心</router-link></li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'top2',
  data () {
    return {
    }
  }
}
</script>

<style lang="css">

</style>
