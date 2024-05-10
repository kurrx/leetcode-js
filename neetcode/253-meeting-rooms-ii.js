/**
 * @param {number[][]} intervals
 * @return {number}
 */
function minMeetingRooms(intervals) {
  const n = intervals.length
  if (n <= 1) return n
  const starts = intervals.map(v => v[0]).sort((a, b) => a - b),
    ends = intervals.map(v => v[1]).sort((a, b) => a - b)
  let start = 0,
    end = 0,
    rooms = 0
  while (start < n) {
    if (starts[start] >= ends[end]) {
      end++
      rooms--
    }
    start++
    rooms++
  }
  return rooms
}
