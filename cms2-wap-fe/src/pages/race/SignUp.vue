<template lang="html">
  <div class="container signup bg">
    <h3 style="text-align:center;line-height:40px;">
      {{eventStore.eventDetail && eventStore.eventDetail.title}} 报名
    </h3>
    <div class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-3 control-label">姓名</label>
        <div class="col-sm-4">
          <input type="text" disabled @:blur="verifyForm" v-model="name" placeholder="姓名" class="form-control" />
        </div>
        <div class="col-sm-4 error">{{dataError['name']}}</div>
      </div>
      <div class="form-group">
        <label for="sex" class="col-sm-3 control-label">性别</label>
        <div class="col-sm-4">
          <label class="radio-inline">
            <input disabled type="radio" name="sex" value="0" v-model="sex" /> 男
          </label>
          <label class="radio-inline">
            <input disabled type="radio" name="sex" value="1" v-model="sex" /> 女
          </label>
        </div>
      </div>
      <div class="form-group">
        <label for="phone_number" class="col-sm-3 control-label">手机号</label>
        <div class="col-sm-4">
          <input type="text" @:blur="verifyForm" v-model="phone_number" placeholder="手机号" class="form-control" />
        </div>
        <div class="col-sm-4 error">{{dataError['phone_number']}}</div>
      </div>
      <div class="form-group">
        <label for="recipient_id_no" class="col-sm-3 control-label">身份证号</label>
        <div class="col-sm-4">
          <input type="text" @:blur="verifyForm" readonly v-model="recipient_id_no" placeholder="身份证号" class="form-control" />
        </div>
        <div class="col-sm-4 error">{{dataError['recipient_id_no']}}</div>
      </div>
      <div class="form-group">
        <label for="email" class="col-sm-3 control-label">邮箱</label>
        <div class="col-sm-4">
          <input type="text" @:blur="verifyForm" v-model="email" placeholder="邮箱" class="form-control" />
        </div>
        <div class="col-sm-4 error">{{dataError['email']}}</div>
      </div>

      <div v-if="eventStore.eventEnroll.event_type==3" class="form-group">
        <label for="is_has" class="col-sm-3 control-label">赛段</label>
        <div class="col-sm-4">
          <label v-for="(item,index) in eventStore.eventEnroll.stage" class="radio-inline">
            <input type="radio" v-bind:value="index" v-model="stage" /> {{item}}
          </label>

        </div>
      </div>

      <div class="form-group" v-if="eventStore.eventEnroll.event_type==1 || eventStore.eventEnroll.event_type==2">
        <label for="reg_type" class="col-sm-3 control-label">项目类型</label>
        <div class="col-sm-8">
          <div class="radio">
            <label v-for="(value,key,index) in regType">
              <input v-model="reg_type" v-bind:value="key" type="radio">
              {{value}}
            </label>
          </div>
          <!-- <select v-model="reg_type" class="form-control">
            <option v-for="(value,key,index) in eventStore.eventEnroll.reg_type" v-bind:value="key">{{value}}</option>
          </select> -->
        </div>
      </div>
      <div class="form-group" v-if="eventStore.eventEnroll.event_type<=2">
        <label for="event_no" class="col-sm-3 control-label">参赛号</label>
        <div class="col-sm-4">
          <input type="text" @:blur="verifyForm" v-model="event_no" placeholder="参赛号" class="form-control" />
        </div>
        <div class="col-sm-4 error">{{dataError['event_no']}}</div>
      </div>

      <div class="form-group" v-if="1===0">
        <label for="event_type" class="col-sm-3 control-label">赛事类型</label>
        <div class="col-sm-4">
          <select v-model="eventStore.eventEnroll.event_type" class="form-control">
            <option v-for="(item,key,index) in event_type" v-bind:value="item.id">{{item.name}}</option>
          </select>
        </div>
      </div>
      <div class="form-group"  v-if="1===0">
        <label for="reg_type" class="col-sm-3 control-label">二级赛事类型</label>
        <div class="col-sm-4">
          <div class="radio">
            <label v-for="(value,key,index) in secondEventType">
              <input v-model="second_event_type" v-bind:value="key" type="radio">
              {{value}}
            </label>
          </div>
