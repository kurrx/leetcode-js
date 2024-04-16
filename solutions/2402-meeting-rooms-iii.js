/**
 * https://leetcode.com/problems/meeting-rooms-iii
 *
 * TC: O(m * (log(n) + log(m)))
 * SC: O(n)
 *
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
function mostBooked(n, meetings) {
  meetings.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))

  const counter = new Map()
  const rooms = new Heap()
  const ongoing = new Heap([], (a, b) =>
    a[1] === b[1] ? a[0] - b[0] : a[1] - b[1],
  )

  let maxRoom = 0,
    maxCount = 0,
    freeRoom = 0,
    count,
    room,
    start
  for (const [nextStart, nextEnd] of meetings) {
    while (!ongoing.isEmpty() && ongoing.peek()[1] <= nextStart) {
      rooms.push(ongoing.pop()[0])
    }

    if (!rooms.isEmpty() || freeRoom < n) {
      if (!rooms.isEmpty()) {
        room = rooms.pop()
      } else {
        room = freeRoom
        freeRoom++
      }
      start = nextStart
    } else {
      const ended = ongoing.pop()
      room = ended[0]
      start = Math.max(nextStart, ended[1])
    }

    count = (counter.get(room) ?? 0) + 1
    counter.set(room, count)
    if (count > maxCount || (count === maxCount && room < maxRoom)) {
      maxRoom = room
      maxCount = count
    }

    ongoing.push([room, start + nextEnd - nextStart])
  }

  return maxRoom
}
