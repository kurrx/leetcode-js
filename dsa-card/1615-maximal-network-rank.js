const DEFAULT = new Set()
/**
 * https://leetcode.com/problems/maximal-network-rank
 *
 * TC: O(e + v^2)
 * SC: O(e)
 *
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
function maximalNetworkRank(n, roads) {
  const graph = new Map()
  for (const [a, b] of roads) {
    if (!graph.has(a)) graph.set(a, new Set())
    graph.get(a).add(b)
    if (!graph.has(b)) graph.set(b, new Set())
    graph.get(b).add(a)
  }

  let max = 0
  for (let a = 0; a < n - 1; a++) {
    const aRoads = graph.get(a) ?? DEFAULT,
      aCount = aRoads.size
    for (let b = a + 1; b < n; b++) {
      const bCount = (graph.get(b) ?? DEFAULT).size,
        has = aRoads.has(b)
      max = Math.max(max, aCount + bCount + (has ? -1 : 0))
    }
  }

  return max
}
