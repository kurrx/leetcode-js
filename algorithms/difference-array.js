/**
 * Difference Array on Finite Range
 *
 * Time Complexity: O(n + m)
 * Space Complexity: O(n + m)
 *
 * @param {number[][]} arr
 * @param {number} someConstraint
 * @return {boolean}
 */
function differenceArrayFinite(arr, someConstraint) {
  // Find max range
  let max = 0
  for (const trip of arr) {
    max = Math.max(max, trip[2])
  }

  // Construct difference array
  let arr = new Array(max + 1).fill(0)
  for (const [value, left, right] of arr) {
    arr[left] += value
    arr[right] -= value
  }

  // Solve problem (prefix sum can be used)
  let curr = 0
  for (let i = 0; i < arr.length; i++) {
    curr += arr[i]
    if (curr > someConstraint) {
      return false
    }
  }

  return true
}

/**
 * Difference Array on Infinite Range
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 *
 * @param {number[][]} arr
 * @return {number}
 */
function differenceArrayInfinite(arr) {
  let range = []
  for (const [range, impact] of lights) {
    range.push([range - impact, 1])
    range.push([range + impact + 1, -1])
  }

  range.sort((a, b) => a[0] - b[0])
  let answer = 0,
    curr = 0,
    max = 0
  for (const [position, value] of range) {
    curr += value
    if (curr > max) {
      max = curr
      answer = position
    }
  }

  return answer
}
