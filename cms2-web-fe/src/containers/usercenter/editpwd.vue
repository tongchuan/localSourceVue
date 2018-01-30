<template lang="html">
  <div class="bg">
    <div class="row">
      <div class="col-xs-12" style="padding-top:15px;">
        <div class="">
          <ul class="nav nav-tabs">
            <li v-for="(item,index) in navtitle" v-on:click="selectTitle(item,index)" role="presentation" v-bind:class="item.selected ? 'active' : ''"><a href="javascript:void(0)">{{item.name}}</a></li>
          </ul>
        </div>
        <div class="user-content" >
          <div class="form-horizontal">
            <div class="form-group">
              <label class="col-sm-2 control-label">原密码</label>
              <div class="col-sm-4">
                <input type="password" @input="verifyForm" v-model="password" placeholder="请输入原密码" class="form-control" />
              </div>
              <div class="col-sm-4 error">{{dataError['password']}}</div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">新密码</label>
              <div class="col-sm-4">
                <input type="password" @input="verifyForm" v-model="npassword" placeholder="请输入新密码" class="form-control" />
              </div>
              <div class="col-sm-4 error">{{dataError['npassword']}}</div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">确认新密码</label>
              <div class="col-sm-4">
                <input type="password" @input="verifyForm" v-model="qpassword" placeholder="请再次输入新密码" class="form-control" />
              </div>
              <div class="col-sm-4 error">{{dataError['qpassword']}}</div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-9 btn-con">
                <button type="button" v-on:click="pwdUser" class="btn-my">提交</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_UPDATA } from '@/store/modules/userStore'
export default {
  name: 'pwd',
  data () {
    return {
      password: '',
      npassword: '',
      qpassword: '',
      dataError: {},
      navtitle: [
        {name: '修改密码', selected: true}
      ]
    }
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore'
    }),
    verifyForm () {
      let that = this
      let flag = true
      if (this.isTrim(that.password)) {
        that.dataError['password'] = '密码不能为空！'
        flag = false
      } else {
        that.dataError['password'] = ''
      }
      if (this.isLength(that.npassword, 6)) {
        that.dataError['npassword'] = '新密码不能小于6位！'
        flag = false
      } else {
        that.dataError['npassword'] = ''
      }
      if (!this.isEqual(that.npassword, that.qpassword)) {
        that.dataError['qpassword'] = '两次密码不同'
        flag = false
      } else {
        that.dataError['qpassword'] = ''
      }
      return !flag
    }
  },
  methods: {
    ...mapActions([USER_UPDATA]),
    pwdUser () {
      let that = this
      let data = {}
      if (that.verifyForm) {
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
            that.$router.replace({ path: '/' })
            this.$root.$emit('userOpen', {})
          } else {
            that.$Modal.error({
              title: '错误提示',
              content: data.msg,
              onOk: () => {
              }
            })
          }
        } else {
          that.$Modal.error({
            title: '错误提示',
            content: err.toString(),
            onOk: () => {
            }
          })
        }
      }])
    }
  }
}
</script>

<style scoped>
  label {
    font-weight: 400;
  }
  input {
    border-radius: 0;
  }
  .btn-con {
    padding-left: 70px;
  }
  .btn-my {
    width: 106px;
    line-height: 34px;
    font-size: 16px;
    color: #fff;
    background: #ec6c00;
    text-align: center;
    border: none;
  }
</style>
