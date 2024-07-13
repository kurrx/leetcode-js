/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b)
  let left = 0,
    right = people.length - 1,
    answer = 0
  while (left < right) {
    answer++
    if (people[left] + people[right] <= limit) {
      left++
      right--
    } else {
      right--
    }
  }
  if (left === right) {
    answer++
  }
  return answer
}
