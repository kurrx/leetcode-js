/**
 * Intervals
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(log n)
 *
 * @param {number[][]} intervals
 * @return {boolean}
 */
function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false
    }
  }
  return true
}
