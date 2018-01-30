<template lang="html">
  <div class="container userhome">
    <div class="row">
      <div class="col-xs-3 bg" style="min-height:500px;position:relative">
        <ul class="user-left-nav">
          <router-link :to="{ path: '/user' }">
            <li :class="this.$route.fullPath == '/user' ? 'active' : ''">
              <span class="glyphicon glyphicon-user"></span>基本资料
            </li>
          </router-link>
          <router-link :to="{ path: '/user/event' }">
            <li :class="this.$route.fullPath == '/user/event' ? 'active' : ''">
              <span class="glyphicon glyphicon-road"></span>我的赛事
            </li>
          </router-link>
          <router-link :to="{ path: '/user/jf' }">
            <li :class="this.$route.fullPath == '/user/jf' ? 'active' : ''">
              <span class="glyphicon glyphicon-cog"></span>我的积分
            </li>
          </router-link>
          <router-link :to="{ path: '/user/shopping' }">
            <li :class="this.$route.fullPath == '/user/shopping' ? 'active' : ''">
              <span class="glyphicon glyphicon-cog"></span>购物车
            </li>
          </router-link>
          <!-- <router-link :to="{ path: '/user/jf' }">
            <li :class="this.$route.fullPath == '/user/jf' ? 'active' : ''" @click="active = 'jf'">
              <span class="glyphicon glyphicon-asterisk"></span>我的收藏
            </li>
          </router-link>
          -->
          <!-- <router-link :to="{ path: '/user/order' }">
            <li :class="this.$route.fullPath == '/user/order' ? 'active' : ''" @click="active = 'order'">
              <span class="glyphicon glyphicon-asterisk"></span>我的装备
            </li>
          </router-link>  -->
          <router-link :to="{ path: '/user/pwd' }">
            <li :class="this.$route.fullPath == '/user/pwd' ? 'active' : ''">
              <span class="glyphicon glyphicon-pencil"></span>修改密码
            </li>
          </router-link>
        </ul>
      </div>
      <div class="col-xs-9" style="padding-right:0">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_INFO } from '@/store/modules/userStore'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    })
  },
  created () {
    // let that = this
    // that.USER_INFO((data) => {
    //   if (Number(data.errno) !== 0) {
    //     that.openUserModel()
    //   }
    // })
  },
  methods: {
    ...mapActions([USER_INFO]),
    openUserModel () {
      let that = this
      that.$Modal.error({
        title: '提示信息',
        content: '您还没有登录，您不能访问用户中心！',
        onOk: () => {
          that.$router.replace({ path: '/' })
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
