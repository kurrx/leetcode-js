/**
 * https://leetcode.com/problems/video-stitching
 *
 * TC: O(n*log(n))
 * SC: O(log(n))
 *
 * @param {number[][]} clips
 * @param {number} time
 * @return {number}
 */
function videoStitching(clips, time) {
  const n = clips.length
  clips.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))

  let count = 0,
    currTime = 0,
    i = 0
  while (i < n && currTime < time) {
    let found = false
    while (i < n && currTime >= clips[i][0]) {
      if (clips[i][1] >= time) return count + 1
      i++
      found = true
    }
    if (!found) break
    currTime = clips[i - 1][1]
    count++
  }
  return currTime >= time ? count : -1
}
