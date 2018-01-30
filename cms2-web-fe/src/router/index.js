import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/containers/index'

const EventList = resolve => require(['@/containers/event/eventlist'], resolve) // 赛事
const EventDetail = resolve => require(['@/containers/event/eventdetail'], resolve) // 赛事
const Signup = resolve => require(['@/containers/event/signup'], resolve) // 报名

const NewsList = resolve => require(['@/containers/news/newslist'], resolve) // 新闻
const NewsDetail = resolve => require(['@/containers/news/newsdetail'], resolve) // 新闻

const GoodsList = resolve => require(['@/containers/goods/goodslist'], resolve) // 产品
const GoodsDetail = resolve => require(['@/containers/goods/goodsdetail'], resolve) // 产品

const PhotoList = resolve => require(['@/containers/photo/photolist'], resolve) // 图片
const PhotoDetail = resolve => require(['@/containers/photo/photodetail'], resolve) // 图片

const Search = resolve => require(['@/containers/search/searchpage'], resolve) // 搜索

const Register = resolve => require(['@/containers/user/register'], resolve) // 注册
const Forgot = resolve => require(['@/containers/user/forgot'], resolve) // 忘记密码

const UserHome = resolve => require(['@/containers/usercenter/index'], resolve)
const User1 = resolve => require(['@/containers/usercenter/user1'], resolve)
const UserEvent = resolve => require(['@/containers/usercenter/event'], resolve)
const UserMedal = resolve => require(['@/containers/usercenter/medal'], resolve)
const UserEditPwd = resolve => require(['@/containers/usercenter/editpwd'], resolve)
const UserJifen = resolve => require(['@/containers/usercenter/jifen'], resolve)
const UserOrder = resolve => require(['@/containers/usercenter/order'], resolve)
const UserShopping = resolve => require(['@/containers/usercenter/shopping'], resolve)
const NotFound = resolve => require(['@/containers/notFound'], resolve) // 404

// const Test = resolve => require(['@/containers/test'], resolve)
// const List = resolve => require(['@/containers/list'], resolve)
// const Form = resolve => require(['@/containers/form'], resolve)

Vue.use(Router)
export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/news', name: 'NewsList', component: NewsList }, // 新闻列表
    { path: '/newsdetail/:id', name: 'NewsDetail', component: NewsDetail }, // 新闻详情
    { path: '/newsdetail/:id/:top', name: 'NewsDetail', component: NewsDetail }, // 新闻详情
    { path: '/goods', name: 'GoodsList', component: GoodsList }, // 产品列表
    { path: '/goodsdetail/:id', name: 'GoodsDetail', component: GoodsDetail }, // 产品详情
    { path: '/event', name: 'EventList', component: EventList }, // 赛事列表
    { path: '/eventdetail/:id', name: 'EventDetail', component: EventDetail }, // 赛事详情
    { path: '/photo', name: 'PhotoList', component: PhotoList }, // 图片列表
    { path: '/photodetail/:id', name: 'PhotoDetail', component: PhotoDetail }, // 图片详情
    { path: '/register', name: 'Register', component: Register },
    { path: '/forgot', name: 'Forgot', component: Forgot },
    { path: '/search/:type/:value', name: 'Search', component: Search },
    { path: '/signup/:id', name: 'Signup', component: Signup },
    {
      path: '/user',
      name: 'UserHome',
      component: UserHome,
      children: [
        { path: '/', name: 'User1', component: User1 }, // 基本信息
        { path: 'event', name: 'UserEvent', component: UserEvent }, // 基本信息
        { path: 'medal', name: 'UserMedal', component: UserMedal }, // 我的勋章
        { path: 'pwd', name: 'UserEditPwd', component: UserEditPwd }, // 修改密码
        { path: 'jf', name: 'UserJifen', component: UserJifen }, // 我的积分
        { path: 'shopping', name: 'UserShopping', component: UserShopping }, // 购物车
        { path: 'order', name: 'UserOrder', component: UserOrder }
      ]
    },
    { path: '*', name: 'NotFound', component: NotFound }
    // { path: '/list', name: 'List', component: List },
    // { path: '/form', name: 'Form', component: Form },
    // { path: '/test', name: 'Test', component: Test },
  ]
})
