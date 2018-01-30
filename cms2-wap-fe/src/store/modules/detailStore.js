import * as homeDB from '@/api/homeDB'
export const SLIDE_SHOW = 'SLIDE_SHOW'
export const EVENT = 'EVENT'

const state = {
  homeStore: {
    slideShow: [],
    event: []
  }
}

const getters = {
  homeStore: state => {
    return state.homeStore
  }
}

const actions = {
  [SLIDE_SHOW] ({commit}, data) {
    homeDB.fetchSlideShow()
      .then(data => {
        commit(SLIDE_SHOW, data.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  [EVENT] ({commit}, data) {
    homeDB.fetchEvent()
      .then(data => {
        commit(EVENT, data.data.list)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const mutations = {
  [SLIDE_SHOW] (state, data) {
    state.homeStore.slideShow = Object.assign([], data)
  },
  [EVENT] (state, data) {
    state.homeStore.event = Object.assign([], data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
