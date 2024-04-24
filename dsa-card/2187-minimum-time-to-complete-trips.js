/**
 * https://leetcode.com/problems/minimum-time-to-complete-trips
 *
 * TC: O(n*log(s))
 * SC: O(1)
 *
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
function minimumTime(time, totalTrips) {
  let minTimePerTrip = Number.MAX_SAFE_INTEGER
  for (const timePerTrip of time) {
    if (timePerTrip < minTimePerTrip) {
      minTimePerTrip = timePerTrip
    }
  }

  let left = 1,
    right = totalTrips * minTimePerTrip
  while (left < right) {
    const currTime = Math.floor((left + right) / 2)

    let trips = 0
    for (const timePerTrip of time) {
      trips += Math.floor(currTime / timePerTrip)
    }

    if (trips >= totalTrips) right = currTime
    else left = currTime + 1
  }
  return left
}
