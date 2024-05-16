/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow(nums, k) {
  function push(i, left) {
    while (stack.length && nums[stack.at(-1)] < nums[i]) stack.pop()
    while (stack.length && stack[0] < left) stack.shift()
    stack.push(i)
  }

  const n = nums.length,
    stack = [],
    answer = []
  for (let right = 0; right <= n; right++) {
    if (right >= k) {
      answer.push(nums[stack[0]])
      push(right, right - k + 1)
    } else {
      push(right, 0)
    }
  }
  return answer
}
