import request from '@/plugin/axios'

export function getAllCaryInfo () {
  return request({
    url: '/Car/allCarInfo',
    method: 'post'
  })
}
