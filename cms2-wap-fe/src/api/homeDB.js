import axios from 'axios'
import 'babel-polyfill'
import config from './config'

export function fetchSlideShow () {
  return new Promise((resolve, reject) => {
    axios.get(config.home.slideShow)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function fetchEvent () {
  return new Promise((resolve, reject) => {
    axios.get(config.home.event + '?length=5')
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
