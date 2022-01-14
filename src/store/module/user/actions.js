import { getInfo, login, logout } from '@/api/user'
import { removeToken, setToken } from '@/plugins/auth'
import { resetRouter } from '@/router'

export default {
    // user login
    login({ commit }, userInfo) {
        const { username, password } = userInfo
        commit('setToken', 'token')
        setToken('token')
            // return new Promise((resolve, reject) => {
            //   login({ username: username.trim(), password: password }).then(response => {
            //     const { data } = response
            //     commit('setToken', data.token)
            //     setToken(data.token)
            //     resolve()
            //   }).catch(error => {
            //     reject(error)
            //   })
            // })
    },
    // get user info
    getInfo({ commit, state }) {
        commit('setName', 'chianchian')
        commit('setAvatar', 'admin')
            // return new Promise((resolve, reject) => {
            //   getInfo(state.token).then(response => {
            //     const { data } = response

        //     if (!data) {
        //       return reject('Verification failed, please Login again.')
        //     }

        //     const { name, avatar } = data

        //     commit('setName', name)
        //     commit('setAvatar', avatar)
        //     resolve(data)
        //   }).catch(error => {
        //     reject(error)
        //   })
        // })
    },
    // user logout
    logout({ commit, state }) {
        removeToken() // must remove  token  first
        resetRouter()
        commit('resetState')
            // return new Promise((resolve, reject) => {
            //     logout(state.token).then(() => {
            //         removeToken() // must remove  token  first
            //         resetRouter()
            //         commit('resetState')
            //         resolve()
            //     }).catch(error => {
            //         reject(error)
            //     })
            // })
    },
    // remove token
    resetToken({ commit }) {
        commit('resetState')
            // return new Promise(resolve => {
            //     removeToken() // must remove  token  first
            //     commit('resetState')
            //     resolve()
            // })
    },
    setGoogleInfo({ commit }, params) {
        commit('setToken', 'token')
        commit('setGoogleInfo', params)
        setToken('token')
    }
}