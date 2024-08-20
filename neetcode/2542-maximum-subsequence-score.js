/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
function maxScore(nums1, nums2, k) {
  function lt(i, j) {
    return heap[i] < heap[j]
  }
  function swap(i, j) {
    ;[heap[i], heap[j]] = [heap[j], heap[i]]
  }
  function push(el) {
    heap.push(el)
    let curr = heap.length - 1
    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2)
      if (lt(curr, parent)) {
        swap(curr, parent)
        curr = parent
      } else {
        break
      }
    }
  }
  function pop() {
    swap(0, heap.length - 1)
    const top = heap.pop()
    let curr = 0
    while (2 * curr + 1 < heap.length) {
      const left = 2 * curr + 1,
        right = 2 * curr + 2,
        min = right < heap.length && lt(right, left) ? right : left
      if (lt(min, curr)) {
        swap(min, curr)
        curr = min
      } else {
        break
      }
    }
    return top
  }
  const n = nums1.length
  const heap = []
  const zip = nums1.map((n1, i) => [n1, nums2[i]]).sort((a, b) => b[1] - a[1])
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += zip[i][0]
    push(zip[i][0])
  }
  let answer = sum * zip[k - 1][1]
  for (let i = k; i < n; i++) {
    sum += zip[i][0] - pop()
    push(zip[i][0])
    answer = Math.max(answer, sum * zip[i][1])
  }
  return answer
}
