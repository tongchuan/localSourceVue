<template lang="html">
  <div class="container bg mb88">
    <div style="padding-top: 20px;">
      <!-- {{userStore.user}} -->
      <h2 style="padding-bottom: 10px; text-align: center;">基本资料</h2>
      <div class="form-group">
        <label>姓名</label>
        <input type="text" disabled v-model="username" class="form-control" placeholder="姓名">
      </div>
      <div class="form-group">
        <label>用户名</label>
        <input type="text" v-model="nickname" class="form-control" placeholder="用户名">
      </div>
      <div class="form-group">
        <label>性别</label>
        <div class="radio">
          <label>
            <input type="radio" disabled v-model="sex" value="0">男
          </label>
          <label>
            <input type="radio" disabled v-model="sex" value="1">女
          </label>
        </div>
      </div>
      <div class="form-group">
        <label>生日</label>
        <input type="text" disabled v-model="birth_day" class="form-control" placeholder="生日">
      </div>
      <div class="form-group">
        <label>年龄</label>
        <input type="text" disabled v-model="age" class="form-control" placeholder="年龄">
      </div>
      <div class="form-group">
        <label>证件号码</label>
        <input type="text" disabled v-model="card" class="form-control" placeholder="证件号码">
      </div>
      <div class="form-group">
        <label>职业</label>
        <select class="form-control" v-model="career">
          <option value="" disabled>请选择职业</option>
          <option v-for="item in careerList" v-bind:value="item.career_id">{{item.career_name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label>服装尺码</label>
        <select v-model="default_dress" class="form-control"  name="">
          <option value="" disabled>请选择服装尺码</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="2XL">2XL</option>
          <option value="3XL">3XL</option>
        </select>
      </div>
      <div class="form-group">
        <label>鞋码</label>
        <select v-model="default_shoe_size" class="form-control"  name="">
          <option value="" disabled>请选鞋码</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
      </div>

      <div v-if="declare==0" class="form-group">
        <label>特跑族会员</label>
        <div class="redio">
          <label class="radio-inline" v-on:click="messageshengming=true">
            <input type="radio" value="是"> 我要成为特跑族会员
          </label>
        </div>
      </div>
      <div class="form-group">
        <label>手机号码</label>
        <input type="text" v-model="phone" class="form-control" placeholder="手机号码">
      </div>
      <div class="form-group">
        <label>个人邮箱</label>
        <input type="text" v-model="email" class="form-control" placeholder="个人邮箱">
      </div>
      <div class="form-group">
        <label>QQ号码</label>
        <input type="text" v-model="qq" class="form-control" placeholder="QQ号码">
      </div>
      <div class="form-group">
        <label>新浪微博</label>
        <input type="text" v-model="weibo" class="form-control" placeholder="新浪微博">
      </div>
      <div class="form-group">
        <label>微信</label>
        <input type="text" v-model="weixin" class="form-control" placeholder="微信">
      </div>
      <div class="form-group">
        <label>居住城市</label>
        <select class="form-control" v-model="province">
          <option value="" disabled>请选择省</option>
          <option v-for="item in provinceList" v-bind:value="item.province_id">{{item.province_name}}</option>
        </select>
        <select class="form-control" v-model="city">
          <option value="" disabled>请选择市</option>
          <option v-for="item in cityList" v-bind:value="item.city_id">{{item.city_name}}</option>
        </select>
      </div>

      <div class="form-group">
        <label>通讯地址</label>
        <input type="text" v-model="address" class="form-control" placeholder="通讯地址">
      </div>
      <div class="form-group">
        <label>紧急联系人</label>
        <input type="text" v-model="emergency_people" class="form-control" placeholder="紧急联系人">
      </div>
      <div class="form-group">
        <label>紧急联系人关系</label>
        <input type="text" v-model="emergency_people_relationship" class="form-control" placeholder="紧急联系人关系">
      </div>
      <div class="form-group">
        <label>紧急联系人电话</label>
        <input type="text" v-model="emergency_people_phone" class="form-control" placeholder="紧急联系人电话">
      </div>
      <div class="form-group">
        <label>所在跑步团体</label>
        <input type="text" v-model="my_group" class="form-control" placeholder="所在跑步团体">
      </div>
      <div class="form-group">
        <label>是否参加过马拉松</label>
        <div class="redio">
          <label class="radio-inline">
            <input type="radio" v-model="is_invite_marathon" value="是"> 是
          </label>
          <label class="radio-inline">
            <input type="radio"  v-model="is_invite_marathon" value="否"> 否
          </label>
        </div>
      </div>
      <div  v-if="is_invite_marathon=='是'" class="form-group">
        <label>参加马拉松赛事次数</label>
        <input type="number" v-model="marathon_times" class="form-control" placeholder="参加马拉松赛事次数">
      </div>
      <div class="form-group">
        <label>马拉松赛段</label>
        <div class="redio">
          <label class="radio-inline">
            <input type="radio" v-model="marathon_info" value="全程马拉松"> 全程马拉松
          </label>
          <label class="radio-inline">
            <input type="radio"  v-model="marathon_info" value="半程马拉松"> 半程马拉松
          </label>
          <label class="radio-inline">
            <input type="radio" v-model="marathon_info" value="9-10公里"> 9-10公里
          </label>
          <label class="radio-inline">
            <input type="radio"  v-model="marathon_info" value="4-5公里"> 4-5公里
          </label>
        </div>
      </div>
      <div v-if="marathon_info=='全程马拉松' || marathon_info=='半程马拉松'" class="form-group">
        <label>个人全程马拉松最好成绩</label>
        <div class="">
          <Time-picker style="width:100%" v-model:value="best_marathon" format="HH点mm分ss秒" placeholder="个人全程马拉松最好成绩"></Time-picker>
        </div>

      </div>
      <div class="form-group">
        <button type="button" style="width:100%" @click="baseEditSubmit" class="btn btn-warning">保存信息</button>
        <button type="button" style="width: 100%; margin-top: 15px;" @click="loginout" class="btn btn-danger">退 出</button>
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
import { USER_UPDATA, USER_LOGIN_OUT } from '@/store/modules/userStore'
import { GET_PROVINCE, GET_CITY, GET_CAREER } from '@/store/modules/dicStore'
import Foot from '@/components/Foot'
export default {
  name: 'userupdate',
  data () {
    return {
      id: '',
      uid: '',
      avatar: '',
      username: '',
      nickname: '',
      sex: '',
      birth_day: '',
      age: '',
      card: '',
      career: '',
      default_dress: '',
      default_shoe_size: '',
      declare: '',
      phone: '',
      email: '',
      qq: '',
      weibo: '',
      weixin: '',
      province: '',
      city: '',
      address: '',
      emergency_people: '',
      emergency_people_relationship: '',
      emergency_people_phone: '',
      my_group: '',
      is_invite_marathon: '',
      marathon_times: '',
      marathon_info: '',
      best_marathon: '00:00:00',
      dataError: {},
      message: ''
    }
  },
  created () {
    let that = this
    that.id = that.userStore.user.id
    that.uid = that.userStore.user.uid
    that.avatar = that.userStore.user.avatar
    that.nickname = that.userStore.user.nickname
    that.username = that.userStore.user.username
    that.email = that.userStore.user.email
    that.phone = that.userStore.user.phone
    that.sex = that.userStore.user.sex
    that.birth_day = that.userStore.user.birth_day
    that.card = that.userStore.user.card
    that.career = that.userStore.user.career
    that.province = that.userStore.user.province
    that.city = that.userStore.user.city
    that.address = that.userStore.user.address
    that.item_category = that.userStore.user.item_category
    that.default_dress = that.userStore.user.default_dress
    that.default_shoe_size = that.userStore.user.default_shoe_size
    that.membership = that.userStore.user.membership
    that.membership_code = that.userStore.user.membership_code
    that.is_apply_membership = that.userStore.user.is_apply_membership
    that.is_active = that.userStore.user.is_active
    that.authority = that.userStore.user.authority
    that.ctime = that.userStore.user.ctime
    that.utime = that.userStore.user.utime
    that.age = that.userStore.user.age
    that.qq = that.userStore.user.qq
    that.weixin = that.userStore.user.weixin
    that.my_group = that.userStore.user.my_group
    that.emergency_people_phone = that.userStore.user.emergency_people_phone
    that.emergency_people = that.userStore.user.emergency_people
    that.emergency_people_relationship = that.userStore.user.emergency_people_relationship
    that.is_invite_marathon = that.userStore.user.is_invite_marathon
    that.marathon_times = that.userStore.user.marathon_times
    that.marathon_info = that.userStore.user.marathon_info
    that.best_marathon = that.userStore.user.best_marathon !== '' ? that.formatTime(that.userStore.user.best_marathon) : '00:00:00'
    that.weibo = that.userStore.user.weibo
    that.membership_ctime = that.userStore.user.membership_ctime
    that.declare = that.userStore.user.is_apply_membership ? that.userStore.user.is_apply_membership : 0
    that.GET_PROVINCE({})
    that.GET_CITY({})
    that.GET_CAREER({})
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore',
      dicStore: 'dicStore'
    }),
    provinceList () {
      let that = this
      return that.dicStore.province
    },
    cityList () {
      let that = this
      let data = []
      for (let i in that.dicStore.city) {
        let item = that.dicStore.city[i]
        if (Number(item.province_id) === Number(that.province)) {
          data = item.citys
        }
      }
      return data
    },
    careerList () {
      let that = this
      return that.dicStore.career
    },
    getCareer () {
      let that = this
      let name = ''
      that.dicStore.career.forEach((item) => {
        if (Number(that.career) === Number(item.career_id)) {
          name = item.career_name
        }
      })
      return name
    },
    getProvince () {
      let that = this
      let name = ''
      that.dicStore.province.forEach((item) => {
        if (Number(that.province) === Number(item.province_id)) {
          console.log(item)
          name = item.province_name
        }
      })
      return name
    },
    getCity () {
      let that = this
      let name = ''
      that.cityList.forEach((item) => {
        if (Number(that.city) === Number(item.city_id)) {
          name = item.city_name
        }
      })
      return name
    }
  },
  methods: {
    ...mapActions([USER_UPDATA, USER_LOGIN_OUT, GET_PROVINCE, GET_CITY, GET_CAREER]),
    baseEditSubmit () {
      let that = this
      that.membership_ctime = that.membership_ctime.length > 8 ? that.formatTime(that.membership_ctime.length) : that.membership_ctime.length === 8 ? that.membership_ctime : '00:00:00'
      let data = {}
      data.id = that.id
      data.uid = that.uid
      data.avatar = that.avatar
      data.nickname = that.nickname
      data.username = that.username
      data.email = that.email
      data.phone = that.phone
      data.sex = that.sex
      data.birth_day = that.birth_day
      data.card = that.card
      data.career = that.career
      data.province = that.province
      data.city = that.city
      data.address = that.address
      data.item_category = that.item_category
      data.default_dress = that.default_dress
      data.default_shoe_size = that.default_shoe_size
      data.membership = that.membership
      data.membership_code = that.membership_code
      data.is_apply_membership = that.declare
      data.is_active = that.is_active
      data.authority = that.authority
      data.ctime = that.ctime
      data.utime = that.utime
      data.age = that.age
      data.qq = that.qq
      data.weixin = that.weixin
      data.my_group = that.my_group
      data.emergency_people_phone = that.emergency_people_phone
      data.emergency_people = that.emergency_people
      data.emergency_people_relationship = that.emergency_people_relationship
      data.is_invite_marathon = that.is_invite_marathon
      data.marathon_times = that.marathon_times
      data.marathon_info = that.marathon_info
      data.best_marathon = !that.best_marathon ? '00:00:00' : that.formatTime(that.best_marathon)
      data.weibo = that.weibo
      data.membership_ctime = that.membership_ctime
      data.declare = that.declare
      // that.userStore.user.is_apply_membership ? that.userStore.user.is_apply_membership : 0
      that.USER_UPDATA([data, (err, data) => {
        if (err === undefined) {
          if (Number(data.errno) === 0) {
            this.$Message.success('修改成功')
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
    },
    loginout () {
      let that = this
      that.USER_LOGIN_OUT([{}, (data) => {
        this.$router.replace({ path: '/' })
      }])
    }
  },
  components: {
    't-foot': Foot
  },
  watch: {
    'userStore.user' (newVal, oldVal) {
      let that = this
      that.id = that.userStore.user.id
      that.uid = that.userStore.user.uid
      that.avatar = that.userStore.user.avatar
      that.nickname = that.userStore.user.nickname
      that.username = that.userStore.user.username
      that.email = that.userStore.user.email
      that.phone = that.userStore.user.phone
      that.sex = that.userStore.user.sex
      that.birth_day = that.userStore.user.birth_day
      that.card = that.userStore.user.card
      that.career = that.userStore.user.career
      that.province = that.userStore.user.province
      that.city = that.userStore.user.city
      that.address = that.userStore.user.address
      that.item_category = that.userStore.user.item_category
      that.default_dress = that.userStore.user.default_dress
      that.default_shoe_size = that.userStore.user.default_shoe_size
      that.membership = that.userStore.user.membership
      that.membership_code = that.userStore.user.membership_code
      that.is_apply_membership = that.userStore.user.is_apply_membership
      that.is_active = that.userStore.user.is_active
      that.authority = that.userStore.user.authority
      that.ctime = that.userStore.user.ctime
      that.utime = that.userStore.user.utime
      that.age = that.userStore.user.age
      that.qq = that.userStore.user.qq
      that.weixin = that.userStore.user.weixin
      that.my_group = that.userStore.user.my_group
      that.emergency_people_phone = that.userStore.user.emergency_people_phone
      that.emergency_people = that.userStore.user.emergency_people
      that.emergency_people_relationship = that.userStore.user.emergency_people_relationship
      that.is_invite_marathon = that.userStore.user.is_invite_marathon
      that.marathon_times = that.userStore.user.marathon_times
      that.marathon_info = that.userStore.user.marathon_info
      that.best_marathon = that.userStore.user.best_marathon !== '' ? that.formatTime(that.userStore.user.best_marathon) : '00:00:00'
      that.weibo = that.userStore.user.weibo
      that.membership_ctime = that.userStore.user.membership_ctime
      that.declare = that.userStore.user.is_apply_membership ? that.userStore.user.is_apply_membership : 0
    }
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
.mb88{
  margin-bottom: px2rem(88px);
}
</style>
