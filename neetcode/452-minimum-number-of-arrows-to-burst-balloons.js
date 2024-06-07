/**
 * @param {number[][]} points
 * @return {number}
 */
function findMinArrowShots(points) {
  if (points.length === 0) return 0

  points.sort((a, b) => {
    if (a[1] === b[1]) return 0
    if (a[1] < b[1]) return -1
    return 1
  })
  let arrows = 1
  let lastEnd = points[0][1]
  for (const [x1, x2] of points) {
    if (lastEnd < x1) {
      arrows++
      lastEnd = x2
    }
  }
  return arrows
}
