/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
  let prevRow = triangle.at(-1)
  for (let r = triangle.length - 2; r >= 0; r--) {
    const nextRow = new Array(triangle[r].length)
    for (let c = 0; c < triangle[r].length; c++) {
      nextRow[c] = prevRow[c]
      if (c < triangle[r + 1].length - 1) {
        nextRow[c] = Math.min(nextRow[c], prevRow[c + 1])
      }
      nextRow[c] += triangle[r][c]
    }
    prevRow = nextRow
  }
  return prevRow[0]
}
