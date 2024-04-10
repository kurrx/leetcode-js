/**
 * https://leetcode.com/problems/asteroid-collision
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
  const s = [],
    n = asteroids.length
  let curr
  for (let i = 0; i < n; i++) {
    curr = asteroids[i]
    if (!s.length || !isCollide(s[s.length - 1], curr)) {
      s.push(curr)
    } else {
      while (s.length && curr !== null && isCollide(s[s.length - 1], curr)) {
        const top = s.pop()
        const topAbs = Math.abs(top)
        const currAbs = Math.abs(curr)
        if (topAbs > currAbs) {
          curr = top
        } else if (topAbs === currAbs) {
          curr = null
        }
      }
      if (curr !== null) {
        s.push(curr)
      }
    }
  }
  return s
}

/**
 *
 * @param {number} n1
 * @param {number} n2
 * @returns {boolean}
 */
function isCollide(n1, n2) {
  return n1 > 0 && n2 < 0
}
