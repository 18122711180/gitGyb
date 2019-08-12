import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/car',
      name: 'Car',
      component: () =>
        import('@/components/car/index') //购物车
    },
    {
      path: '/car/order',
      name: 'CarOrder',
      component: () =>
        import('@/components/car/order') //购物车订单
    },
  
  	{
      path: '/order',
      name: 'Order',
      component: () =>
        import('@/components/order/index') //我的订单
    },
    {
      path: '/order/coupon',
      name: 'OrderCoupon',
      component: () =>
        import('@/components/order/coupon') //我的订单-优惠券
    },
    {
      path: '/order/collect',
      name: 'OrderCollect',
      component: () =>
        import('@/components/order/collect') //我的订单-我的收藏
    },
    {
      path: '/order/account',
      name: 'OrderAccount',
      component: () =>
        import('@/components/order/account') //我的订单-账号设置
    },
    {
      path: '/order/service',
      name: 'OrderService',
      component: () =>
        import('@/components/order/service') //我的订单-专属服务
    },
    {
      path: '/order/complain',
      name: 'OrderComplain',
      component: () =>
        import('@/components/order/complain') //我的订单-投诉
    },
    {
      path: '/order/exchange',
      name: 'OrderExchange',
      component: () =>
        import('@/components/order/exchange') //我的订单-退换
    },
    {
      path: '/order/exchange/detail',
      name: 'OrderExchangeDetail',
      component: () =>
        import('@/components/order/exchangeDetail') //我的订单-退换详情
    },
    {
      path: '/order/detail',
      name: 'OrderDetail',
      component: () =>
        import('@/components/order/detail') //我的订单-订单详情
    },
    {
      path: '/order/evaluate',
      name: 'OrderEvaluate',
      component: () =>
        import('@/components/order/evaluate') //我的订单-商品评价
    },
    
  	
  	{
      path: '/military/index',
      name: 'MilitaryIndex',
      component: () =>
        import('@/components/military/index') //医疗器械
    },
  
  	{
      path: '/health/index',
      name: 'HealthIndex',
      component: () =>
        import('@/components/health/index') //健康商城
    },
  	
  	{
      path: '/food/index',
      name: 'FoodIndex',
      component: () =>
        import('@/components/food/index') //保健食品
    },
  	
  	{
      path: '/drug/index',
      name: 'DrugIndex',
      component: () =>
        import('@/components/drug/index') //购药信息列表
    },
    {
      path: '/drug/detail',
      name: 'DrugDetail',
      component: () =>
        import('@/components/drug/detail') //药品详情
    },
    {
      path: '/drug/list',
      name: 'DrugList',
      component: () =>
        import('@/components/drug/list') //搜索药店列表
    },
    {
      path: '/drug/success',
      name: 'DrugSuccess',
      component: () =>
        import('@/components/drug/success') //一键通知成功
    },
    {
      path: '/drug/common',
      name: 'DrugCommon',
      component: () =>
        import('@/components/drug/common') //常见病症列表
    },

    {
      path: '/confinement/index',
      name: 'ConfinementIndex',
      component: () =>
        import('@/components/confinement/index') //月子会所列表
    },

    {
      path: '/personnel/detail',
      name: 'PersonnelDetail',
      component: () =>
        import('@/components/shop/personnelDetail') //人员详情
    },
    {
      path: '/goods/detail',
      name: 'GoodsDetail',
      component: () =>
        import('@/components/shop/goodsDetail') //商品详情
    },
    {
      path: '/shop/index',
      name: 'ShopIndex',
      component: () =>
        import('@/components/shop/index') //店铺详情
    },

    {
      path: '/community/index',
      name: 'CommunityIndex',
      component: () =>
        import('@/components/community/index') //特诊社区
    },

    {
      path: '/nurse/detail',
      name: 'NurseDetail',
      component: () =>
        import('@/components/nurse/nursingDetail') //陪护员详情
    },
    {
      path: '/nurse/list',
      name: 'NurseList',
      component: () =>
        import('@/components/nurse/nursingList') //医院陪护列表
    },
    {
      path: '/nurse/index',
      name: 'NurseIndex',
      component: () =>
        import('@/components/nurse/index') //护工陪护
    },

    {
      path: '/physician/detail',
      name: 'PhysicianDetail',
      component: () =>
        import('@/components/consult/physicianDetail') //医辅名师详情
    },
    {
      path: '/physician/list',
      name: 'PhysicianList',
      component: () =>
        import('@/components/consult/physicianList') //医辅名师列表
    },
    {
      path: '/accompanying/detail',
      name: 'AccompanyingDetail',
      component: () =>
        import('@/components/consult/accompanyingDetail') //陪诊员详情页
    }, {
      path: '/accompanying/list',
      name: 'AccompanyingList',
      component: () =>
        import('@/components/consult/accompanyingList') //陪诊员列表
    },
    {
      path: '/famousDetail',
      name: 'FamousDetail',
      component: () =>
        import('@/components/consult/famousDetail') //临床名医详情页
    },
    {
      path: '/consultDoctor',
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
      path: '/consult/index',
      name: 'ConsultIndex',
      component: () =>
        import('@/components/consult/index') //健康咨询页
    },
    {
      path: '/consult/list',
      name: 'ConsultList',
      component: () =>
        import('@/components/consult/consultList') //健康咨询列表页
    },
    {
      path: '/consult/detail',
      name: 'ConsultDetail',
      component: () =>
        import('@/components/consult/detail') //健康咨询详情页
    },

    {
      path: '/hospital',
      name: 'Hospital',
      component: () =>
        import('@/components/search/hospital') //医院搜索页
    },
    {
      path: '/private',
      name: 'Private',
      component: () =>
        import('@/components/search/private') //私人医生搜索页
    },
    {
      path: '/accompanying',
      name: 'Accompanying',
      component: () =>
        import('@/components/search/accompanying') //陪诊员搜索页
    },
    {
      path: '/physician',
      name: 'Physician',
      component: () =>
        import('@/components/search/physician') //医辅名师搜索页
    },
    {
      path: '/nurse',
      name: 'Nurse',
      component: () =>
        import('@/components/search/Nurse') //护工搜索页
    },
    {
      path: '/consult',
      name: 'Consult',
      component: () =>
        import('@/components/search/consult') //健康资讯搜索页
    },
    {
      path: '/food',
      name: 'Food',
      component: () =>
        import('@/components/search/food') //保健食品搜索页
    },
    {
      path: '/drug',
      name: 'Drug',
      component: () =>
        import('@/components/search/drug') //药品搜索页
    },
    {
      path: '/military',
      name: 'Military',
      component: () =>
        import('@/components/search/military') //医疗器械搜索页
    },
    {
      path: '/hospital/list',
      name: 'HospitalList',
      component: () =>
        import('@/components/consult/hospitalList') //医院列表页
    },

    {
      path: '/notice',
      name: 'Notice',
      component: () =>
        import('@/components/home/notice') //公告页
    },
    {
      path: '/',
      name: 'Home',
      component: () =>
        import('@/components/home/index') //首页
    },

    {
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