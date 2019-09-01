import axios from 'axios'
import { Message } from 'element-ui'
// import store from 'store'
// import { getToken, setToken } from '@/utils/auth'
import AllUrl from '@/utils/url'
// create an axios instance
const service = axios.create({
  baseURL: AllUrl.url, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: {
    // 'content-type': 'application/x-www-form-urlencoded'
    'content-type': 'application/json'
  }
})
// request interceptor
service.interceptors.request.use(
  config => {
    // console.log(config)
    // console.log(config.params)
    // console.log(' ---- config ---- ')
    // console.log(config.params)
    // console.log(config.data)
    // if (store.getters.info.roleLevel === 2 || store.getters.info.roleLevel === '2') {
    //   if (config.params) {
    //     config.params.userId = `${store.getters.info.id}`
    //   } else if (config.data) {
    //     config.data.userId = `${store.getters.info.id}`
    //   }
    // }
    // config.params.userId = store.getters.info.id
    // console.log(config)
    // console.log(config.params)

    // ,{userId:this.$store.state.user.info.id}
    // return false
    // do something before request is sent
    // console.log(getToken())`
    // const tokenValue = store.getters.token || getToken()
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation

    //   setToken(tokenValue)
    //   config.headers['Authorization'] = tokenValue
    // } else {
    //   console.log('Token已过期')
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    Message.closeAll()
    if (res.code === 0) {
      return response
    } else {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // return Promise.reject(response.data)
      return Promise.reject(new Error(res.message || 'Error'))
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message.closeAll()
    Message({
      message: error.response ? error.response.data.message : error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    console.log(' --- get --- ')
    service.get(url, {
      params: params
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    console.log(' --- post --- ')
    service.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    console.log('--- put ---')
    service.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// export function put(url, data = {}) {
//   return new Promise((resolve, reject) => {
//     console.log('--- put ---')
//     service.put(url)
//       .then(response => {
//         resolve(response.data)
//       }, err => {
//         reject(err)
//       })
//   })
// }
/**
 * 封装 delete 请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del(url, data = {}) {
  return new Promise((resolve, reject) => {
    console.log('--- delete ---')
    service.delete(url, { data: { data }})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
// this.$ajax.delete('/list/resource', {
//   headers: {"Content-Type": "application/json","X-Merchant": "53cdd6f50cf261fadf0dd74c"},
//   data: {
//          id:_id
//     }
// })
// .then((response) => {
//     console.log(response);
// })
// .catch((error) => {
//     console.log(error);
// });
