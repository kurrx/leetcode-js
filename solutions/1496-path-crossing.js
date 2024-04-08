/**
 * https://leetcode.com/problems/path-crossing
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} path
 * @return {boolean}
 */
function isPathCrossing(path) {
  const visitedCoords = new Set()
  const coords = { x: 0, y: 0 }
  for (const direction of path) {
    visitedCoords.add(`${coords.x}:${coords.y}`)
    if (direction === 'N') {
      coords.y++
    } else if (direction === 'S') {
      coords.y--
    } else if (direction === 'W') {
      coords.x--
    } else if (direction === 'E') {
      coords.x++
    }
    if (visitedCoords.has(`${coords.x}:${coords.y}`)) {
      return true
    }
  }
  return false
}
