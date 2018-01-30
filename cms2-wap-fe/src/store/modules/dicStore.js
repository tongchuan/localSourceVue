import * as dicDB from '../../api/dicDB'
export const GET_CAREER = 'GET_CAREER'
export const GET_PROVINCE = 'GET_PROVINCE'
export const GET_CITY = 'GET_CITY'

const state = {
  dicStore: {
    career: [], // 职业
    province: [], // 省份
    city: {} // 城市
  }
}
const getters = {
  dicStore: state => {
    return state.dicStore
  }
}

const actions = {
  [GET_CAREER] ({ commit, state }, { data }) {
    dicDB.getCareer(data).then((data) => {
      commit(GET_CAREER, data.data)
    }, (err) => {
      commit(GET_CAREER, [], err)
    })
  },
  [GET_PROVINCE] ({ commit, state }, { data }) {
    dicDB.getProvince(data).then((data) => {
      commit(GET_PROVINCE, data.data)
    }, (err) => {
      commit(GET_PROVINCE, [], err)
    })
  },
  [GET_CITY] ({ commit, state }, { data }) {
    dicDB.getCity(data).then((data) => {
      commit(GET_CITY, data.data)
    }, (err) => {
      commit(GET_CITY, [], err)
    })
  }
}
const mutations = {
  [GET_CAREER] (state, data) {
    state.dicStore.career = Object.assign([], data)
  },
  [GET_PROVINCE] (state, data) {
    state.dicStore.province = Object.assign([], data)
  },
  [GET_CITY] (state, data) {
    state.dicStore.city = Object.assign({}, data)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
