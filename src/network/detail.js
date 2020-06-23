// import {
//   requestTwo
// } from "./request"

import axios from 'axios'

// export function requestOne(config) {

//   const instance = axios.create({
//     baseURL: 'https://www.charmcode.cn',
//     timeout: 60000
//   })
//   return instance(config)
// }

 let appConfig = {
  development: 'https://www.charmcode.cn',
  production: '',
  cookieTime: {
    refreshToken: 60 * 60 * 24 * 7, // refreshToken  存在7天
    accessToken: 60 * 60 // accessToken  存在1小时
  }
};




  function concatUrl(e) {
  let url;
  url = `${appConfig[process.env.NODE_ENV]}/api/leaf/mall${e}`;
  return url;
}



const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'http://127.0.0.1:5000/api', // url = base url + request url
  timeout: 50000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
});

export const request = (url, method = 'post', data = {}) => {
  let requestUrl = concatUrl(url);

  window.console.log(requestUrl);

  // 参数配置 如果是get方法就 设置成params 参数， 其他则设置成data参数
  let reConfig = method == "get" ? {
    method,
    url: requestUrl,
    params: data
  } : {
    method,
    url: requestUrl,
    data
  };


  return service(reConfig);
};

//export default request
  
// export function getDetail(data) {
//   return requestTwo({
//     url: '/api/leaf/mall/goods/detail',
//     params: {
//       data
//     }
//   })
// }

export class Goods {
  constructor (data) {
    this.banners = data.banners;
    this.title = data.title;
    this.price = data.price;
    this.oldPrice = data.original_price;
    this.salesVolume = data.sales_volume;
    this.salesCollect = data.sales_collect;
    this.salesDeliver = data.sales_deliver;

    this.discountVolume = data.discount_volume;
    this.discountActivity = data.discount_activity;
    this.logisticsInfo = data.logistics_info;

    this.shopInfo = data.shopInfo;

    this.goodsDesc = data.goods_desc
    this.goodsImages = data.goods_image
  }
}


export class Shop {
  constructor(data) {
    this.creditRating = data.creditRating
    this.cumulativeSales = data.cumulativeSales
    this.follow = data.follow
    this.goodsNum = data.goodsNum
    this.shopImage = data.shopImage
    this.shopName = data.shopName
  }
}