/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const answer = []
  for (const [start, end] of intervals) {
    // If overlaps and answer length is not empty
    if (
      answer.length &&
      start >= answer.at(-1)[0] &&
      start <= answer.at(-1)[1]
    ) {
      answer.at(-1)[1] = Math.max(answer.at(-1)[1], end)
    } else {
      answer.push([start, end])
    }
  }
  return answer
}
