import * as pointDB from '../../api/pointDB'
export const POINT_SIGNIN_DATA = 'POINT_SIGNIN_DATA'

const state = {
  pointStore: {
    signinState: 0
  }
}
const getters = {
  pointStore: state => {
    return state.pointStore
  }
}

const actions = {
  [POINT_SIGNIN_DATA] ({ commit, state }, [data, callback]) {
    pointDB.getPointSignin(data).then((data) => {
      callback(undefined, data)
      // commit(POINT_SIGNIN_DATA, data.data)
    }, (err) => {
      callback(err, data)
      // commit(POINT_SIGNIN_DATA, {}, err)
    })
  }
}

const mutations = {
  [POINT_SIGNIN_DATA] (state, data) {
    state.pointStore.signinState = 1
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
