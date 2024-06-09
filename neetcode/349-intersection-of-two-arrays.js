/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  let set1 = new Set(nums1),
    set2 = new Set(nums2)
  if (set2.size < set1.size) {
    ;[set1, set2] = [set2, set1]
  }
  for (const num of set1) {
    if (!set2.has(num)) {
      set1.delete(num)
    }
  }
  return Array.from(set1)
}
