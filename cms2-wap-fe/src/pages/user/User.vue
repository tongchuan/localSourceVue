<template lang="html">
  <div class="container">
    <div class="row user-center">
      <img v-if="avatar || userStore.user.avatar" :src="avatar || userStore.user.avatar" class="userphoto">
      <img v-else src="../../assets/avatar.jpg" class="userphoto">
      <upuserphoto upimgtype="userPhoto" upimgtitle="修改头像" v-on:getImageData="imageData" />
      <h3>{{ userStore.user.username }}</h3>
      <p v-if="false">我的积分：999</p>
      <span class="user-msg" v-if="false"><span class="badge">20</span></span>
      <span class="qiandao" @click="goQiandao">签到</span>
    </div>
    <div class="row bg user-center-list">
      <router-link :to="'/UserUpdate'">
        <div class="col-xs-4 u3">
          <p>基本资料</p>
        </div>
      </router-link>
      <router-link :to="'/UserEntryList'">
        <div class="col-xs-4 u2">
          <p>参赛列表</p>
        </div>
      </router-link>
      <router-link :to="'/UserEntryResult'">
        <div class="col-xs-4 u1">
          <p>参赛成绩</p>
        </div>
      </router-link>
      <router-link :to="'/UserScores'">
        <div class="col-xs-4 u4">
          <span class="glyphicon glyphicon-flag" style="color: #6b81af;"></span>
          <p>我的积分</p>
        </div>
      </router-link>
      <router-link :to="'/UserPwd'">
        <div class="col-xs-4 u4">
          <span class="glyphicon glyphicon-pencil" style="color: #333;"></span>
          <p>修改密码</p>
        </div>
      </router-link>
      <router-link :to="'/mall/v/cart'">
        <div class="col-xs-4 u4">
          <span class="glyphicon glyphicon-shopping-cart" style="color: #333;"></span>
          <p>购物车</p>
        </div>
      </router-link>
    </div>
    <t-foot />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_INFO, SIGN_IN } from '@/store/modules/userStore'
import Foot from '@/components/Foot'
import upuserphoto from '@/components/upuserphoto'
export default {
  data () {
    return {
      avatar: ''
    }
  },
  created () {
    let that = this
    that.USER_INFO((data) => {
      if (Number(data.errno) !== 0) {
        that.$router.replace({ path: '/login' })
      }
    })
  },
  computed: {
    ...mapGetters([
      'userStore'
    ])
  },
  methods: {
    ...mapActions([
      USER_INFO,
      SIGN_IN
    ]),
    imageData (type, data) {
      let that = this
      if (type === 'userPhoto') {
        that.avatar = data.data.avatar
      }
    },
    goQiandao () {
      this.SIGN_IN()
    }
  },
  components: {
    't-foot': Foot,
    upuserphoto
  },
  watch: {
    'userStore.sign': function (sign) {
      if (Number(sign.errno) === 0) {
        this.$router.push('userscores')
      } else {
        this.$Message.info(sign.msg)
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../common/scss/mixin.scss";
.user-center{
  height: px2rem(348px);
  background: #ffad00 url('../../assets/userbg.png');
  background-size: 100%;
  position: relative;
  text-align: center;
  color: #fff;
  p{
    font-size: px2rem(18px);
  }
  img.userphoto{
    display: block;
    width: px2rem(122px);
    height: px2rem(122px);
    margin: 0 auto;
    margin-top: px2rem(50px);
    border-radius: 50%;
  }
  h3 {
    line-height: 1;
    margin-top: px2rem(35px);
    font-size: px2rem(36px);
    font-weight: 400;
  }
  .qiandao{
    position: absolute;
    right: 0;
    top: px2rem(50px);
    padding: px2rem(3px) px2rem(20px);
    color: #fff;
    font-size: px2rem(26px);
    border: 1px solid #fff;
    border-right: none;
    border-top-left-radius: px2rem(40px);
    border-bottom-left-radius: px2rem(40px);
  }
  .user-msg{
    position: absolute;
    top: px2rem(20px);
    height: px2rem(60px);
    width: px2rem(80px);
    background: url('../../assets/u4.png') no-repeat;
    background-size: px2rem(60px);
    left: 0;
    padding: px2rem(0px) px2rem(0px) px2rem(0px) px2rem(50px);
    .badge{
      background: #f8d71f;
      color: #333;
    }
  }
}
.bg{
  background: #fff;
}
.user-center-list{
  margin-top: px2rem(15px);
  color: #333;
  div{
    cursor: pointer;
    background-size: px2rem(30px) px2rem(30px);
    font-size: px2rem(18px);
    p{
      text-align:center;
      padding-top:px2rem(75px);
    }
  }
  .u1{
    background: url('../../assets/u1.png') center px2rem(15px) no-repeat;
    background-size: px2rem(50px);
  }
  .u2{
    background: url('../../assets/u2.png') center px2rem(15px) no-repeat;
    background-size: px2rem(50px);
  }
  .u3{
    background: url('../../assets/u3.png') center px2rem(15px) no-repeat;
    background-size: px2rem(50px) auto;
  }
  .u4{
    text-align: center;
    padding-top:px2rem(18px);
    span{
      color: #ff0600;
      width: px2rem(50px);
      height: px2rem(40px);
      font-size: px2rem(30px);
    }
    p{
      padding-top:px2rem(18px);
      padding-bottom: px2rem(10px);
    }
  }
}
</style>
