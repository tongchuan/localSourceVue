import * as eventDB from '../../api/eventDB'
export const EVENT_GET_LIST_DATA = 'EVENT_GET_LIST_DATA'
export const EVENT_GET_DETAIL = 'EVENT_GET_DETAIL'
export const EVENT_ENROLL = 'EVENT_ENROLL' // 获取报名信息
export const EVENT_ENROLL_SUBMIT = 'EVENT_ENROLL_SUBMIT' //
export const EVENT_SEARCH = 'EVENT_SEARCH'
const state = {
  eventStore: {
    eventList: {},
    eventsearch: {},
    eventDetail: {},
    eventEnroll: {}
  }
}
const getters = {
  eventStore: state => {
    return state.eventStore
  }
}

const actions = {
  [EVENT_GET_LIST_DATA] ({ commit, state }, data) {
    eventDB.getEventList(data).then((data) => {
      commit(EVENT_GET_LIST_DATA, data.data)
    }, (err) => {
      commit(EVENT_GET_LIST_DATA, {}, err)
    })
  },
  [EVENT_SEARCH] ({ commit, state }, data) {
    eventDB.search(data).then((data) => {
      commit(EVENT_SEARCH, data.data)
    }, (err) => {
      commit(EVENT_SEARCH, {}, err)
    })
  },
  [EVENT_GET_DETAIL] ({ commit, state }, data) {
    eventDB.getEventDetail(data).then((data) => {
      commit(EVENT_GET_DETAIL, data.data)
    }, (err) => {
      commit(EVENT_GET_DETAIL, {}, err)
    })
  },
  [EVENT_ENROLL] ({ commit, state }, [data, callback]) {
    eventDB.enroll(data).then((data) => {
      commit(EVENT_ENROLL, data.data)
      callback(undefined, data)
    }, (err) => {
      callback(err, {})
      commit(EVENT_ENROLL, {}, err)
    })
  },
  [EVENT_ENROLL_SUBMIT] ({ commit, state }, [data, callback]) {
    eventDB.submit(data).then((data) => {
      callback(undefined, data)
    }, (err) => {
      callback(err, data)
    })
  }
}

const mutations = {
  [EVENT_GET_LIST_DATA] (state, data) {
    // data = data.concat(data).concat(data)
    // console.log(data)
    state.eventStore.eventList = Object.assign({}, data)
  },
  [EVENT_SEARCH] (state, data) {
    state.eventStore.eventsearch = Object.assign({}, data)
  },
  [EVENT_GET_DETAIL] (state, data) {
    state.eventStore.eventDetail = Object.assign({}, data)
  },
  [EVENT_ENROLL] (state, data) {
    state.eventStore.eventEnroll = Object.assign({}, data, {g: Math.random()})
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
