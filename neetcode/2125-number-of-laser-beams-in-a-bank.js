/**
 * @param {string[]} bank
 * @return {number}
 */
function numberOfBeams(bank) {
  const m = bank.length
  const n = bank[0].length
  let prevDevices = 0,
    result = 0
  for (let r = 0; r < m; r++) {
    let rowDevices = 0
    for (let c = 0; c < n; c++) {
      if (bank[r][c] === '1') {
        rowDevices++
      }
    }
    if (rowDevices) {
      result += prevDevices * rowDevices
      prevDevices = rowDevices
    }
  }
  return result
}
