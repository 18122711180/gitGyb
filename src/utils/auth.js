

const TokenKey = 'gybInfo' 
export function getInfo() {
  return  JSON.parse(sessionStorage.getItem(TokenKey))
}

export function setInfo(info) {
  sessionStorage.setItem(TokenKey, JSON.stringify(info));
}

export function removeToken() {
  return Cookies.remove(TokenKey)
} 
