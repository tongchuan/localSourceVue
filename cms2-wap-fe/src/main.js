import '../static/js/flexible.min.js'
import Vue from 'vue'
import App from './App'
// import FastClick from 'fastclick'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import iView from 'iview'
import verify from './util/verify'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
Vue.config.productionTip = false
// FastClick.attach(document.body)
Vue.use(verify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
