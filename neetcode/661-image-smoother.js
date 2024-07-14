/**
 * @param {number[][]} img
 * @return {number[][]}
 */
function imageSmoother(img) {
  function smooth(i, j) {
    let sum = 0,
      count = 0
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (i + dy >= 0 && i + dy < m && j + dx >= 0 && j + dx < n) {
          sum += img[i + dy][j + dx]
          count++
        }
      }
    }
    return Math.floor(sum / count)
  }
  const m = img.length,
    n = img[0].length,
    result = new Array(m)
  for (let i = 0; i < m; i++) {
    result[i] = new Array(n)
    for (let j = 0; j < n; j++) {
      result[i][j] = smooth(i, j)
    }
  }
  return result
}
