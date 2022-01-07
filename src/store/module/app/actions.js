export default {
  toggleSideBar({ commit }) {
    commit('toggleSideBar')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('closeSideBar', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('toggleDevice', device)
  },
  setLanguage({ commit }, language) {
    commit('setLanguage', language)
  },
  setApiQuery({ commit }, o) {
    commit('setApiQuery', o)
  }
}
