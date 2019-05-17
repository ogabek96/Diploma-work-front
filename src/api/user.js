import request from '@/utils/request'

export function create(data) {
  return request({
    url: '/users',
    method: 'POST',
    data
  })
}

export function getAll() {
  return request({
    url: '/users',
    method: 'GET'
  })
}

export function getById(id) {
  return request({
    url: `/users/${id}`,
    method: 'GET'
  })
}

export function update(user) {
  return request({
    url: `/users/${user.id}`,
    method: 'PUT',
    data: user
  })
}

export function deleteById(id) {
  return request({
    url: `/users/${id}`,
    method: 'DELETE'
  })
}