<!--
          <select v-model="second_event_type" class="form-control">
            <option v-for="(value,key,index) in eventStore.eventEnroll.second_event_type" v-bind:value="key">{{value}}</option>
          </select> -->
        </div>
      </div>

      <div class="form-group">
        <label for="dress_size" class="col-sm-3 control-label">服装尺码</label>
        <div class="col-sm-8">
          <div class="radio"  v-if="sex==0">
            <label v-for="(value,key,index) in manSize">
              <input v-model="mdress_size" v-bind:value="key" type="radio">
              {{value}}
            </label>
          </div>
          <div class="radio" v-if="sex==1">
            <label v-for="(value,key,index) in womenSize">
              <input v-model="wdress_size" v-bind:value="key" type="radio">
              {{value}}
            </label>
          </div>
          <!-- <select v-if="sex==1" v-model="mdress_size" class="form-control">
            <option v-for="(value,key,index) in manSize" v-bind:value="key">{{value}}</option>
          </select>
          <select v-if="sex==2" v-model="wdress_size" class="form-control">
            <option v-for="(value,key,index) in womenSize" v-bind:value="value">{{value}}</option>
          </select> -->
        </div>
      </div>
      <div class="form-group">
        <label for="shoes_size" class="col-sm-3 control-label">鞋尺码</label>
        <div class="col-sm-8">
          <div class="radio"  v-if="sex==0">
            <label v-for="(value,key,index) in manShoes_size">
              <input v-model="mshoes_size" v-bind:value="key" type="radio">
              {{value}}
            </label>
          </div>
          <div class="radio" v-if="sex==1">
            <label v-for="(value,key,index) in womenShoes_size">
              <input v-model="wshoes_size" v-bind:value="key" type="radio">
              {{value}}
            </label>
          </div>
          <!-- <select v-if="sex==1"  v-model="mshoes_size" class="form-control">
            <option v-for="(value,key,index) in manShoes_size" v-bind:value="value">{{value}}</option>
          </select>
          <select v-if="sex==2"  v-model="wshoes_size" class="form-control">
            <option v-for="(value,key,index) in womenShoes_size" v-bind:value="value">{{value}}</option>
          </select> -->
        </div>
      </div>
      <div class="form-group" v-if="eventStore.eventEnroll.event_type==1 || eventStore.eventEnroll.event_type==2">
        <label for="personal_goals_time" class="col-sm-3 control-label">个人目标时间</label>
        <div class="col-sm-4">
          <Time-picker v-model:value="personal_goals_time" format="HH点mm分ss秒" placeholder="选择时间"></Time-picker>
        </div>
      </div>

      <div v-if="(eventStore.eventEnroll.event_type==1 || eventStore.eventEnroll.event_type==2) && reg_type==1" class="form-group">
        <label for="reg_type" class="col-sm-3 control-label">配速组</label>
        <div class="col-sm-4">
          <div class="radio">
            <label v-for="item in groupData">
              <input v-model="group_id" v-bind:value="item.group_id" type="radio">
              {{item.title}}
            </label>
          </div>
          <!-- <select v-model="group_id" class="form-control">
            <option v-for="item in eventStore.eventEnroll.group" v-bind:value="item.group_id">{{item.title}}</option>
          </select> -->
        </div>
      </div>
      <div v-if="(eventStore.eventEnroll.event_type==1 || eventStore.eventEnroll.event_type==2) && reg_type==1" class="form-group">
        <label for="resume" class="col-sm-3 control-label">个人简历</label>
        <div class="col-sm-8">
          <span>{{resume}}</span>
          <upimg upimgtype="resume" upimgtitle="添加个人简历" v-on:getImageData="imageData" />
          <!-- <input type="text" name="resume" id="resume" v-model="resume" placeholder="个人简历" class="form-control" /> -->
        </div>
      </div>
      <div v-if="(eventStore.eventEnroll.event_type==1 || eventStore.eventEnroll.event_type==2) && reg_type==1" class="form-group">
        <label for="pic" class="col-sm-3 control-label">正面照片</label>
        <div class="col-sm-8">
          <span>{{pic}}</span>
          <upimg upimgtype="pic" upimgtitle="添加图片" v-on:getImageData="imageData" />
          <!-- <input type="text" name="pic" id="pic" v-model="pic" placeholder="正面照片" class="form-control" /> -->
        </div>
      </div>
      <div v-if="(eventStore.eventEnroll.event_type==1 || eventStore.eventEnroll.event_type==2) && reg_type==1" class="form-group">
        <label for="is_has" class="col-sm-3 control-label">是否有领跑员经历</label>
        <div class="col-sm-4">
          <label class="radio-inline">
            <input type="radio" name="is_has" id="is_has" value="0" v-model="is_has" /> 否
          </label>
          <label class="radio-inline">
            <input type="radio" name="is_has" id="is_has" value="1" v-model="is_has" /> 是
          </label>
        </div>
      </div>


      <div class="form-group" v-if="is_has==1">
        <label for="experience" class="col-sm-3 control-label">经历填写</label>
        <div class="col-sm-4">
          <textarea @:blur="verifyForm" v-model="experience" placeholder="经历填写" class="form-control">


          </textarea>
          <!-- <input type="text"   /> -->
        </div>
        <div class="col-sm-4 error">{{dataError['experience']}}</div>
      </div>




      <div v-if="eventStore.eventEnroll.event_type==1 || eventStore.eventEnroll.event_type==2" class="form-group">
        <label for="all_best_time" class="col-sm-3 control-label">全马最好时间</label>
        <div class="col-sm-4">
          <Time-picker v-model:value="all_best_time" format="HH点mm分ss秒" placeholder="选择时间"></Time-picker>
        </div>
      </div>
      <div v-if="eventStore.eventEnroll.event_type==1 || eventStore.eventEnroll.event_type==2" class="form-group">
        <label for="all_best_certificate" class="col-sm-3 control-label">全马最好证书</label>
        <div class="col-sm-4">
          <span>{{all_best_certificate}}</span>
          <upimg upimgtype="all_best_certificate" upimgtitle="添加证书" v-on:getImageData="imageData" />
          <!-- <input type="text" name="all_best_certificate" id="all_best_certificate" v-model="all_best_certificate" placeholder="全马最好证书" class="form-control" /> -->
        </div>
      </div>
      <div v-if="eventStore.eventEnroll.event_type==3" class="form-group">
        <label for="emergency_name" class="col-sm-3 control-label">紧急联系人</label>
        <div class="col-sm-4">
          <input type="text" @:blur="verifyForm" v-model="emergency_name" placeholder="紧急联系人" class="form-control" />
        </div>
        <div class="col-sm-4 error">{{dataError['emergency_name']}}</div>
      </div>
      <div v-if="eventStore.eventEnroll.event_type==3" class="form-group">
        <label for="emergency_phone_number" class="col-sm-3 control-label">紧急联系人电话</label>
        <div class="col-sm-4">
          <input type="text"  @:blur="verifyForm" v-model="emergency_phone_number" placeholder="紧急联系人电话" class="form-control" />
        </div>
        <div class="col-sm-4 error">{{dataError['emergency_phone_number']}}</div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
          <button type="button" v-on:click="enrollSubmit" class="btn btn-default" style="width: 30%;">报名</button>
          <span class="error">{{error}}</span>
        </div>
      </div>
    </div>
