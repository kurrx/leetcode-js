/**
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph
 *
 * TC: O(n + m)
 * SC: O(n + m)
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countComponents(n, edges) {
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

  let components = 0
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue
    const stack = [i]
    while (stack.length) {
      const vertex = stack.pop(),
        neighbors = graph.get(vertex)
      visited[vertex] = true
      if (!neighbors) continue
      for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
          stack.push(neighbor)
        }
      }
    }
    components++
  }
  return components
}
