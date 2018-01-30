<template>
  <div class="">
    <div class="container bg goodsdetails" style="margin-top:15px">
      <div class="row">
        <p class="title"><router-link :to="{ path: '/'}">首页</router-link> >
          <router-link :to="{ path: '/goods'}">商城</router-link> > {{goodsStore.goodsDetail.name}}</p>
        <div class="goodsdetails-left" id="focusMap" style="height:400px;width:300px">
            <focusmap v-bind:focusList="focusList" />
        </div>
        <div class="goodsdetails-right">
          <ul>
            <li><h4>{{goodsStore.goodsDetail.name}}</h4></li>
            <li><h5>{{goodsStore.goodsDetail.title}}</h5></li>
            <li v-if="getSex.length>0"><h5>款式：<div class="radio" style="display:inline-block">
                <label v-for="(item,index) in getSex" v-bind:key="index" v-on:click="sex=item.sex">
                  <input type="radio" v-model="sex" v-bind:value="item.sex">{{item.sex}}
                </label>
              </div>
            </h5>
            <li v-if="getSize.length>0"><h5>尺码：<div class="radio" style="display:inline-block">
                <label v-for="(item,index) in getSize" v-bind:key="index" v-on:click="size=item.size">
                  <input type="radio" v-model="size" v-bind:value="item.size">{{item.size}}
                </label>
              </div>
            </h5>
            <li v-if="getColor.length>0"><h5>颜色：<div class="radio" style="display:inline-block">
                <label v-for="(item,index) in getColor" v-bind:key="index" v-on:click="color=item.color">
                  <input type="radio" v-model="color" v-bind:value="item.color" checked>{{item.color}}
                </label>
              </div>
            </h5>
            </li>
            <li><h5>{{goodsStore.goodsDetail.summary}}</h5></li>
            <li v-if="!isOrder" >
              <button v-on:click="addShopping" class="btn btn-warning">加入购物车</button>
              <router-link :to="{ path: '/goods' }">
                <button type="button" name="button" class="btn btn-warning">回到商城继续购物</button>
              </router-link>
              <!-- <button v-on:click="duihuan" class="btn btn-warning">兑换</button> -->
            </li>
          </ul>
          <!-- {{goodsStore.goodsDetail}}
          {{id}} -->
        </div>
      </div>
    </div>

    <div v-if="!isOrder" class="container bg"  style="margin-top:15px">
      <div class="rows">
        <div class="title-nav">
          <span class="title">产品信息</span>
        </div>
      </div>
      <div class="rows">
        <div class="col-xs-12" v-html="goodsStore.goodsDetail.content">
        </div>
      </div>
    </div>
    <div v-if="isOrder" class="container bg"  style="margin-top:15px;padding:15px;">
      <div class="rows">
        <div class="title-nav">
          <span class="title">订单</span>
        </div>
      </div>
      <form class="form-horizontal" style="margin-top:15px;">
        <div class="form-group">
          <label for="name" class="col-sm-2 control-label">联系人</label>
          <div class="col-sm-4">
            <input type="email" class="form-control" v-on:keyup="verifyFrom" v-model="contact" placeholder="联系人">
          </div>
          <div class="col-sm-4 error">
            {{errorData.contact}}
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">电话</label>
          <div class="col-sm-4">
            <input type="email" class="form-control" v-on:keyup="verifyFrom" v-model="phone" placeholder="电话">
          </div>
          <div class="col-sm-4 error">
            {{errorData.phone}}
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">省／市</label>
          <div class="col-sm-2">
            <select class="form-control" v-model="province">
              <option v-for="(item,index) in provinceList" v-bind:key="index" v-bind:value="item.province_id">{{item.province_name}}</option>
            </select>
          </div>
          <div class="col-sm-2">
            <select class="form-control" v-model="city">
              <option v-for="(item,index) in cityList" v-bind:key="index" v-bind:value="item.city_id">{{item.city_name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">收货地址</label>
          <div class="col-sm-4">
            <input type="email" class="form-control" v-on:keyup="verifyFrom" v-model="address" placeholder="收货地址">
          </div>
          <div class="col-sm-4 error">
            {{errorData.address}}
          </div>
        </div>
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">备注</label>
          <div class="col-sm-4">
            <input type="email" class="form-control" v-model="note" placeholder="备注">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button" v-on:click="orderSend" class="btn btn-warning">确&nbsp;&nbsp;&nbsp;&nbsp;定</button>
            <span class="error">{{errorData.error}}</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script type="text/javascript">
import focusmap from '@/components/common/focusmap'
import { mapGetters, mapActions } from 'vuex'
import { GOODS_GET_DETAIL } from '@/store/modules/goodsStore'
import { GET_PROVINCE, GET_CITY } from '@/store/modules/dicStore'
import { ORDER_CHECK_CONFIRM, ADD_SHOPPING } from '@/store/modules/orderStore'

export default {
  name: 'GoodsDetail',
  data () {
    return {
      isOrder: false,
      sex: '',
      size_id: '',
      size: '',
      color: '',
      id: this.$route.params.id,
      contact: '',
      phone: '',
      province: '',
      city: '',
      address: '',
      note: '',
      errorData: {}
    }
  },
  created () {
    let that = this
    that.GOODS_GET_DETAIL({goods_id: that.id})
    that.GET_PROVINCE({})
    that.GET_CITY({})
  },
  components: {
    focusmap
  },
  computed: {
    ...mapGetters({
      goodsStore: 'goodsStore',
      dicStore: 'dicStore',
      orderStore: 'orderStore',
      userStore: 'userStore'
    }),
    provinceList () {
      let that = this
      if (!that.province) {
        that.province = that.dicStore.province[0] && that.dicStore.province[0].province_id ? that.dicStore.province[0].province_id : ''
      }
      return that.dicStore.province
    },
    cityList () {
      let that = this
      let data = []
      // console.log(JSON.stringify(that.dicStore.city))
      // that.dicStore.city.forEach((item) => {
      for (let i in that.dicStore.city) {
        // console.log(i)
        let item = that.dicStore.city[i]
        // console.log(item)
        if (Number(item.province_id) === Number(that.province)) {
          if (!that.city) {
            that.city = item.citys[0] && item.citys[0].city_id ? item.citys[0].city_id : ''
          }
          data = item.citys
        }
      }
      return data
      // console.log(that.dicStore.city)
    },
    focusList () {
      let data = []
      for (let key in this.goodsStore.goodsDetail.goods_pic) {
        data.push({
          name: this.goodsStore.goodsDetail.name,
          title: this.goodsStore.goodsDetail.title,
          image: this.goodsStore.goodsDetail.goods_pic[key],
          link: 'javascript:void(0)'
        })
      }
      return data
    },
    getSex () {
      let that = this
      let data = []
      that.goodsStore.goodsDetail.goods_size && that.goodsStore.goodsDetail.goods_size.forEach((item, index) => {
        if ('sex' in item && item.sex !== '' && item.size === that.size && item.color === that.color) {
        // if ('sex' in item && item.sex !== '') {
          let flag = true
          data.forEach((sex) => {
            if (sex === item.sex) {
              flag = false
            }
          })
          if (flag) {
            data.push(item)
          }
        }
      })
      // console.log(data)
      return data
    },
    getSize () {
      let that = this
      let data = []
      let sort = {
        'xxs': 1,
        '2xs': 1.5,
        'xs': 2,
        's': 3,
        'm': 4,
        'l': 5,
        'xl': 6,
        'xxl': 7,
        '2xl': 7.5,
        'xxxl': 8,
        '3xl': 8.5,
        'xxxxl': 9,
        '4xl': 9.5,
        'xxxxxl': 10,
        '5xl': 10.5
      }
      // console.log(sort)
      that.goodsStore.goodsDetail.goods_size && that.goodsStore.goodsDetail.goods_size.forEach((item, index) => {
        if ('size' in item && item.size !== '' && item.sex === that.sex && item.color === that.color) {
          // that.size_id = that.size_id ? that.size_id : item.size_id
          // console.log(that.size_id, item.size_id)
          let flag = true
          data.forEach((size) => {
            if (size.size === item.size) {
              flag = false
            }
          })
          if (flag) {
            data.push(item)
          }
          data.forEach((size) => {
            size.sizeOrder = sort[size.size.toLowerCase()]
          })
          data.sort((a, b) => {
            return a.sizeOrder > b.sizeOrder
          })
          // console.log(data)
          // if (that.sex === '' && flag) {
          //   data.push({
          //     size_id: item.size_id,
          //     size: item.size
          //   })
          // } else {
          //   if (that.sex === item.sex && flag) {
          //     data.push({
          //       size_id: item.size_id,
          //       size: item.size
          //     })
          //   }
          // }
        }
      })
      // console.log(JSON.stringify(data))
      return data
    },
    getColor () {
      let that = this
      let data = []
      that.goodsStore.goodsDetail.goods_size && that.goodsStore.goodsDetail.goods_size.forEach((item, index) => {
        // console.log(that.sex + '0', that.size + '1')
        if ('color' in item && item.color !== '' && item.sex === that.sex && item.size === that.size) {
          let flag = true
          data.forEach((color) => {
            if (color.color === item.color) {
              flag = false
            }
          })
          // console.log(data)
          if (flag) {
            data.push(item)
          }
          // if (that.sex === '' && flag) {
          //   data.push(item.color)
          // } else {
          //   if (that.sex === item.sex && flag) {
          //     data.push(item.color)
          //   }
          // }
        }
      })
      return data
    },
    verifyFrom () {
      let that = this
      let flag = true
      that.errorData['error'] = ''
      if (that.isTrim(that.contact)) {
        that.errorData['contact'] = '联系人不能为空！'
        flag = false
      } else {
        that.errorData['contact'] = ''
      }
      if (that.isTrim(that.phone)) {
        that.errorData['phone'] = '手机号不能为空！'
        flag = false
      } else if (!that.isPhone(that.phone)) {
        that.errorData['phone'] = '手机号码填写错误！'
        flag = false
      } else {
        that.errorData['phone'] = ''
      }
      if (that.isTrim(that.address)) {
        that.errorData['address'] = '收货地址不能为空！'
        flag = false
      } else {
        that.errorData['address'] = ''
      }
      return flag
    }
  },
  methods: {
    ...mapActions([
      GOODS_GET_DETAIL,
      GET_PROVINCE,
      GET_CITY,
      ORDER_CHECK_CONFIRM,
      ADD_SHOPPING
    ]),
    duihuan () {
      let that = this
      // that.sex = ''
      // that.size_id = ''
      // that.color = ''
      that.contact = that.userStore.user && that.userStore.user.username ? that.userStore.user.username : ''
      that.phone = that.userStore.user && that.userStore.user.phone ? that.userStore.user.phone : ''
      that.province = that.userStore.user && that.userStore.user.province ? that.userStore.user.province : ''
      that.city = that.userStore.user && that.userStore.user.city ? that.userStore.user.city : ''
      that.address = that.userStore.user && that.userStore.user.address ? that.userStore.user.address : ''
      this.isOrder = true
    },
    addShopping () {
      let that = this
      if (!this.userStore.user.id) {
        this.$root.$emit('userOpen', {})
      } else {
        let sizeid = ''
        that.goodsStore.goodsDetail.goods_size && that.goodsStore.goodsDetail.goods_size.forEach((item) => {
          if ('sex' in item && item.sex !== '') {

          } else {
            item.sex = ''
          }
          if ('size' in item && item.size !== '') {

          } else {
            item.size = ''
          }
          if ('color' in item && item.color !== '') {

          } else {
            item.color = ''
          }
          if (that.sex === item.sex && that.color === item.color && that.size === item.size) {
            sizeid = item.size_id
          }
        })
        let data = {
          // sex: that.sex,
          // color: that.color,
          // size_id: that.size,
          size_id: sizeid,
          goods_id: that.id,
          goods_count: 1
        }
        that.ADD_SHOPPING([data, (err, data) => {
          if (err === undefined && Number(data.errno) === 0) {
            that.$Message.info('添加成功！')
            that.$router.replace({ path: '/user/shopping' })
          } else {
            that.$Message.info(data.msg)
          }
        }])
      }
    },
    orderSend () {
      let that = this
      if (!that.verifyFrom) {
        return
      }
      let data = {
        sex: that.sex,
        color: that.color,
        size_id: that.size_id,
        goods_id: that.id,
        contact: that.contact,
        phone: that.phone,
        province_id: that.province,
        city_id: that.city,
        address: that.address,
        note: that.note
      }
      that.ORDER_CHECK_CONFIRM({
        data: data,
        callback: (err, data) => {
          if (err === undefined) {
            if (Number(data.errno) === 0) {
              that.$router.replace({ path: '/user/shopping' })
            } else {
              console.log(data.msg)
              that.errorData['error'] = data.msg
            }
          }
        }
      })
    }
  },
  watch: {
    province (val, oldVal) {
      if (val !== oldVal) {
        this.city = ''
      }
    },
    'goodsStore.goodsDetail.goods_size' (val) {
      let that = this
      val.forEach((item) => {
        if ('sex' in item && item.sex !== '' && that.sex === '') {
          that.sex = item.sex
        }
        if ('color' in item && item.color !== '' && that.color === '') {
          that.color = item.color
        }
        if ('size' in item && item.size !== '' && that.size === '') {
          that.size = item.size
        }
      })
    }
  }
}
</script>
<style type="text/css">

</style>
