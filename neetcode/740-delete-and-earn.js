/**
 * @param {number[]} nums
 * @return {number}
 */
function deleteAndEarn(nums) {
  let max = 0
  const freq = new Map()
  for (const num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + num)
    max = Math.max(max, num)
  }

  let twoBack = 0,
    oneBack = freq.get(1) ?? 0,
    temp
  for (let num = 2; num <= max; num++) {
    temp = oneBack
    oneBack = Math.max(oneBack, twoBack + (freq.get(num) ?? 0))
    twoBack = temp
  }
  return oneBack
}
