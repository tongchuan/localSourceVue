import axios from 'axios'
import 'babel-polyfill'
import config from './config'

export function fetchList (start) {
  return new Promise((resolve, reject) => {
    axios.get(config.news.list + '?length=5&start=' + start)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function fetchNewsDetail (params) {
  return new Promise((resolve, reject) => {
    axios.get(config.news.detail + '?id=' + params.id)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
