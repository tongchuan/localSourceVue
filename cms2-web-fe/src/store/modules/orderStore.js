import * as orderDB from '../../api/orderDB'
export const ORDER_CHECK_DATA = 'ORDER_CHECK_DATA'
export const ORDER_CHECK_CONFIRM = 'ORDER_CHECK_CONFIRM'
export const ORDER_CHECK_MY_EQUIPMENT = 'ORDER_CHECK_MY_EQUIPMENT'
export const ADD_SHOPPING = 'ADD_SHOPPING' // 添加购物车
export const GETLIST_SHOPPING = 'GETLIST_SHOPPING' // 获取购物车
export const UPDATE_SHOPPING = 'UPDATE_SHOPPING' // 更新购物车
export const DELETE_SHOPPING = 'DELETE_SHOPPING' // 删除购物车
export const CLEAN_SHOPPING = 'CLEAN_SHOPPING' // 清空购物车
export const SETTLE_SHOPPING = 'SETTLE_SHOPPING' // 购物车结算
export const GOTO_PAGE = 'GOTO_PAGE' // 支付宝支付接口
export const PER_SETTLE = 'PER_SETTLE' // 购物车预结算

// addShopping: serverURL + '/shoppingCart/add?g=' + Math.random(), // 添加购物车
// getListShopping: serverURL + '/shoppingCart/getList?g=' + Math.random(), // 获取购物车
// updateShopping: serverURL + '/shoppingCart/update?g=' + Math.random(), // 更新购物车
// deleteShopping: serverURL + '/shoppingCart/delete?g=' + Math.random(), // 删除购物车
// cleanShopping: serverURL + '/shoppingCart/clean?g=' + Math.random(), // 清空购物车
// settleShopping: serverURL + '/order/settleShopping?g=' + Math.random(), // 购物车结算
// gotoPage: serverURL + '/api/alipay/gotoPage?g=' + Math.random() // 支付宝支付接口

const state = {
  orderStore: {
    check: {},
    equipment: [],
    shopping: {}
  }
}
const getters = {
  orderStore: state => {
    return state.orderStore
  }
}

const actions = {
  [PER_SETTLE] ({ commit, state }, [data, callback]) {
    orderDB.perSettle(data).then((data) => {
      callback(undefined, data.data)
    }, (err) => {
      callback(err, {})
    })
  },
  [ORDER_CHECK_DATA] ({ commit, state }, data) {
    orderDB.getOrderCheck(data).then((data) => {
      commit(ORDER_CHECK_DATA, data.data)
    }, (err) => {
      commit(ORDER_CHECK_DATA, {}, err)
    })
  },
  [ORDER_CHECK_CONFIRM] ({ commit, state }, {data, callback}) {
    orderDB.confirm(data).then((data) => {
      callback(undefined, data)
    }, (err) => {
      callback(err, data)
    })
  },
  [ORDER_CHECK_MY_EQUIPMENT] ({ commit, state }, data) {
    orderDB.myEquipment(data).then((data) => {
      commit(ORDER_CHECK_MY_EQUIPMENT, data.data)
    }, (err) => {
      commit(ORDER_CHECK_MY_EQUIPMENT, {}, err)
    })
  },
  [ADD_SHOPPING] ({ commit, state }, [data, callback]) {
    orderDB.addShopping(data).then((data) => {
      callback(undefined, data)
    }, (err) => {
      callback(err, data)
    })
  },
  [UPDATE_SHOPPING] ({ commit, state }, [data, callback]) {
    orderDB.updateShopping(data).then((data) => {
      callback(undefined, data)
    }, (err) => {
      callback(err, data)
    })
  },
  [GETLIST_SHOPPING] ({ commit, state }, data) {
    orderDB.getListShopping(data).then((data) => {
      commit(GETLIST_SHOPPING, data.data)
    }, (err) => {
      commit(GETLIST_SHOPPING, {}, err)
    })
  },
  [DELETE_SHOPPING] ({ commit, state }, [data, callback]) {
    orderDB.deleteShopping(data).then((data) => {
      callback(undefined, data)
    }, (err) => {
      callback(err, data)
    })
  },
  [CLEAN_SHOPPING] ({ commit, state }, [data, callback]) {
    orderDB.cleanShopping(data).then((data) => {
      callback(undefined, data)
    }, (err) => {
      callback(err, data)
    })
  },
  [SETTLE_SHOPPING] ({ commit, state }, [data, callback]) {
    orderDB.settleShopping(data).then((data) => {
      callback(undefined, data)
    }, (err) => {
      callback(err, data)
    })
  }
}

const mutations = {
  [ORDER_CHECK_DATA] (state, data) {
    state.orderStore.check = Object.assign({}, data)
  },
  [ORDER_CHECK_MY_EQUIPMENT] (state, data) {
    state.orderStore.equipment = Object.assign({}, data)
  },
  [GETLIST_SHOPPING] (state, data) {
    state.orderStore.shopping = Object.assign({}, data)
    // state.orderStore.shopping = Object.assign({}, {
    //   'count': 2,
    //   'list': [
    //     {
    //       'shopping_cart_id': 4,
    //       'uid': 3,
    //       'goods_count': 1,
    //       'size_id': 104,
    //       'goods_id': 11,
    //       'icon_url': 'http://img254.oss-cn-beijing.aliyuncs.com/century/e0f/aea/e0faea8b55fd1b2e996bc01bc07d74ec.png',
    //       'name': '打的费',
    //       'title': '阿斯顿发送到阿斯顿发送到阿斯顿发送到',
    //       'summary': '阿斯顿发送到阿斯顿发送到阿斯顿发送到阿斯顿发送到阿斯顿发送到',
    //       'type': 10,
    //       'category': 10,
    //       'status': 10,
    //       'total': 1000,
    //       'sell': 0,
    //       'selling': 0,
    //       'surplus': 1000,
    //       'money': '0.00',
    //       'max_point': 20000,
    //       'sex': '女',
    //       'size': '36',
    //       'color': ''
    //     },
    //     {
    //       'shopping_cart_id': 5,
    //       'uid': 3,
    //       'goods_count': 2,
    //       'size_id': 104,
    //       'goods_id': 11,
    //       'icon_url': 'http://img254.oss-cn-beijing.aliyuncs.com/century/e0f/aea/e0faea8b55fd1b2e996bc01bc07d74ec.png',
    //       'name': '打的费',
    //       'title': '阿斯顿发送到阿斯顿发送到阿斯顿发送到',
    //       'summary': '阿斯顿发送到阿斯顿发送到阿斯顿发送到阿斯顿发送到阿斯顿发送到',
    //       'type': 10,
    //       'category': 10,
    //       'status': 10,
    //       'total': 1000,
    //       'sell': 0,
    //       'selling': 0,
    //       'surplus': 1000,
    //       'money': '0.00',
    //       'max_point': 20000,
    //       'sex': '女',
    //       'size': '36',
    //       'color': ''
    //     }
    //   ]
    // })
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
