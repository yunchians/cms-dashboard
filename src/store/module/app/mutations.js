import Cookies from 'js-cookie'

export default {
  toggleSideBar: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  closeSideBar: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  toggleDevice: (state, device) => {
    state.device = device
  },
  setLanguage: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  },
  setApiQuery: (state, o) => {
    state.api.push(o)
    if (state.api.length > 10) state.api.shift()
  }
}
