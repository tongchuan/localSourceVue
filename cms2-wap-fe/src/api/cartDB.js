import $ from 'jquery'
import config from './config'

export function fetchList () {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.cart.getList,
      type: 'get',
      contentType: 'application/x-www-form-urlencoded',
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
export function addCart (data) {
  return new Promise((resolve, reject) => {
    $.ajax($.extend(config.ajax_cros_opt, {
      url: config.cart.add,
      type: 'get',
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
