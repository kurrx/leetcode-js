/**
 * https://leetcode.com/problems/unique-paths-ii
 *
 * TC: O(n*m)
 * SC: O(n)
 *
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length
  let prevRow = new Array(n)
  prevRow[0] = 1
  for (let row = 0; row < m; row++) {
    const nextRow = new Array(n)
    for (let col = 0; col < n; col++) {
      nextRow[col] = 0
      if (!obstacleGrid[row][col]) {
        nextRow[col] += prevRow[col] ?? 0
        if (col > 0) {
          nextRow[col] += nextRow[col - 1]
        }
      }
    }
    prevRow = nextRow
  }
  return prevRow[n - 1]
}
