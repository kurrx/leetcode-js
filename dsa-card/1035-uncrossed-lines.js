/**
 * https://leetcode.com/problems/uncrossed-lines
 *
 * TC: O(n*m)
 * SC: O(m)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function maxUncrossedLines(nums1, nums2) {
  const n = nums1.length,
    m = nums2.length
  let prevRow
  for (let i = 0; i < n; i++) {
    const nextRow = new Array(m)
    for (let j = 0; j < m; j++) {
      let answer
      if (nums1[i] === nums2[j]) {
        answer = 1
        if (i > 0 && j > 0) answer += prevRow[j - 1]
      } else {
        answer = 0
        if (i > 0) answer = Math.max(answer, prevRow[j])
        if (j > 0) answer = Math.max(answer, nextRow[j - 1])
      }
      nextRow[j] = answer
    }
    prevRow = nextRow
  }
  return prevRow[m - 1]
}
