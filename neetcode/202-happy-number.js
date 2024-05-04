/**
 * @param {number} n
 * @return {boolean}
 */
function isHappy(n) {
  function getNext(number) {
    let sum = 0
    while (number) {
      sum += Math.pow(number % 10, 2)
      number = Math.floor(number / 10)
    }
    return sum
  }
  let slow = n,
    fast = getNext(n)
  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow)
    fast = getNext(getNext(fast))
  }
  return fast === 1
}
