/**
 * https://leetcode.com/problems/reachable-nodes-with-restrictions
 *
 * TC: O(n + m)
 * SC: O(n + m)
 *
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
function reachableNodes(n, edges, restricted) {
  const visited = new Array(n),
    graph = new Map()

  for (const [v1, v2] of edges) {
    let arr1 = graph.get(v1)
    if (!arr1) graph.set(v1, (arr1 = []))
    arr1.push(v2)

    let arr2 = graph.get(v2)
    if (!arr2) graph.set(v2, (arr2 = []))
    arr2.push(v1)
  }

  for (const vertex of restricted) {
    visited[vertex] = true
  }

  const stack = [0]
  let reached = 1
  visited[0] = true

  while (stack.length) {
    const vertex = stack.pop(),
      neighbors = graph.get(vertex)
    if (!neighbors) continue
    for (const neighbor of neighbors) {
      if (!visited[neighbor]) {
        reached++
        visited[neighbor] = true
        stack.push(neighbor)
      }
    }
  }
  return reached
}
