import request from '@/plugin/axios'

export function getNotAttenceInfo (params) {
  return request({
    url: '/Attence/notAttenceInfo',
    method: 'get',
    params: params
  })
}

export function personAttence (params) {
  return request({
    url: '/Attence/personAttence',
    method: 'post',
    data: params
  })
}

export function attenceAna (params) {
  return request({
    url: '/Attence/attenceAna',
    method: 'get',
    params: params
  })
}
