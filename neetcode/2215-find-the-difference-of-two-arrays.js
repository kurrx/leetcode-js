/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
  const set1 = new Set(nums1),
    set2 = new Set(nums2)
  return [
    Array.from(set1).filter(num => !set2.has(num)),
    Array.from(set2).filter(num => !set1.has(num)),
  ]
}
