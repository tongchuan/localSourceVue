import $ from 'jquery'
import config from './config'

// 登录
export function userLogin (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.login,
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

// 注册
export function userReg (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.reg,
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
// 找回密码接口
export function forget1 (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.forget1,
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
// 找回密码接口
export function forget2 (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.forget2,
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
// 登出
export function userLoginOut (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.loginout,
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

// 我的赛事列表
export function enroll (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.enroll,
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
// 签到
export function signIn (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.signIn,
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
// 获取积分
export function getSum (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.getSum,
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
// 获取积分
export function getLogList (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.getLogList,
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

// 我的勋章
export function medal (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.medal,
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
// 用户信息
export function info () {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.info,
      type: 'get',
      contentType: 'application/x-www-form-urlencoded',
      data: {},
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
// 我的成绩
export function results () {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.results,
      type: 'get',
      contentType: 'application/x-www-form-urlencoded',
      data: {},
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

// 修改
export function update (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.user.update,
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
