import request from '@/utils/request'

export const getHomeData = () => {
  request.get('/page/detail', {
    params: {
      pageId: 0
    }
  })
}
