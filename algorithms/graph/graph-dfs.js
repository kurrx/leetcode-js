/**
 * Time Complexity: O(nk + e)
 * Space Complexity: O(n) or O(n + e) (If we need to build a graph by given input)
 * Where `n` is number of vertices (nodes),
 *       `k` is work done at each step,
 *       `e` is number of edges (connections between nodes)
 */

/**
 * Graph DFS Recursive Traversal
 *
 * @param {number[][]} graph
 * @returns {number}
 */
function graphRecursiveTraversalDFS(graph) {
  function dfs(node) {
    let answer = 0
    // do some logic
    for (const neighbor of graph[node]) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor)
        answer += dfs(neighbor)
      }
    }
    return answer
  }
  const seen = new Set([START_NODE])
  return dfs(START_NODE)
}

/**
 * Graph DFS Iterative Traversal
 *
 * @param {number[][]} graph
 * @returns {number}
 */
function graphIterativeTraversalBFS(graph) {
  const seen = new Set([START_NODE]),
    stack = [START_NODE]
  let answer = 0
  while (stack.length) {
    const node = stack.pop()
    // Do some logic
    for (const neighbor of graph[node]) {
      if (!seen.has(neighbor)) {
        seen.add(neighbor)
        stack.push(neighbor)
      }
    }
  }
  return answer
}
