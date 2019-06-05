import request from '@/utils/request'

export function getAll(patientId) {
  return request({
    url: '/diagnosis',
    method: 'get',
    params: {
      patientId
    }
  })
}

export function getById(id) {
  return request({
    url: `/diagnosis/${id}`,
    method: 'get'
  })
}

export function create(patientId, data) {
  return request({
    url: '/diagnosis',
    method: 'post',
    data,
    params: {
      patientId
    }
  })
}

export function update(data) {
  return request({
    url: `/diagnosis/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/diagnosis/${id}`,
    method: 'delete'
  })
}
