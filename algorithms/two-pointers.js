/**
 * Two pointers: One Input - Opposite Ends
 *
 * Time Complexity: O(nk)
 * Where `k` is work done at each step inside of while loop, usually constant O(1)
 *
 * Space Complexity: O(1)
 * Usually it’s constant because we are using only 3 variables, but it depends on problem
 *
 * @param {number[]} arr
 * @returns {number}
 */
function twoPointersOneInputOppositeEnds(arr) {
  let answer = 0,
    left = 0,
    right = arr.length - 1
  while (left < right) {
    // Do some logic here with left and right
    if (SOME_CONDITION) {
      left++
    } else {
      right--
    }
    // Or maybe both left++ and right--
  }
  return answer
}

/**
 * Two pointers: Two Input - Exhaust Both
 *
 * Time Complexity: O(k(n + m))
 * Where `k` is work done at each step inside of while loop(s), usually constant O(1)
 *
 * Space Complexity: O(1)
 * Usually it’s constant because we are using only 3 variables, but it depends on problem
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number}
 */
function twoPointersTwoInputExhaustBoth(arr1, arr2) {
  let i = 0,
    j = 0,
    answer = 0
  while (i < arr1.length && j < arr2.length) {
    // Do some logic here with i and j
    if (SOME_CONDITION) {
      i++
    } else {
      j++
    }
    // Or maybe both i++ and j++
  }
  while (i < arr1.length) {
    // Do some logic here with i
    i++
  }
  while (j < arr2.length) {
    // Do some logic here with j
    j++
  }
  return answer
}
