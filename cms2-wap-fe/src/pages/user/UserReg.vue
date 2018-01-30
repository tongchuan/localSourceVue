<template lang="html">
  <div class="container bg">
    <div class="">
      <h2>注册</h2>
      <div class="form-group">
        <label>姓名</label>
        <div>
          <input type="text" @input="verifyFormuserName" class="form-control" v-model="userName" placeholder="请输入姓名">
        </div>
      </div>
      <div class="form-group">
        <label>邮箱</label>
        <div>
          <input type="text" class="form-control" @input="verifyFormuserEmail" v-model="userEmail" placeholder="请输入邮箱">
        </div>
      </div>
      <div class="form-group">
        <label>身份证</label>
        <div>
          <input type="text" @input="verifyFormuserCard" class="form-control" v-model="userCard" placeholder="请输入身份证">
        </div>
      </div>
      <div class="form-group">
        <label>密码</label>
        <div>
          <input type="password" @input="verifyFormuserPwd" maxlength=20 class="form-control" v-model="userPwd" id="userPwd" placeholder="请输入密码">
        </div>
      </div>
      <div class="form-group">
        <label>确认密码</label>
        <div>
          <input type="password" @input="verifyFormuserPwds" maxlength=20 class="form-control" v-model="userPwds" id="userPwds" placeholder="请输入确认密码">
        </div>
      </div>
      <div class="form-group">
        <label>是否申请特跑会员</label>
        <div class="radio">
          <label>
            <input v-model="declare" value="1" type="radio"> 是
          </label>
          <label>
            <input v-model="declare" value="0" type="radio"> 否
          </label>
        </div>
      </div>
      <div class="form-group">
        <label>验证码</label>
        <div>
          <input type="text" @input="verifyFormcaptcha" class="form-control" v-model="captcha" placeholder="请输入验证码">
        </div>
      </div>
      <div class="form-group">
        <div class="">
          <img v-bind:src="imgSrc" v-on:click="clickCaptcha" style="width:100px;" ref="captcha" class="captcha" alt="验证码">
        </div>
      </div>
      <div class="form-group">
        <div class="checkbox">
          <label>
            <input v-model="userCheckbox" id="userCheckbox" type="checkbox"> 同意并接受
          </label>
          《<router-link class="alink" to="/agreement">迅驰体育跑者服务系统用户协议</router-link>》
        </div>
      </div>
      <div class="form-group">
        我已有账号  <router-link class="alink" to="/login">登陆</router-link>
      </div>
      <div class="form-group error">
        <ul>
          <li v-for="item in dataError">{{item}}</li>
          <li v-if="messageerror!=''">{{messageerror}}</li>
        </ul>
      </div>
      <div class="form-group">
        <button type="button" @click="submitForm" class="btn btn-warning login-but">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
      </div>
    </div>
    <t-foot />
  </div>
</template>

