/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips, capacity) {
  const time = new Array(1001).fill(0)
  for (const [num, from, to] of trips) {
    time[from] += num
    time[to] -= num
  }
  let used = 0
  for (const t of time) {
    used += t
    if (used > capacity) {
      return false
    }
  }
  return true
}
