/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
function carFleet(target, position, speed) {
  const n = position.length
  const merged = []
  for (let i = 0; i < n; i++) merged.push([position[i], speed[i]])
  merged.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
  const stack = []
  for (let i = 0; i < n; i++) {
    const time = (target - merged[i][0]) / merged[i][1]
    while (stack.length && stack.at(-1) <= time) {
      stack.pop()
    }
    stack.push(time)
  }
  return stack.length
}
