/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
  if (!amount) return 0
  let answer = 0,
    temp
  const queue = [amount],
    seen = new Set([amount])
  while (queue.length) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const amount = queue.shift()
      if (!amount) return answer
      for (let j = 0; j < coins.length; j++) {
        if (coins[j] <= amount) {
          temp = amount - coins[j]
          if (!seen.has(temp)) {
            seen.add(temp)
            queue.push(temp)
          }
        }
      }
    }
    answer++
  }
  return -1
}