<script>
import config from '@/api/config'
import { mapGetters, mapActions } from 'vuex'
import { USER_REG } from '@/store/modules/userStore'
import Foot from '@/components/Foot'
export default {
  data () {
    return {
      vuerify: 0,
      userName: '',
      userEmail: '',
      userPwd: '',
      userPwds: '',
      userCard: '',
      declare: 1,
      userCheckbox: true,
      captcha: '',
      messageshengming: false,
      messageerror: '',
      // usershow: false,
      dataError: {
        userName: '',
        userEmail: '',
        userPwd: '',
        userPwds: '',
        userCard: '',
        captcha: ''
      }
    }
  },
  created () {
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    }),
    imgSrc () {
      return config.user.captcha
    },
    verifyForm () {
      let that = this
      let flag = true
      if (this.isTrim(that.userName)) {
        that.dataError['userName'] = '姓名不能为空'
        flag = false
      } else if (this.isLength(that.userName, 2)) {
        that.dataError['userName'] = '用户名不能小于2个字符'
        flag = false
      } else {
        that.dataError['userName'] = ''
      }
      if (this.isTrim(that.userEmail)) {
        that.dataError['userEmail'] = '邮箱不能为空'
        flag = false
      } else if (!this.isEmail(that.userEmail)) {
        that.dataError['userEmail'] = '邮箱格式不正确'
        flag = false
      } else {
        that.dataError['userEmail'] = ''
      }
      if (this.isTrim(that.userPwd)) {
        that.dataError['userPwd'] = '密码不能为空'
        flag = false
      } else if (this.isLength(that.userPwd, 6)) {
        that.dataError['userPwd'] = '6-20位密码限制'
        flag = false
      } else {
        that.dataError['userPwd'] = ''
      }
      if (this.isTrim(that.userPwds)) {
        that.dataError['userPwds'] = '确认密码不能为空'
        flag = false
      } else if (!this.isEqual(that.userPwd, that.userPwds)) {
        that.dataError['userPwds'] = '两次密码不一致'
        flag = false
      } else {
        that.dataError['userPwds'] = ''
      }
      if (this.isTrim(that.userCard)) {
        that.dataError['userCard'] = '身份证不能为空'
        flag = false
      } else if (!this.isCard(that.userCard)) {
        that.dataError['userCard'] = '身份证填写不正确'
        flag = false
      } else {
        that.dataError['userCard'] = ''
      }
      if (this.isTrim(that.captcha)) {
        that.dataError['captcha'] = '请输入验证码'
        flag = false
      } else {
        that.dataError['captcha'] = ''
      }
      console.log(that.dataError)
      return !flag
    }
  },
  methods: {
    ...mapActions([USER_REG]),
    clickCaptcha () {
      this.$refs.captcha.src = this.imgSrc + '&g=' + Math.random()
    },
    submitForm () {
      let that = this
      if (that.verifyForm) {
        return
      }
      that.messageerror = ''
      let data = {}
      data['username'] = that.userName
      data['email'] = that.userEmail
      data['password'] = that.userPwd
      data['qpassword'] = that.userPwds
      data['card'] = that.userCard
      data['captcha'] = that.captcha
      data['declare'] = that.declare
      // $('a')
      // data['X-XSRF-TOKEN'] = $.cookie('XSRF-TOKEN')

      that.USER_REG({
        data: data,
        callback: (err, data) => {
          if (err === undefined) {
            that.$router.replace({ path: '/user' })
            // 注册成功，登录
          } else {
            that.messageerror = err
            // 注册失败
          }
        }
      })
      console.log(JSON.stringify(data))
      // }
    },
    verifyFormuserName () {
      let that = this
      let flag = true
      if (this.isTrim(that.userName)) {
        that.dataError['userName'] = '姓名不能为空'
        flag = false
      } else if (this.isLength(that.userName, 2)) {
        that.dataError['userName'] = '用户名不能小于2个字符'
        flag = false
      } else {
        that.dataError['userName'] = ''
      }
      return !flag
    },
    verifyFormuserEmail () {
      let that = this
      let flag = true
      if (this.isTrim(that.userEmail)) {
        that.dataError['userEmail'] = '邮箱不能为空'
        flag = false
      } else if (!this.isEmail(that.userEmail)) {
        that.dataError['userEmail'] = '邮箱格式不正确'
        flag = false
      } else {
        that.dataError['userEmail'] = ''
      }
      return !flag
    },
    verifyFormuserCard () {
      let that = this
      let flag = true
      if (this.isTrim(that.userCard)) {
        that.dataError['userCard'] = '身份证不能为空'
        flag = false
      } else if (!this.isCard(that.userCard)) {
        that.dataError['userCard'] = '身份证填写不正确'
        flag = false
      } else {
        that.dataError['userCard'] = ''
      }
      return !flag
    },
    verifyFormuserPwd () {
      let that = this
      let flag = true
      if (this.isTrim(that.userPwd)) {
        that.dataError['userPwd'] = '密码不能为空'
        flag = false
      } else if (this.isLength(that.userPwd, 6)) {
        that.dataError['userPwd'] = '6-20位密码限制'
        flag = false
      } else {
        that.dataError['userPwd'] = ''
      }
      return !flag
    },
    verifyFormuserPwds () {
      let that = this
      let flag = true
      if (this.isTrim(that.userPwds)) {
        that.dataError['userPwds'] = '确认密码不能为空'
        flag = false
      } else if (!this.isEqual(that.userPwd, that.userPwds)) {
        that.dataError['userPwds'] = '两次密码不一致'
        flag = false
      } else {
        that.dataError['userPwds'] = ''
      }
      return !flag
    },
    verifyFormcaptcha () {
      let that = this
      let flag = true
      if (this.isTrim(that.captcha)) {
        that.dataError['captcha'] = '请输入验证码'
        flag = false
      } else {
        that.dataError['captcha'] = ''
      }
      return !flag
    }
  },
  watch: {
    province (newVal, oldVal) {
      if (newVal === oldVal) return
      let that = this
      that.city = ''
      let dataList = []
      for (let province in that.dicStore.city) {
        let item = that.dicStore.city[province]
        if (Number(item.province_id) === Number(newVal)) {
          dataList = item.citys
        }
      }
      this.$nextTick(function () {
        this.cityData = Object.assign([], dataList)
      })
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
