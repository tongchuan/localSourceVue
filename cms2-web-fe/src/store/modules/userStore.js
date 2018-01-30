import * as userDB from '../../api/userDB'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_REG = 'USER_REG'
export const USER_LOGIN_OUT = 'USER_LOGIN_OUT'
export const USER_FORGOT_ONE = 'USER_FORGOT_ONE'
export const USER_FORGOT_TWO = 'USER_FORGOT_TWO'
export const USER_MEDAL = 'USER_MEDAL'
export const USER_INFO = 'USER_INFO'
export const USER_ENROLL = 'USER_ENROLL'
export const USER_UPDATA = 'USER_UPDATA'
export const USER_RESULTS = 'USER_RESULTS'
export const USER_GETSUM = 'USER_GETSUM'
export const USER_GETLOGLIST = 'USER_GETLOGLIST'

// let userdata = '{"avatar":"http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg","id":25,"uid":4,"nickname":"user4","username":"fasd","email":"3232@df.vp","phone":"","sex":0,"birth_day":"2017-07-07 06:06:57","card":"130623198712200000","career":"","province":"","city":"","address":"","item_category":"","default_dress":"","default_shoe_size":"","membership":"\u7279\u8dd1\u4f1a\u5458","membership_code":"1","is_apply_membership":0,"is_active":0,"authority":"","ctime":"2017-07-06 22:06:57","utime":"2017-07-08 06:11:50","age":0,"qq":"","weixin":"","my_group":"","emergency_people_phone":"","emergency_people":"","emergency_people_relationship":"","is_invite_marathon":"","marathon_times":"","marathon_info":"","best_marathon":"","weibo":"","membership_ctime":"0000-00-00 00:00:00"}'
const state = {
  userStore: {
    user: JSON.parse(sessionStorage.getItem('user')) || {},
    // user: JSON.parse(userdata),
    medal: [],
    enroll: {},
    results: {},
    getsum: {},
    getloglist: {}
  }
}

const getters = {
  userStore: state => {
    return state.userStore
  }
}

const actions = {
  [USER_LOGIN] ({ commit, state }, [data, callback]) {
    // console.log(data)
    // console.log(callback)
    userDB.userLogin(data).then((data) => {
      if (Number(data.errno) === 0) {
        callback(undefined)
        commit(USER_LOGIN, data.data)
      } else {
        callback(data.msg)
        // commit(USER_LOGIN, data)
      }
    }, (err) => {
      // console.log(err)
      callback('网络错误，请稍后重试！', err)
      // commit(USER_LOGIN, err)
    })
  },
  [USER_LOGIN_OUT] ({ commit, state }, [data, callback]) {
    userDB.userLoginOut(data).then((data) => {
      commit(USER_LOGIN_OUT, data)
      callback(data)
    }, (err) => {
      commit(USER_LOGIN_OUT, err)
    })
  },
  [USER_INFO] ({ commit, state }, callback) {
    userDB.info().then((data) => {
      commit(USER_INFO, data.data)
      callback(data)
    }, (err) => {
      callback({})
      commit(USER_INFO, {}, err)
    })
  },
  [USER_REG] ({ commit, state }, {data, callback}) {
    userDB.userReg(data).then((data) => {
      if (Number(data.errno) === 0) {
        callback(undefined, data)
      } else {
        callback(data.msg, data)
      }
      // commit(USER_REG, data)
    }, (err) => {
      callback('网络错误，请稍后重试！', err)
      // commit(USER_REG, err)
    })
  },
  [USER_FORGOT_ONE] ({ commit, state }, {data, callback}) {
    userDB.forget1(data).then((data) => {
      if (Number(data.errno) === 0) {
        callback(undefined, data.data)
      } else {
        callback(data.msg, data)
      }
    }, (err) => {
      callback('网络错误，请稍后重试！', err)
    })
  },
  [USER_FORGOT_TWO] ({ commit, state }, {data, callback}) {
    userDB.forget2(data).then((data) => {
      if (Number(data.errno) === 0) {
        callback(undefined, data)
      } else {
        callback(data.msg, data)
      }
    }, (err) => {
      callback('网络错误，请稍后重试！', err)
    })
  },
  [USER_MEDAL] ({ commit, state }, data) { // 我的勋章
    userDB.medal(data).then((data) => {
      commit(USER_MEDAL, data.data)
    }, (err) => {
      commit(USER_MEDAL, [], err)
    })
  },
  [USER_ENROLL] ({ commit, state }, data) { // 我的勋章
    userDB.enroll(data).then((data) => {
      commit(USER_ENROLL, data.data)
    }, (err) => {
      commit(USER_ENROLL, [], err)
    })
  },
  [USER_UPDATA] ({ commit, state }, [data, callback]) { // 用户修改
    userDB.update(data).then((data) => {
      commit(USER_UPDATA, data.data)
      callback(undefined, data)
    }, (err) => {
      commit(USER_UPDATA, [], err)
      callback(err, {})
    })
  },
  [USER_RESULTS] ({ commit, state }, data) { // 用户修改
    userDB.results(data).then((data) => {
      commit(USER_RESULTS, data.data)
    }, (err) => {
      commit(USER_RESULTS, [], err)
    })
  },
  [USER_GETSUM] ({ commit, state }, data) { // 用户修改
    userDB.getSum(data).then((data) => {
      commit(USER_GETSUM, data.data)
    }, (err) => {
      commit(USER_GETSUM, {}, err)
    })
  },
  [USER_GETLOGLIST] ({ commit, state }, data) { // 用户修改
    userDB.getLogList(data).then((data) => {
      commit(USER_GETLOGLIST, data.data)
    }, (err) => {
      commit(USER_GETLOGLIST, {}, err)
    })
  }
}

