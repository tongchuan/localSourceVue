import * as newsDB from '@/api/newsDB'
export const LIST_MORE = 'LIST_MORE'
const CHANGE_LIST_BUSY = 'CHANGE_LIST_BUSY'
const CHANGE_LIST_INIT = 'CHANGE_LIST_INIT'
const CHANGE_LIST_END = 'CHANGE_LIST_END'
const INIT_NEWS_STORE = 'INIT_NEWS_STORE'
export const NEWS_DETAIL = 'NEWS_DETAIL'

const state = {
  newsStore: {
    list: [],
    news_detail: {},
    busy: false,
    init: false,
    end: false
  }
}

const getters = {
  newsStore: state => {
    return state.newsStore
  }
}

const actions = {
  [LIST_MORE] ({commit}, start) {
    commit(CHANGE_LIST_BUSY)
    if (start === 0) {
      commit(INIT_NEWS_STORE)
    }
    newsDB.fetchList(start)
      .then(data => {
        commit(LIST_MORE, data.data.list)
        if (start < data.data.count) {
          commit(CHANGE_LIST_INIT)
        }
        if (start >= data.data.count) {
          commit(CHANGE_LIST_END)
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  [NEWS_DETAIL] ({commit}, data) {
    newsDB.fetchNewsDetail(data)
      .then(data => {
        commit(NEWS_DETAIL, data.data.info)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const mutations = {
  [LIST_MORE] (state, data) {
    let _list = Object.assign([], state.newsStore.list)
    state.newsStore.list = _list.concat(data)
    state.newsStore.busy = false
  },
  [CHANGE_LIST_BUSY] (state) {
    state.newsStore.busy = true
  },
  [CHANGE_LIST_INIT] (state) {
    state.newsStore.init = true
  },
  [CHANGE_LIST_END] (state) {
    state.newsStore.end = true
  },
  [INIT_NEWS_STORE] (state) {
    state.newsStore.list = []
    state.newsStore.end = false
  },
  [NEWS_DETAIL] (state, data) {
    state.newsStore.news_detail = Object.assign([], data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
