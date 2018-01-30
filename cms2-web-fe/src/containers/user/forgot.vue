<template lang="html">
  <div class="container forgot bg">
    <div class="title-nav">
      <span class="title">忘记密码</span>
    </div>
    <div class="">
      <prog v-bind:progreessData="progreessData" v-bind:progreessNum="progreessNum" />
    </div>
    <div class="form-horizontal register" style="margin-top:60px">
      <div class="form-group" v-if="progreessNum===0">
        <label for="email" class="col-sm-2 control-label">邮箱</label>
        <div class="col-sm-4">
          <input type="email" v-model="email" class="form-control" id="email" placeholder="Email">
        </div>
        <div class="col-sm-4"><span class="error">{{emailerror}}</span></div>
      </div>
      <div class="form-group" v-if="progreessNum===0">
        <label for="inputPassword3" class="col-sm-2 control-label">验证码</label>
        <div class="col-sm-4">
          <input type="text" class="form-control captcha" v-model="captcha" id="captcha" placeholder="验证码">
          <img v-bind:src="imgSrc" v-on:click="clickCaptcha" ref="captcha" class="captcha" alt="验证码">
        </div>
        <div class="col-sm-4"><span class="error">{{captchaerror}}</span></div>
      </div>
      <div class="form-group" v-if="progreessNum===1">
        <label for="email" class="col-sm-2 control-label"></label>
        <div class="col-sm-4">
          验证码已经发送到邮箱，请查阅并填写
        </div>
      </div>
      <div class="form-group" v-if="progreessNum===1">
        <label for="ma" class="col-sm-2 control-label">验证码</label>
        <div class="col-sm-4">
          <input type="text" v-model="ma" class="form-control" id="ma" placeholder="验证码">
        </div>
        <div class="col-sm-4"><span class="error">{{maerror}}</span></div>
      </div>
      <!-- <div class="form-group" v-if="progreessNum===1">
        <label for="email" class="col-sm-2 control-label"></label>
        <div class="col-sm-4">
          请输入新的密码
        </div>
      </div> -->
      <div class="form-group" v-if="progreessNum===1">
        <label for="pwd" class="col-sm-2 control-label">新密码</label>
        <div class="col-sm-4">
          <input type="password" v-model="pwd" class="form-control" id="pwd" placeholder="请输入新密码">
        </div>
        <div class="col-sm-4"><span class="error">{{pwderror}}</span></div>
      </div>
      <div class="form-group" v-if="progreessNum===2">
        <label for="email" class="col-sm-2 control-label"></label>
        <div class="col-sm-4">
          密码设置成功
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button v-if="progreessNum>0 && progreessNum<progreessData.length-1" v-on:click="upforgot" type="button" class="btn btn-default">上一步</button>
          <button v-if="progreessNum<2" type="button" v-on:click="nextForgot" class="btn btn-warning">下一步</button>
          <span class="error">{{error}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import prog from '@/components/common/progress'
import config from '@/api/config'
import { mapGetters, mapActions } from 'vuex'
import { USER_FORGOT_ONE, USER_FORGOT_TWO } from '@/store/modules/userStore'
export default {
  name: 'forgot',
  data () {
    return {
      email: '',
      captcha: '',
      emailerror: '',
      captchaerror: '',
      ma: '',
      maerror: '',
      pwd: '',
      pwderror: '',
      error: '',
      uid: '',
      progreessData: [
        {name: '填写邮箱', className: 'progress-num', numName: '0'},
        // {name: '填写验证码', className: 'progress-num', numName: '1'},
        {name: '设置密码', className: 'progress-num', numName: '1'},
        {name: '完成', className: 'progress-num glyphicon glyphicon-ok', numName: ''}
      ],
      progreessNum: 0
    }
  },
  components: {
    prog
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    }),
    imgSrc () {
      return config.user.captcha
    }
  },
  methods: {
    ...mapActions([USER_FORGOT_ONE, USER_FORGOT_TWO]),
    clickCaptcha () {
      this.$refs.captcha.src = this.imgSrc + '&g=' + Math.random()
    },
    upForgot () {

    },
    nextForgot () {
      let that = this
      that.emailerror = ''
      that.captchaerror = ''
      that.maerror = ''
      that.pwderror = ''
      that.error = ''
      if (that.progreessNum === 0) {
        if (that.email === '') {
          that.emailerror = '请填写邮箱'
          return
        }
        if (that.captcha === '') {
          that.captchaerror = '请填验证码'
          return
        }
        that.USER_FORGOT_ONE({
          data: {
            email: that.email,
            captcha: that.captcha
          },
          callback: (err, data) => {
            if (err === undefined) {
              that.uid = data.uid
              that.progreessNum = 1
            } else {
              that.error = err
            }
          }
        })
        return
      }
      if (that.progreessNum === 1) {
        if (that.ma === '') {
          that.maerror = '验证码不能为空'
          return
        }
        if (that.pwd.length < 6) {
          that.pwderror = '密码不能小于6为'
          return
        }
        that.USER_FORGOT_TWO({
          data: {
            foeget_code: that.ma,
            uid: that.uid,
            password: that.pwd,
            qpassword: that.pwd
          },
          callback: (err, data) => {
            if (err === undefined) {
              that.progreessNum = 2
            } else {
              that.error = err
            }
          }
        })
        return
      }
      // if (that.progreessNum === 2) {
      //   if (that.pwd.length < 6) {
      //     that.pwderror = '密码不能小于6为'
      //     return
      //   }
      //   that.progreessNum = 3
      //   return
      // }
      if (that.progreessNum === 2) {
        return
      }
    },
    upforgot () {
      let that = this
      if (that.progreessNum === 1) {
        that.progreessNum = 0
        return
      }
      if (that.progreessNum === 2) {
        that.progreessNum = 1
        return
      }
    }
  }
}
</script>

<style lang="css">
</style>
