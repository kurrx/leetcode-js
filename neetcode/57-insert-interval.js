/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  const n = intervals.length,
    answer = []
  let i = 0,
    inserted = false,
    next
  while (i < n || !inserted) {
    if (inserted || (i < n && intervals[i][0] < newInterval[0])) {
      next = intervals[i++]
    } else {
      next = newInterval
      inserted = true
    }

    if (
      answer.length &&
      next[0] >= answer.at(-1)[0] &&
      next[0] <= answer.at(-1)[1]
    ) {
      answer.at(-1)[1] = Math.max(answer.at(-1)[1], next[1])
    } else {
      answer.push([...next])
    }
  }
  return answer
}
