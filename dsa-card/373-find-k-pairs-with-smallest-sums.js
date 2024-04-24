/**
 * https://leetcode.com/problems/find-k-pairs-with-smallest-sums
 *
 * TC: O(min(k*log(k), m*n*log(m*n)))
 * SC: O(min(k,m⋅n))
 *
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @param {number} k
 * @return {number[][]}
 */
function kSmallestPairs(numbers1, numbers2, k) {
  const n = numbers1.length,
    m = numbers2.length,
    answer = [],
    visited = new Set(['0:0'])
  const heap = new Heap(
    [[numbers1[0] + numbers2[0], 0, 0]],
    (a, b) => a[0] - b[0],
  )

  while (k-- > 0 && !heap.isEmpty()) {
    const top = heap.pop(),
      i = top[1],
      j = top[2]
    answer.push([numbers1[i], numbers2[j]])

    const nextI = i + 1,
      nextKeyI = `${nextI}:${j}`
    if (nextI < n && !visited.has(nextKeyI)) {
      heap.push([numbers1[nextI] + numbers2[j], nextI, j])
      visited.add(nextKeyI)
    }

    const nextJ = j + 1,
      nextKeyJ = `${i}:${nextJ}`
    if (nextJ < m && !visited.has(nextKeyJ)) {
      heap.push([numbers1[i] + numbers2[nextJ], i, nextJ])
      visited.add(nextKeyJ)
    }
  }

  return answer
}
