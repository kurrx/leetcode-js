/**
 * https://leetcode.com/problems/number-of-flowers-in-full-bloom
 *
 * TC: O((n+m)*log(n))
 * SC: O(n)
 *
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
function fullBloomFlowers(flowers, people) {
  function bisectRight(arr, value) {
    let left = 0,
      right = arr.length
    while (left < right) {
      const mid = Math.floor((left + right) / 2)
      if (value < arr[mid]) right = mid
      else left = mid + 1
    }
    return left
  }
  const starts = flowers.map(a => a[0]),
    ends = flowers.map(a => a[1] + 1)

  starts.sort((a, b) => a - b)
  ends.sort((a, b) => a - b)

  const answer = []
  for (const person of people) {
    answer.push(bisectRight(starts, person) - bisectRight(ends, person))
  }
  return answer
}
