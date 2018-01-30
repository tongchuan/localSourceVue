// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
import router from './router'
// import $ from 'jquery'
import iView from 'iview'
import Vuerify from 'vuerify'
import verify from './util/verify'
// import VueI18n from 'vue-i18n'
import 'iview/dist/styles/iview.css'
// import zhLocale from 'iview/src/locale/lang/zh-CN'
// import enLocale from 'iview/src/locale/lang/en-US'
import 'bootstrap/dist/css/bootstrap.min.css'
import './less/main'
// import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import Modal from './util/modal'
import store from './store'
Vue.config.productionTip = false
// Vue.use(ElementUI)
// Vue.use(Modal)
// Vue.use(VueI18n)
Vue.use(iView)
Vue.use(Vuerify)
Vue.use(verify)
Vue.config.lang = 'zh-CN'
// Vue.locale('zh-CN', zhLocale)
// Vue.locale('en-US', enLocale)
// 59.110.214.253 centurysportsbj.com www.centurysportsbj.com m.centurysportsbj.com
// 192.168.254.254 centurysportsbj.com www.centurysportsbj.com m.centurysportsbj.com
router.beforeEach((to, form, next) => {
  // console.log(store)
  store.dispatch('USER_INFO', (data) => {
    // console.log(data)
  })
  // $.ajax({
  //   url: 'http://www.centurysportsbj.com/api/user/info',
  //   data: {},
  //   success: function (data) {
  //     if (Number(data.errno) === 0) {
  //       store.commit('USER_LOGIN', data.data)
  //     } else {
  //       store.commit('USER_LOGIN', {})
  //     }
  //   },
  //   error: function () {
  //     store.commit('USER_LOGIN', {})
  //   }
  // })
  // console.log(store.carouselStore)
  // // console.log(store._actions['USER_LIST']())
  // console.log([to, form, next])
  next()
})

Vue.filter('dateF', (value) => {
  let d = new Date(value)
  let m = d.getMonth() + 1
  m = m < 10 ? '0' + m : m
  let day = d.getDate()
  day = day < 10 ? '0' + day : day
  return d.getFullYear() + '-' + m + '-' + day
})
// console.log(router)
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
})
