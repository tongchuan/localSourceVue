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
// 获取倒计时
export function countdown (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.dic.countdown,
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

// 轮播图
export function slideshow (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.dic.slideshow,
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
// 新闻焦点
export function focuspic (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.dic.focuspic,
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
// BANNER
export function bannerpic (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.dic.bannerpic,
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

// 热门搜索
export function searchhot (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.dic.searchhot,
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
