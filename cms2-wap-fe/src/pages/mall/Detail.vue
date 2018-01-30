<template>
  <div class="mall-detail" v-if="mallStore.goodsDetail">
    <swipe class="mall-swipe"
      :show-indicators="mallStore.goodsDetail.goods_pic.length > 1"
    >
      <swipe-item
        class="mall-detail-item"
        v-for="(item, index) in mallStore.goodsDetail.goods_pic"
        :key="index"
        :style="'background-image: url(' + item + ');'"
      >
      </swipe-item>
    </swipe>
    <div class="malld-title">
      <p class="malld-title-text">{{mallStore.goodsDetail.name}}</p>
      <p class="malld-price">{{point}}</p>
    </div>
    <div class="malld-select" @click="showCart()">
      选择规格尺寸
    </div>
    <div class="malld-introduce">
      <p class="malld-select">商品介绍</p>
      <div class="malld-detail" v-html="mallStore.goodsDetail.content">
        {{mallStore.goodsDetail.content}}
      </div>
    </div>
    <div class="malld-mask" v-show="cart" @click="hideCart()" @touchmove="goneDefault()">
    </div>
    <div class="malld-cart" v-show="cart">
      <div class="mallc-head">
        <img :src="mallStore.goodsDetail.icon_url">
        <p class="mallc-price">{{point}}</p>
        <p class="mallc-select">
          已选择:
          <span v-if="sex">{{sex}}款</span>
          <span v-if="color">{{color}}</span>
          <span v-if="size">{{size}}</span>
        </p>
      </div>
      <div class="mallc-pick" v-if="sexArr[0] && sexArr[0].value">
        <p>款式</p>
        <div>
          <span
            v-for="(item, index) in sexArr"
            :key="index"
            :class="[
              item.disable ? 'disabled' : '',
              item.active ? 'active' : ''
            ]"
            @click="changeSex(index)"
          >{{item.value}}</span>
        </div>
      </div>
      <div class="mallc-pick" v-if="colorArr[0] && colorArr[0].value">
        <p>颜色</p>
        <div>
          <span
            v-for="(item, index) in colorArr"
            :key="index"
            :class="[
              item.disable ? 'disabled' : '',
              item.active ? 'active' : ''
            ]"
            @click="changeColor(index)"
          >{{item.value}}</span>
        </div>
      </div>
      <div class="mallc-pick" v-if="sizeArr[0] && sizeArr[0].value">
        <p>尺码</p>
        <div>
          <span
            v-for="(item, index) in sizeArr"
            :key="index"
            :class="[
              item.disable ? 'disabled' : '',
              item.active ? 'active' : ''
            ]"
            @click="changeSize(index)"
          >{{item.value}}</span>
        </div>
      </div>
      <div class="mallc-foot">
        <div @click="goCart">
          <img src="../../assets/icon-cart.png">
        </div>
        <span @click="cartAdd">加入购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'vue-swipe'
  import { mapGetters, mapActions } from 'vuex'
  import { GOODS_DETAIL } from '@/store/modules/mallStore'
  import { CART_ADD } from '@/store/modules/cartStore'
  import { USER_INFO } from '@/store/modules/userStore'
  export default {
    name: 'mallDetail',
    data () {
      return {
        cart: false,
        sexArr: [],
        colorArr: [],
        sizeArr: [],
        goodsSize: [],
        sex: '',
        color: '',
        size: ''
      }
    },
    computed: {
      ...mapGetters([
        'mallStore',
        'cartStore',
        'userStore'
      ]),
      point () {
        let point = '0元'
        if (Number(this.mallStore.goodsDetail.type) === 10) {
          point = '0元，' + this.mallStore.goodsDetail.max_point + '积分'
        } else if (Number(this.mallStore.goodsDetail.type) === 11) {
          point = this.mallStore.goodsDetail.money - this.mallStore.goodsDetail.max_point / 100 + '元，' + this.mallStore.goodsDetail.max_point + '积分'
        } else if (Number(this.mallStore.goodsDetail.type) === 12) {
          point = this.mallStore.goodsDetail.money + '元'
        }
        return point
      }
    },
    watch: {
      'mallStore.goodsDetail': function (newData) {
        this.goodsSize = newData.goods_size
        for (var i = 0; i < newData.goods_size.length; i++) {
          if (i === 0) {
            this.sex = newData.goods_size[i].sex
            this.color = newData.goods_size[i].color
            this.size = newData.goods_size[i].size
          }
          if (!this.hasElement(this.sexArr, newData.goods_size[i].sex)) {
            this.sexArr.push({
              value: newData.goods_size[i].sex,
              disable: i !== 0 && newData.goods_size[i].color !== this.color || newData.goods_size[i].size !== this.size,
              active: i === 0
            })
          } else {
            var indexSex = this.getIndex(this.sexArr, newData.goods_size[i].sex)
            if (!this.sexArr[indexSex].disable) {
              this.sexArr[indexSex].disable = false
            } else {
              this.sexArr[indexSex].disable = i !== 0 && newData.goods_size[i].color !== this.color || newData.goods_size[i].size !== this.size
            }
          }
          if (!this.hasElement(this.colorArr, newData.goods_size[i].color)) {
            this.colorArr.push({
              value: newData.goods_size[i].color,
              disable: i !== 0 && newData.goods_size[i].sex !== this.sex || newData.goods_size[i].size !== this.size,
              active: i === 0
            })
          } else {
            var indexCol = this.getIndex(this.colorArr, newData.goods_size[i].color)
            if (!this.colorArr[indexCol].disable) {
              this.colorArr[indexCol].disable = false
            } else {
              this.colorArr[indexCol].disable = i !== 0 && newData.goods_size[i].sex !== this.sex || newData.goods_size[i].size !== this.size
            }
          }
          if (!this.hasElement(this.sizeArr, newData.goods_size[i].size)) {
            this.sizeArr.push({
              value: newData.goods_size[i].size,
              disable: i !== 0 && newData.goods_size[i].sex !== this.sex || newData.goods_size[i].color !== this.color,
              active: i === 0
            })
          } else {
            var indexSize = this.getIndex(this.sizeArr, newData.goods_size[i].size)
            if (!this.sizeArr[indexSize].disable) {
              this.sizeArr[indexSize].disable = false
            } else {
              this.colorArr[indexSize].disable = i !== 0 && newData.goods_size[i].sex !== this.sex || newData.goods_size[i].color !== this.color
            }
          }
        }
      },
      'cartStore.cartAdd': function (number) {
        if (number) {
          this.$router.push({
            path: '/mall/v/cart'
          })
        }
      }
    },
    methods: {
      ...mapActions([
        GOODS_DETAIL,
        CART_ADD,
        USER_INFO
      ]),
      showCart () {
        this.cart = true
      },
      hideCart () {
        this.cart = false
      },
      goneDefault () {
        event.preventDefault()
      },
      hasElement (arr, element) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].value === element) return true
        }
        return false
      },
      getIndex (arr, element) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].value === element) return i
        }
      },
      cartAdd () {
        this.USER_INFO((data) => {
          if (Number(data.errno) !== 0) {
            this.$router.replace({ path: '/login' })
          } else {
            let sizeId
            for (var i = 0; i < this.goodsSize.length; i++) {
              if (this.goodsSize[i].sex === this.sex && this.goodsSize[i].color === this.color && this.goodsSize[i].size === this.size) {
                sizeId = this.goodsSize[i].size_id
                break
              }
            }
            if (!sizeId) {
              this.$Message.info('请选择合适的尺码')
              return
            }
            this.CART_ADD({
              goods_id: this.$route.params.id,
              size_id: sizeId,
              goods_count: '1'
            })
          }
        })
      },
      goCart () {
        this.USER_INFO((data) => {
          if (Number(data.errno) !== 0) {
            this.$router.replace({ path: '/login' })
          } else {
            this.$router.push({
              path: '/mall/v/cart'
            })
          }
        })
      },
      changeSex (index) {
        if (this.sexArr[index].active) return
        if (this.sexArr[index].disable) {
          this.sex = this.sexArr[index].value
          this.color = ''
          this.size = ''
          this.sexArr.forEach((item) => {
            item.disable = item.value !== this.sex
            item.active = item.value === this.sex
          })
          this.colorArr = []
          this.sizeArr = []
          for (var i = 0; i < this.goodsSize.length; i++) {
            if (!this.hasElement(this.colorArr, this.goodsSize[i].color)) {
              this.colorArr.push({
                value: this.goodsSize[i].color,
                disable: this.goodsSize[i].sex !== this.sex,
                active: this.goodsSize[i].color === this.color
              })
            } else {
              var indexCol = this.getIndex(this.colorArr, this.goodsSize[i].color)
              if (!this.colorArr[indexCol].disable) {
                this.colorArr[indexCol].disable = false
              } else {
                this.colorArr[indexCol].disable = this.goodsSize[i].sex !== this.sex
              }
            }
            if (!this.hasElement(this.sizeArr, this.goodsSize[i].size)) {
              this.sizeArr.push({
                value: this.goodsSize[i].size,
                disable: this.goodsSize[i].sex !== this.sex,
                active: this.goodsSize[i].size === this.size
              })
            } else {
              var indexSize = this.getIndex(this.sizeArr, this.goodsSize[i].size)
              if (!this.sizeArr[indexSize].disable) {
                this.sizeArr[indexSize].disable = false
              } else {
                this.sizeArr[indexSize].disable = this.goodsSize[i].sex !== this.sex
              }
            }
          }
          return
        }
        this.sex = this.sexArr[index].value
        this.sexArr.forEach((item) => {
          item.active = item.value === this.sex
        })
        this.colorArr = []
        this.sizeArr = []
        for (var j = 0; j < this.goodsSize.length; j++) {
          if (!this.hasElement(this.colorArr, this.goodsSize[j].color)) {
            this.colorArr.push({
              value: this.goodsSize[j].color,
              disable: this.goodsSize[j].color !== this.color && this.goodsSize[j].sex !== this.sex || this.goodsSize[j].size !== this.size,
              active: this.goodsSize[j].color === this.color
            })
          } else {
            var indexCol2 = this.getIndex(this.colorArr, this.goodsSize[j].color)
            if (!this.colorArr[indexCol2].disable) {
              this.colorArr[indexCol2].disable = false
            } else {
              this.colorArr[indexCol2].disable = this.goodsSize[j].color !== this.color && this.goodsSize[j].sex !== this.sex || this.goodsSize[j].size !== this.size
            }
          }
          if (!this.hasElement(this.sizeArr, this.goodsSize[j].size)) {
            this.sizeArr.push({
              value: this.goodsSize[j].size,
              disable: this.goodsSize[j].size !== this.size && this.goodsSize[j].sex !== this.sex || this.goodsSize[j].color !== this.color,
              active: this.goodsSize[j].size === this.size
            })
          } else {
            var indexSize2 = this.getIndex(this.sizeArr, this.goodsSize[j].size)
            if (!this.sizeArr[indexSize2].disable) {
              this.sizeArr[indexSize2].disable = false
            } else {
              this.sizeArr[indexSize2].disable = this.goodsSize[j].size !== this.size && this.goodsSize[j].sex !== this.sex || this.goodsSize[j].color !== this.color
            }
          }
        }
      },
      changeColor (index) {
        if (this.colorArr[index].active) return
        if (this.colorArr[index].disable) {
          this.color = this.colorArr[index].value
          this.sex = ''
          this.size = ''
          this.colorArr.forEach((item) => {
            item.disable = item.value !== this.color
            item.active = item.value === this.color
          })
          this.sexArr = []
          this.sizeArr = []
          for (var i = 0; i < this.goodsSize.length; i++) {
            if (!this.hasElement(this.sexArr, this.goodsSize[i].sex)) {
              this.sexArr.push({
                value: this.goodsSize[i].sex,
                disable: this.goodsSize[i].color !== this.color,
                active: this.goodsSize[i].sex === this.sex
              })
            } else {
              var indexSex = this.getIndex(this.sexArr, this.goodsSize[i].sex)
              if (!this.sexArr[indexSex].disable) {
                this.sexArr[indexSex].disable = false
              } else {
                this.sexArr[indexSex].disable = this.goodsSize[i].color !== this.color
              }
            }
            if (!this.hasElement(this.sizeArr, this.goodsSize[i].size)) {
              this.sizeArr.push({
                value: this.goodsSize[i].size,
                disable: this.goodsSize[i].color !== this.color,
                active: this.goodsSize[i].size === this.size
              })
            } else {
              var indexSize = this.getIndex(this.sizeArr, this.goodsSize[i].size)
              if (!this.sizeArr[indexSize].disable) {
                this.sizeArr[indexSize].disable = false
              } else {
                this.sizeArr[indexSize].disable = this.goodsSize[i].color !== this.color
              }
            }
          }
          return
        }
        this.color = this.colorArr[index].value
        this.colorArr.forEach((item) => {
          item.active = item.value === this.color
        })
        this.sexArr = []
        this.sizeArr = []
        for (var j = 0; j < this.goodsSize.length; j++) {
          if (!this.hasElement(this.sexArr, this.goodsSize[j].sex)) {
            this.sexArr.push({
              value: this.goodsSize[j].sex,
              disable: this.goodsSize[j].sex !== this.sex && this.goodsSize[j].color !== this.color || this.goodsSize[j].size !== this.size,
              active: this.goodsSize[j].sex === this.sex
            })
          } else {
            var indexSex2 = this.getIndex(this.sexArr, this.goodsSize[j].sex)
            if (!this.sexArr[indexSex2].disable) {
              this.sexArr[indexSex2].disable = false
            } else {
              this.sexArr[indexSex2].disable = this.goodsSize[j].sex !== this.sex && this.goodsSize[j].color !== this.color || this.goodsSize[j].size !== this.size
            }
          }
          if (!this.hasElement(this.sizeArr, this.goodsSize[j].size)) {
            this.sizeArr.push({
              value: this.goodsSize[j].size,
              disable: this.goodsSize[j].size !== this.size && this.goodsSize[j].sex !== this.sex || this.goodsSize[j].color !== this.color,
              active: this.goodsSize[j].size === this.size
            })
          } else {
            var indexSize2 = this.getIndex(this.sizeArr, this.goodsSize[j].size)
            if (!this.sizeArr[indexSize2].disable) {
              this.sizeArr[indexSize2].disable = false
            } else {
              this.sizeArr[indexSize2].disable = this.goodsSize[j].size !== this.size && this.goodsSize[j].sex !== this.sex || this.goodsSize[j].color !== this.color
            }
          }
        }
      },
      changeSize (index) {
        if (this.sizeArr[index].active) return
        if (this.sizeArr[index].disable) {
          this.size = this.sizeArr[index].value
          this.sex = ''
          this.color = ''
          this.sizeArr.forEach((item) => {
            item.disable = item.value !== this.size
            item.active = item.value === this.size
          })
          this.sexArr = []
          this.colorArr = []
          for (var i = 0; i < this.goodsSize.length; i++) {
            if (!this.hasElement(this.sexArr, this.goodsSize[i].sex)) {
              this.sexArr.push({
                value: this.goodsSize[i].sex,
                disable: this.goodsSize[i].size !== this.size,
                active: this.goodsSize[i].sex === this.sex
              })
            } else {
              var indexSex = this.getIndex(this.sexArr, this.goodsSize[i].sex)
              if (!this.sexArr[indexSex].disable) {
                this.sexArr[indexSex].disable = false
              } else {
                this.sexArr[indexSex].disable = this.goodsSize[i].size !== this.size
              }
            }
            if (!this.hasElement(this.colorArr, this.goodsSize[i].color)) {
              this.colorArr.push({
                value: this.goodsSize[i].color,
                disable: this.goodsSize[i].size !== this.size,
                active: this.goodsSize[i].color === this.color
              })
            } else {
              var indexCol = this.getIndex(this.colorArr, this.goodsSize[i].color)
              if (!this.colorArr[indexCol].disable) {
                this.colorArr[indexCol].disable = false
              } else {
                this.colorArr[indexCol].disable = this.goodsSize[i].size !== this.size
              }
            }
          }
          return
        }
        this.size = this.sizeArr[index].value
        this.sizeArr.forEach((item) => {
          item.active = item.value === this.size
        })
        this.sexArr = []
        this.colorArr = []
        for (var j = 0; j < this.goodsSize.length; j++) {
          if (!this.hasElement(this.sexArr, this.goodsSize[j].sex)) {
            this.sexArr.push({
              value: this.goodsSize[j].sex,
              disable: this.goodsSize[j].sex !== this.sex && this.goodsSize[j].color !== this.color || this.goodsSize[j].size !== this.size,
              active: this.goodsSize[j].sex === this.sex
            })
          } else {
            var indexSex2 = this.getIndex(this.sexArr, this.goodsSize[j].sex)
            if (!this.sexArr[indexSex2].disable) {
              this.sexArr[indexSex2].disable = false
            } else {
              this.sexArr[indexSex2].disable = this.goodsSize[j].sex !== this.sex && this.goodsSize[j].color !== this.color || this.goodsSize[j].size !== this.size
            }
          }
          if (!this.hasElement(this.colorArr, this.goodsSize[j].color)) {
            this.colorArr.push({
              value: this.goodsSize[j].color,
              disable: this.goodsSize[j].color !== this.color && this.goodsSize[j].sex !== this.sex || this.goodsSize[j].size !== this.size,
              active: this.goodsSize[j].color === this.color
            })
          } else {
            var indexCol2 = this.getIndex(this.colorArr, this.goodsSize[j].color)
            if (!this.colorArr[indexCol2].disable) {
              this.colorArr[indexCol2].disable = false
            } else {
              this.colorArr[indexCol2].disable = this.goodsSize[j].color !== this.color && this.goodsSize[j].sex !== this.sex || this.goodsSize[j].size !== this.size
            }
          }
        }
      }
    },
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },
    created () {
      let id = this.$route.params.id
      this.GOODS_DETAIL({
        goods_id: id
      })
    }
  }
