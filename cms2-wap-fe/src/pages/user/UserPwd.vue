<template lang="html">
  <div class="container bg">
    <div style="padding-top: 20px;">
      <h2 style="padding-bottom: 10px; text-align: center;">修改密码</h2>
      <div class="form-group">
        <label>原密码</label>
        <input type="password" @input="pwd1" v-model="password" placeholder="请输入原密码" class="form-control" />
      </div>
      <div class="form-group">
        <label>新密码</label>
        <input type="password" @input="pwd2" v-model="npassword" placeholder="请输入新密码" class="form-control" />
      </div>
      <div class="form-group">
        <label>确认新密码</label>
        <input type="password" @input="pwd3" v-model="qpassword" placeholder="请再次输入新密码" class="form-control" />
      </div>

      <div class="form-group">
        <button type="button" @click="pwdUser" class="btn btn-warning login-but">修改密码</button>
      </div>
      <div class="form-group error">
        <ul>
          <li v-for="item in dataError">{{item}}</li>
          <li v-if="message!=''">{{message}}</li>
        </ul>
      </div>
    </div>
    <t-foot />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_UPDATA } from '@/store/modules/userStore'
import Foot from '@/components/Foot'
export default {
  name: 'pwd',
  data () {
    return {
      password: '',
      npassword: '',
      qpassword: '',
      dataError: {},
      message: ''
    }
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    })
  },
  methods: {
    ...mapActions([USER_UPDATA]),
    pwd1 () {
      let that = this
      let flag = true
      if (this.isTrim(that.password)) {
        that.dataError['password'] = '密码不能为空！'
        flag = false
      } else {
        that.dataError['password'] = ''
      }
      return !flag
    },
    pwd2 () {
      let that = this
      let flag = true
      if (this.isLength(that.npassword, 6)) {
        that.dataError['npassword'] = '新密码不能小于6位！'
        flag = false
      } else {
        that.dataError['npassword'] = ''
      }
      return !flag
    },
    pwd3 () {
      let that = this
      let flag = true
      if (!this.isEqual(that.npassword, that.qpassword)) {
        that.dataError['qpassword'] = '两次密码不同'
        flag = false
      } else {
        that.dataError['qpassword'] = ''
      }
      return !flag
    },
    pwdUser () {
      let that = this
      let data = {}
      if (that.pwd1() && that.pwd2() && that.pwd3()) {
        console.log('33333333')
        return
      }
      data.password = this.password
      data.npassword = this.npassword
      data.qpassword = this.qpassword
      that.USER_UPDATA([data, (err, data) => {
        if (err === undefined) {
          if (Number(data.errno) === 0) {
            that.$Modal.info({
              title: '提示信息',
              content: '修改成功',
              onOk: () => {
              }
            })
            that.$router.replace({ path: '/login' })
          } else {
            that.message = data.msg
          }
        } else {
          that.message = data.msg
        }
      }])
    }
  },
  components: {
    't-foot': Foot
  }
}
</script>

<style lang="scss">
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
