/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(arr) {
  const n = arr.length
  if (n % 2 === 0) return -1

  let left = 0,
    right = n - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2),
      leftPair = arr[mid] === arr[mid - 1],
      rightPair = arr[mid] === arr[mid + 1]
    if (!leftPair && !rightPair) return arr[mid]
    if ((mid - left + (leftPair ? -1 : 0)) % 2 === 1) {
      if (leftPair) right = mid - 2
      else right = mid - 1
    } else {
      if (rightPair) left = mid + 2
      else left = mid + 1
    }
  }
  return arr[left]
}
