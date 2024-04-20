/**
 * https://leetcode.com/problems/maximum-tastiness-of-candy-basket
 *
 * TC: O(n*log(s))
 * SC: O(1)
 *
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
function maximumTastiness(price, k) {
  price.sort((a, b) => a - b)

  let left = 0,
    right = price[price.length - 1] - price[0]
  while (left <= right) {
    const minDiff = Math.floor((left + right) / 2)

    let lastTaken = price[0],
      count = 1
    for (let i = 1; i < price.length; i++) {
      if (Math.abs(price[i] - lastTaken) >= minDiff) {
        lastTaken = price[i]
        count++
      }
    }

    if (count >= k) left = minDiff + 1
    else right = minDiff - 1
  }
  return right
}
