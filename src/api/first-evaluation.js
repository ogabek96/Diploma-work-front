import request from '@/utils/request'

export function getAll(patientId) {
  return request({
    url: '/first-evaluation',
    method: 'get',
    params: {
      patientId
    }
  })
}

export function getById(id) {
  return request({
    url: `/first-evaluation/${id}`,
    method: 'get'
  })
}

export function create(patientId, data) {
  return request({
    url: '/first-evaluation',
    method: 'post',
    data,
    params: {
      patientId
    }
  })
}

export function update(data) {
  return request({
    url: `/first-evaluation/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/first-evaluation/${id}`,
    method: 'delete'
  })
}
