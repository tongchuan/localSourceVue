import Vue from 'vue'
import Vuex from 'vuex'
import createWebSocketPlugin from './plugin/createWebSocketPlugin'
import userStore from './modules/userStore'
import newsStore from './modules/newsStore'

Vue.use(Vuex)
const store = new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  modules: {
    userStore,
    newsStore
  },
  plugins: [createWebSocketPlugin]
})
export default store
