<template>
  <div class="detail">
  </div>

  <!-- <div v-for=" in raceStore.enroll.reg_type">
    <div class="news-foot">
      xxxx
    </div>
  </div> -->
</template>

<script>
  import { Swipe, SwipeItem } from 'vue-swipe'
  import { mapGetters, mapActions } from 'vuex'
  import { ENROLL } from '@/store/modules/raceStore'
  export default {
    name: 'enroll',
    data () {
      return {
        id: this.$route.params.event_id
      }
    },
    computed: {
      ...mapGetters([
        'raceStore'
      ])
    },
    methods: {
      ...mapActions([
        ENROLL
      ])
    },
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },
    created () {
      this.ENROLL({id: this.id})
    }
  }
</script>

<style lang="scss">
  @import "../common/scss/mixin.scss";
</style>
