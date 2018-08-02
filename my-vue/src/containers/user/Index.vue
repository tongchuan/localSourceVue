<template>
  <div>
    {{userStore.data}}
    {{getUser}}
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'UserIndex',
  data () {
    console.log('data')
    return {
      name: ''
    }
  },
  beforeCreate () { // el 和 data 并未初始化
    console.log('beforeCreate')
  },
  created () { // 完成了 data 数据的初始化，el没有
    console.log('created')
    this.addMutations([1, 2, 34])
    // console.log(this)
    this.addActions('33333', '3233')
  },
  beforeMount () { // beforeMount
    console.log('beforeMount')
  },
  mounted () { // 完成挂载
    console.log('mounted')
  },
  beforeUpdate () { // 更新前状态
    console.log('beforeUpdate')
  },
  updated () { // 更新完成状态
    console.log('updated')
  },
  beforeDestroy () { // 销毁前状态
    console.log('beforeDestroy')
  },
  destroyed () { // 销毁完成状态
    console.log('destroyed')
  },
  methods: {
    ...mapMutations({
      addMutations: 'userStore/userAdd'
    }),
    ...mapActions({
      addActions: 'userStore/userAction'
      // add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
    // ...mapMutations([
    //   // add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    // ]),
    // ...mapActions([
    //   // add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    // ])
  },
  computed: {
    ...mapState({
      userStore (state) {
        return state.userStore
        // console.log(state)
        // return '1111'
        // return state
      }
    }),
    ...mapGetters({
      getUser: 'userStore/getUserFun'
    })
  },
  watch: {}
}
</script>
