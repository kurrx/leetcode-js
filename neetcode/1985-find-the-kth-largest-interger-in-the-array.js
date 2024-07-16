/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
function kthLargestNumber(nums, k) {
  function gt(i, j) {
    if (nums[i].length !== nums[j].length) {
      return nums[i].length > nums[j].length
    }
    return nums[i] > nums[j]
  }
  function swap(i, j) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
  function partition(low, high) {
    const pivot = high
    let i = low - 1
    for (let j = low; j < high; j++) {
      if (gt(j, pivot)) {
        i++
        swap(i, j)
      }
    }
    swap(i + 1, pivot)
    return i + 1
  }
  function search(low, high) {
    const pivot = partition(low, high)
    if (pivot === k - 1) return nums[pivot]
    else if (pivot < k - 1) return search(pivot + 1, high)
    return search(low, pivot - 1)
  }
  return search(0, nums.length - 1)
}
