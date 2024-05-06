/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  function getMedian(arr, size) {
    const mid = Math.floor(size / 2)
    if (size % 2 === 1) {
      return arr[mid]
    }
    return (arr[mid - 1] + arr[mid]) / 2
  }

  const n = nums1.length,
    m = nums2.length
  // When both arrays is empty median is 0
  if (!n && !m) return 0
  // When one of the arrays is empty then return median of other array
  if (!n) return getMedian(nums2, m)
  if (!m) return getMedian(nums1, n)
  // Pseudo merge without extra space
  const mergedSize = n + m,
    targetIndex1 = Math.floor(mergedSize / 2),
    targetIndex2 = mergedSize % 2 === 1 ? targetIndex1 : targetIndex1 - 1
  let k = 0,
    i = 0,
    j = 0,
    nextToPush,
    target1,
    target2
  while (i < n || j < m) {
    if ((i < n && j >= m) || nums1[i] <= nums2[j]) {
      nextToPush = nums1[i++]
    } else {
      nextToPush = nums2[j++]
    }
    if (k === targetIndex2) {
      target2 = nextToPush
    }
    if (k === targetIndex1) {
      target1 = nextToPush
      break
    }
    k++
  }
  return (target1 + target2) / 2
}
// [1,3] [2]
