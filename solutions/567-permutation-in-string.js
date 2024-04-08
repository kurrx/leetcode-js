const A_CODE = 'a'.charCodeAt(0)
/**
 * https://leetcode.com/problems/permutation-in-string
 *
 * TC: O(n+m)
 * SC: O(1)
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  const m = s1.length
  const n = s2.length
  if (n < m) return false

  const s1Map = Array(26).fill(0)
  const s2Map = Array(26).fill(0)
  for (let i = 0; i < m; i++) {
    s1Map[s1.charCodeAt(i) - A_CODE]++
    s2Map[s2.charCodeAt(i) - A_CODE]++
  }

  let count = 0
  for (let i = 0; i < 26; i++) {
    if (s1Map[i] === s2Map[i]) {
      count++
    }
  }

  for (let right = m; right < n; right++) {
    if (count === 26) {
      return true
    }

    const rightIndex = s2.charCodeAt(right) - A_CODE
    s2Map[rightIndex]++
    if (s1Map[rightIndex] === s2Map[rightIndex]) {
      count++
    } else if (s1Map[rightIndex] + 1 === s2Map[rightIndex]) {
      count--
    }

    const leftIndex = s2.charCodeAt(right - m) - A_CODE
    s2Map[leftIndex]--
    if (s1Map[leftIndex] === s2Map[leftIndex]) {
      count++
    } else if (s1Map[leftIndex] - 1 === s2Map[leftIndex]) {
      count--
    }
  }

  return count === 26
}
