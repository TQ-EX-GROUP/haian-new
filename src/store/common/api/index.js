import { http } from '../../../lib/http'

const urls = {
  URL: '/path/to/resource',
}

export const getCameraPlayUrl = (payload) => {
  return http.get(urls['URL'], payload)
}
