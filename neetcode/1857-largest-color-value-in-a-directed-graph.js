const A_CODE = 'a'.charCodeAt(0)
/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
function largestPathValue(colors, edges) {
  function dfs(node) {
    if (cycle[node]) return Infinity
    const color = colors.charCodeAt(node) - A_CODE
    if (visited[node]) return count[node][color]
    visited[node] = true
    cycle[node] = true
    for (const nei of graph[node]) {
      if (dfs(nei) === Infinity) {
        return Infinity
      }
      for (let i = 0; i < 26; i++) {
        count[node][i] = Math.max(count[node][i], count[nei][i])
      }
    }
    count[node][color]++
    cycle[node] = false
    return count[node][color]
  }

  const n = colors.length,
    graph = new Array(n),
    count = new Array(n),
    visited = new Array(n).fill(false),
    cycle = new Array(n).fill(false)
  for (let i = 0; i < n; i++) {
    graph[i] = []
    count[i] = new Array(26).fill(0)
  }
  for (const [a, b] of edges) {
    graph[a].push(b)
  }
  let answer = 0
  for (let i = 0; i < n; i++) {
    answer = Math.max(answer, dfs(i))
  }
  return answer === Infinity ? -1 : answer
}
