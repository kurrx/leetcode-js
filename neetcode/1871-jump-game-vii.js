/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
function canReach(s, minJump, maxJump) {
  if (s.at(0) !== '0' || s.at(-1) !== '0') return false
  const n = s.length,
    queue = [0]
  let farthest = 0
  while (queue.length) {
    const i = queue.shift()
    const start = Math.max(i + minJump, farthest + 1)
    for (let j = start; j <= Math.min(i + maxJump, n - 1); j++) {
      if (s[j] === '0') {
        if (j === n - 1) return true
        queue.push(j)
      }
    }
    farthest = i + maxJump
  }
  return false
}
