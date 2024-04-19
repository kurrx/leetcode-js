/**
 * https://leetcode.com/problems/earliest-possible-day-of-full-bloom
 *
 * TC: O(n*log(n))
 * SC: O(log(n))
 *
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
function earliestFullBloom(plantTime, growTime) {
  const n = plantTime.length,
    indices = []
  for (let i = 0; i < n; i++) {
    indices.push(i)
  }
  indices.sort((a, b) => {
    if (growTime[a] === growTime[b]) {
      return plantTime[a] - plantTime[b]
    }
    return growTime[b] - growTime[a]
  })

  let time = 0,
    maxBloom = 0
  for (let i = 0; i < n; i++) {
    maxBloom = Math.max(
      maxBloom,
      time + plantTime[indices[i]] + growTime[indices[i]],
    )
    time += plantTime[indices[i]]
  }
  return maxBloom
}
