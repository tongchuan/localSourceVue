import $ from 'jquery'
import config from './config'

export function getEventList (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.event.list,
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
export function search (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.event.search,
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

export function getEventDetail (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.event.detail,
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

// 报名信息—报名页
export function enroll (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.event.enroll,
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

// 提交报名信息
export function submit (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.event.submit,
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
