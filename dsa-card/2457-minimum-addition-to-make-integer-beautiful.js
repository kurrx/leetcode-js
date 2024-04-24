/**
 * https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
function makeIntegerBeautiful(n, target) {
  let sum = 0,
    x = 0

  const arr = []
  while (n >= 1) {
    const digit = n % 10
    sum += digit
    arr.push(digit)
    n = Math.floor(n / 10)
  }

  let reminder
  for (let i = 0; i < arr.length && sum > target; i++) {
    if (!arr[i]) continue

    reminder = 10 - arr[i]
    x += reminder * 10 ** i

    for (let j = i; j < arr.length && reminder; j++) {
      const digitSum = arr[j] + reminder
      sum -= arr[j]
      reminder = Math.floor(digitSum / 10)
      arr[j] = digitSum % 10
      sum += arr[j]
    }
    if (reminder) {
      arr.push(reminder)
      sum += reminder
    }
  }
  return x
}
