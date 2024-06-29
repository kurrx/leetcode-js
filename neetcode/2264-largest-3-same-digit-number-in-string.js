/**
 * @param {string} num
 * @return {string}
 */
function largestGoodInteger(num) {
  function isLarger(i) {
    if (max === -1) return true
    if (num[i] < num[max]) return false
    else if (num[i] > num[max]) return true
    if (num[i + 1] < num[max + 1]) return false
    else if (num[i + 1] > num[max + 1]) return true
    if (num[i + 2] < num[max + 2]) return false
    else if (num[i + 2] > num[max + 2]) return true
    return false
  }
  let max = -1
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i + 1] === num[i + 2] && isLarger(i)) {
      max = i
    }
  }
  return max === -1 ? '' : num.slice(max, max + 3)
}
