
import * as photoDB from '../../api/photoDB'
export const GET_NEW_PHOTO = 'GET_NEW_PHOTO'
export const GET_PHOTO_LIST = 'GET_PHOTO_LIST'
export const GET_PHOTO_ALBUM = 'GET_PHOTO_ALBUM'
export const GET_PHOTO_INFO = 'GET_PHOTO_INFO'
export const GET_PHOTO_DOWN = 'GET_PHOTO_DOWN'

const state = {
  photoStore: {
    photoList: {},
    photoListItem: {},
    photoalbum: {},
    photoInfo: {}
  }
}
const getters = {
  photoStore: state => {
    return state.photoStore
  }
}
const actions = {
  [GET_NEW_PHOTO] ({ commit, state }, [data, callback]) {
    photoDB.getNewPhoto(data).then((data) => {
      commit(GET_NEW_PHOTO, data.data)
      callback(data)
    }, (err) => {
      commit(GET_NEW_PHOTO, {}, err)
      callback({})
    })
  },
  [GET_PHOTO_LIST] ({ commit, state }, data) {
    photoDB.albumlist(data).then((data) => {
      commit(GET_PHOTO_LIST, data.data)
    }, (err) => {
      commit(GET_PHOTO_LIST, {}, err)
    })
  },
  [GET_PHOTO_ALBUM] ({ commit, state }, [data, callback]) {
    photoDB.album(data).then((data) => {
      commit(GET_PHOTO_ALBUM, data.data)
      callback(data)
    }, (err) => {
      commit(GET_PHOTO_ALBUM, {}, err)
      callback({})
    })
  },
  [GET_PHOTO_INFO] ({ commit, state }, [data, callback]) {
    photoDB.photoinfo(data).then((data) => {
      commit(GET_PHOTO_INFO, data.data)
      callback(data)
    }, (err) => {
      commit(GET_PHOTO_INFO, {}, err)
      callback({})
    })
  },
  [GET_PHOTO_DOWN] ({ commit, state }, [data, callback]) {
    photoDB.photodown(data).then((data) => {
      callback(undefined, data)
    }, (err) => {
      callback(err, {})
    })
  }
}
const mutations = {
  [GET_NEW_PHOTO] (state, data) {
    state.photoStore.photoList = Object.assign({}, data)
  },
  [GET_PHOTO_LIST] (state, data) {
    state.photoStore.photoListItem = Object.assign({}, data)
  },
  [GET_PHOTO_ALBUM] (state, data) {
    // data.list = data.list.concat(data.list).concat(data.list).concat(data.list).concat(data.list).concat(data.list)
    state.photoStore.photoalbum = Object.assign({}, data)
  },
  [GET_PHOTO_INFO] (state, data) {
    state.photoStore.photoInfo = Object.assign({}, data)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
