/**
 * https://leetcode.com/problems/all-paths-from-source-to-target
 *
 * TC: O(n*2^n)
 * SC: O(n)
 *
 * @param {number[][]} graph
 * @return {number[][]}
 */
function allPathsSourceTarget(graph) {
  function backtrack(curr, node) {
    if (node === n - 1) {
      answer.push([...curr])
      return
    }

    for (let j = 0; j < graph[node].length; j++) {
      curr.push(graph[node][j])
      backtrack(curr, graph[node][j])
      curr.pop()
    }
  }
  const n = graph.length,
    answer = []
  backtrack([0], 0)
  return answer
}
