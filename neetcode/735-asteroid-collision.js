function asteroidCollision(asteroids) {
  const s = [],
    n = asteroids.length
  let curr
  for (let i = 0; i < n; i++) {
    curr = asteroids[i]
    if (!s.length || !isCollide(s.at(-1), curr)) {
      s.push(curr)
    } else {
      while (s.length && curr !== null && isCollide(s.at(-1), curr)) {
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

function isCollide(n1, n2) {
  return n1 > 0 && n2 < 0
}
