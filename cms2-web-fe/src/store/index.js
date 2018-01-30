import Vue from 'vue'
import Vuex from 'vuex'
import dicStore from './modules/dicStore' // 字典
import newsStore from './modules/newsStore' // 新闻
import goodsStore from './modules/goodsStore' // 商品
import eventStore from './modules/eventStore' // 赛事
import pointStore from './modules/pointStore' // 积分
import orderStore from './modules/orderStore' // 订单
import photoStore from './modules/photoStore' // 图片
// import user from './modules/user'
import userStore from './modules/userStore' // 用户
import carouselStore from './modules/carouselStore'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    dicStore,
    newsStore,
    goodsStore,
    eventStore,
    pointStore,
    orderStore,
    photoStore,
    // user,
    userStore,
    carouselStore
  }
})
export default store
