/**
 * https://leetcode.com/problems/find-the-town-judge
 *
 * TC: O(n + m)
 * SC: O(n)
 *
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(n, trust) {
  const inDegree = new Array(n + 1),
    outDegree = new Array(n + 1),
    m = trust.length
  for (let i = 0; i < m; i++) {
    const a = trust[i][0],
      b = trust[i][1]
    if (!inDegree[b]) inDegree[b] = 0
    inDegree[b]++
    if (!outDegree[a]) outDegree[a] = 0
    outDegree[a]++
  }

  for (let i = 1; i <= n; i++) {
    if ((inDegree[i] ?? 0) === n - 1 && (outDegree[i] ?? 0) === 0) {
      return i
    }
  }

  return -1
}
