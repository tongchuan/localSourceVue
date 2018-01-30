import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Race from '@/pages/Race'
import Mall from '@/pages/Mall'
import RaceDetail from '@/pages/race/Detail'
import SignUp from '@/pages/race/SignUp'
import News from '@/pages/News'
import NewsDetail from '@/pages/news/Detail'
import User from '@/pages/user/User'
import UserLogin from '@/pages/user/UserLogin'
import UserReg from '@/pages/user/UserReg'
import UserPwd from '@/pages/user/UserPwd'
import UserUpdate from '@/pages/user/UserUpdate'
import UserInfo from '@/pages/user/UserInfo'
import photoList from '@/pages/photo/photoList'
import photoDetail from '@/pages/photo/photodetail'
import photo2017 from '@/pages/photo/photo2017'
import UserAgreement from '@/pages/user/UserAgreement'
import UserEntryList from '@/pages/user/UserEntryList'
import UserEntryResult from '@/pages/user/UserEntryResult'
import UserScores from '@/pages/user/UserScores'
import mallDetail from '@/pages/mall/Detail'
import mallCart from '@/pages/mall/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/race',
      name: 'race',
      component: Race
    },
    {
      path: '/mall',
      name: 'mall',
      component: Mall
    },
    {
      path: '/mall/:id',
      name: 'malldetail',
      component: mallDetail
    },
    {
      path: '/mall/v/cart',
      name: 'mallcart',
      component: mallCart
    },
    {
      path: '/race/:id',
      name: 'race_detail',
      component: RaceDetail
    },
    {
      path: '/signup/:id',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/newsdetail/:id',
      name: 'news_detail',
      component: NewsDetail
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/reg',
      name: 'reg',
      component: UserReg
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: UserAgreement
    },
    {
      path: '/userpwd',
      name: 'userpwd',
      component: UserPwd
    },
    {
      path: '/userupdate',
      name: 'userupdate',
      component: UserUpdate
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: UserInfo
    },
    {
      path: '/userentrylist',
      name: 'userentrylist',
      component: UserEntryList
    },
    {
      path: '/userentryresult',
      name: 'userentryresult',
      component: UserEntryResult
    },
    {
      path: '/userscores',
      name: 'userscores',
      component: UserScores
    },
    {
      path: '/photo',
      name: 'photoList',
      component: photoList
    },
    {
      path: '/photodetail/:id',
      name: 'photodetail',
      component: photoDetail
    },
    {
      path: '/photo2017',
      name: 'photo2017',
      component: photo2017
    },
    {
      path: '',
      component: Home
    }
  ]
})
