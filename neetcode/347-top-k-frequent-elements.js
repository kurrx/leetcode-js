/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  function swap(i, j) {
    const temp = keys[i]
    keys[i] = keys[j]
    keys[j] = temp
  }
  function partition(low, high) {
    const pivot = keys[high],
      pivotFreq = counter.get(pivot)
    let i = low - 1
    for (let j = low; j < high; j++) {
      if (counter.get(keys[j]) > pivotFreq) {
        i++
        swap(i, j)
      }
    }
    swap(i + 1, high)
    return i + 1
  }
  function select(low, high) {
    const pivot = partition(low, high)
    if (pivot === k - 1) {
      return pivot
    } else if (pivot < k - 1) {
      return select(pivot + 1, high)
    }
    return select(low, pivot - 1)
  }

  // Count freqeuency
  const counter = new Map()
  for (const num of nums) {
    counter.set(num, (counter.get(num) ?? 0) + 1)
  }

  const keys = Array.from(counter.keys())

  // No need to compute heap because all numbers contains inside of map
  if (k === keys.length) return keys

  // Quick Select
  const from = select(0, keys.length - 1)
  return keys.slice(0, from + 1)
}
