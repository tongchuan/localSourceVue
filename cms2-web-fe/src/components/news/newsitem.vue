<template lang="html">
  <li>
    <span>{{item.time | dateF}}</span>
    <img src="/static/img/news.png" v-bind:alt="item.title" v-bind:title="item.title">
    <router-link :to="{ path: '/newsdetail/'+item.id }">{{item.title}}</router-link>
  </li>
</template>

<script>
export default {
  name: 'newsitem',
  props: ['item', 'index'],
  data () {
    return {

    }
  }
}
</script>

<style lang="css">
</style>
