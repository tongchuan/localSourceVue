<template lang="html">
  <li class="clearfix">
    <!-- <router-link :to="{ path: '/goodsdetail/'+item.goods_id }"><div class="item">
      <img v-bind:src="item.icon_url" v-bind:alt="item.name" v-bind:title="item.name">
      <p class="jifen-a" v-bind:title="item.name">{{item.name}}</p>
      <p class="jifen-b"><span>{{point}}</span></p>
    </div></router-link> -->
    <a target="_blank" href="https://weidian.com/?userid=1233461354&ifr=shopdetail&wfr=c">
      <div class="item">
      <img v-bind:src="item.icon_url" v-bind:alt="item.name" v-bind:title="item.name">
      <p class="jifen-a" v-bind:title="item.name">{{item.name}}</p>
      <p class="jifen-b"><span>{{point}}</span></p>
    </div>
    </a>
    <!-- <a href="https://weidian.com/?userid=1233461354&ifr=shopdetail&wfr=c" target="_blank"><div class="item">
      <img v-bind:src="item.icon_url" v-bind:alt="item.name" v-bind:title="item.name">
      <p class="jifen-a">{{item.name}}</p>
      <p class="jifen-b"><span>{{point}}</span>{{item.max_point > 0?'分':'元'}}</p>
    </div></a> -->

  </li>
</template>

<script>
export default {
  name: 'goodsitem',
  props: ['item', 'index'],
  computed: {
    point () {
      let point = '0元'
      let that = this
      if (Number(that.item.type) === 10) {
        point = '0元，' + that.item.max_point + '积分'
      } else if (Number(that.item.type) === 11) {
        point = that.item.money - that.item.max_point / 100 + '元，' + that.item.max_point + '积分'
      } else if (Number(that.item.type) === 12) {
        point = that.item.money + '元'
      }
      // if (that.item.max_point > 0) {
      //   point = that.item.max_point
      // } else {
      //   point = that.item.money
      // }
      return point
    }
  }
}
</script>

<style lang="css">
</style>
