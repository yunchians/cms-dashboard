const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return sessionStorage.getItem('TokenKey')
}

export function setToken(token) {
  return sessionStorage.setItem('TokenKey', token)
}

export function removeToken() {
  return sessionStorage.clear('TokenKey')
}

export function getGoogleInfo() {
  return JSON.parse(sessionStorage.getItem('googleInfo'))
}
