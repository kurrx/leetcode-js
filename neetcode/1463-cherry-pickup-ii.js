const DIRS = [-1, 0, 1]
/**
 * @param {number[][]} grid
 * @return {number}
 */
function cherryPickup(grid) {
  const rows = grid.length,
    cols = grid[0].length,
    dp = [new Array(cols), new Array(cols)]
  let nextRow = 1
  for (let col1 = 0; col1 < cols; col1++) {
    dp[0][col1] = new Array(cols)
    dp[1][col1] = new Array(cols)
  }
  for (let row = rows - 1; row >= 0; row--) {
    for (let col1 = 0; col1 < cols; col1++) {
      for (let col2 = 0; col2 < cols; col2++) {
        dp[nextRow][col1][col2] = 0
        if (row + 1 < rows) {
          for (const dy1 of DIRS) {
            for (const dy2 of DIRS) {
              if (
                col1 + dy1 >= 0 &&
                col1 + dy1 < cols &&
                col2 + dy2 >= 0 &&
                col2 + dy2 < cols
              ) {
                dp[nextRow][col1][col2] = Math.max(
                  dp[nextRow][col1][col2],
                  dp[1 - nextRow][col1 + dy1][col2 + dy2],
                )
              }
            }
          }
        }
        dp[nextRow][col1][col2] += grid[row][col1]
        if (col1 !== col2) {
          dp[nextRow][col1][col2] += grid[row][col2]
        }
      }
    }
    nextRow = 1 - nextRow
  }
  return dp[1 - nextRow][0][cols - 1]
}
