/**
 * https://leetcode.com/problems/maximum-distance-between-a-pair-of-values
 *
 * TC: O(n+m)
 * SC: O(1)
 *
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @return {number}
 */
function maxDistance(numbers1, numbers2) {
  const n = numbers1.length,
    m = numbers2.length
  let i = 0,
    j = 0,
    maxDistance = 0,
    distance
  while (i < n && j < m) {
    if (numbers1[i] > numbers2[j]) {
      i++
    } else {
      distance = j - i
      if (distance > maxDistance) maxDistance = distance
      j++
    }
  }
  return maxDistance
}
