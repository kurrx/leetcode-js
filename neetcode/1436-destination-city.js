/**
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  const outDegree = new Map()
  for (const [from, to] of paths) {
    if (!outDegree.has(to)) {
      outDegree.set(to, 0)
    }
    outDegree.set(from, (outDegree.get(from) ?? 0) + 1)
  }
  for (const [city, out] of outDegree) {
    if (out === 0) {
      return city
    }
  }
  return null
}
