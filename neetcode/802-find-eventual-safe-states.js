/**
 * @param {number[][]} graph
 * @return {number[]}
 */
function eventualSafeNodes(graph) {
  function dfs(i) {
    if (cycle.has(i)) return true
    if (visited.has(i)) return false
    cycle.add(i)
    visited.add(i)
    for (let nei of graph[i]) {
      if (dfs(nei)) {
        return true
      }
    }
    cycle.delete(i)
    return false
  }
  const n = graph.length
  const visited = new Set(),
    cycle = new Set()
  for (let i = 0; i < n; i++) {
    dfs(i)
  }
  const result = []
  for (let i = 0; i < n; i++) {
    if (!cycle.has(i)) {
      result.push(i)
    }
  }
  return result
}
