/**
 * Find minimum on solution space using Binary Search
 *
 * @param {number[]} arr
 * @returns {number}
 */
function greedyBinarySearchMin(arr) {
  function check(x) {
    // this function is implemented depending on the problem
    return BOOLEAN
  }

  let left = MINIMUM_POSSIBLE_ANSWER,
    right = MAXIMUM_POSSIBLE_ANSWER
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (check(mid)) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}

/**
 * Find maximum on solution space using Binary Search
 *
 * @param {number[]} arr
 * @returns {number}
 */
function greedyBinarySearchMax(arr) {
  function check(x) {
    // this function is implemented depending on the problem
    return BOOLEAN
  }

  let left = MINIMUM_POSSIBLE_ANSWER,
    right = MAXIMUM_POSSIBLE_ANSWER
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (check(mid)) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return right
}
