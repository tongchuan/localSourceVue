<template lang="html">
  <div class="bg">
    <div class="row">
      <div class="col-xs-12 pt15">
        <div class="">
          <ul class="nav nav-tabs">
            <li v-for="(item,index) in navtitle" v-on:click="selectTitle(item,index)" role="presentation" v-bind:class="item.selected ? 'active' : ''"><a href="javascript:void(0)">{{item.name}}</a></li>
          </ul>
        </div>
        <!-- 购物车start -->
        <div v-if="selectedItem.tagName == 'car'">
          <div class="user-content" v-show="pageShow===1">
            <div class="user-content" style="padding: 20px 15px">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <!-- <td><input @click="CheckSelected($event)" type="checkbox" /></td> -->
                    <th>是否结算</th>
                    <th>商品名称</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>尺寸</th>
                    <th>小计</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody  v-if="orderStore.shopping.list && orderStore.shopping.list.length>0">
                  <tr v-for="item in orderStore.shopping.list">
                    <!-- <td><input type="checkbox" v-bind:value="item.shopping_cart_id" /></td> -->
                    <th><input v-bind:value="item.shopping_cart_id" v-on:click="checkboxItem(item.shopping_cart_id)" type="checkbox" /></th>
                    <th>{{item.name}}</th>
                    <td>{{item.max_point>0? item.max_point+'积分': item.money+'元'}}</td>
                    <td><input type="Number" v-bind:value="item.goods_count" @change="updateData(item, $event)"></td>
                    <th>{{item.size}}</th>
                    <td>{{item.goods_count*(item.max_point>0? item.max_point:item.money)}}{{item.max_point>0? '积分': '元'}}</td>
                    <td><a @click="deleteItem(item)" href="javascript:void(0)">删除</a></td>
                  </tr>
                </tbody>
                <tbody v-if="orderStore.shopping.list && orderStore.shopping.list.length==0">
                  <tr>
                    <th colspan="7" style="text-align:center;color:#900;line-height:60px">暂无数据</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="">
              <form class="form-horizontal" style="margin-top:15px;">
                <div class="form-group" style="paddingLeft:15px;">
                用户可用  <span class="error">{{point_balance}}</span>积分,
                需要支付 <span>{{(Number(total_max_point)+Number(point)) > 0 ? (Number(total_max_point)+Number(point)) : 0}}</span>积分， <span class="error">{{(Number(total_money)-point/100) > 0 ? (Number(total_money)-point/100) : 0}}</span>元 
                </div>
                <div class="form-group">
                  <label for="name" class="col-sm-2 control-label">使用积分</label>
                  <div class="col-sm-4">
                    <input class="form-control" type="number" v-on:keyup="verifyPoint" v-model="point" placeholder="积分">
                  </div>
                  <div class="col-sm-4 error">
                    最多可用积分{{total_point_only>point_balance ? point_balance : total_point_only}}积分
                  </div>
                </div>
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
                      <option v-for="item in provinceList" v-bind:value="item.province_id">{{item.province_name}}</option>
                    </select>
                  </div>
                  <div class="col-sm-2">
                    <select class="form-control" v-model="city">
                      <option v-for="item in cityList" v-bind:value="item.city_id">{{item.city_name}}</option>
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
            <!-- <div class="page">
              <page v-bind:total="orderStore.shopping.count" v-bind:rows="rows" v-bind:page="page" v-bind:set-page="setPage" />
            </div> -->
          </div>
          <div class="col-xs-12" v-show="pageShow===2" style="padding-top:15px;">
            <div class="">
              <ul class="nav nav-tabs">
                <li role="presentation"class="active"><a href="javascript:void(0)">支付</a></li>
              </ul>
            </div>
            <div class="user-content" >
              <div class="user-content" style="padding: 20px 15px">
                <h3>订单成功，马上去支付</h3>
                <h4>需要金额：{{sxmoney}}</h4>
                <h4>需要积分：{{sxjf}}</h4>
                <div class="">
                  <u>
                    <li><a style="font-weight:bold"  v-bind:href="'http://www.centurysports.com.cn/api/alipay/gotoPage?order_id='+suid">支付包支付</a></li>
                    <!-- <li><a style="font-weight:bold; text-decoration:none"  v-bind:href="'http://www.centurysports.com.cn/api/wxpay/gotoPage/wx.html?order_id='+suid">微信支付</a> -->
                    <li><span style="font-weight:bold; text-decoration:none">微信支付</span>
                      <div>
                        <img v-bind:src="'http://qr.liantu.com/api.php?text='+encodeURIComponent('http://www.centurysports.com.cn/api/wxpay/gotoPage/wx.html?order_id='+suid)" />
                      </div>
                    </li>
                  </u>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 购物车end -->
        <!-- 订单start -->
        <div v-if="selectedItem.tagName == 'order'">
          <div class="user-content">
            <div class="user-content" style="padding: 20px 15px">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <!-- <td><input @click="CheckSelected($event)" type="checkbox" /></td> -->
                    <!-- <th>商品名称</th> -->
                    <th>商品标题</th>
                    <th>订单时间</th>
                    <th>支付时间</th>
                    <th>商品分类</th>
                    <th>总价格</th>
                    <th>积分</th>
                    <th>支付状态</th>
                  </tr>
                </thead>
                <tbody  v-if="orderStore.equipment.list && orderStore.equipment.list.length>0">
                  <tr v-for="item in orderStore.equipment.list">
                    <!-- <td><input type="checkbox" v-bind:value="item.shopping_cart_id" /></td> -->
                    <!-- <th>{{item.name}}</th> -->
                    <td>{{item.order_title}}</td>
                    <td>{{item.order_time}}</td>
                    <td>{{item.pay_time}}</td>
                    <td>{{item.category=='10'?'鞋子': item.category=='11'?'衣服':item.category=='12'?'裤子':''}}</td>
                    <td>{{item.money+'元'}}</td>
                    <td>{{item.point}}</td>
                    <td>
                      <span v-if="item.status==10">
                        <a v-bind:href="'http://www.centurysports.com.cn/api/alipay/gotoPage?order_id='+item.order_id">支付宝支付</a><br />
                        <a v-bind:href="'http://www.centurysports.com.cn/api/wxpay/gotoPage/wx.html?order_id='+item.order_id">微信支付，请扫下面二维码</a>
                      </span>
                      <span v-if="item.status == 11">支付中</span>
                      <span v-if="item.status == 12">支付完成</span>
                      <span v-if="item.status == 14">已经发货</span>
                      <span v-if="item.status == 16">已经关闭</span>
                    </td>
                  </tr>
                </tbody>
                <tbody v-if="orderStore.equipment.list && orderStore.equipment.list.length==0">
                  <tr>
                    <th colspan="7" style="text-align:center;color:#900;line-height:60px">暂无数据</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="page">
            <page v-bind:total="orderStore.equipment.count" v-bind:rows="rowsOrder" v-bind:page="pageOrder" v-bind:set-page="setOrderPage" />
          </div>
        </div>
        <!-- 订单end -->
      </div>


    </div>
  </div>
