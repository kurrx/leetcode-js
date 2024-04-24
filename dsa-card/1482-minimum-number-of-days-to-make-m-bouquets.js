/**
 * https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets
 *
 * TC: O(n*log(k))
 * SC: O(1)
 *
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
function minDays(bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1

  let left = Number.MAX_SAFE_INTEGER,
    right = Number.MIN_SAFE_INTEGER
  for (const day of bloomDay) {
    right = Math.max(right, day)
    left = Math.min(left, day)
  }

  while (left < right) {
    const currDay = Math.floor((left + right) / 2)

    let bouquets = 0,
      currStreak = 0
    for (const day of bloomDay) {
      if (day > currDay) currStreak = 0
      else {
        currStreak++
        if (currStreak === k) {
          currStreak = 0
          bouquets++
        }
      }
    }

    if (bouquets >= m) right = currDay
    else left = currDay + 1
  }
  return left
}
