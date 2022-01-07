export default {
  resetState: (state) => {
    Object.assign(state, state)
  },
  setToken: (state, token) => {
    state.token = token
  },
  setName: (state, name) => {
    state.name = name
  },
  setAvatar: (state, avatar) => {
    state.avatar = avatar
  }
}
