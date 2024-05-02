/**
 * Backtracking template
 *
 * Time Complexity: O(n^k)
 * Space Complexity: O(n^k)
 *
 * @param {number[]} arr
 * @returns {number}
 */
function generate(arr) {
  function backtrack(curr, OTHER_ARGUMENTS) {
    if (BASE_CASE) {
      // Modify answer
      return
    }

    let answer = 0
    for (const num of arr) {
      // Modify the current state
      answer += backtrack(curr, OTHER_ARGUMENTS)
      // Undo the modification of the current state
    }

    return answer
  }
  return backtrack(0)
}
