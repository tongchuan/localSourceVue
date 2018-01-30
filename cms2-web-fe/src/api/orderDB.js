import $ from 'jquery'
import config from './config'

// 订单兑换检查
export function getOrderCheck (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.check,
      type: 'get',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        reject(err)
      }
    }))
  })
}

// 订单兑换确认
export function confirm (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.confirm,
      type: 'post',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        reject(err)
      }
    }))
  })
}

// 我的装备
export function myEquipment (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.myEquipment,
      type: 'get',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        reject(err)
      }
    }))
  })
}
// 添加购物车
export function addShopping (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.addShopping,
      type: 'get',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        reject(err)
      }
    }))
  })
}
// 获取购物车
export function getListShopping (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.getListShopping,
      type: 'get',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        reject(err)
      }
    }))
  })
}
// 更新购物车
export function updateShopping (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.updateShopping,
      type: 'get',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        reject(err)
      }
    }))
  })
}
// 删除购物车
export function deleteShopping (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.deleteShopping,
      type: 'post',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        reject(err)
      }
    }))
  })
}
// 清空购物车
export function cleanShopping (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.cleanShopping,
      type: 'post',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        reject(err)
      }
    }))
  })
}
// 购物车结算
export function settleShopping (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.settleShopping,
      type: 'post',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        reject(err)
      }
    }))
  })
}
// 支付宝支付接口
export function gotoPage (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.gotoPage,
      type: 'post',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        reject(err)
      }
    }))
  })
}
// 购物车预结算
export function perSettle (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.perSettle,
      type: 'post',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      beforeSend: () => {
      },
      success: (data) => {
        resolve(data)
      },
      error: (err) => {
        reject(err)
      }
    }))
  })
}