const mutations = {
  [USER_LOGIN] (state, data) {
    // sessionStorage.setItem('user', JSON.stringify(data))
    state.userStore.user = Object.assign({}, data)
  },
  [USER_LOGIN_OUT] (state, data) {
    // sessionStorage.remove('user')
    state.userStore.user = Object.assign({})
  },
  [USER_REG] (state, data) {
    state.userStore.user = Object.assign({}, data)
  },
  [USER_INFO] (state, data) {
    state.userStore.user = Object.assign({}, data)
  },
  [USER_MEDAL] (state, data) {
    state.userStore.medal = Object.assign([], data)
  },
  [USER_ENROLL] (state, data) {
    state.userStore.enroll = Object.assign([], data)
  },
  [USER_UPDATA] (state, data) {
    // state.userStore.user = Object.assign({}, data)
  },
  [USER_RESULTS] (state, data) {
    state.userStore.results = Object.assign({}, data)
  },
  [USER_GETSUM] (state, data) {
    // console.log(data)
    state.userStore.getsum = Object.assign({}, data)
  },
  [USER_GETLOGLIST] (state, data) {
    // console.log(data)
    state.userStore.getloglist = Object.assign({}, data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

/*
// import Vue from 'vue'
export const USER_SIGNIN = 'USER_SIGNIN' // 登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出登录]
export const USER_LIST = 'USER_LIST'
export const USER_SAVE = 'USER_SAVE'
export const USER_DEL = 'USER_DEL'
// sessionStorage
// localStorage
const state = {
  userStore: {
    user: JSON.parse(sessionStorage.getItem('user')) || {},
    userList: [],
    ListPage: {
      page: 1,
      rows: 5,
      total: 0
    },
    userSaveMsg: {
      code: 0,
      msg: '',
      data: null
    },
    userDelMsg: {
      code: 0
    }
  }
}

const getters = {
  userStore: state => {
    return state.userStore
  }
}

const actions = {
  [USER_SIGNIN] ({commit}, user) {
    commit(USER_SIGNIN, user)
  },
  [USER_SIGNOUT] ({commit}) {
    commit(USER_SIGNOUT)
  },
  [USER_LIST] ({commit, state}, data) {
    userDB.userList(data).then((data) => {
      commit(USER_LIST, data)
    })
  },
  [USER_SAVE] ({commit, state}, data) {
    userDB.userSave(data).then((data) => {
      commit(USER_SAVE, {code: 1, msg: '添加成功！', data: data})
    }, (error) => {
      commit(USER_SAVE, {code: 2, msg: '添加失败，' + error.toString() + '!', data: null})
    })
  },
  [USER_DEL] ({commit, state}, data) {
    userDB.userDel(data).then((data) => {
      commit(USER_DEL, data)
    })
  }
}

const mutations = {
  [USER_SIGNIN] (state, user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    // console.log(JSON.stringify(user))
    state.userStore.user = user
    // sessionStorage.setItem('user', JSON.stringify(user))
    Object.assign({}, state)
  },
  [USER_SIGNOUT] (state) {
    // sessionStorage.removeItem('user')
    sessionStorage.removeItem('user')
    // console.log(state.userStore)
    // console.log(Object.keys(state.userStore))
    state.userStore.user = {}
    Object.assign({}, state)
    // Vue.delete(state.userStore.user, 'user')
    // Object.keys(state).forEach(k => Vue.delete(state, k))
  },
  [USER_LIST] (state, data) {
    state.userStore.userList = Object.assign([], data.data)
    state.userStore.ListPage = Object.assign({}, {page: data.page, rows: data.rows, total: data.total})
    Object.assign({}, state)
  },
  [USER_SAVE] (state, data) {
    state.userStore.userSaveMsg = Object.assign({}, data)
  },
  [USER_DEL] (state, data) {
    state.userStore.userDelMsg = Object.assign({}, {code: 1})
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
*/
