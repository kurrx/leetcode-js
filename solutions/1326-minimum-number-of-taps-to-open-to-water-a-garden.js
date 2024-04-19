/**
 * https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
function minTaps(n, ranges) {
  const maxReach = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
    const start = Math.max(0, i - ranges[i]),
      end = Math.min(n, i + ranges[i])
    maxReach[start] = Math.max(maxReach[start] ?? -1, end)
  }

  let taps = 0,
    curr = 0,
    next = 0
  for (let i = 0; i <= n; i++) {
    if (i > next) return -1
    if (i > curr) {
      taps++
      curr = next
    }
    next = Math.max(next, maxReach[i] ?? -1)
  }
  return taps
}
