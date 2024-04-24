/**
 * https://leetcode.com/problems/combination-sum-ii
 *
 * TC: O(2^(n*k))
 * SC: O(n*k)
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  function backtrack(curr, sum, start) {
    if (sum === target) {
      answers.push([...curr])
      return
    }

    for (let i = start; i < nums.length; i++) {
      const num = nums[i],
        count = counter.get(nums[i])
      if (!count) continue
      if (sum + num <= target) {
        curr.push(num)
        counter.set(num, count - 1)
        backtrack(curr, sum + num, i)
        counter.set(num, count)
        curr.pop()
      }
    }
  }
  candidates.sort((a, b) => a - b)

  const counter = new Map()
  for (const num of candidates) {
    counter.set(num, (counter.get(num) ?? 0) + 1)
  }
  const nums = Array.from(counter.keys())

  const answers = []
  backtrack([], 0, 0)
  return answers
}
