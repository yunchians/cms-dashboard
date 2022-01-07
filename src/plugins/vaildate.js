/**
 * 自定義驗證函式相關
 */

/**
 * 測試
 * @param rule
 * @param value
 * @param callback
 * @returns {*}
 */
export function isTest(rule, value, callback) {
  if (value.length > 8) {
    return callback(new Error(window._Vue.$ln('密碼不能少於%s位數字', 6)))
  } else {
    callback()
  }
}

export function isTest2(rule, value, callback) {
  callback()
}

/**
 * 驗證element UI 欄位結果
 * @param $refsa
 * @param field
 */
export function validField(refs, field) {
  let res = false
  refs.validateField(field, (vaild) => {
    console.log(field, vaild)
    if (!vaild) {
      res = true
    }
  })
  return res
}

/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

