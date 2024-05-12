/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(n, prerequisites) {
  function dfs(i) {
    if (cycle.has(i)) return false
    if (visited.has(i)) return true
    cycle.add(i)
    for (const course of graph[i]) if (!dfs(course)) return false
    cycle.delete(i)
    visited.add(i)
    return true
  }

  const graph = new Array(n),
    visited = new Set(),
    cycle = new Set()
  for (let i = 0; i < n; i++) graph[i] = []
  for (const [a, b] of prerequisites) graph[a].push(b)
  for (let i = 0; i < n; i++) if (!dfs(i)) return false
  return true
}
