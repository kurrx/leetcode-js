/**
 * @param {number[]} temp
 * @return {number[]}
 */
function dailyTemperatures(temp) {
  const n = temp.length,
    answer = new Array(n).fill(0),
    stack = []
  let j
  for (let i = 0; i < n; i++) {
    while (stack.length && temp[stack.at(-1)] < temp[i]) {
      j = stack.pop()
      answer[j] = i - j
    }
    stack.push(i)
  }
  return answer
}
