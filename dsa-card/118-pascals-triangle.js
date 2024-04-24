/**
 * https://leetcode.com/problems/pascals-triangle
 *
 * TC: O(n^2)
 * SC: O(1)
 *
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const triangle = [[1]]
  for (let i = 2; i <= numRows; i++) {
    triangle.push(new Array(i))
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        triangle[i - 1][j] = 1
      } else {
        triangle[i - 1][j] = triangle[i - 2][j] + triangle[i - 2][j - 1]
      }
    }
  }
  return triangle
}
