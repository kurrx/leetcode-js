/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
function calcEquation(equations, values, queries) {
  function eval(curr, target, product, visited) {
    visited.add(curr)
    let ret = -1
    const neighbors = graph.get(curr)
    if (neighbors.has(target)) {
      ret = product * neighbors.get(target)
    } else {
      for (const [next, nextProduct] of neighbors) {
        if (visited.has(next)) continue
        ret = eval(next, target, product * nextProduct, visited)
        if (ret != -1) break
      }
    }
    visited.delete(curr)
    return ret
  }

  const graph = new Map()
  for (let i = 0; i < equations.length; i++) {
    if (!graph.has(equations[i][0])) graph.set(equations[i][0], new Map())
    if (!graph.has(equations[i][1])) graph.set(equations[i][1], new Map())
    graph.get(equations[i][0]).set(equations[i][1], values[i])
    graph.get(equations[i][1]).set(equations[i][0], 1 / values[i])
  }

  const result = new Array(queries.length)
  for (let i = 0; i < queries.length; i++) {
    if (!graph.has(queries[i][0]) || !graph.has(queries[i][1])) result[i] = -1
    else if (queries[i][0] === queries[i][1]) result[i] = 1
    else {
      result[i] = eval(queries[i][0], queries[i][1], 1, new Set())
    }
  }
  return result
}
