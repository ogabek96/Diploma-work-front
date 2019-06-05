import request from '@/utils/request'

export function getAll(patientId) {
  return request({
    url: '/anamnestic',
    method: 'get',
    params: {
      patientId
    }
  })
}

export function getById(id) {
  return request({
    url: `/anamnestic/${id}`,
    method: 'get'
  })
}

export function create(patientId, data) {
  return request({
    url: '/anamnestic',
    method: 'post',
    data,
    params: {
      patientId
    }
  })
}

export function update(data) {
  return request({
    url: `/anamnestic/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteById(id) {
  return request({
    url: `/anamnestic/${id}`,
    method: 'delete'
  })
}
