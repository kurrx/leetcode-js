/**
 * @param {number} n
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
function findOrder(n, prerequisites) {
  function dfs(course) {
    if (cycle.has(course)) return false
    if (visit.has(course)) return true
    cycle.add(course)
    for (const prereq of graph[course]) {
      if (!dfs(prereq)) {
        return false
      }
    }
    cycle.delete(course)
    visit.add(course)
    answer.push(course)
    return true
  }

  const graph = new Array(n),
    answer = [],
    visit = new Set(),
    cycle = new Set()
  for (let i = 0; i < n; i++) graph[i] = []
  for (const [a, b] of prerequisites) graph[a].push(b)
  for (let i = 0; i < n; i++) if (!dfs(i)) return []
  return answer
}
