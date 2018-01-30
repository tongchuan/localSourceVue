<template lang="html">
  <div class="container bg">
    <div class="">
      <h2>修改基本资料</h2>
      <div class="form-group">
        <label>手机号</label>
        <div>
          <!-- <input type="text" value="{{userStore.user.phone}}" class="form-control" @input="verifyFormuserPhone" v-model="userPhone" placeholder="请输入手机号"> -->
        </div>
      </div>
      <div class="form-group">
        <label>邮箱</label>
        <div>
          <!-- <input type="text" value="{{userStore.user.email}}" class="form-control" @input="verifyFormuserEmail" v-model="userEmail" placeholder="请输入邮箱"> -->
        </div>
      </div>
      <div class="form-group">
        <label>QQ号码</label>
        <div>
          <!-- <input type="text" value="{{userStore.user.qq}}" class="form-control" @input="verifyFormuserQQ" v-model="userQQ" placeholder="请输入QQ号码"> -->
        </div>
      </div>
      <div class="form-group error">
        <ul>
          <li v-for="item in dataError">{{item}}</li>
          <li v-if="messageerror!=''">{{messageerror}}</li>
        </ul>
      </div>
      <div class="form-group">
        <button type="button" @click="submitForm" class="btn btn-warning login-but">修&nbsp;&nbsp;&nbsp;&nbsp;改</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_INFO } from '@/store/modules/userStore'
import Foot from '@/components/Foot'
export default {
  data () {
    return {

    }
  },
  created () {
    /* let that = this
    that.USER_INFO((data) => {
      if (Number(data.errno) !== 0) {
        that.$router.replace({ path: '/login' })
      }
    }) */
  },
  computed: {
    ...mapGetters([
      'userStore'
    ])
  },
  methods: {
    ...mapActions([
      USER_INFO
    ])
  },
  components: {
    't-foot': Foot
  }
}
</script>

<style lang="css">
.bg{
  background: #fff;
}
</style>
