/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
function canAttendMeetings(intervals) {
  const n = intervals.length
  if (n <= 1) return true
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 1; i < n; i++) {
    if (
      intervals[i][0] >= intervals[i - 1][0] &&
      intervals[i][0] < intervals[i - 1][1]
    ) {
      return false
    }
  }
  return true
}
