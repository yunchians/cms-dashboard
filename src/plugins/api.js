export function fetchAPI({ url, method, headers, data }, option = {}) {
  console.log('url, method, headers, data', url, method, headers, data)
  return fetch(url, { // url 請求位置
      method: method || 'GET', //請求方法
      body: data ? JSON.stringify(data) : null, // 發送給伺服器的資料
      headers: headers || {
          'content-type': 'application/json'
      },
      mode: 'cors', // 跨域處理
      ...option // 其他配置
  }).then(res => res.json())
  .catch(err => {
      console.log('err', err)
  })
}