<!-- {{eventStore.eventEnroll}} -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_REG, USER_INFO } from '@/store/modules/userStore'
import { EVENT_ENROLL, EVENT_ENROLL_SUBMIT, EVENT_GET_DETAIL } from '@/store/modules/eventStore'
import upimg from '../../components/upimg.vue'
export default {
  name: 'signup',
  beforeCreate () {
    // console.log('3433')
  },
  data () {
    return {
      // 赛事ID
      id: this.$route.params.id,
      name: '', //  姓名
      sex: 0, // 性别 0:男 1:女
      phone_number: '', // 手机号
      recipient_id_no: '', // 身份证号
      email: '', // 邮箱
      stage: '',
      reg_type: '', // 项目类型
      event_no: '', // 赛事号
      second_event_type: '', // 二级赛事类型
      mdress_size: '', // 服装尺码
      mshoes_size: '', // 鞋尺码
      wdress_size: '', // 服装尺码
      wshoes_size: '', // 鞋尺码
      personal_goals_time: '00:00:00', // 个人目标时间
      all_best_time: '00:00:00', // 全马最好时间
      all_best_certificate: '', // 全马最好证书
      group_id: '', // 配速组
      resume: '', // 个人简历
      pic: '', // 正面照片
      is_has: 0, // 是否有领跑员经历
      experience: '', // 领跑经历
      emergency_name: '',
      emergency_phone_number: '',
      event_type: [
        { id: '1', name: '国内马拉松' },
        { id: '2', name: '港澳台、国外马拉松' },
        { id: '3', name: '自主IP赛事' },
        { id: '4', name: '其他' }
      ],
      error: '',
      dataError: {}
    }
  },
  created () {
    let that = this
    // that.USER_INFO((data) => {
    //   if (Number(data.errno) !== 0) {
    //     that.$Modal.error({
    //       title: '提示信息',
    //       content: '您还没有登录，您不能报名！',
    //       onOk: () => {
    //         that.$router.replace({ path: '/' })
    //       }
    //     })
    //   }
    // })
    console.log(this.userStore.user)
    console.log(1111)
    this.name = this.userStore.user.username ? this.userStore.user.username : '' //  姓名
    this.sex = this.userStore.user.sex // 性别 0:男 1:女
    this.phone_number = this.userStore.user.phone ? this.userStore.user.phone : '' // 手机号
    this.recipient_id_no = this.userStore.user.card ? this.userStore.user.card : '' // 身份证号
    this.email = this.userStore.user.email ? this.userStore.user.email : '' // 邮箱
    this.mdress_size = this.userStore.user.default_dress // 服装尺码
    this.mshoes_size = this.userStore.user.default_shoe_size // 鞋尺码
    this.wdress_size = this.userStore.user.default_dress // 服装尺码
    this.wshoes_size = this.userStore.user.default_shoe_size // 鞋尺码
    that.EVENT_ENROLL([{event_id: that.id}, (err, data) => {
      if (err === undefined) {
        if (Number(data.errno) !== 0) {
          that.$Modal.info({
            title: '错误提示',
            content: data.msg,
            onOk: () => {
              that.$router.replace({ path: '/eventdetail/' + that.id })
            }
          })
        }
      }
    }])
    that.eventStore.eventDetail = Object.assign({})
    that.EVENT_GET_DETAIL({id: that.id})
  },
  mounted () {
    // console.log('mounted')
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore',
      eventStore: 'eventStore'
    }),
    groupData () {
      let that = this
      let data = []
      if ('group' in that.eventStore.eventEnroll && that.eventStore.eventEnroll.group.length > 0) {
        that.group_id = that.eventStore.eventEnroll.group[0].group_id
        data = that.eventStore.eventEnroll.group
      }
      return data
    },
    regType () {
      let that = this
      let data = {}
      if ('reg_type' in that.eventStore.eventEnroll && Object.keys(that.eventStore.eventEnroll.reg_type).length > 0) {
        that.reg_type = Object.keys(that.eventStore.eventEnroll.reg_type)[0]
        data = that.eventStore.eventEnroll.reg_type
      }
      return data
    },
    secondEventType () {
      let that = this
      let data = {}
      if ('second_event_type' in that.eventStore.eventEnroll && Object.keys(that.eventStore.eventEnroll.second_event_type.length) > 0) {
        that.second_event_type = Object.keys(that.eventStore.eventEnroll.second_event_type)[0]
        data = that.eventStore.eventEnroll.second_event_type
      }
      return data
    },
    womenSize () {
      let that = this
      let data = {}
      if ('women' in that.eventStore.eventEnroll && 'size' in that.eventStore.eventEnroll.women && Object.keys(that.eventStore.eventEnroll.women).length > 0) {
        // that.wdress_size = Object.keys(that.eventStore.eventEnroll.women.size)[0]
        data = that.eventStore.eventEnroll.women.size
      }
      for (let i in data) {
        if (data[i] === this.userStore.user.default_dress) {
          that.wdress_size = i
        }
      }
      return data
    },
    manSize () {
      let that = this
      let data = {}
      if ('man' in that.eventStore.eventEnroll && 'size' in that.eventStore.eventEnroll.man && Object.keys(that.eventStore.eventEnroll.man.size).length > 0) {
        // that.mdress_size = Object.keys(that.eventStore.eventEnroll.man.size)[0]
        data = that.eventStore.eventEnroll.man.size
      }
      for (let i in data) {
        if (data[i] === this.userStore.user.default_dress) {
          that.mdress_size = i
        }
      }
      return data
    },
    manShoes_size () {
      let that = this
      let data = {}
      if ('man' in that.eventStore.eventEnroll && 'shoes_size' in that.eventStore.eventEnroll.man && Object.keys(that.eventStore.eventEnroll.man.shoes_size).length > 0) {
        // that.mshoes_size = Object.keys(that.eventStore.eventEnroll.man.shoes_size)[0]
        data = that.eventStore.eventEnroll.man.shoes_size
      }
      return data
    },
    womenShoes_size () {
      let that = this
      let data = {}
      if ('women' in that.eventStore.eventEnroll && 'shoes_size' in that.eventStore.eventEnroll.women && Object.keys(that.eventStore.eventEnroll.women.shoes_size).length > 0) {
        // that.wshoes_size = Object.keys(that.eventStore.eventEnroll.women.shoes_size)[0]
        data = that.eventStore.eventEnroll.women.shoes_size
      }
      return data
    },
    verifyForm () {
      let that = this
      let flag = true
      if (this.isTrim(that.name)) {
        that.dataError['name'] = '姓名不能为空！'
        flag = false
      } else {
        that.dataError['name'] = ''
      }

      if (this.isTrim(that.phone_number)) {
        that.dataError['phone_number'] = '手机号码不能为空！'
        flag = false
      } else if (!this.isPhone(that.phone_number)) {
        that.dataError['phone_number'] = '手机号填写有错误！'
        flag = false
      } else {
        that.dataError['phone_number'] = ''
      }
      if (this.isTrim(that.recipient_id_no)) {
        that.dataError['recipient_id_no'] = '身份证号码不能为空！'
        flag = false
      } else if (!this.isCard(that.recipient_id_no)) {
        that.dataError['recipient_id_no'] = '身份证号填写有错误！'
        flag = false
      } else {
        that.dataError['recipient_id_no'] = ''
      }
      if (this.isTrim(that.email)) {
        that.dataError['email'] = 'Email不能为空！'
        flag = false
      } else if (!this.isEmail(that.email)) {
        that.dataError['email'] = 'Email填写有错误！'
        flag = false
      } else {
        that.dataError['email'] = ''
      }
      if (Number(that.eventStore.eventEnroll.event_type) <= 2) {
        if (this.isTrim(that.event_no)) {
          that.dataError['event_no'] = '赛事号不能为空！'
          flag = false
        } else {
          that.dataError['event_no'] = ''
        }
        if (Number(that.reg_type) === 1 && Number(that.is_has) === 1) {
          if (this.isTrim(that.experience)) {
            that.dataError['experience'] = '领跑经历不能为空！'
            flag = false
          } else {
            that.dataError['experience'] = ''
          }
        }
      }
      if (Number(that.eventStore.eventEnroll.event_type) === 3) {
        if (this.isTrim(that.emergency_name)) {
          that.dataError['emergency_name'] = '紧急联系人不能为空！'
          flag = false
        } else {
          that.dataError['emergency_name'] = ''
        }
        if (this.isTrim(that.emergency_phone_number)) {
          that.dataError['emergency_phone_number'] = '紧急联系人手机不能为空！'
          flag = false
        } else if (!this.isPhone(that.emergency_phone_number)) {
          that.dataError['emergency_phone_number'] = '紧急联系人手机号填写有错误！'
          flag = false
        } else {
          that.dataError['emergency_phone_number'] = ''
        }
      }
      return !flag
    }
  },
  methods: {
    ...mapActions([EVENT_ENROLL, EVENT_ENROLL_SUBMIT, USER_REG, USER_INFO, EVENT_GET_DETAIL]),
    imageData (type, data) {
      this[type] = data.data.pic
    },
    enrollSubmit () {
      let that = this
      // console.log(that)
      // console.log(that.personal_goals_time)
      // console.log(that.verifyForm())
      // console.log(4444)
      if (that.verifyForm) {
        return
      }
      let data = {
        event_id: this.$route.params.id,
        name: that.name,
        sex: that.sex,
        phone_number: that.phone_number,
        event_no: that.event_no,
        recipient_id_no: that.recipient_id_no,
        email: that.email,
        stage: that.stage,
        reg_type: that.reg_type,
        dress_size: Number(that.sex) === 0 ? that.mdress_size : that.wdress_size,
        shoes_size: Number(that.sex) === 0 ? that.mshoes_size : that.wshoes_size,
        personal_goals_time: that.formatTime(that.personal_goals_time),
        all_best_time: that.formatTime(that.all_best_time),
        all_best_certificate: that.all_best_certificate,
        emergency_name: that.emergency_name,
        emergency_phone_number: that.emergency_phone_number,
        group_id: that.group_id,
        resume: that.resume,
        pic: that.pic,
        is_has: that.is_has,
        experience: that.experience
      }
      that.EVENT_ENROLL_SUBMIT([
        data, (err, data) => {
          if (err === undefined) {
            that.$Message.success(data.msg)
            that.$router.replace({ path: '/user' })
          } else {
            that.error = err
          }
        }
      ])
    }
  },
  components: {
    upimg
  },
  watch: {
    reg_type (val, oldVal) {
      console.log(val, oldVal)
    },
    is_has (val, oldVal) {
      if (Number(val) === 0) {
        this.experience = ''
      }
    }
  }
}
</script>

<style lang="css" scoped>
  .error {
    color: #900;
    padding: 3px 15px;
  }
</style>
