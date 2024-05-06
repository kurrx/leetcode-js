/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
function validTree(n, edges) {
  // Is number of edges correct?
  if (edges.length !== n - 1) return false

  // Build graph
  const graph = []
  for (let i = 0; i < n; i++) graph.push([])
  for (const [a, b] of edges) {
    graph[a].push(b)
    graph[b].push(a)
  }

  // DFS
  const stack = [0],
    visited = new Set([0])
  while (stack.length) {
    const node = stack.pop()
    for (const nei of graph[node]) {
      if (!visited.has(nei)) {
        visited.add(nei)
        stack.push(nei)
      }
    }
  }
  // If we visited all nodes it means that it's valid tree
  return visited.size === n
}
