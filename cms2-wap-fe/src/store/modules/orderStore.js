import * as orderDB from '@/api/orderDB'
export const PRE_ORDER = 'PRE_ORDER'
export const PAY_ORDER = 'PAY_ORDER'

const state = {
  orderStore: {
    preOrder: {},
    payOrder: {}
  }
}

const getters = {
  orderStore: state => {
    return state.orderStore
  }
}

const actions = {
  [PRE_ORDER] ({commit}, [data, callback]) {
    orderDB.preOrder(data)
      .then(data => {
        commit(PRE_ORDER, data)
        callback && callback(data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  [PAY_ORDER] ({commit}, [data, callback]) {
    orderDB.payOrder(data)
      .then(data => {
        callback && callback(data)
      })
  }
}

const mutations = {
  [PRE_ORDER] (state, data) {
    state.orderStore.preOrder = Object.assign({}, data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
