/**
 * @param {string} s
 * @return {number[]}
 */
function partitionLabels(s) {
  // Get characters [start, end] indices
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], [i, i])
    } else {
      map.get(s[i])[1] = i
    }
  }
  // Create Intervals
  const intervals = Array.from(map.values())
  // Sort by starting interval
  intervals.sort((a, b) => a[0] - b[0])
  // Merge intervals
  const answer = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    if (
      intervals[i][0] >= answer.at(-1)[0] &&
      intervals[i][0] <= answer.at(-1)[1]
    ) {
      answer.at(-1)[1] = Math.max(answer.at(-1)[1], intervals[i][1])
    } else {
      answer.push(intervals[i])
    }
  }
  for (let i = 0; i < answer.length; i++) {
    answer[i] = answer[i][1] - answer[i][0] + 1
  }
  return answer
}
