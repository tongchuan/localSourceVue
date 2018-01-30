import $ from 'jquery'
import config from './config'

// 职业
export function getCareer (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.dic.career,
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
    })
  })
}
// 省份
export function getProvince (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.dic.province,
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
    })
  })
}
// 城市
export function getCity (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.dic.city,
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
    })
  })
}
