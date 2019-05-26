import request from '@/utils/request'

export function getAllProvinces() {
  return request({
    url: '/common/provinces',
    method: 'get'
  })
}

export function getAllNationalities() {
  return request({
    url: '/common/nationalities',
    method: 'get'
  })
}
