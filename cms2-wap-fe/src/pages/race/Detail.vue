<template>
  <div class="race-detail">
    <div v-if="raceStore.event_detail.id">
      <div class="race-detail-head">
        <img :src="raceStore.event_detail.pic">
        <div class="race-detail-foot">{{raceStore.event_detail.title}}</div>
      </div>
      <div v-html="raceStore.event_detail.content" class="race-detail-main">
        {{raceStore.event_detail.content}}
      </div>
      <div style="text-align:center;padding-bottom:15px;">
        <button type="button" v-on:click="signup" class="btn btn-warning" name="button" style="width: 90%;">我要报名</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { EVENT_DETAIL } from '@/store/modules/raceStore'
  import { EVENT_GET_DETAIL, EVENT_GET_LIST_DATA } from '@/store/modules/eventStore'
  export default {
    name: 'race_detail',
    data () {
      return {
        id: this.$route.params.id
      }
    },
    computed: {
      ...mapGetters([
        'raceStore',
        'eventStore',
        'userStore'
      ])
    },
    methods: {
      ...mapActions([
        EVENT_DETAIL,
        EVENT_GET_DETAIL,
        EVENT_GET_LIST_DATA
      ]),
      signup () {
        let that = this
        if (that.eventStore.eventDetail.event_status === '报名中') {
          if (Number(that.eventStore.eventDetail.is_third) === 1) {
            window.open(that.eventStore.eventDetail.third_path, '', '')
          } else {
            if (!this.userStore.user.id) {
              this.$router.replace({ path: '/login' })
            } else {
              that.$router.replace({ path: '/signup/' + that.id })
            }
          }
          return
        }
        let content = ''
        if (that.eventStore.eventDetail.event_status === '未开始报名') {
          content = '报名未开始，尽情期待'
        } else if (that.eventStore.eventDetail.event_status === '报名结束') {
          content = '报名已结束'
        } else if (that.eventStore.eventDetail.event_status === '已报名') {
          content = '您已经报名成功'
        } else {
          content = that.eventStore.eventDetail.event_status
        }
        that.$Modal.info({
          title: '提示信息',
          content: content
          // onOk: () => {
          //
          // }
        })
      }
    },
    created () {
      this.EVENT_DETAIL({id: this.id})
      let that = this
      that.eventStore.eventDetail = Object.assign({})
      that.EVENT_GET_DETAIL({id: that.id})
      this.eventStore.eventList = Object.assign({})
      this.EVENT_GET_LIST_DATA({start: 0, length: 10})
    }
  }
</script>

<style lang="scss">
  @import "../../common/scss/mixin.scss";
  .race-detail {
    img {
      display: block;
      width: 100%;
      height: auto;
      margin: px2rem(10px) 0;
    }
    strong img {
      display: none;
    }
  }
  .race-detail-head {
    position: relative;
    width: px2rem(720px);
    height: px2rem(308px);
    img {
      height: px2rem(308px);
    }
  }
  .race-detail-foot {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding-left: px2rem(10px);
    line-height: px2rem(72px);
    font-size: px2rem(28px);
    color: #fff;
    background: rgba(0, 0, 0, .6);
  }
  .race-detail-main {
    padding: px2rem(20px);
  }
  .race-btn {
    display: block;
    width: px2rem(668px);
    line-height: px2rem(80px);
    margin: 0 auto;
    font-size: px2rem(34px);
    color: #fff;
    background: #e88738;
    border-radius: px2rem(40px);
    text-align: center;
  }
</style>
