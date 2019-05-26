import request from '@/utils/request'

export function getAll() {
  return request({
    url: '/patients',
    method: 'get'
  })
}

export function getById(id) {
  return request({
    url: `/patients/${id}`,
    method: 'get'
  })
}

export function create(data) {
  return request({
    url: '/patients',
    method: 'post',
    data
  })
}

export function update(data) {
  return request({
    url: `/patients/${data.id}`,
    method: 'put',
    data
  })
}
