/**
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr) {
  const answer = new Array(arr.length)
  let maxRight = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    answer[i] = maxRight
    maxRight = Math.max(maxRight, arr[i])
  }
  return answer
}
