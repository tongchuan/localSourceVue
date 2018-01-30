import * as cartDB from '@/api/cartDB'
export const CART_ADD = 'CART_ADD'
export const CART_LIST = 'CART_LIST'

const state = {
  cartStore: {
    cartList: [],
    cartAdd: 0
  }
}

const getters = {
  cartStore: state => {
    return state.cartStore
  }
}

const actions = {
  [CART_ADD] ({commit}, data) {
    cartDB.addCart(data)
      .then(data => {
        commit(CART_ADD, data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  [CART_LIST] ({commit}, data) {
    cartDB.fetchList()
      .then(data => {
        commit(CART_LIST, data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const mutations = {
  [CART_ADD] (state, data) {
    if (data.errno === 0) {
      let _cartAdd = state.cartStore.cartAdd
      _cartAdd++
      state.cartStore.cartAdd = _cartAdd
    } else {
      state.cartStore.cartAdd = 0
    }
  },
  [CART_LIST] (state, data) {
    state.cartStore.cartList = Object.assign([], data.data.list)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
