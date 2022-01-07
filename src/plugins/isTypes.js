/**
 * 全域使用的共檢查用函示
 */
import defaultTo from 'lodash/defaultTo'

/**
 * 判斷是否為數字
 * @param value
 * @returns {boolean}
 */
export function isNumber(value) {
  if (typeof value === 'undefined') return false
  const re = /^[0-9]+$/ // 是否為數字
  value = String(value).trim()
  return re.test(Number(value)) && value !== ''
}

/**
 * 判斷是否為浮點數
 * @param value
 * @returns {boolean}
 */
export function isFloat(value) {
  if (typeof value === 'undefined') return false
  const re = /^-?\d*\.\d+$/ // 是否為浮點數
  value = String(value).trim()
  return re.test(Number(value)) && value !== ''
}

/**
 * 判斷是否為布林
 * @param value
 * @returns {boolean}
 */
export function isBoolean(value) {
  if (typeof value === 'boolean') return true
  return false
}

/**
 * 是否存在
 * @param {string} path
 * @returns {Boolean}
 */
export function isSet(value) {
  return defaultTo(value, false)
}
