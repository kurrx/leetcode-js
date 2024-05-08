/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
function isNStraightHand(hand, groupSize) {
  const n = hand.length
  if (n % groupSize) return false
  hand.sort((a, b) => a - b)
  const counter = new Map()
  for (const num of hand) {
    counter.set(num, (counter.get(num) ?? 0) + 1)
  }
  const keys = Array.from(counter.keys())
  let i = 0,
    count
  while (i < keys.length) {
    if (!counter.has(keys[i])) {
      i++
      continue
    }
    for (let j = 0; j < groupSize; j++) {
      if (!counter.has(keys[i] + j)) return false
      count = counter.get(keys[i] + j) - 1
      if (!count) counter.delete(keys[i] + j)
      else counter.set(keys[i] + j, count)
    }
    if (!counter.has(keys[i])) i++
  }
  return true
}
