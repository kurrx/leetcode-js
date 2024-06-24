/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
function minimumTime(n, relations, time) {
  const adj = new Array(n),
    inDegree = new Array(n),
    maxTime = new Array(n)
  for (let i = 0; i < n; i++) {
    adj[i] = []
    inDegree[i] = 0
    maxTime[i] = 0
  }
  for (const [a, b] of relations) {
    adj[a - 1].push(b - 1)
    inDegree[b - 1]++
  }
  const level = []
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      level.push(i)
      maxTime[i] = time[i]
    }
  }
  while (level.length) {
    const node = level.pop()
    while (adj[node].length) {
      const nei = adj[node].pop()
      maxTime[nei] = Math.max(maxTime[nei], maxTime[node] + time[nei])
      inDegree[nei]--
      if (inDegree[nei] === 0) {
        level.push(nei)
      }
    }
  }
  let answer = 0
  for (let i = 0; i < n; i++) {
    answer = Math.max(answer, maxTime[i])
  }
  return answer
}
