/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
function eliminateMaximum(dist, speed) {
  const n = dist.length
  const reaches = new Array(n)
  for (let i = 0; i < n; i++) {
    reaches[i] = dist[i] / speed[i]
  }
  reaches.sort((a, b) => a - b)
  let total = 0,
    time = 0
  for (let i = 0; i < n; i++) {
    if (reaches[i] <= i) break
    total++
  }
  return total
}
