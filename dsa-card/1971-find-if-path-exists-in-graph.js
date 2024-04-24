/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph
 *
 * TC: O(n + m)
 * SC: O(n + m)
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
  function dfs(vertex) {
    if (vertex === destination) return true
    visited[vertex] = true
    const neighbors = graph.get(vertex)
    if (!neighbors) return false
    for (const neighbor of neighbors) {
      if (!visited[neighbor] && dfs(neighbor)) {
        return true
      }
    }
    return false
  }

  const graph = new Map(),
    visited = new Array(n)

  for (const [v1, v2] of edges) {
    let arr1 = graph.get(v1)
    if (!arr1) graph.set(v1, (arr1 = []))
    arr1.push(v2)

    let arr2 = graph.get(v2)
    if (!arr2) graph.set(v2, (arr2 = []))
    arr2.push(v1)
  }

  return dfs(source)
}
