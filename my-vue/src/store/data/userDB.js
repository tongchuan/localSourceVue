import URL from '../dbconfig'
import axios from 'axios'
import Promise from 'promise'

export default {
  getUser () {
    return new Promise((resolve, reject) => {
      axios.get(URL.user.getUser, {})
    })
  }
}