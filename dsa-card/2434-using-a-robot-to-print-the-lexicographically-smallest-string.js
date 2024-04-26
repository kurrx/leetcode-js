/**
 * https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} str
 * @return {string}
 */
function robotWithString(s) {
  const n = s.length,
    t = [],
    counter = new Array(26)
  let idx,
    min = 25,
    p = '',
    j = 0
  for (let i = 0; i < n; i++) {
    idx = s.charCodeAt(i) - A_CODE
    min = Math.min(min, idx)
    counter[idx] = (counter[idx] ?? 0) + 1
  }
  while (p.length < s.length) {
    while (j < n && t.at(-1) !== min) {
      idx = s.charCodeAt(j) - A_CODE
      t.push(idx)
      counter[idx]--
      j++
    }
    p += String.fromCharCode(t.pop() + A_CODE)
    for (let i = min; i < 26; i++) {
      if (counter[i]) {
        min = i
        break
      }
    }
    if (t.length) min = Math.min(min, t.at(-1))
  }
  return p
}
