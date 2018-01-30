import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from './modules/homeStore'
import raceStore from './modules/raceStore'
import newsStore from './modules/newsStore'
import userStore from './modules/userStore'
import dicStore from './modules/dicStore'
import photoStore from './modules/photoStore'
import eventStore from './modules/eventStore'
import mallStore from './modules/mallStore'
import cartStore from './modules/cartStore'
import orderStore from './modules/orderStore'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    homeStore,
    raceStore,
    newsStore,
    userStore,
    dicStore,
    photoStore,
    eventStore,
    mallStore,
    cartStore,
    orderStore
  }
})
