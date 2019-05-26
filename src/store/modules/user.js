
import jwt from 'jsonwebtoken'
import { loginByUsername, signUp as signUpUser } from '@/api/auth'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    id: undefined,
    user: '',
    code: '',
    token: getToken(),
    name: '',
    roles: [],
    ownerId: '',
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_ID: (state, id) => {
      state.id = id
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_OWNER_ID: (state, id) => {
      state.ownerId = id
    }
  },

  actions: {
    // Username login
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password)
          .then(response => {
            const data = response.data
            if (data.code === 200) {
              commit('SET_TOKEN', data.payload.token)
              setToken(data.payload.token)
              resolve()
            } else if (data.code === 422) {
              reject('Login or password incorrect')
            } else {
              reject('Unknown error with signing in')
            }
          })
          .catch(() => {
            reject('Network error')
          })
      })
    },

    // Get user information
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        try {
          if (state.token) {
            const data = jwt.decode(state.token)
            commit('SET_ID', data.sub)
            commit('SET_NAME', data.username)
            commit('SET_ROLES', [data.role])

            if (data.role === 'OWNER') {
              commit('SET_OWNER_ID', data.sub)
            } else if (data.role === 'SUPER_ADMIN') {
              commit('SET_OWNER_ID', localStorage.getItem('SELECTED_OWNER_ID'))
            }
            resolve({
              username: data.username,
              roles: [data.role]
            })
          } else {
            throw new Error('token is empty')
          }
        } catch (err) {
          reject('Verification failed, please login again.')
        }
      })
    },
    // Set selected owner id
    SetOwnerId({ commit }, id) {
      return new Promise((resolve, reject) => {
        commit('SET_OWNER_ID', id)
        localStorage.setItem('SELECTED_OWNER_ID', id)
        resolve()
      })
    },

    // Third party verification login
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // Sign out
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        localStorage.removeItem('SELECTED_OWNER_ID')
        removeToken()
        resolve()
      })
    },

    // Front end
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    SignUpUser({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const email = userInfo.email.trim()
      return new Promise((resolve, reject) => {
        signUpUser(username, email, userInfo.password)
          .catch(error => {
            reject(error)
          })
        resolve()
      })
    }
  }
}

export default user
