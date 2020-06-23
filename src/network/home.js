import {
  request,
  requestOne
} from './request'

export function homeData() {
  return request({
    url:'/home/multidata'
  })
}


export function homeGoods(page,pageSize) {
  return requestOne({
    url: '/api/leaf/mall/home/goods',
    params: {
      page,
      pageSize
    }
  })
}



//本地启动网址(写死):   /api/v1/home/goods/backup

//线上启动网址:   /api/leaf/mall/home/goods