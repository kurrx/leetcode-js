/**
 * https://leetcode.com/problems/non-decreasing-subsequences
 *
 * TC: O(n*2^n)
 * SC: O(n)
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
function findSubsequences(nums) {
  function backtrack(curr = [], start = 0, added = new Set()) {
    if (curr.length >= 2) {
      const key = curr.join(':')
      if (!added.has(key)) {
        answers.push([...curr])
        added.add(key)
      }
    }
    for (let i = start; i < nums.length; i++) {
      if (curr.length === 0 || nums[i] >= curr.at(-1)) {
        curr.push(nums[i])
        backtrack(curr, i + 1, added)
        curr.pop()
      }
    }
  }
  const answers = []
  backtrack()
  return answers
}
