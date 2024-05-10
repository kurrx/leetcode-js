/**
 * @param {number[][]} intervals
 * @return {number}
 */
function eraseOverlapIntervals(intervals) {
  const n = intervals.length
  if (n <= 1) return 0
  intervals.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
  let lastEnded = intervals[0][1],
    removed = 0
  for (let i = 1; i < n; i++) {
    if (intervals[i][0] < lastEnded) {
      removed++
      lastEnded = Math.min(lastEnded, intervals[i][1])
    } else {
      lastEnded = intervals[i][1]
    }
  }
  return removed
}
