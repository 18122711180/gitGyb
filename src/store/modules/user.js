// import { login, logout, getInfo } from '@/api/user'
import { post, get } from '@/utils/request'
import { setInfo } from '@/utils/auth'
// import { resetRouter } from '@/router'

const state = {
  register:{
    tel: "",
    psd: "",
    psdSure: "",
    code: "",
    checked: false
  },
  login :{
    tel: '',
    psd: '',
    checked: false
  },
  userInfo:'',



  
}

const mutations = {
  SET_REGISTER: (state, register) => {
    state.register = register
  },
  SET_LOGIN: (state, login) => {
    state.login = login
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  


  
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // }
}

const actions = {
  // user login
  setRegister({ commit }, register) {
    return new Promise((resolve, reject) => {
      commit('SET_REGISTER', register)
      resolve()
    })
  },
  setLogin({ commit }, login) {
    return new Promise((resolve, reject) => {
      commit('SET_REGISTER', register)
      resolve()
    })
  },
  setUserInfo({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      commit('SET_USERINFO', userInfo)
      resolve()
    })
  },
  login({ commit }, fom) {
    const { tel, psd } = fom
    return new Promise((resolve, reject) => {
      post('/yiqi-api/api/User/login', { mobile: tel, logtype: 1, password: psd }).then(response => {
        commit('SET_USERINFO', response.data)
        setInfo(response.data)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  telLogin({ commit }, fom) {
    const { tel, code } = fom
    return new Promise((resolve, reject) => {
      post('/yiqi-api/api/User/login', { mobile: tel, logtype: 0, smscode: code }).then(response => {
        commit('SET_USERINFO', response.data)
        setInfo(response.data)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },





  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      console.log(' get ')
      get('/api/core/merchant/getUserInfoMerchant').then(response => {
        
        if (response.code !== 200) {
          reject('Verification failed, please Login again.')
        }
        commit('SET_INFO', response.data)
        resolve(response.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // get user info
  systemInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_INFO', state)
      resolve(state)
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      commit('SET_TOKEN', '')
      commit('SET_Level', '')
      commit('SET_INFO', '')
      removeToken()
      removeLevel()
      resetRouter()
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

