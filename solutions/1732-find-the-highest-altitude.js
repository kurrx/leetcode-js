/**
 * https://leetcode.com/problems/find-the-highest-altitude
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain) {
  const n = gain.length

  let currentAltitude = 0,
    maxAltitude = 0

  for (let i = 0; i < n; i++) {
    currentAltitude += gain[i]
    if (currentAltitude > maxAltitude) {
      maxAltitude = currentAltitude
    }
  }

  return maxAltitude
}
