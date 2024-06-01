/**
 * @param {number[][]} grid
 * @return {number}
 */
function gridGame(grid) {
  const total = grid[0].reduce((a, b) => a + b)
  let firstRowPrefix = 0,
    secondRowPrefix = 0,
    answer = Infinity
  for (let i = 0; i < grid[0].length; i++) {
    firstRowPrefix += grid[0][i]
    answer = Math.min(answer, Math.max(total - firstRowPrefix, secondRowPrefix))
    secondRowPrefix += grid[1][i]
  }
  return answer
}
