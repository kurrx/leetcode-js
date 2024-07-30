/**
 * @param {number[]} nums
 * @return {number}
 */
function minOperations(nums) {
  const counter = new Map()
  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1)
  }
  let answer = 0
  for (const c of counter.values()) {
    if (c === 1) return -1
    answer += Math.ceil(c / 3)
  }
  return answer
}
