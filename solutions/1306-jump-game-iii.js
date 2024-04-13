/**
 * https://leetcode.com/problems/jump-game-iii
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
function canReach(arr, start) {
  const n = arr.length,
    seen = new Array(n),
    queue = [start]

  while (queue.length) {
    const index = queue.shift(),
      val = arr[index],
      neighbors = [index - val, index + val]

    for (const nextIndex of neighbors) {
      if (nextIndex >= 0 && nextIndex < n && !seen[nextIndex]) {
        if (arr[nextIndex] === 0) return true
        seen[nextIndex] = true
        queue.push(nextIndex)
      }
    }
  }

  return false
}
