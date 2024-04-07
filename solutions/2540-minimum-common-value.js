/**
 * https://leetcode.com/problems/minimum-common-value
 *
 * TC: O(n + m)
 * SC: O(1)
 *
 * @param {number[]} numbers1
 * @param {number[]} numbers2
 * @return {number}
 */
function getCommon(numbers1, numbers2) {
  const n1 = numbers1.length,
    n2 = numbers2.length
  let pointer1 = 0,
    pointer2 = 0

  while (pointer1 < n1 && pointer2 < n2) {
    const num1 = numbers1[pointer1],
      num2 = numbers2[pointer2]
    if (num1 === num2) {
      return num1
    } else if (num1 < num2) {
      pointer1++
    } else {
      pointer2++
    }
  }

  return -1
}
