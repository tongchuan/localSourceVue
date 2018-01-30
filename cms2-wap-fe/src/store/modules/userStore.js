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
export const SIGN_IN = 'SIGN_IN'
// let userdata = '{"avatar":"http://img254.oss-cn-beijing.aliyuncs.com/century/232/5ce/2325ce1cf7110f08076f8a19640b4fc7.jpg","id":25,"uid":4,"nickname":"user4","username":"fasd","email":"3232@df.vp","phone":"","sex":0,"birth_day":"2017-07-07 06:06:57","card":"130623198712200000","career":"","province":"","city":"","address":"","item_category":"","default_dress":"","default_shoe_size":"","membership":"\u7279\u8dd1\u4f1a\u5458","membership_code":"1","is_apply_membership":0,"is_active":0,"authority":"","ctime":"2017-07-06 22:06:57","utime":"2017-07-08 06:11:50","age":0,"qq":"","weixin":"","my_group":"","emergency_people_phone":"","emergency_people":"","emergency_people_relationship":"","is_invite_marathon":"","marathon_times":"","marathon_info":"","best_marathon":"","weibo":"","membership_ctime":"0000-00-00 00:00:00"}'
const state = {
  userStore: {
    user: JSON.parse(sessionStorage.getItem('user')) || {},
    // user: JSON.parse('{"id":763,"uid":1864,"nickname":"user1864","username":"\u5b97\u4e16\u5bcc","email":"lkzong@126.com","phone":"13791250049","sex":0,"birth_day":"1974-01-21","card":"379002197401218016","career":"\u673a\u5173","province":"5","city":"10","address":"\u9f99\u53e3\u5e02\u901a\u6d77\u8def45\u53f7\u9f99\u53e3\u5e02\u73af\u5883\u76d1\u6d4b\u7ad9","item_category":"","default_dress":"XL","default_shoe_size":"","membership":"","membership_code":"SD1200011","is_apply_membership":2,"is_active":0,"authority":"","ctime":"2017-08-15 01:11:41","utime":"2017-08-25 23:19:18","age":43,"qq":"1035154823","weixin":"","my_group":"\u8dd1\u5427","emergency_people_phone":"13864597312","emergency_people":"\u5f20\u5de7\u7389","emergency_people_relationship":"\u592b\u59bb","is_invite_marathon":"\u662f","marathon_times":"5","marathon_info":"\u5168\u7a0b\u9a6c\u62c9\u677e","best_marathon":"NaN:NaN:NaN","weibo":"\u4e2d\u56fd\u5766\u514b001","membership_ctime":"2012-08-17 00:00:00","avatar":""}'),
    medal: [],
    enroll: {},
    results: {},
    getsum: {},
    getloglist: {},
    sign: {}
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
        callback(undefined, data)
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
  },
  [SIGN_IN] ({ commit, state }, data) { // 签到
    userDB.signIn(data).then((data) => {
      commit(SIGN_IN, data)
    }, (err) => {
      commit(SIGN_IN, {}, err)
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
    state.userStore.getsum = Object.assign({}, data)
  },
  [USER_GETLOGLIST] (state, data) {
    state.userStore.getloglist = Object.assign({}, data)
  },
  [SIGN_IN] (state, data) {
    state.userStore.sign = Object.assign({}, data)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
