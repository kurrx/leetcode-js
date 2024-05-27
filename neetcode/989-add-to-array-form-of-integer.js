/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
function addToArrayForm(num, k) {
  let digit = num.length - 1
  while (k >= 1) {
    let carried = k % 10,
      i = digit
    k = Math.floor(k / 10)
    while (carried && i >= 0) {
      num[i] += carried
      carried = Math.floor(num[i] / 10)
      num[i] %= 10
      i--
    }
    if (carried || (k !== 0 && digit === 0)) {
      num.unshift(carried)
    } else {
      digit--
    }
  }
  return num
}
