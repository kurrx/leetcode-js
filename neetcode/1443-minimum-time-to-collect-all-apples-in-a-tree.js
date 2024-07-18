/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
function minTime(n, edges, hasApple) {
  function dfs(node, parent) {
    let totalTime = 0,
      childTime = 0
    for (const child of tree[node]) {
      if (child === parent) continue
      childTime = dfs(child, node)
      if (childTime || hasApple[child]) {
        totalTime += childTime + 2
      }
    }
    return totalTime
  }
  const tree = new Array(n)
  for (let i = 0; i < n; i++) tree[i] = []
  for (const [a, b] of edges) {
    tree[a].push(b)
    tree[b].push(a)
  }
  return dfs(0, -1)
}
