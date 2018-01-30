import $ from 'jquery'
import config from './config'
// 首页最新相册
export function getNewPhoto (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.photo.newphoto,
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
// 相册列表
export function albumlist (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.photo.albumlist,
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
// 单个相册图片列表
export function album (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.photo.album,
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
// 积分下载图片
export function photodown (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.photo.photodown,
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
// 单个照片信息
export function photoinfo (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.photo.photoinfo,
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
