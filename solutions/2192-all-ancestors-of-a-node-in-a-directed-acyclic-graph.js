/**
 * https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph
 *
 * TC: O(n^2)
 * SC: O(n)
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
function getAncestors(n, edges) {
  const graph = new Map(),
    answer = new Array(n)

  for (let i = 0; i < n; i++) {
    graph.set(i, [])
    answer[i] = []
  }
  for (const [from, to] of edges) {
    graph.get(from).push(to)
  }

  for (let i = 0; i < n; i++) {
    const queue = [i],
      visited = new Set([i])
    while (queue.length) {
      const length = queue.length
      for (let j = 0; j < length; j++) {
        const num = queue.shift(),
          neighbors = graph.get(num)
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor)
            queue.push(neighbor)
            answer[neighbor].push(i)
          }
        }
      }
    }
  }

  return answer
}
