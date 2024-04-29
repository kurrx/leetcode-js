/**
 * Time Complexity: O(nk)
 * Where `k` is work done at each step inside of while loop, usually constant O(1)
 *
 * Space Complexity: O(1)
 * Usually it’s constant because we are using only 3 variables, but it depends on problem
 */

/**
 * Sliding Window: General
 *
 * @param {number[]} arr
 * @returns {number}
 */
function slidingWindowGeneral(arr) {
  let left = 0,
    ans = 0,
    curr = 0
  for (let right = 0; right < arr.length; right++) {
    // Do logic here to add arr[right] to curr
    while (WINDOW_CONDITION_BROKEN) {
      // Remove arr[left] from curr
      left++
    }
    // Update ans
  }
  return ans
}

/**
 * Sliding Window: Number of Subarrays
 *
 * @param {number[]} arr
 * @returns {number}
 */
function slidingWindowNumberOfSubarrays(arr) {
  let left = 0,
    count = 0,
    curr = 0
  for (let right = 0; right < arr.length; right++) {
    // Do logic here to add arr[right] to curr
    while (WINDOW_CONDITION_BROKEN) {
      // Remove arr[left] from curr
      left++
    }
    // Update count, eg. count += right - left + 1
  }
  return count
}

/**
 * Sliding Window: Fixed Window Size
 *
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
function slidingWindowFixedWindowSize(arr, k) {
  let curr = 0
  // Build the first window
  for (let i = 0; i < k; i++) {
    // Do something with curr or other variables to build first window
  }
  // Probably equal to curr here depending on the problem
  let answer = 0
  for (let i = k; i < arr.length; i++) {
    // Add arr[i] to window
    // Remove arr[i - k] from window
    // Update answer
  }
  return answer
}
