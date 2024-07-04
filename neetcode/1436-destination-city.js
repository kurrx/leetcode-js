/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  const hasOut = new Set()
  for (let i = 0; i < paths.length; i++) {
    hasOut.add(paths[i][0])
  }
  for (let i = 0; i < paths.length; i++) {
    if (!hasOut.has(paths[i][1])) {
      return paths[i][1]
    }
  }
  return null
}
