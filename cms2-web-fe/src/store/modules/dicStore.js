import * as dicDB from '../../api/dicDB'
export const GET_CAREER = 'GET_CAREER'
export const GET_PROVINCE = 'GET_PROVINCE'
export const GET_CITY = 'GET_CITY'
export const GET_COUNTDOWN = 'GET_COUNTDOWN' // 获取倒计时
export const SLIDESHOW = 'SLIDESHOW' // 轮播图
export const FOCUSPIC = 'FOCUSPIC' // 新闻焦点
export const BANNERPIC = 'BANNERPIC' // BANNER
export const SEARCHHOT = 'SEARCHHOT' // 热门搜索
const state = {
  dicStore: {
    career: [], // 职业
    province: [], // 省份
    city: {}, // 城市
    countdown: {}, // 获取倒计时
    slideshow: [], // 轮播图
    focuspic: [], // 新闻焦点
    bannerpic: [], // BANNER
    searchhot: [] // 热门搜索
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
  },
  [GET_COUNTDOWN] ({ commit, state }, { data }) {
    dicDB.countdown(data).then((data) => {
      commit(GET_COUNTDOWN, data.data)
    }, (err) => {
      commit(GET_COUNTDOWN, {}, err)
    })
  },
  [SLIDESHOW] ({ commit, state }, data) {
    dicDB.slideshow(data).then((data) => {
      commit(SLIDESHOW, data.data)
    }, (err) => {
      commit(SLIDESHOW, [], err)
    })
  },
  [FOCUSPIC] ({ commit, state }, { data }) {
    dicDB.focuspic(data).then((data) => {
      commit(FOCUSPIC, data.data)
    }, (err) => {
      commit(FOCUSPIC, [], err)
    })
  },
  [BANNERPIC] ({ commit, state }, { data }) {
    dicDB.bannerpic(data).then((data) => {
      commit(BANNERPIC, data.data)
    }, (err) => {
      commit(BANNERPIC, [], err)
    })
  },
  [SEARCHHOT] ({ commit, state }, { data }) {
    dicDB.searchhot(data).then((data) => {
      commit(SEARCHHOT, data.data)
    }, (err) => {
      commit(SEARCHHOT, [], err)
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
  },
  [GET_COUNTDOWN] (state, data) {
    state.dicStore.countdown = Object.assign({}, data)
  },
  [SLIDESHOW] (state, data) {
    // console.log(data)
    state.dicStore.slideshow = Object.assign([], data)
  },
  [FOCUSPIC] (state, data) {
    state.dicStore.focuspic = Object.assign([], data)
  },
  [BANNERPIC] (state, data) {
    state.dicStore.bannerpic = Object.assign([], data)
  },
  [SEARCHHOT] (state, data) {
    state.dicStore.searchhot = Object.assign([], data)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
