const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
function pacificAtlantic(heights) {
  function canVisit(r, c, key) {
    return r >= 0 && r < m && c >= 0 && c < n && !states[r][c][key]
  }
  function bfs(queue, key) {
    while (queue.length) {
      const length = queue.length
      for (let i = 0; i < length; i++) {
        const [r, c] = queue.shift()
        for (const [dy, dx] of DIRS) {
          const nextR = r + dy,
            nextC = c + dx
          if (
            canVisit(nextR, nextC, key) &&
            heights[r][c] <= heights[nextR][nextC]
          ) {
            states[nextR][nextC][key] = true
            queue.push([nextR, nextC])
          }
        }
      }
    }
  }

  const m = heights.length,
    n = heights[0].length,
    states = [],
    answer = [],
    pacific = [],
    atlantic = []

  // Pre-process
  for (let r = 0; r < m; r++) {
    states.push(new Array(n))
    for (let c = 0; c < n; c++) {
      states[r][c] = { p: false, a: false }
      if ((r === 0 && c === n - 1) || (c === 0 && r === m - 1)) {
        states[r][c].p = true
        states[r][c].a = true
        pacific.push([r, c])
        atlantic.push([r, c])
      } else {
        if (r === 0 || c === 0) {
          states[r][c].p = true
          pacific.push([r, c])
        }
        if (r === m - 1 || c === n - 1) {
          states[r][c].a = true
          atlantic.push([r, c])
        }
      }
    }
  }

  // BFS Pacific
  bfs(pacific, 'p')

  // BFS Atlantic
  bfs(atlantic, 'a')

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (states[r][c].a && states[r][c].p) {
        answer.push([r, c])
      }
    }
  }
  return answer
}
