/**
 * https://leetcode.com/problems/simplify-path
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
  const stack = []
  const cd = path.split('/')
  for (const dir of cd) {
    if (!dir || dir === '.') continue
    if (dir === '..') {
      if (stack.length) {
        stack.pop()
      }
    } else {
      stack.push(dir)
    }
  }
  return '/' + stack.join('/')
}
