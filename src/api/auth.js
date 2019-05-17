import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/auth/token',
    method: 'POST',
    data
  })
}

export function signUp(username, email, password) {
  const data = {
    username,
    email,
    password
  }
  return request({
    url: '/users',
    method: 'POST',
    data
  })
}
