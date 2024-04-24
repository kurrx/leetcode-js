/**
 * https://leetcode.com/problems/destination-city
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
  const cities = new Map()
  for (const [from, to] of paths) {
    cities.set(from, (cities.get(from) || 0) + 1)
    if (!cities.has(to)) {
      cities.set(to, 0)
    }
  }
  for (const [city, pathsCount] of cities) {
    if (pathsCount === 0) {
      return city
    }
  }
  return ''
}
