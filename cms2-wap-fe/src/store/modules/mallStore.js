import * as mallDB from '@/api/mallDB'
export const GOODS_LIST = 'GOODS_LIST'
export const GOODS_DETAIL = 'GOODS_DETAIL'
export const CHANGE_BUSY = 'CHANGE_BUSY'
export const CHANGE_INIT = 'CHANGE_INIT'
export const CHANGE_END = 'CHANGE_END'
export const INIT_GOODS_STORE = 'INIT_GOODS_STORE'
const SIZE_ORDER = ['XS', 'S', 'M', 'L', 'XL', '2XL', 'XXL', '3XL', 'XXXL', '4XL', 'XXXXL', '5XL', 'XXXXXL']

const state = {
  mallStore: {
    goodsList: [],
    goodsDetail: null,
    busy: false,
    init: false,
    end: false
  }
}

const getters = {
  mallStore: state => {
    return state.mallStore
  }
}

const actions = {
  [GOODS_LIST] ({commit}, page) {
    page = page || 0
    commit(CHANGE_BUSY)
    if (page === 0) {
      commit(INIT_GOODS_STORE)
    }
    mallDB.fetchList(page)
      .then(data => {
        commit(GOODS_LIST, data.data)
        if (page === 0) {
          commit(CHANGE_INIT)
        }
        if (page === data.data.count) {
          commit(CHANGE_END)
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  [GOODS_DETAIL] ({commit}, data) {
    mallDB.fetchDetail(data)
      .then(data => {
        commit(GOODS_DETAIL, data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const mutations = {
  [GOODS_LIST] (state, data) {
    let _goodsList = Object.assign([], state.mallStore.goodsList)
    state.mallStore.goodsList = _goodsList.concat(data.list)
    state.mallStore.busy = false
  },
  [GOODS_DETAIL] (state, data) {
    let goodsSize = data.data.goods_size
    let goodsOrder = []
    for (let i = 0; i < SIZE_ORDER.length; i++) {
      for (let j = 0; j < goodsSize.length; j++) {
        if (goodsSize[j].size.toUpperCase() === SIZE_ORDER[i]) {
          goodsOrder.push(goodsSize[j])
        }
      }
    }
    if (goodsSize.length === goodsOrder.length) {
      data.data.goods_size = goodsOrder
    }
    state.mallStore.goodsDetail = Object.assign({}, data.data)
  },
  [CHANGE_BUSY] (state) {
    state.mallStore.busy = true
  },
  [CHANGE_INIT] (state) {
    state.mallStore.init = true
  },
  [CHANGE_END] (state) {
    state.mallStore.end = true
  },
  [INIT_GOODS_STORE] (state) {
    state.mallStore.goodsList = []
    state.mallStore.end = false
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
