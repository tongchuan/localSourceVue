import $ from 'jquery'
import config from './config'

export function preOrder (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.preOrder,
      type: 'post',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      success: (data) => {
        resolve(data)
      },
      error: (error) => {
        reject(error)
      }
    }))
  })
}

export function payOrder (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.order.payOrder,
      type: 'post',
      contentType: 'application/x-www-form-urlencoded',
      data: data,
      dataType: 'json',
      success: (data) => {
        resolve(data)
      },
      error: (error) => {
        reject(error)
      }
    }))
  })
}
