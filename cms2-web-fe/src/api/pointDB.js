import $ from 'jquery'
import config from './config'

export function getPointSignin (data) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: config.point.signin,
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
