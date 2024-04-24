/**
 * https://leetcode.com/problems/minimum-moves-to-reach-target-score
 *
 * TC: O(n)
 * SC: O(1)
 *
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
function minMoves(target, maxDoubles) {
  let curr = target,
    moves = 0
  while (maxDoubles && curr > 1) {
    if (curr % 2 === 0) {
      curr /= 2
      maxDoubles--
    } else {
      curr--
    }
    moves++
  }
  return moves + (curr - 1)
}
