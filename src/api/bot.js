import request from '@/utils/request'

export function create(ownerId, bot) {
  return request({
    url: '/bots',
    method: 'POST',
    data: {
      ownerId,
      bot
    }
  })
}

export function getAll(ownerId, companyId) {
  return request({
    url: '/bots',
    method: 'GET',
    params: {
      ownerId,
      companyId
    }
  })
}

export function getById(ownerId, botId) {
  return request({
    url: `/bots/${botId}`,
    method: 'GET',
    params: {
      ownerId
    }
  })
}

export function update(ownerId, bot) {
  return request({
    url: `/bots/${bot.id}`,
    method: 'PUT',
    data: {
      ownerId,
      bot
    }
  })
}

export function deleteById(ownerId, botId) {
  return request({
    url: `/bots/${botId}`,
    method: 'DELETE',
    data: {
      ownerId
    }
  })
}
