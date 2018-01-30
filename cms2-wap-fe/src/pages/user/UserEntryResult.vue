<template>
  <div class="entry-result">
    <table class="table" v-if="userStore.results && userStore.results.list && userStore.results.list.length">
      <thead>
        <tr>
          <th class="w20">时间</th>
          <th class="w20">比赛名称</th>
          <th>报名类型</th>
          <th>确认类型</th>
          <th>完成成绩</th>
          <th>完成状况</th>
          <th>确认状态</th>
          <th>证书</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in userStore.results.list">
          <td>{{item.event_time}}</td>
          <td>{{item.title}}</td>
          <td>{{item.reg_type}}</td>
          <td>{{item.confir_type}}</td>
          <td>{{item.finish_type}}</td>
          <td>{{item.finish_status}}</td>
          <td>{{item.status}}</td>
          <td>
            <a
              v-if="item.event_type_id == 3"
              target="_blank"
              :href="'http://www.centurysports.com.cn/user/report?event_id=' + item.event_id"
              >查看证书
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else class="no-message">暂无参赛成绩</p>
    <t-foot />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { USER_RESULTS } from '@/store/modules/userStore'
  import Foot from '@/components/Foot'
  export default {
    name: 'userentryresult',
    computed: {
      ...mapGetters([
        'userStore'
      ])
    },
    methods: {
      ...mapActions([
        USER_RESULTS
      ])
    },
    created () {
      this.USER_RESULTS()
    },
    components: {
      't-foot': Foot
    }
  }
</script>

<style lang="scss">
  @import "../../common/scss/mixin.scss";
  .no-message {
    padding: px2rem(30px);
    font-size: px2rem(26px);
    line-height: 1.5;
    color: #333;
    text-align: center;
  }
  .entry-result {
    th {
      width: 10%;
    }
    .w20 {
      width: 20%;
    }
    th, td {
      border: 1px solid #ddd;
      text-align: center;
      vertical-align: middle !important;
    }
  }
</style>
