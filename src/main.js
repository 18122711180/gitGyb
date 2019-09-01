// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

import "@/assets/css/index.css"
Vue.use(ElementUI)
Vue.config.productionTip = false

import { post, get } from './utils/request'
Vue.prototype.post = post
Vue.prototype.get = get
import '@/permission' // permission control
import * as filters from './utils/filters'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

import store from '@/store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
