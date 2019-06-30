import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/login/register'
import Login from '@/components/login/login'
import Forget from '@/components/login/forget'
import TelLogin from '@/components/login/telLogin'
import Home from '@/components/home/index'
import Notice from '@/components/home/notice'

Vue.use(Router)

export default new Router({
  routes: [
  {
      path: '/',
      name: 'Notice',
      component: Notice
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/',
      name: 'Forget',
      component: Forget
    },
    {
      path: '/telLogin',
      name: 'TelLogin',
      component: TelLogin
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})