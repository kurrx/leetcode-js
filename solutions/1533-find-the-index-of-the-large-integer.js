/**
 * https://leetcode.com/problems/find-the-index-of-the-large-integer
 *
 * TC: O(log(n))
 * SC: O(1)
 *
 * @param {ArrayReader} reader
 * @return {number}
 */
function getIndex(reader) {
  const n = reader.length()
  let left = 0,
    right = n - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (mid - left + 1 === right - mid) {
      const result = reader.compareSub(left, mid, mid + 1, right)
      if (result === 1) right = mid
      else if (result === -1) left = mid + 1
      else return -1
    } else {
      const result = reader.compareSub(left, mid - 1, mid + 1, right)
      if (result === 0) return mid
      else if (result === -1) left = mid + 1
      else right = mid - 1
    }
  }
  return left
}
