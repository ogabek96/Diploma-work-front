import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api of base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // Let each request carry token-- ['X-Token'] For the custom key, please modify it according to the actual situation.
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,
  /**
   * The following comment indicates that the request status is indicated by a custom code in the response.
   * When the code returns the following, it indicates that there is a problem with the permissions, log out and return to the login page.
   * If you want to use xmlhttprequest to identify the status code, the logic can be written in the following error.
   * The following code is a sample, please modify it in combination with self-generated requirements, if you don't need it, you can delete it.
   */
  // response => {
  //   const res = response.data
  //   if (res.code !== 10) {
  //     Message({
  //       message: res.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })
  //     // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       // Please introduce it yourself MessageBox
  //       // import { Message, MessageBox } from 'element-ui'
  //       MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
  //         confirmButtonText: 'Re-login',
  //         cancelButtonText: 'Cancel',
  //         type: 'warning'
  //       }).then(() => {
  //         store.dispatch('FedLogOut').then(() => {
  //           location.reload() // In order to re-instantiate the vue-router object to avoid bugs
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
