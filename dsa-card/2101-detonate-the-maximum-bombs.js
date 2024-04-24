/**
 * https://leetcode.com/problems/detonate-the-maximum-bombs
 *
 * TC: O(n^3)
 * SC: O(n^2)
 *
 * @param {number[][]} bombs
 * @return {number}
 */
function maximumDetonation(bombs) {
  const n = bombs.length,
    chains = new Array(n)

  for (let i = 0; i < n; i++) {
    chains[i] = []
    const b1 = bombs[i]
    for (let j = 0; j < n; j++) {
      if (i === j) continue
      const b2 = bombs[j]
      const distance = Math.sqrt(
        Math.pow(b1[0] - b2[0], 2) + Math.pow(b1[1] - b2[1], 2),
      )
      if (distance <= b1[2]) {
        chains[i].push(j)
      }
    }
  }

  let maxDetonated = 0
  for (let i = 0; i < n; i++) {
    let detonated = 1
    const queue = [i],
      exploded = new Set([i])

    while (queue.length) {
      const chain = chains[queue.shift()]
      for (const bomb of chain) {
        if (!exploded.has(bomb)) {
          queue.push(bomb)
          exploded.add(bomb)
          detonated++
        }
      }
    }

    maxDetonated = Math.max(maxDetonated, detonated)
  }

  return maxDetonated
}
