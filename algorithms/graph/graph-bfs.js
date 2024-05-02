/**
 * Graph BFS Traversal
 *
 * Time Complexity: O(nk + e)
 * Space Complexity: O(n) or O(n + e) (If we need to build a graph by given input)
 * Where `n` is number of vertices (nodes),
 *       `k` is work done at each step,
 *       `e` is number of edges (connections between nodes)
 *
 * @param {number[][]} graph
 * @returns {number}
 */
function graphBFS(graph) {
  const seen = new Set([START_NODE]),
    queue = [[START_NODE, 0]]
  let answer = 0
  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const [node, step] = queue.shift()
      // Do logic here
      for (const neighbor of graph[node]) {
        if (!seen.has(neighbor)) {
          seen.add(neighbor)
          queue.push([neighbor, step + 1])
        }
      }
    }
  }
  return answer
}
