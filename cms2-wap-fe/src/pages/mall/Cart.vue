<template>
  <div class="mall-cart">
    <div v-if="!pay">
      <div class="mallc-item" v-for="(item, index) in list" @click="select(index)">
        <img src="../../assets/check.png" v-if="!item.active" class="mallc-check">
        <img src="../../assets/checked.png" v-else class="mallc-check">
        <img :src="item.icon_url" class="mallc-icon">
        <div class="mallc-item-main">
          <p class="mallc-title">{{item.title}}</p>
          <p class="mallc-spec">
            <span v-if="item.color">颜色：{{item.color}}</span>
            <span v-if="item.size">尺码：{{item.size}}</span>
            <span v-if="item.sex">{{item.sex}}款</span>
            <span>数量：{{item.goods_count}}</span>
          </p>
          <p class="mallc-money">{{point(item)}}</p>
        </div>
      </div>
    </div>
    <div class="mallc-mask" v-else>
      <div>
        <form class="form-horizontal" style="padding: 20px;">
          <div class="form-group">
            <label class="col-sm-2 control-label custom-label">
              使用整数积分
              <span v-if="totalMaxPoint || totalPointOnly">
                (最多可用{{totalMaxPoint + totalPointOnly}}积分<span v-if="totalPointOnly">最少要用{{totalPointOnly}}积分</span>)
              </span>
            </label>
            <div class="col-sm-4">
              <input class="form-control" type="number" placeholder="积分，须为整数" v-model="pointInput" @change="changePoint">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">联系人</label>
            <div class="col-sm-4">
              <input type="text" class="form-control" placeholder="联系人" v-model="name">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">电话</label>
            <div class="col-sm-4">
              <input type="number" class="form-control" placeholder="电话" v-model="phone">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">收货地址</label>
            <div class="col-sm-4">
              <input type="text" class="form-control" placeholder="收货地址" v-model="address">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">备注</label>
            <div class="col-sm-4">
              <input type="text" class="form-control" placeholder="备注" v-model="remark">
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="mallc-footer" v-if="!pay">
      <div class="mallc-buy">
        <span class="mallc-footer-price">
          合计:<span>{{totalPrice}}</span>
        </span>
        <span class="mallc-footer-btn" @click="goPay">结算</span>
      </div>
    </div>
    <div class="mallc-footer" v-else>
      <div class="mallc-buy">
        <span class="mallc-footer-price">
          合计:<span>{{totalPay}}</span>
        </span>
        <span class="mallc-footer-btn" @click="payMoney">支付</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { CART_LIST } from '@/store/modules/cartStore'
  import { PRE_ORDER, PAY_ORDER } from '@/store/modules/orderStore'
  const REG_PHONE = /^1[0-9]{10}$/
  export default {
    name: 'mallCart',
    data () {
      return {
        list: [],
        pay: false,
        pointBalance: 0,
        totalMaxPoint: 0,
        totalMoney: 0,
        totalPointOnly: 0,
        pointInput: 0,
        name: '',
        phone: '',
        address: '',
        remark: '',
        shoppingCartIds: []
      }
    },
    watch: {
      'cartStore.cartList': function (list) {
        this.list = []
        list.forEach((item) => {
          item.active = false
          this.list.push(item)
        })
      }
    },
    computed: {
      ...mapGetters([
        'cartStore',
        'orderStore'
      ]),
      totalPrice: function () {
        let price = 0
        let point = 0
        this.list.forEach((item, index) => {
          if (item.active) {
            if (Number(item.type) === 10) {
              point += item.max_point * item.goods_count
            } else if (Number(item.type) === 12) {
              price += item.money * item.goods_count
            } else {
              point += item.max_point * item.goods_count
              price += (item.money - item.max_point / 100) * item.goods_count
            }
          }
        })
        if (point) {
          return price + '元，' + point + '积分'
        }
        return price + '元'
      },
      totalPay: function () {
        let price = 0
        if (this.pointInput) {
          price = this.totalMoney - ((this.pointInput - this.totalPointOnly) / 100)
          return price + '元，' + this.pointInput + '积分'
        }
        return this.totalMoney + '元'
      }
    },
    methods: {
      ...mapActions([
        CART_LIST,
        PRE_ORDER,
        PAY_ORDER
      ]),
      select (index) {
        let _list = this.list
        let check = !this.list[index].active
        _list[index].active = check
        this.list = Object.assign([], _list)
      },
      goPay () {
        this.list.forEach(item => {
          if (item.active) {
            this.shoppingCartIds.push(item.shopping_cart_id)
          }
        })
        if (!this.shoppingCartIds.length) {
          return
        }
        this.PRE_ORDER([
          {
            shopping_cart_ids: this.shoppingCartIds
          }, (data) => {
            if (Number(data.errno) === 0) {
              if (data.data.point_balance < data.data.total_point_only) {
                this.$Message.info('积分不足，无法完成支付')
                return
              }
              this.pointBalance = data.data.point_balance
              this.totalMaxPoint = data.data.total_max_point
              this.totalMoney = data.data.total_money
              this.totalPointOnly = data.data.total_point_only
              if (this.pointBalance < (this.totalPointOnly + this.totalMaxPoint)) {
                this.pointInput = this.pointBalance
              } else {
                this.pointInput = this.totalPointOnly + this.totalMaxPoint
              }
              this.pay = true
            }
          }
        ])
      },
      point (item) {
        let point = '0元'
        if (Number(item.type) === 10) {
          point = '0元，' + item.max_point + '积分'
        } else if (Number(item.type) === 11) {
          point = item.money - item.max_point / 100 + '元，' + item.max_point + '积分'
        } else if (Number(item.type) === 12) {
          point = item.money + '元'
        }
        return point
      },
      payMoney () {
        if (!this.name) {
          this.$Message.info('请输入联系人')
          return
        }
        if (!REG_PHONE.test(this.phone)) {
          this.$Message.info('手机号错误')
          return
        }
        if (!this.address) {
          this.$Message.info('请输入收货地址')
          return
        }
        this.PAY_ORDER([
          {
            shopping_cart_ids: this.shoppingCartIds,
            contact: this.name,
            phone: this.phone,
            address: this.address,
            note: this.remark,
            point: this.pointInput
          }, (data) => {
            if (Number(data.errno) === 0) {
              window.location.href = 'http://www.centurysports.com.cn/api/wxpay/gotoPage/wx.html?order_id=' + data.data.order_id
            } else {
              this.$Message.info(data.msg)
            }
          }
        ])
      },
      changePoint () {
        let value = parseInt(this.pointInput)
        if (value < this.totalPointOnly) {
          value = this.totalPointOnly
        }
        if (this.pointBalance < (this.totalMaxPoint + this.totalPointOnly)) {
          if (value > this.pointBalance) {
            value = this.pointBalance
          }
        } else {
          if (value > (this.totalMaxPoint + this.totalPointOnly)) {
            value = this.totalMaxPoint + this.totalPointOnly
          }
        }
        this.pointInput = value
      }
    },
    created () {
      this.CART_LIST()
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/scss/mixin.scss";
  .mall-cart {
    padding-bottom: px2rem(100px);
  }
  .mallc-item {
    width: 100%;
    height: px2rem(210px);
    background: #fff;
    overflow: hidden;
    margin-bottom: px2rem(20px);
  }
  .mallc-check {
    float: left;
    width: px2rem(28px);
    margin: 0 px2rem(10px);
    margin-top: px2rem(91px);
  }
  .mallc-icon {
    float: left;
    width: px2rem(190px);
    height: px2rem(190px);
    margin-top: px2rem(10px);
    margin-right: px2rem(20px);
  }
  .mallc-title {
    font-size: px2rem(24px);
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: px2rem(20px);
    padding-right: px2rem(10px);
  }
  .mallc-spec {
    font-size: px2rem(16px);
    margin-top: px2rem(10px);
  }
  .mallc-money {
    font-size: px2rem(30px);
    color: #ec6c00;
    margin-top: px2rem(20px);
  }
  .mallc-footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: px2rem(98px);
    border-top: 1px solid #d9dbdd;
    background: #fff;
  }
  .mallc-buy {
    float: right;
  }
  .mallc-footer-price {
    line-height: px2rem(98px);
    font-size: px2rem(20px);
    color: #333;
    margin-right: px2rem(20px);
    span {
      font-size: px2rem(30px);
      color: #ec6c00;
    }
  }
  .mallc-footer-btn {
    display: inline-block;
    width: px2rem(220px);
    text-align: center;
    line-height: px2rem(98px);
    background: #ec6c00;
    font-size: px2rem(30px);
    color: #fff;
  }
  .custom-label span {
    font-size: 20px;
    font-weight: normal;
  }
</style>
