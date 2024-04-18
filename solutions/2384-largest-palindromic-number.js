/**
 * https://leetcode.com/problems/largest-palindromic-number
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {string} num
 * @return {string}
 */
function largestPalindromic(num) {
  const counter = new Array(10).fill(0)
  for (const digit of num) {
    counter[digit]++
  }

  let start = '',
    end = '',
    middle = ''
  for (let i = 9; i >= 0; i--) {
    if (!i && !start.length) counter[i] = 1

    let count = counter[i]
    if (count > 1) {
      const half = Math.floor(count / 2),
        str = String(i).repeat(half)
      count -= half * 2
      start = start + str
      end = str + end
    }

    counter[i] = count
    if (count % 2 === 1 && !middle) {
      middle = String(i)
    }
  }

  return start + middle + end
}
