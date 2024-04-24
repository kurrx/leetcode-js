/**
 * https://leetcode.com/problems/reduce-array-size-to-the-half
 *
 * TC: O(n*log(n))
 * SC: O(n)
 *
 * @param {number[]} arr
 * @return {number}
 */
function minSetSize(arr) {
  const counter = new Map()
  for (const number of arr) {
    counter.set(number, (counter.get(number) ?? 0) + 1)
  }

  const counts = Array.from(counter.values())
  counts.sort((a, b) => b - a)

  const n = arr.length
  let removed = 0,
    setSize = 0
  for (const count of counts) {
    removed += count
    setSize++
    if (removed >= n / 2) break
  }
  return setSize
}
