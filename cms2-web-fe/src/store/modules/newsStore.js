import * as newsDB from '../../api/newsDB'
export const NEWS_GET_LIST_DATA = 'NEWS_GET_LIST_DATA'
export const NEWS_GET_LIST_DATA_BY_COUNT = 'NEWS_GET_LIST_DATA_BY_COUNT'
export const NEWS_GET_DETAIL = 'NEWS_GET_DETAIL'
export const NEWS_GET_INDEX_TOP = 'NEWS_GET_INDEX_TOP'
export const NEWA_SEARCH = 'NEWA_SEARCH'
export const FOOT_NEWS_GET_LIST_DATA = 'FOOT_NEWS_GET_LIST_DATA'
const state = {
  newsStore: {
    newsList: {},
    newsearch: {},
    newsDetail: {},
    newsIndex: [],
    footNewsList: {}
  }
}
const getters = {
  newsStore: state => {
    return state.newsStore
  }
}

const actions = {
  [NEWS_GET_LIST_DATA] ({ commit, state }, data) {
    newsDB.getNewsList(data).then((data) => {
      commit(NEWS_GET_LIST_DATA, data.data)
    }, (err) => {
      // console.log(err)
      commit(NEWS_GET_LIST_DATA, {}, err)
    })
  },
  [FOOT_NEWS_GET_LIST_DATA] ({ commit, state }, data) {
    newsDB.getNewsList(data).then((data) => {
      commit(FOOT_NEWS_GET_LIST_DATA, data.data)
    }, (err) => {
      // console.log(err)
      commit(FOOT_NEWS_GET_LIST_DATA, {}, err)
    })
  },
  [NEWA_SEARCH] ({ commit, state }, data) {
    newsDB.search(data).then((data) => {
      commit(NEWA_SEARCH, data.data)
    }, (err) => {
      // console.log(err)
      commit(NEWA_SEARCH, {}, err)
    })
  },
  [NEWS_GET_DETAIL] ({ commit, state }, data) {
    newsDB.getNewsDetail(data).then((data) => {
      commit(NEWS_GET_DETAIL, data.data)
    }, (err) => {
      commit(NEWS_GET_DETAIL, {}, err)
    })
  },
  [NEWS_GET_INDEX_TOP] ({ commit, state }, data) {
    newsDB.getNewsTop(data).then((data) => {
      commit(NEWS_GET_INDEX_TOP, data.data)
    }, (err) => {
      commit(NEWS_GET_INDEX_TOP, [], err)
    })
  }
}

const mutations = {
  [NEWS_GET_LIST_DATA] (state, data) {
    state.newsStore.newsList = Object.assign({}, data)
  },
  [NEWA_SEARCH] (state, data) {
    state.newsStore.newsearch = Object.assign({}, data)
  },
  [NEWS_GET_DETAIL] (state, data) {
    state.newsStore.newsDetail = Object.assign({}, data)
  },
  [NEWS_GET_INDEX_TOP] (state, data) {
    state.newsStore.newsIndex = Object.assign([], data)
  },
  [FOOT_NEWS_GET_LIST_DATA] (state, data) {
    state.newsStore.footNewsList = Object.assign({}, data)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
