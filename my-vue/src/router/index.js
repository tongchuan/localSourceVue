import Vue from 'vue'
import Router from 'vue-router'
import UserIndex from '../containers/user/Index'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', redirect: '/user' },
    { path: '/user', name: 'UserIndex', component: UserIndex },
    { path: '/hello', name: 'HelloWorld', component: HelloWorld }
  ]
})
