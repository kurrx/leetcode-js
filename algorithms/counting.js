/**
 * Counting: General
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function countingGeneral(arr) {
  const counter = new Map()
  let answer = 0
  for (let i = 0; i < s.length; i++) {
    counter.set(arr[i], (counter.get(arr[i]) ?? 0) + 1)
  }
  return answer
}

/**
 * Counting: Count the number of subarrays with an "exact" constraint
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function countingNumberOfSubarraysWithExactCriteria(nums, k) {
  const counts = new Map()
  counts.set(0, 1)
  let answer = 0,
    curr = 0
  for (const num of nums) {
    // Do some logic here to change curr
    answer += counts.get(curr - k) ?? 0
    counts.set(curr, (counts.get(curr) ?? 0) + 1)
  }
  return answer
}
