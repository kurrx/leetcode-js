const SIZE = 3
/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
function mergeTriplets(triplets, target) {
  const n = triplets.length
  let found = new Array(SIZE).fill(false),
    match = 0,
    candidate,
    matched
  for (let i = 0; i < n; i++) {
    candidate = true
    matched = false
    for (let j = 0; j < SIZE; j++) {
      if (triplets[i][j] > target[j]) {
        candidate = false
        break
      }
      if (triplets[i][j] === target[j]) {
        matched = true
      }
    }
    if (!candidate || !matched) continue
    for (let j = 0; j < SIZE; j++) {
      if (!found[j] && triplets[i][j] === target[j]) {
        found[j] = true
        match++
        if (match === SIZE) return true
      }
    }
  }
  return false
}
