/**
 * https://leetcode.com/problems/get-equal-substrings-within-budget
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
function equalSubstring(s, t, maxCost) {
  const n = s.length

  let maxLength = 0,
    currentCost = 0,
    left = 0
  for (let right = 0; right < n; right++) {
    currentCost += asciiDiffCost(s, t, right)

    while (currentCost > maxCost) {
      currentCost -= asciiDiffCost(s, t, left)
      left++
    }

    const length = right - left + 1
    if (length > maxLength) {
      maxLength = length
    }
  }

  return maxLength
}

/**
 * @param {string} s
 * @param {string} t
 * @param {number} index
 * @returns {number}
 */
function asciiDiffCost(s, t, index) {
  return Math.abs(s.charCodeAt(index) - t.charCodeAt(index))
}
