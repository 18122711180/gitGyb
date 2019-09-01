import Vue from 'vue'
/**
 * 
 * @returns {Promise}
 */

Vue.filter('timeData', function(time) {
  let t = new Date(time)
  let y = new Date(time).getFullYear()
  let m = new Date(time).getMonth() + 1
  let d = new Date(time).getDate()
  if(m <= 9){
    m = 0 + '' + m
  }
  if(d <= 9){
    d = 0 + '' + d
  }
  return `${y}-${m}-${d}`
})
Vue.filter('manageState', function(state) {
  if(state === '0'){
    return "休息中"
  }else if(state === '1'){
    return "营业中"
  }else{
    return ""
  }
})
/** 
 * 订单类型
 * 订单类型 1私人医生 2护工陪诊 3医疗器械 4商品订单 
*/
Vue.filter('orderFormType', function(state) {
  if(state === 1){
    return "私人医生"
  }else if(state === 2){
    return "护工陪诊"
  }else if(state === 3){
    return "医疗器械"
  }else if(state === 4){
    return "商品订单"
  }else{
    return ""
  }
})
/** 
 * 订单状态
 * 	商城 0全部 1待付款 2待发货 3待收货 4已完成 5退款中 6 已取消 7已退款 
 *  服务 0全部 1待付款 2待接单 3进行中 4已完成 5退款中 6已取消 7已退款
*/
Vue.filter('SorderFormType', function(state) {
  if(state === 0){
    return "全部"
  }else if(state === 1){
    return "待付款"
  }else if(state === 2){
    return "待发货"
  }else if(state === 3){
    return "待收货"
  }else if(state === 4){
    return "已完成"
  }else if(state === 5){
    return "退款中"
  }else if(state === 6){
    return "已取消"
  }else if(state === 7){
    return "已退款"
  }else{
    return ""
  }
})
/** 
 * 订单状态
 * 	商城 0全部 1待付款 2待发货 3待收货 4已完成 5退款中 6 已取消 7已退款 
 *  服务 0全部 1待付款 2待接单 3进行中 4已完成 5退款中 6已取消 7已退款
*/
Vue.filter('ForderFormType', function(state) {
  if(state === 0){
    return "全部"
  }else if(state === 1){
    return "待付款"
  }else if(state === 2){
    return "待接单"
  }else if(state === 3){
    return "进行中"
  }else if(state === 4){
    return "已完成"
  }else if(state === 5){
    return "退款中"
  }else if(state === 6){
    return "已取消"
  }else if(state === 7){
    return "已退款"
  }else{
    return ""
  }
})
