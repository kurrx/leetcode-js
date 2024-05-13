/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
  const rows = matrix.length,
    cols = matrix[0]?.length ?? 0,
    total = rows * cols,
    answer = []
  let col = 0,
    row = 0,
    right = cols - 1,
    down = rows - 1,
    left = 0,
    up = 0
  while (answer.length < total) {
    for (col = left; col <= right; col++) answer.push(matrix[up][col])
    for (row = up + 1; row <= down; row++) answer.push(matrix[row][right])
    if (up !== down)
      for (col = right - 1; col >= left; col--) answer.push(matrix[down][col])
    if (left !== right)
      for (row = down - 1; row > up; row--) answer.push(matrix[row][left])
    right--
    down--
    left++
    up++
  }
  return answer
}
