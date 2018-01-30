<template>
  <div id="app">
    <!-- {{router}} -->
    <userlogin />
    <cheader />
    <search searchValue="" selectedId=1 />
    <router-view></router-view>
    <!-- <links /> -->
    <cfooter />

  </div>
</template>
<script>
import cheader from '@/components/common/c_header'
import cfooter from '@/components/common/c_footer'
import links from '@/components/links/links'
import search from '@/components/common/search'
import userlogin from '@/components/user/userlogin'
export default {
  name: 'App',
  data () {
    // console.log(this.$route)
    return {
    }
  },
  computed: {
    router () {
      // console.log(this.$route)
      return ''
    }
  },
  components: {
    cheader,
    links,
    cfooter,
    search,
    userlogin
  },
  methods: {
  },
  created () {
  },
  watch: {

  }
}
</script>
<style>
</style>
