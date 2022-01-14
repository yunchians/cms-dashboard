export default {
  resetState: (state) => {
    state.avatar = ''
    state.token = null,
    state.name = ''
    state.googleLoginInfo = null
  },
  setToken: (state, token) => {
    state.token = token
  },
  setName: (state, name) => {
    state.name = name
  },
  setAvatar: (state, avatar) => {
    state.avatar = avatar
  },
  setGoogleInfo: (state, googleLoginInfo) => {
    console.log('googleLoginInfo', googleLoginInfo)
    state.googleLoginInfo = googleLoginInfo
  }
}
