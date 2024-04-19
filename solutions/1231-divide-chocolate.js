/**
 * https://leetcode.com/problems/divide-chocolate
 *
 * TC: O(n*log(s))
 * SC: O(1)
 *
 * @param {number[]} sweetness
 * @param {number} k
 * @return {number}
 */
function maximizeSweetness(sweetness, k) {
  let left = Number.MAX_SAFE_INTEGER,
    right = 0
  for (const piece of sweetness) {
    if (piece < left) left = piece
    right += piece
  }
  right = Math.floor(right / (k + 1))

  if (sweetness.length === k + 1) return left

  while (left < right) {
    const mid = Math.floor((left + right + 1) / 2)

    let count = 0,
      curr = 0
    for (const piece of sweetness) {
      curr += piece
      if (curr >= mid) {
        count++
        curr = 0
      }
    }

    if (count >= k + 1) left = mid
    else right = mid - 1
  }
  return right
}
