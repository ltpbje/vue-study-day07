import request from '@/utils/request'
// export function getPicCode () {
//   return request.get('/captcha/image')
// }
export const getPicCode = () => {
  return request.get('/captcha/image')
}
