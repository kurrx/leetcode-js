/**
 * https://leetcode.com/problems/guess-number-higher-or-lower
 *
 * TC: O(log(n))
 * SC: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function guessNumber(n) {
  let left = 1,
    right = n,
    mid
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2)
    const result = guess(mid)
    if (result === 0) return mid
    else if (result === -1) right = mid - 1
    else left = mid + 1
  }
}
