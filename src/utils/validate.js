/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * 用户名/手机号
 * 纯数字
 */
export function validUsername(str) {
  str = str + '';
  const telStr = /^([0-9][0-9]*)$/
  return telStr.test(str) && str.trim().length === 11
}

export function validPassword(str) {
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
  // 密码正则验证 (字母/数字/下划线) -- 登录 / 注册
  const telStr = /^[0-9a-zA-Z_]{1,}$/
  return telStr.test(str.trim()) && str.trim().length >= 6
}
export function validCode(str) {
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
  // 验证码正则验证 (字母/数字/下划线) -- 登录 / 注册
  const telStr = /^[A-Za-z0-9]{4}$/
  return telStr.test(str.trim()) && str.trim().length === 4
}
export function validMoney(str) {
  // 验证正浮点数（金额）
  const telStr = /^\d+(?=\.{0,1}\d+$|$)/
  // const telStr = /([1-9]\d*(\.\d*[1-9])?)|(0\.\d*[1-9])/
  return telStr.test(str)
}
// 全数字
export function validInteger(str) {
  console.log('str = ' + str)
  const telStr = /^([0-9][0-9]*)$/
  return telStr.test(str)
}
// qq号
export function validQQ(str) {
  console.log('str = ' + str)
  const telStr = /^[1-9]\d{4,10}$/
  return telStr.test(str.trim())
}
// 银行卡
export function validMonerycard(str) {
  const idcardReg = /^([1-9]{1})(\d{14}|\d{18})$/
  return idcardReg.test(str)
}
// 提现金额(大于0 的小数，整数)
export function validMonery(str) {
  const idcardReg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/
  return idcardReg.test(str)
}
// 身份证
export function validIdcard(str) {
  const idcardReg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
  return idcardReg.test(str)
}
// 大于等于0的整数
export function validNumber(str) {
  const num = /^[0-9]*$/
  return num.test(str)
}
