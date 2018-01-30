import * as raceDB from '@/api/raceDB'
export const EVENT_MORE = 'EVENT_MORE'
export const CHANGE_BUSY = 'CHANGE_BUSY'
export const CHANGE_INIT = 'CHANGE_INIT'
export const CHANGE_END = 'CHANGE_END'
export const INIT_RACE_STORE = 'INIT_RACE_STORE'
export const EVENT_DETAIL = 'EVENT_DETAIL'

const state = {
  raceStore: {
    eventMore: [],
    event_detail: {},
    busy: false,
    init: false,
    end: false
  }
}

const getters = {
  raceStore: state => {
    return state.raceStore
  }
}

const actions = {
  [EVENT_MORE] ({commit}, page) {
    commit(CHANGE_BUSY)
    if (page === 0) {
      commit(INIT_RACE_STORE)
    }
    raceDB.fetchEventMore(page)
      .then(data => {
        commit(EVENT_MORE, data.data.list)
        if (page === 0) {
          commit(CHANGE_INIT)
        }
        if (page === data.data.count - 1) {
          commit(CHANGE_END)
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  [EVENT_DETAIL] ({commit}, data) {
    raceDB.fetchEventDetail(data)
      .then(data => {
        commit(EVENT_DETAIL, data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const mutations = {
  [EVENT_MORE] (state, data) {
    let _eventMore = Object.assign([], state.raceStore.eventMore)
    state.raceStore.eventMore = _eventMore.concat(data)
    state.raceStore.busy = false
  },
  [CHANGE_BUSY] (state) {
    state.raceStore.busy = true
  },
  [CHANGE_INIT] (state) {
    state.raceStore.init = true
  },
  [CHANGE_END] (state) {
    state.raceStore.end = true
  },
  [INIT_RACE_STORE] (state) {
    state.raceStore.eventMore = []
    state.raceStore.end = false
  },
  [EVENT_DETAIL] (state, data) {
    state.raceStore.event_detail = Object.assign([], data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
