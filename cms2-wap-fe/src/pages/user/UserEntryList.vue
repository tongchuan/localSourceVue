<template>
  <div class="entry-list">
    <ul v-if="userStore.enroll && userStore.enroll.list && userStore.enroll.list.length">
      <li
        v-for="(item, index) in userStore.enroll.list"
      >
        <router-link :to="'/race/' + item.event_id" class="entry-item clearfix">
          <img :src="item.pic">
          <div class="entry-right">
            <p class="entry-title"><span>[{{item.status}}]</span> {{item.title}}</p>
            <p class="entry-desc">{{item.description}}</p>
          </div>
        </router-link>
      </li>
    </ul>
    <p v-else class="no-message">暂无参赛列表</p>
    <t-foot />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { USER_ENROLL } from '@/store/modules/userStore'
  import Foot from '@/components/Foot'
  export default {
    name: 'userentrylist',
    computed: {
      ...mapGetters([
        'userStore'
      ])
    },
    methods: {
      ...mapActions([
        USER_ENROLL
      ])
    },
    created () {
      this.USER_ENROLL()
    },
    components: {
      't-foot': Foot
    }
  }
</script>

<style lang="scss">
  @import "../../common/scss/mixin.scss";
  .entry-item {
    display: block;
    margin: px2rem(15px) 0;
    padding: px2rem(20px) px2rem(10px);
    background: #fff;
    img {
      display: block;
      float: left;
      width: px2rem(230px);
      height: px2rem(160px);
    }
    .entry-right {
      float: left;
      width: px2rem(455px);
      margin-left: px2rem(10px);
    }
    .entry-title {
      padding-top: px2rem(6px);
      margin-bottom: px2rem(10px);
      font-size: 28px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      span {
        color: rgb(153, 0, 0);
      }
    }
  }
  .no-message {
    padding: px2rem(30px);
    font-size: px2rem(26px);
    line-height: 1.5;
    color: #333;
    text-align: center;
  }
</style>
