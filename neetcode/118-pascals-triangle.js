/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const triangle = [[1]]
  for (let row = 1; row < numRows; row++) {
    const currRow = []
    for (let col = 0; col <= row; col++) {
      currRow.push(
        (triangle.at(-1)[col] ?? 0) + (triangle.at(-1)[col - 1] ?? 0),
      )
    }
    triangle.push(currRow)
  }
  return triangle
}
