<template>
  <div
    class="race"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="60"
  >
    <t-list
      v-for="(item, index) in raceStore.eventMore"
      :key="item.id"
      class="race-item"
      :class="[index === raceStore.eventMore.length - 1 ? 'last' : '', index === 0 ? 'first' : '']"
      :item="item"
    />
    <t-load :end="raceStore.end" />
    <t-foot />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { EVENT_MORE } from '@/store/modules/raceStore'
  import infiniteScroll from 'vue-infinite-scroll'
  import List from '@/components/List'
  import Load from '@/components/Load'
  import Foot from '@/components/Foot'
  export default {
    name: 'race',
    data () {
      return {
        page: 0
      }
    },
    directives: {
      infiniteScroll
    },
    computed: {
      ...mapGetters([
        'raceStore'
      ]),
      busy () {
        return this.raceStore.busy
      }
    },
    methods: {
      ...mapActions([
        EVENT_MORE
      ]),
      loadMore () {
        if (!this.raceStore.init || this.raceStore.end) {
          return
        }
        this.page++
        this.EVENT_MORE(this.page)
      }
    },
    created () {
      this.EVENT_MORE(this.page)
    },
    components: {
      't-list': List,
      't-load': Load,
      't-foot': Foot
    }
  }
</script>

<style lang="scss">
  @import "../common/scss/mixin.scss";
  .race {
    padding-bottom: px2rem(100px);
  }
  .race-item {
    padding: px2rem(13px) px2rem(17px) px2rem(19px);
    margin-bottom: px2rem(20px);
    background: #fff;
  }
  .race-item.first {
    padding-top: px2rem(25px);
  }
  .race-item.last {
    margin-bottom: 0;
  }
  .race {
    .event-item {
      margin-bottom: 0;
    }
  }
</style>
