/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
function findRotateSteps(ring, key) {
  function rotate(from, to) {
    const stepsBetween = Math.abs(to - from)
    return Math.min(stepsBetween, ring.length - stepsBetween)
  }
  function dp(i, j) {
    if (j >= key.length) return 0
    const memoKey = `${i}-${j}`
    if (memo.has(memoKey)) return memo.get(memoKey)
    let answer = Infinity
    for (const index of indices.get(key[j])) {
      answer = Math.min(answer, rotate(i, index) + dp(index, j + 1) + 1)
    }
    memo.set(memoKey, answer)
    return answer
  }
  const indices = new Map(),
    memo = new Map()
  for (let i = 0; i < ring.length; i++) {
    if (!indices.has(ring[i])) {
      indices.set(ring[i], [])
    }
    indices.get(ring[i]).push(i)
  }
  return dp(0, 0)
}
