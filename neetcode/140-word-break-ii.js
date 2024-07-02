/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
function wordBreak(s, wordDict) {
  function backtrack(start, curr) {
    if (start >= s.length) {
      answer.push(curr)
      return
    }
    for (let length = 1; length <= s.length - start; length++) {
      const str = s.slice(start, start + length)
      if (set.has(str)) {
        backtrack(start + length, curr + (curr ? ' ' : '') + str)
      }
    }
  }
  const answer = [],
    set = new Set(wordDict)
  backtrack(0, '')
  return answer
}
