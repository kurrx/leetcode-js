/**
 * @param {string} s
 * @return {string[][]}
 */
function partition(s) {
  function isPalindrome(left, right) {
    while (left < right) if (s[left++] !== s[right--]) return false
    return true
  }
  function backtrack(curr = [], start = 0) {
    if (start === n) {
      answer.push([...curr])
      return
    }
    for (let end = start; end < n; end++) {
      if (isPalindrome(start, end)) {
        curr.push(s.slice(start, end + 1))
        backtrack(curr, end + 1)
        curr.pop()
      }
    }
  }
  const n = s.length,
    answer = []
  backtrack()
  return answer
}
