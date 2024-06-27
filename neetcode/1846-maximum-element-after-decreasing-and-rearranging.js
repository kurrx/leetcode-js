/**
 * @param {number[]} arr
 * @return {number}
 */
function maximumElementAfterDecrementingAndRearranging(arr) {
  arr.sort((a, b) => a - b)
  arr[0] = 1
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i - 1] - arr[i]) > 1) {
      arr[i] = arr[i - 1] + 1
    }
  }
  return arr.at(-1)
}
