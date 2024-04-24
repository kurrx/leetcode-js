/**
 * https://leetcode.com/problems/longest-subsequence-with-limited-sum
 *
 * TC: O((n + m)*log(n))
 * SC: O(log(n))
 *
 * @param {number[]} numbers
 * @param {number[]} queries
 * @return {number[]}
 */
function answerQueries(numbers, queries) {
  const n = numbers.length,
    m = queries.length,
    answer = new Array(m)

  numbers.sort((a, b) => a - b)
  for (let i = 1; i < n; i++) {
    numbers[i] += numbers[i - 1]
  }

  for (let i = 0; i < m; i++) {
    let left = 0,
      right = numbers.length - 1
    while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      if (queries[i] < numbers[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    answer[i] = left
  }
  return answer
}
