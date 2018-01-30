<template>
  <div class="scores">
    <div v-if="userStore.getloglist && userStore.getloglist.list && userStore.getloglist.list.length">
      <p class="scores-total">
        共有积分：{{userStore.getsum.point_balance ? userStore.getsum.point_balance : 0}}
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>积分</th>
            <th class="w30">创建时间</th>
            <th class="w50">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in userStore.getloglist.list">
            <th>{{item.id}}</th>
            <td>{{item.point}}</td>
            <td>{{item.ctime}}</td>
            <td>{{item.note}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class="no-message">暂无积分数据</p>
    <t-foot />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { USER_GETSUM, USER_GETLOGLIST } from '@/store/modules/userStore'
  import Foot from '@/components/Foot'
  export default {
    name: 'userscores',
    computed: {
      ...mapGetters([
        'userStore'
      ])
    },
    methods: {
      ...mapActions([
        USER_GETSUM,
        USER_GETLOGLIST
      ])
    },
    created () {
      this.USER_GETLOGLIST()
      this.USER_GETSUM()
    },
    components: {
      't-foot': Foot
    }
  }
</script>

<style lang="scss">
  @import "../../common/scss/mixin.scss";
  .scores-total {
    text-align: center;
    overflow: hidden;
    margin: px2rem(10px) 0;
  }
  .scores {
    th, td {
      text-align: center;
      vertical-align: middle !important;
      border: 1px solid #ddd !important;
    }
    th {
      width: 10%;
    }
    .w30 {
      width: 30%;
    }
    .w50 {
      width: 50%;
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
