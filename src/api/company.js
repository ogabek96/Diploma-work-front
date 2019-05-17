import request from '@/utils/request'

export function create(ownerId, company) {
  return request({
    url: '/companies',
    method: 'POST',
    data: {
      ownerId,
      company
    }
  })
}

export function getAll(ownerId) {
  return request({
    url: '/companies',
    method: 'GET',
    params: {
      ownerId
    }
  })
}

export function getById(ownerId, id) {
  return request({
    url: `/companies/${id}`,
    method: 'GET',
    params: {
      ownerId
    }
  })
}

export function update(ownerId, company) {
  return request({
    url: `/companies/${company.id}`,
    method: 'PUT',
    data: {
      ownerId,
      company
    }
  })
}

export function deleteById(ownerId, id) {
  return request({
    url: `/companies/${id}`,
    method: 'DELETE',
    data: {
      ownerId
    }
  })
}
