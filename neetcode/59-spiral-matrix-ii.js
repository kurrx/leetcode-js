const DIR = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
]
/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
  function isOnBounds(i, j) {
    return i >= 0 && i < n && j >= 0 && j < n && (!matrix[i] || !matrix[i][j])
  }
  const matrix = new Array(n)
  let number = 1,
    dir = 0,
    i = 0,
    j = 0
  while (number <= n * n) {
    if (!matrix[i]) {
      matrix[i] = new Array(n)
    }
    matrix[i][j] = number
    if (!isOnBounds(i + DIR[dir][0], j + DIR[dir][1])) {
      dir = (dir + 1) % 4
    }
    i += DIR[dir][0]
    j += DIR[dir][1]
    number++
  }
  return matrix
}
