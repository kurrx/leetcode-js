/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
function minCost(colors, neededTime) {
  const n = colors.length
  let answer = 0,
    top = null
  for (let i = 0; i < n; i++) {
    if (top === null || colors[top] !== colors[i]) {
      top = i
    } else {
      if (neededTime[i] >= neededTime[top]) {
        answer += neededTime[top]
        top = i
      } else {
        answer += neededTime[i]
      }
    }
  }
  return answer
}
