import router from './router'
import store from './store'
import { getInfo } from '@/utils/auth' // get info
 

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // 开启页面加载进度条
  // document.title = to.meta.title
  const hasInfo = store.getters.userInfo 
    // console.log('------hasInfo')
    // console.log(hasInfo)
  if(hasInfo === ''){
    let ins = await getInfo();
    await store.dispatch("user/setUserInfo", ins)
    // console.log('------ins')
    // console.log(ins)
    next();
  } else{
    next();
  }

})

router.afterEach(() => {
  // finish progress bar
  // NProgress.done()
})
