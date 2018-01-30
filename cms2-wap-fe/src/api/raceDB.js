import axios from 'axios'
import 'babel-polyfill'
import config from './config'

export function fetchEventMore (page) {
  return new Promise((resolve, reject) => {
    axios.get(config.race.event + '?length=1&start=' + page)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function fetchEventDetail (params) {
  return new Promise((resolve, reject) => {
    axios.get(config.race.detail + '?id=' + params.id)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
