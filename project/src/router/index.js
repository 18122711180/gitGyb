import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'FamousDetail',
      component: () =>
        import('@/components/consult/famousDetail') //临床名医详情页
    },
    {
      path: '/consultDocto',
      name: 'ConsultDoctor',
      component: () =>
        import('@/components/consult/consultDoctor') //私人医生列表
    },
    {
      path: '/hospitalDetail',
      name: 'HospitalDetail',
      component: () =>
        import('@/components/consult/hospitalDetail') //医院详情页
    },
    {
      path: '/consult',
      name: 'Consult',
      component: () =>
        import('@/components/consult/index') //健康咨询页
    }, {
      path: '/hospital',
      name: 'Hospital',
      component: () =>
        import('@/components/search/hospital') //医院搜索页
    },
    {
      path: '/notices',
      name: 'Notice',
      component: () =>
        import('@/components/home/notice') //公告页
    }, {
      path: '/home',
      name: 'Home',
      component: () =>
        import('@/components/home/index') //首页
    }, {
      path: '/forget',
      name: 'Forget',
      component: () =>
        import('@/components/login/forget') //忘记密码
    },
    {
      path: '/telLogin',
      name: 'TelLogin',
      component: () =>
        import('@/components/login/telLogin') //手机登录
    },
    {
      path: '/login',
      name: 'Login',
      component: () =>
        import('@/components/login/login') //老用户登录
    },
    {
      path: '/register',
      name: 'Register',
      component: () =>
        import('@/components/login/register') //注册
    }
  ]
})