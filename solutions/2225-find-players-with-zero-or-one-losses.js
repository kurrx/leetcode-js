/**
 * https://leetcode.com/problems/find-players-with-zero-or-one-losses
 *
 * TC: O(n*log(n))
 * SC: O(n)
 *
 * @param {number[][]} matches
 * @return {number[][]}
 */
function findWinners(matches) {
  const players = new Map()
  for (const [winner, loser] of matches) {
    if (!players.has(winner)) {
      players.set(winner, 0)
    }
    players.set(loser, (players.get(loser) || 0) + 1)
  }

  const winners = [[], []]
  for (const [player, loses] of players) {
    if (loses === 0) {
      winners[0].push(player)
    } else if (loses === 1) {
      winners[1].push(player)
    }
  }

  winners.forEach(w => w.sort((a, b) => a - b))
  return winners
}
