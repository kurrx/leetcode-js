/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function findMatrix(nums) {
  const counter = new Map()
  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1)
  }
  const matrix = []
  while (counter.size) {
    const row = []
    for (const [num, count] of counter) {
      row.push(num)
      if (count !== 1) {
        counter.set(num, count - 1)
      } else {
        counter.delete(num)
      }
    }
    matrix.push(row)
  }
  return matrix
}
