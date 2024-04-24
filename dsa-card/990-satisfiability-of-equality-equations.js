const A_CODE = 'a'.charCodeAt(0)
/**
 * https://leetcode.com/problems/satisfiability-of-equality-equations
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string[]} equations
 * @return {boolean}
 */
function equationsPossible(equations) {
  function dfs(node, c) {
    if (color[node] == -1) {
      color[node] = c
      const neighbors = graph[node]
      for (const neighbor of neighbors) {
        dfs(neighbor, c)
      }
    }
  }

  const graph = new Array(26)
  for (let i = 0; i < 26; i++) {
    graph[i] = []
  }
  for (const eq of equations) {
    if (eq[1] === '!') continue
    const var1 = eq.charCodeAt(0) - A_CODE,
      var2 = eq.charCodeAt(3) - A_CODE
    graph[var1].push(var2)
    graph[var2].push(var1)
  }

  const color = new Array(26)
  for (let i = 0; i < 26; i++) {
    color[i] = -1
  }
  for (let i = 0; i < 26; i++) {
    if (color[i] === -1) {
      dfs(i, i)
    }
  }

  for (const eq of equations) {
    if (eq[1] === '=') continue
    const var1 = eq.charCodeAt(0) - A_CODE,
      var2 = eq.charCodeAt(3) - A_CODE
    if (color[var1] == color[var2]) {
      return false
    }
  }

  return true
}
