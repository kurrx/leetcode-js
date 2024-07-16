/**
 * @param {number[][]} intervals
 * @return {number}
 */
function removeCoveredIntervals(intervals) {
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })
  let lastInterval = null,
    answer = 0
  for (const interval of intervals) {
    if (
      !lastInterval ||
      !(lastInterval[0] <= interval[0] && lastInterval[1] >= interval[1])
    ) {
      lastInterval = interval
      answer++
    }
  }
  return answer
}
