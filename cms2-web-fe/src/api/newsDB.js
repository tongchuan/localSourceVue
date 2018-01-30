import $ from 'jquery'
import config from './config'

export function getNewsList (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.news.list,
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

export function search (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.news.search,
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

export function getNewsDetail (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.news.detail,
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
// 首页获取toplist接口
export function getNewsTop (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.news.indextop,
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
