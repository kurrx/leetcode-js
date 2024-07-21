/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
  function backtrack(curr) {
    if (curr.length === nums.length) {
      answers.push([...curr])
      return
    }

    for (const [num, count] of counter) {
      if (!count) continue
      curr.push(num)
      counter.set(num, count - 1)
      backtrack(curr)
      counter.set(num, count)
      curr.pop()
    }
  }
  const counter = new Map()
  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1)
  }
  const answers = []
  backtrack([])
  return answers
}
