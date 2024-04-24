/**
 * https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} str
 * @return {string}
 */
function robotWithString(str) {
  const n = str.length
  const maxRight = new Array(n)
  let min = '{',
    minIndex = -1
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] <= min) {
      min = str[i]
      minIndex = i
    }
    maxRight[i] = minIndex
  }
  const paper = [],
    robot = []
  for (let i = 0; i < n; i++) {
    while (robot.length && str[maxRight[i]] >= robot[robot.length - 1]) {
      paper.push(robot.pop())
    }
    robot.push(str[i])
  }
  while (robot.length) {
    paper.push(robot.pop())
  }
  return paper.join('')
}
