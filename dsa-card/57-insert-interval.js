/**
 * https://leetcode.com/problems/insert-interval
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  const n = intervals.length
  const answer = []
  let i = 0,
    inserted = false
  while (i <= n) {
    let nextToInsert
    if (i < n) {
      nextToInsert = intervals[i]
      if (!inserted && newInterval[0] < nextToInsert[0]) {
        nextToInsert = newInterval
        inserted = true
      } else {
        i++
      }
    } else if (!inserted) {
      nextToInsert = newInterval
      inserted = true
      i++
    } else {
      break
    }

    if (answer.length && nextToInsert[0] <= answer.at(-1)[1]) {
      answer.at(-1)[1] = Math.max(answer.at(-1)[1], nextToInsert[1])
    } else {
      answer.push(nextToInsert)
    }
  }
  return answer
}
