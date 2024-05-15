/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
  const n = gas.length
  let sum = 0,
    next,
    lowest = Infinity,
    lowestIdx = -1
  for (let i = 0; i < n; i++) {
    sum += gas[i] - cost[i]
    if (sum <= lowest) {
      lowest = sum
      lowestIdx = i
    }
  }
  return sum < 0 ? -1 : (lowestIdx + 1) % n
}
