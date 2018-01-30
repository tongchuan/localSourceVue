<template lang="html">
  <div class="container bg">
    <div style="padding-top: 20px;">
      <h2 style="padding-bottom: 10px; text-align: center;">登录</h2>
      <div class="form-group">
        <label>身份证号</label>
        <input type="text" v-model="card" class="form-control" placeholder="身份证号">
      </div>
      <div class="form-group">
        <label>密码</label>
        <input type="password" v-model="pwd" class="form-control" placeholder="密码">
      </div>
      <div class="form-group">
        尚未注册，马上去 <router-link class="alink" to="/reg">注册</router-link>
        <!-- , <router-link class="alink" to="/forget">忘记密码</router-link> -->
      </div>
      <div class="form-group">
        <button type="button" @click="denglu" class="btn btn-warning login-but">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
      </div>
      <div class="form-group error">
        {{message}}
      </div>

    </div>
    <t-foot />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_INFO, USER_LOGIN } from '@/store/modules/userStore'
import Foot from '@/components/Foot'
export default {
  data () {
    return {
      card: '',
      pwd: '',
      message: ''
    }
  },
  created () {
  },
  computed: {
    ...mapGetters([
      'userStore'
    ])
  },
  methods: {
    ...mapActions([
      USER_INFO,
      USER_LOGIN
    ]),
    denglu () {
      let that = this
      if (!this.isCard(this.card)) {
        this.message = '身份证输入不合法'
        return
      }
      if (this.pwd.length < 6) {
        this.message = '输入密码不正确'
        return
      }
      let data = {
        username: that.card,
        password: that.pwd
      }
      that.USER_LOGIN([data, (err) => {
        if (err) {
          this.message = err.toString()
        } else {
          that.$router.replace({ path: '/user' })
        }
      }])
    }
  },
  components: {
    't-foot': Foot
  }
}
</script>

<style lang="css">
@import "../../common/scss/mixin.scss";
.login-but{
  width: 100%;
}
.error{
  padding: 3px;
  color: #900;
}
.alink{
  color: #009
}
.bg{
  background: #fff;
}
</style>