</template>

<script>
// export const GETLIST_SHOPPING = 'GETLIST_SHOPPING' // 获取购物车
// export const UPDATE_SHOPPING = 'UPDATE_SHOPPING' // 更新购物车
// export const DELETE_SHOPPING = 'DELETE_SHOPPING' // 删除购物车
// export const CLEAN_SHOPPING = 'CLEAN_SHOPPING' // 清空购物车
// export const SETTLE_SHOPPING = 'SETTLE_SHOPPING' // 购物车结算
import { mapGetters, mapActions } from 'vuex'
import { USER_UPDATA } from '@/store/modules/userStore'
import page from '@/components/common/page'
import $ from 'jquery'
import { GET_PROVINCE, GET_CITY } from '@/store/modules/dicStore'
import { GETLIST_SHOPPING, UPDATE_SHOPPING, DELETE_SHOPPING, CLEAN_SHOPPING, SETTLE_SHOPPING, ORDER_CHECK_MY_EQUIPMENT, PER_SETTLE } from '@/store/modules/orderStore'
export default {
  name: 'shopping',
  data () {
    return {
      pageShow: 1,
      total: 0,
      rows: 999999, // 一页几条
      page: 1, // 当前页
      navtitle: [
        {name: '我的购物车', selected: true, tagName: 'car'},
        {name: '我的订单', selected: false, tagName: 'order'}
      ],
      contact: '',
      phone: '',
      province: '',
      city: '',
      address: '',
      note: '',
      errorData: {},
      sxjf: 0,
      sxmoney: 0,
      suid: 0,
      totalOrder: 0,
      pageOrder: 1,
      rowsOrder: 15,
      shoppingCartIds: [],
      point: 0,
      point_balance: 0,
      total_money: 0,
      total_max_point: 0,
      total_point_only: 0
    }
  },
  created () {
    let that = this
    this.getListData()
    that.GET_PROVINCE({})
    that.GET_CITY({})
    that.contact = that.userStore.user && that.userStore.user.username ? that.userStore.user.username : ''
    that.phone = that.userStore.user && that.userStore.user.phone ? that.userStore.user.phone : ''
    that.province = that.userStore.user && that.userStore.user.province ? that.userStore.user.province : ''
    that.city = that.userStore.user && that.userStore.user.city ? that.userStore.user.city : ''
    that.address = that.userStore.user && that.userStore.user.address ? that.userStore.user.address : ''
    // console.log(that)
  },
  components: {
    page
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore',
      orderStore: 'orderStore',
      dicStore: 'dicStore'
    }),
    selectedItem () {
      let that = this
      let data = {}
      that.navtitle.forEach((item) => {
        if (item.selected) {
          data = Object.assign({}, item)
        }
      })
      return data
    },
    provinceList () {
      let that = this
      // if (!that.province) {
      //   that.province = that.dicStore.province[0] && that.dicStore.province[0].province_id ? that.dicStore.province[0].province_id : ''
      // }
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
          // if (!that.city) {
          //   that.city = item.citys[0] && item.citys[0].city_id ? item.citys[0].city_id : ''
          // }
          data = item.citys
        }
      }
      return data
      // console.log(that.dicStore.city)
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
      USER_UPDATA,
      GETLIST_SHOPPING,
      UPDATE_SHOPPING,
      DELETE_SHOPPING,
      CLEAN_SHOPPING,
      SETTLE_SHOPPING,
      GET_PROVINCE,
      GET_CITY,
      ORDER_CHECK_MY_EQUIPMENT,
      PER_SETTLE
    ]),
    verifyPoint () {
      this.point = parseInt(this.point)
      let point = Number(this.point_balance) - Number(this.total_max_point)
      point = point > Number(this.total_point_only) ? Number(this.total_point_only) : point
      if (this.point < 0) {
        this.point = 0
      }
      if (this.point > point) {
        this.point = point
      }
      console.log(this.point)
    },
    checkboxItem (id) {
      let flag = false
      this.shoppingCartIds.forEach((item, index) => {
        if (item === id) {
          flag = true
          this.shoppingCartIds.splice(index, 1)
        }
      })
      if (!flag) {
        this.shoppingCartIds.push(id)
      }
      this.getPerSettle()
    },
    getPerSettle () {
      this.PER_SETTLE([{shopping_cart_ids: this.shoppingCartIds}, (err, data) => {
        if (err === undefined) {
          this.point_balance = data.point_balance
          this.total_max_point = data.total_max_point
          this.total_money = data.total_money
          this.total_point_only = data.total_point_only
        }
        // console.log(err, data)
      }])
    },
    getOrderData () {
      let that = this
      this.ORDER_CHECK_MY_EQUIPMENT({start: (that.pageOrder - 1) * that.rowsOrder, length: that.rowsOrder})
    },
    selectTitle (item, index) {
      let that = this
      that.navtitle.forEach((ditem) => {
        ditem.selected = false
      })
      item.selected = true
      if (item.tagName === 'order') {
        that.getOrderData()
      }
      if (item.tagName === 'car') {
        that.pageShow = 1
      }
    },
    setOrderPage (page) {
      // console.log(page)
      let that = this
      that.pageOrder = page
      that.getOrderData()
    },
    setPage (page) {
      let that = this
      that.page = page
      that.getOrderData()
    },
    getListData () {
      let that = this
      this.GETLIST_SHOPPING({start: (that.page - 1) * that.rows, length: that.rows})
    },
    deleteItem (item) {
      let that = this
      that.DELETE_SHOPPING([{shopping_cart_id: item.shopping_cart_id}, (data) => {
        that.getListData()
      }])
    },
    clearData () {
      let that = this
      that.CLEAN_SHOPPING([{}, (data) => {

      }])
    },
    updateData (item, event) {
      let that = this
      let goodsCount = event.target.value
      if (Number(goodsCount) < 0) {
        event.target.value = 1
        goodsCount = 1
      }
      that.UPDATE_SHOPPING([{
        shopping_cart_id: item.shopping_cart_id,
        goods_count: goodsCount
      }, (data) => {
        that.getListData()
      }])
    },
    CheckSelected (event) {
      $('input[type=checkbox]').prop('checked', event.target.checked)
    },
    orderSend () {
      let that = this
      if (!that.verifyFrom) {
        return
      }
      let data = {
        // shopping_cart_ids: that.orderStore.shopping.list.map((item) => {
        //   return item.shopping_cart_id
        // }),
        shopping_cart_ids: this.shoppingCartIds,
        sex: that.sex,
        color: that.color,
        size_id: that.size_id,
        goods_id: that.id,
        contact: that.contact,
        phone: that.phone,
        province_id: that.province,
        city_id: that.city,
        address: that.address,
        note: that.note,
        point: Number(that.point) + Number(that.total_max_point)
      }
      that.SETTLE_SHOPPING([
        data,
        (err, data) => {
          if (err === undefined) {
            if (Number(data.errno) === 0) {
              that.pageShow = 2
              that.sxjf = 0
              that.sxmoney = data.data.money
              that.suid = data.data.order_id
              // that.$router.replace({ path: '/' })
            } else {
              this.$Modal.error({
                title: '错误信息',
                content: data.msg
              })
              // console.log(data.msg)
              // that.errorData['error'] = data.msg
            }
          }
        }
      ])
    }
  },
  watch: {
    'orderStore.shopping.list' () {
      this.getPerSettle()
    }
  }
}
</script>

<style scoped>

</style>
