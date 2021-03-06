import page from './page'
import request from '@/plugin/axios'

export function register (data) {
  return request({
    url: '/User/register',
    method: 'post',
    data: data
  })
}

export function accountLogin (data) {
  return request({
    url: '/User/login',
    method: 'post',
    data: data
  })
}

export default page
