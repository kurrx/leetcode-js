/**
 * https://leetcode.com/problems/range-sum-query-immutable
 *
 * TC: O(1)
 * SC: O(n)
 */

/**
 * @param {number[]} numbers
 */
var NumArray = function (numbers) {
  this.numbers = numbers
  this.prefix = [numbers[0]]

  const n = numbers.length
  for (let i = 1; i < n; i++) {
    this.prefix.push(numbers[i] + this.prefix[i - 1])
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefix[right] - this.prefix[left] + this.numbers[left]
}
