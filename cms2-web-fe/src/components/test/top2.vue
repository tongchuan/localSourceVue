<template lang="html">
<div class="container shop mt bg">
  <div class="nav-title">
    <span class="title-name">测试路由</span>
    <span class="more">more</span>
  </div>
  <div class="row" style="margin-top:15px">
    <div class="nav-left-list">
      <ul>
        <li v-for="item in navList" v-bind:class="{'active': item.selected}"  v-on:click="updateSelected(item)">
          <router-link v-bind:to="item.link"><span v-if="item.badge>0" class="badge" v-text="item.badge"></span><span v-bind:class="item.icon + ' glyphicon'" v-text="item.name"></span></router-link>
        </li>
      </ul>
    </div>
    <div class="nav-right-content">
      dsadsf
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'top2',
  data () {
    return {
      navList: [
        {name: '开始开始开始', icon: 'glyphicon-asterisk', link: '/vue/page1', badge: 50, selected: true},
        {name: '开始开始开始', icon: 'glyphicon-asterisk', link: '/vue/page2', badge: 0, selected: false},
        {name: '开始开始开始', icon: 'glyphicon-asterisk', link: '/vue/page1', badge: 50, selected: false}
      ]
    }
  },
  created () {
  },
  components: {
  },
  methods: {
    updateSelected (items) {
      let that = this
      that.navList.forEach((item) => {
        item.selected = false
        if (item === items) {
          item.selected = true
        }
      })
      // console.log(item)
    }
  }
}
</script>

<style lang="css">

</style>
