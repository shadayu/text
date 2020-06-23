import axios from 'axios'

//axios自带promise 所以直接返回就可以了
export function request(config) {
  
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 10000
    })
    return instance(config)
}


export function requestOne(config) {

  const instance = axios.create({
    baseURL: 'https://www.charmcode.cn',
    timeout: 60000
  })
  return instance(config)
}


export function requestTwo(config) {

  const instance = axios.create({
    baseURL: 'https://www.charmcode.cn',
    timeout: 60000
  })
  return instance(config)
}

//本地启动网址(写死):   http://127.0.0.1:8010

//线上启动网址:   https://www.charmcode.cn




// export function request(config) {
//   return new Promise((resolve,reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }







// export function request(config) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance(config.baseConfig)
//     .then(res => {
//       config.success(res)
//     })
//     .catch(err => {
//       config.failure(err)
//     })
// }




// export function request(config, success, failure) {
//   const instance = axios.create ({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config)
//       .then(res => {
//         //console.log(res);
//         success(res)
//       })
//       .catch(err => {
//         //console.log(err);
//         failure(err)
//       })
// }