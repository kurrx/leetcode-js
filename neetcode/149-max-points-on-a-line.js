/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPoints(points) {
  const n = points.length
  if (n === 1) return 1
  let answer = 2
  for (let i = 0; i < n; i++) {
    const count = new Map()
    for (let j = 0; j < n; j++) {
      if (i === j) continue
      const angle = Math.atan2(
        points[j][1] - points[i][1],
        points[j][0] - points[i][0],
      )
      count.set(angle, (count.get(angle) ?? 0) + 1)
    }
    for (const freq of count.values()) {
      answer = Math.max(answer, freq + 1)
    }
  }
  return answer
}
