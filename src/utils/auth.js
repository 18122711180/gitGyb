

const TokenKey = 'gybInfo' 
const placeKey = 'gybPlace'
const paymessage = 'gbyorder'
export function getInfo() {
  return  JSON.parse(sessionStorage.getItem(TokenKey))
}

export function setInfo(info) {
  sessionStorage.setItem(TokenKey, JSON.stringify(info));
}

export function getPlace() {
  return  JSON.parse(sessionStorage.getItem(placeKey))
}

export function setPlace(info) {
  sessionStorage.setItem(placeKey, JSON.stringify(info));
}

export function getOrder() {
  return  JSON.parse(sessionStorage.getItem(paymessage))
}

export function setOrder(info) {
  sessionStorage.setItem(paymessage, JSON.stringify(info));
}

export function getAddress() {
  return  JSON.parse(sessionStorage.getItem('gybaddress'))
}

export function setAddress(info) {
  sessionStorage.setItem('gybaddress', JSON.stringify(info));
}

export function removeToken() {
  return Cookies.remove(TokenKey)
} 
