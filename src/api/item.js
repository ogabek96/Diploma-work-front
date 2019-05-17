import request from '@/utils/request'

export function create(ownerId, item) {
  return request({
    url: '/items',
    method: 'POST',
    data: {
      item
    }
  })
}

export function getAll() {
  return request({
    url: '/items',
    method: 'GET',
    params: {
      code: 1
    }
  })
}

export function getById(id) {
  return request({
    url: `/items/${id}`,
    method: 'GET',
    params: {
    }
  })
}

export function update(item) {
  return request({
    url: `/items/${item.id}`,
    method: 'PUT',
    data: {
      item
    }
  })
}

export function deleteById(id) {
  return request({
    url: `/items/${id}`,
    method: 'DELETE',
    data: {
    }
  })
}
