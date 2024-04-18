/**
 * https://leetcode.com/problems/maximum-matching-of-players-with-trainers
 *
 * TC: O(n*log(n) + m*log(m))
 * SC: O(log(n) + log(m))
 *
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
function matchPlayersAndTrainers(players, trainers) {
  const n = players.length,
    m = trainers.length
  players.sort((a, b) => a - b)
  trainers.sort((a, b) => a - b)

  let playerIndex = 0,
    trainerIndex = 0
  while (playerIndex < n && trainerIndex < m) {
    if (players[playerIndex] <= trainers[trainerIndex]) {
      playerIndex++
    }
    trainerIndex++
  }
  return playerIndex
}
