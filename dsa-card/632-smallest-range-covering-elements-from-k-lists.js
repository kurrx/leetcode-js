/**
 * https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists
 *
 * TC: O(n * log(m))
 * SC: O(m)
 *
 * @param {number[][]} numbers
 * @return {number[]}
 */
function smallestRange(numbers) {
  const k = numbers.length
  const next = new Array(k)
  const heap = new Heap([], (i, j) => {
    return numbers[i][next[i]] - numbers[j][next[j]]
  })
  let left = 0,
    right = Number.MAX_SAFE_INTEGER,
    currMax = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < k; i++) {
    next[i] = 0
    heap.push(i)
    currMax = Math.max(currMax, numbers[i][0])
  }

  while (true) {
    const minIndex = heap.pop(),
      min = numbers[minIndex][next[minIndex]]
    if (currMax - min < right - left) {
      left = min
      right = currMax
    }
    next[minIndex]++
    if (next[minIndex] === numbers[minIndex].length) {
      break
    }
    heap.push(minIndex)
    currMax = Math.max(currMax, numbers[minIndex][next[minIndex]])
  }

  return [left, right]
}
