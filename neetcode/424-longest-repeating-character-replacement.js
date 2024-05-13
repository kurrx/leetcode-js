const A_CODE = 'A'.charCodeAt(0)
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
function characterReplacement(s, k) {
  function isValidWindow(total) {
    let max = 0,
      sum = 0
    for (let i = 0; i < 26; i++) if (counter[i] > max) max = counter[i]
    return total - max <= k
  }

  const n = s.length,
    counter = new Array(26).fill(0)
  let max = 0,
    maxFreq = 0
  for (let right = 0, left = 0; right < n; right++) {
    maxFreq = Math.max(maxFreq, ++counter[s.charCodeAt(right) - A_CODE])
    while (right - left + 1 - maxFreq > k) {
      counter[s.charCodeAt(left) - A_CODE]--
      left++
    }
    max = Math.max(max, right - left + 1)
  }
  return max
}
