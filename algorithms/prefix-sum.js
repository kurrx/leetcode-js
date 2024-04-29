/**
 * Build prefix sum array
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {number[]} arr
 * @returns {number[]}
 */
function buildPrefixSum(arr) {
  const prefix = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    prefix.push(prefix.at(-1) + arr[i])
  }
  return prefix
}
