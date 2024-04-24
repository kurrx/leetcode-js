const EMPTY = '.',
  WALL = '+',
  DIRS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]
/**
 * https://leetcode.com/problems/nearest-exit-from-entrance-in-maze
 *
 * TC: O(n * m)
 * SC: O(n + m)
 *
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
function nearestExit(maze, entrance) {
  function valid(row, col) {
    if (row < 0 || row >= m) return false
    if (col < 0 || col >= n) return false
    return maze[row][col] !== WALL
  }
  function isExit(row, col) {
    if (row === startRow && col === startCol) return false
    return (
      maze[row][col] === EMPTY &&
      (row === 0 || col === 0 || row === m - 1 || col === n - 1)
    )
  }

  const m = maze.length,
    n = maze[0].length,
    [startRow, startCol] = entrance

  const visited = new Array(m)
  for (let i = 0; i < m; i++) {
    visited[i] = new Array(n)
    for (let j = 0; j < n; j++) {
      visited[i][j] = false
    }
  }

  visited[startRow][startCol] = true
  const queue = [[startRow, startCol]]
  let distance = 0

  while (queue.length) {
    const currentNodes = queue.length

    for (let i = 0; i < currentNodes; i++) {
      const [row, col] = queue.shift()
      if (isExit(row, col)) {
        return distance
      }

      for (const [dy, dx] of DIRS) {
        const nextRow = row + dy,
          nextCol = col + dx
        if (valid(nextRow, nextCol) && !visited[nextRow][nextCol]) {
          visited[nextRow][nextCol] = true
          queue.push([nextRow, nextCol])
        }
      }
    }

    distance++
  }

  return -1
}
