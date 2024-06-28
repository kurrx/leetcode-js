/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
function champagneTower(poured, query_row, query_glass) {
  let row = [[poured]]
  for (let r = 0; r < query_row; r++) {
    const nextRow = new Array(row.length + 1).fill(0)
    for (let c = 0; c <= r; c++) {
      const q = (row[c] - 1) / 2
      if (q > 0) {
        nextRow[c] += q
        nextRow[c + 1] += q
      }
    }
    row = nextRow
  }
  return Math.min(1, row[query_glass])
}
