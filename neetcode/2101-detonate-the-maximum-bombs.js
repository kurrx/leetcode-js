/**
 * @param {number[][]} bombs
 * @return {number}
 */
function maximumDetonation(bombs) {
  function distance(i, j) {
    return Math.sqrt(
      (bombs[i][0] - bombs[j][0]) ** 2 + (bombs[i][1] - bombs[j][1]) ** 2,
    )
  }
  function detonate(i) {
    const stack = [i],
      visited = new Set([i])
    let detonated = 1
    while (stack.length) {
      for (const nei of graph[stack.pop()]) {
        if (!visited.has(nei)) {
          detonated++
          visited.add(nei)
          stack.push(nei)
        }
      }
    }
    return detonated
  }
  const n = bombs.length
  const graph = new Array(n)
  for (let i = 0; i < n; i++) {
    graph[i] = []
    for (let j = 0; j < n; j++) {
      if (i !== j && distance(i, j) <= bombs[i][2]) {
        graph[i].push(j)
      }
    }
  }

  let max = 0
  for (let i = 0; i < n; i++) {
    max = Math.max(max, detonate(i))
  }
  return max
}
