/**
 * https://leetcode.com/problems/dota2-senate
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
  const n = senate.length
  const dQueue = [],
    rQueue = []
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'D') {
      dQueue.push(i)
    } else {
      rQueue.push(i)
    }
  }

  while (dQueue.length && rQueue.length) {
    const dTurn = dQueue.shift(),
      rTurn = rQueue.shift()
    if (dTurn < rTurn) {
      dQueue.push(dTurn + n)
    } else {
      rQueue.push(rTurn + n)
    }
  }

  return rQueue.length === 0 ? 'Dire' : 'Radiant'
}
