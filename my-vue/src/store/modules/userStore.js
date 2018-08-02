export default {
  namespaced: true,
  state: {
    name: 'userIndex',
    data: [1, 2, 3]
  },
  getters: {
    getUserFun (state) {
      // console.log(state)
      return 'getUserFun'
    }
  },
  mutations: {
    userAdd (state, arg) {
      setTimeout(() => {
        state.data.push(...arg)
      }, 1000)
      // console.log(arguments)
    }
  },
  actions: {
    userAction ({commit, dispatch, getters, rootGetters, rootState, state}, arg) {
      setTimeout(() => {
        commit('userAdd', [9, 8, 7])
      }, 3000)
      // console.log(arguments)
    }
  }
}
