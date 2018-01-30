import axios from 'axios'
import 'babel-polyfill'
import config from './config'

export function fetchDetail (id) {
  return new Promise((resolve, reject) => {
    axios.get(config.news.detail)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
