import {request} from './request'

export function getHomeMultiData() {
  return request({
    url:'/home/multidata',
  });
}

export function getGoodsData(type, page) {
  return request({
    url:'/api/wh/home/data',
    params:{
      type,
      page
    }
  });
}
