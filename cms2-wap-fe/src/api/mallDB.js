import axios from 'axios'
import 'babel-polyfill'
import config from './config'

export function fetchList (page) {
  return new Promise((resolve, reject) => {
    axios.get(config.mall.goodsList + '?start=' + page)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function fetchDetail (data) {
  return new Promise((resolve, reject) => {
    axios.get(config.mall.goodsDetail, {
      params: data
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
