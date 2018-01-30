<template lang="html">
  <div class="app userlogin">
  <Modal v-model="isshow"
  :closable="false"
  v-bind:mask-closable="false"
  title="登录">
  <form class="form-horizontal">
    <div class="form-group">
      <label for="username" class="col-sm-2 control-label">身份证号</label>
      <div class="col-sm-8">
        <input type="text" v-on:focus="message=''" class="form-control" v-model="username" id="username" placeholder="身份证号">
      </div>
    </div>
    <div class="form-group">
      <label for="password" class="col-sm-2 control-label">密码</label>
      <div class="col-sm-8">
        <input type="password" maxlength=20 v-on:focus="message=''"  class="form-control" v-model="password" id="password" placeholder="密码">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        尚未注册，<a v-on:click="close('/forgot')" class="alink">忘记密码</a>，马上去 <a v-on:click="close('/register')" class="alink">注册</a>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-10">
        <span class="error">{{message}}</span>
      </div>
    </div>
    </form>
    <div slot="footer">

      <button type="button" class="btn btn-default" @click="cancel">取消</button>
      <button type="button" class="btn btn-warning" @click="denglu">登录</button>
    </div>
  </Modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_LOGIN } from '@/store/modules/userStore'
export default {
  name: 'login',
  data () {
    return {
      closable: false,
      username: '', // 130623198712200000
      password: '', // 200000
      message: '',
      isshow: false
      // isshows: this.isshow
    }
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    })
  },
  mounted () {
    let that = this
    this.$root.$on('userClose', (data) => {
      that.isshow = false
    })
    this.$root.$on('userOpen', (data) => {
      that.isshow = true
    })
  },
  methods: {
    ...mapActions([USER_LOGIN]),
    close (type) {
      this.$root.$emit('userClose', {})
      // this.$emit('listenToChildEvent', '关闭了')
      this.$router.replace({ path: type })
      // console.log(this)
    },
    cancel () {
      this.$root.$emit('userClose', {})
      // this.$emit('listenToChildEvent', '关闭了')
    },
    denglu () {
      // var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      if (!this.isCard(this.username)) {
        this.message = '身份证输入不合法'
        return
      }
      if (this.password.length < 6) {
        this.message = '输入密码不正确'
        return
      }
      this.USER_LOGIN([{
        username: this.username,
        password: this.password
      }, (err) => {
        if (err) {
          this.message = err.toString()
        } else {
          this.$root.$emit('userClose', {})
          // this.$emit('listenToChildEvent', '关闭了')
        }
      }])
    }
  }
}
</script>

<style lang="css">
</style>
