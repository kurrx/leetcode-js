const MAX_TYPES = 2
/**
 * @param {number[]} fruits
 * @return {number}
 */
function totalFruit(fruits) {
  const n = fruits.length,
    types = new Map()
  let max = 0
  for (let left = 0, right = 0; right < n; right++) {
    types.set(fruits[right], (types.get(fruits[right]) ?? 0) + 1)
    while (types.size > MAX_TYPES) {
      const count = types.get(fruits[left]) - 1
      if (!count) types.delete(fruits[left])
      else types.set(fruits[left], count)
      left++
    }
    max = Math.max(max, right - left + 1)
  }
  return max
}
