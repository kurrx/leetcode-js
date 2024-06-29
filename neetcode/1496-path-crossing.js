/**
 * @param {string} path
 * @return {boolean}
 */
function isPathCrossing(path) {
  const visited = new Set([`0-0`])
  const coords = { x: 0, y: 0 }
  let key
  for (let i = 0; i < path.length; i++) {
    if (path[i] === 'N') {
      coords.y++
    } else if (path[i] === 'S') {
      coords.y--
    } else if (path[i] === 'E') {
      coords.x++
    } else {
      coords.x--
    }
    key = `${coords.x}-${coords.y}`
    if (visited.has(key)) {
      return true
    }
    visited.add(key)
  }
  return false
}