</script>

<style lang="scss">
  @import "../../common/scss/mixin.scss";
  @import "../../common/css/vue-swipe.css";
  .mall-swipe {
    height: px2rem(610px);
    background: #fff;
  }
  .mall-detail-item {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
  .malld-title {
    padding: px2rem(34px) px2rem(20px) px2rem(26px);
    margin-bottom: px2rem(20px);
    border-top: 1px solid #f2f4f6;
    background: #fff;
  }
  .malld-title-text {
    margin-bottom: px2rem(36px);
    line-height: 1;
    font-size: px2rem(28px);
  }
  .malld-price {
    line-height: 1;
    font-size: px2rem(30px);
    color: #ce3d3a;
  }
  .malld-select {
    line-height: px2rem(88px);
    padding-left: px2rem(20px);
    margin-bottom: px2rem(20px);
    font-size: px2rem(28px);
    background: #fff;
  }
  .malld-detail {
    padding: 0 px2rem(20px);
    img {
      width: 100%;
    }
  }
  .malld-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .4);
  }
  .malld-cart {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 9;
    background: #fff;
  }
  .mallc-head {
    position: relative;
    height: px2rem(93px);
    padding-left: px2rem(220px);
    img {
      position: absolute;
      width: px2rem(186px);
      height: px2rem(186px);
      left: px2rem(20px);
      top: px2rem(-93px);
      border-radius: px2rem(5px);
    }
    .mallc-price {
      line-height: 1;
      font-size: px2rem(30px);
      color: #ce3d3a;
      padding: px2rem(10px) 0;
    }
    .mallc-select {
      line-height: 1;
      font-size: px2rem(26px);
      color: #333;
    }
  }
  .mallc-pick {
    p {
      padding-left: px2rem(20px);
      line-height: 1;
      font-size: px2rem(26px);
      color: #333;
      margin: px2rem(15px) 0 px2rem(10px);
    }
    div {
      padding-left: px2rem(20px);
      span {
        display: inline-block;
        line-height: px2rem(40px);
        font-size: px2rem(24px);
        padding: 0 px2rem(10px);
        border: 2px solid #656d78;
        border-radius: px2rem(4px);
        margin-right: px2rem(10px);
      }
      span.disabled {
        border: 2px dashed #656d78;
      }
      span.active {
        border: 2px solid #ec6c00;
        color: #ec6c00;
      }
    }
  }
  .mallc-foot {
    width: 100%;
    margin-top: px2rem(10px);
    border-top: 1px solid #d9dbdd;
    height: px2rem(100px);
    div {
      position: relative;
      float: left;
      width: 30%;
      height: px2rem(100px);
      img {
        display: block;
        width: px2rem(60px);
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      }
    }
    span {
      float: right;
      line-height: px2rem(100px);
      width: 30%;
      text-align: center;
      font-size: px2rem(30px);
      background: #ec6c00;
      color: #fff;
    }
  }
</style>
