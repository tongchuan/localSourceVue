import * as goodsDB from '../../api/goodsDB'
export const GOODS_GET_LIST_DATA = 'GOODS_GET_LIST_DATA'
export const GOODS_GET_DETAIL = 'GOODS_GET_DETAIL'
const state = {
  goodsStore: {
    goodsList: {},
    goodsDetail: {}
  }
}
const getters = {
  goodsStore: state => {
    return state.goodsStore
  }
}

const actions = {
  [GOODS_GET_LIST_DATA] ({ commit, state }, data) {
    goodsDB.getGoodsList(data).then((data) => {
      commit(GOODS_GET_LIST_DATA, data.data)
    }, (err) => {
      commit(GOODS_GET_LIST_DATA, {}, err)
    })
  },
  [GOODS_GET_DETAIL] ({ commit, state }, data) {
    goodsDB.getGoodsDetail(data).then((data) => {
      commit(GOODS_GET_DETAIL, data.data)
    }, (err) => {
      commit(GOODS_GET_DETAIL, {}, err)
    })
  }
}

const mutations = {
  [GOODS_GET_LIST_DATA] (state, data) {
    state.goodsStore.goodsList = Object.assign({}, data)
  },
  [GOODS_GET_DETAIL] (state, data) {
    state.goodsStore.goodsDetail = Object.assign({}, data)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
