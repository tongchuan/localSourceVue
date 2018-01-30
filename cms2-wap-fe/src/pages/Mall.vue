<template>
  <div class="mall">
    <div class="mall-head">
      <span class="icon icon-point"></span>
      <p class="point-number" v-if="userStore.getsum.point_total">{{userStore.getsum.point_total}}</p>
      <p class="point-number" v-else>暂无积分</p>
      <p class="point-detail" @click="goPoint">积分明细&gt;</p>
    </div>
    <div
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="busy"
      infinite-scroll-distance="60"
      class="mall-scroll"
    >
      <div class="mall-main clearfix">
        <div class="mall-item" v-for="(item, index) in mallStore.goodsList" @click="goDetail(item.goods_id)">
          <div class="item-img" :style="'background-image: url(' + item.icon_url + ');'"></div>
          <p class="item-title">{{item.name}}</p>
          <p class="item-price">{{point(item)}}</p>
        </div>
      </div>
      <t-load :end="mallStore.end" />
      <t-foot />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { GOODS_LIST } from '@/store/modules/mallStore'
  import { USER_GETSUM } from '@/store/modules/userStore'
  import Foot from '@/components/Foot'
  import infiniteScroll from 'vue-infinite-scroll'
  import Load from '@/components/Load'
  export default {
    name: 'mall',
    data () {
      return {
        page: 0
      }
    },
    computed: {
      ...mapGetters([
        'mallStore',
        'userStore'
      ]),
      busy () {
        return this.mallStore.busy
      }
    },
    directives: {
      infiniteScroll
    },
    methods: {
      ...mapActions([
        GOODS_LIST,
        USER_GETSUM
      ]),
      goPoint () {
        this.$router.push('userscores')
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
      goDetail (id) {
        this.$router.push({
          path: `/mall/${id}`
        })
      },
      loadMore () {
        if (!this.mallStore.init || this.mallStore.end) {
          return
        }
        this.page = this.mallStore.goodsList.length
        this.GOODS_LIST(this.page)
      }
    },
    components: {
      't-foot': Foot,
      't-load': Load
    },
    created () {
      this.GOODS_LIST()
      this.USER_GETSUM()
    }
  }
</script>

<style lang="scss">
  @import "../common/scss/mixin.scss";

  .mall-head {
    height: px2rem(296px);
    padding-top: px2rem(58px);
    background-image: url(../assets/mall-head-bg.png);
    background-repeat: repeat-x;
    background-size: auto 100%;
  }
  .icon-point {
    display: block;
    width: px2rem(41px);
    height: px2rem(44px);
    margin: 0 auto;
    background-image: url(../assets/icon-point.png);
    background-repeat: no-repeat;
    background-size: px2rem(41px) auto;
  }
  .point-number {
    margin: px2rem(14px) 0 px2rem(48px);
    font-size: px2rem(68px);
    line-height: 1;
    color: #fff;
    text-align: center;
  }
  .point-detail {
    line-height: 1;
    font-size: px2rem(28px);
    color: #fff;
    text-align: center;
  }
  .mall-scroll {
    padding-bottom: px2rem(100px);
  }
  .mall-main {
    padding: px2rem(20px) 0;
    background: #fff;
  }
  .mall-item {
    float: left;
    width: px2rem(360px);
    height: px2rem(385px);
  }
  .item-img {
    height: px2rem(306px);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
  .item-title {
    margin: px2rem(5px) 0 px2rem(7px);
    line-height: 1;
    font-size: px2rem(24px);
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .item-price {
    line-height: 1;
    font-size: px2rem(24px);
    color: #ec6c00;
    text-align: center;
  }
</style>
