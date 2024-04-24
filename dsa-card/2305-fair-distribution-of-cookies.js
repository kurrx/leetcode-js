/**
 * https://leetcode.com/problems/fair-distribution-of-cookies
 *
 * TC: O(k^n)
 * SC: O(k+n)
 *
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
function distributeCookies(cookies, k) {
  function backtrack(start, used, min) {
    if (start >= cookies.length) {
      if (used.size !== cookies.length) return min
      let max = Number.MIN_SAFE_INTEGER
      for (let i = 0; i < k; i++) {
        if (counter[i][1] > max) {
          max = counter[i][1]
        }
      }
      return Math.min(min, max)
    }

    for (let i = start; i < cookies.length; i++) {
      for (let j = 0; j < k; j++) {
        if (counter[j][0] + 1 > maxBucketPerChild) continue
        counter[j][0]++
        counter[j][1] += cookies[i]
        used.add(i)
        min = backtrack(i + 1, used, min)
        used.delete(i)
        counter[j][0]--
        counter[j][1] -= cookies[i]
      }
    }

    return min
  }

  const counter = new Array(k),
    maxBucketPerChild = cookies.length - k + 1
  for (let i = 0; i < k; i++) {
    counter[i] = [0, 0]
  }
  return backtrack(0, new Set(), Number.MAX_SAFE_INTEGER)
}
