/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function countComponents(n, edges) {
  // Build Graph
  const graph = []
  for (let i = 0; i < n; i++) graph.push([])
  for (const [a, b] of edges) {
    graph[a].push(b)
    graph[b].push(a)
  }
  // BFS On Each node
  const visited = new Set(),
    queue = []
  let components = 0
  for (let i = 0; i < n; i++) {
    if (visited.has(i)) continue
    queue.push(i)
    visited.add(i)
    while (queue.length) {
      const length = queue.length
      for (let j = 0; j < length; j++) {
        const node = queue.shift()
        for (const nei of graph[node]) {
          if (!visited.has(nei)) {
            queue.push(nei)
            visited.add(nei)
          }
        }
      }
    }
    components++
  }
  return components
}
