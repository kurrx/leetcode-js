/**
 * @param {string} colors
 * @return {boolean}
 */
function winnerOfGame(colors) {
  const n = colors.length
  let canRemoveA = 0,
    canRemoveB = 0,
    counter = 0
  for (let i = 0; i <= n; i++) {
    if (colors[i] !== colors[i - 1]) {
      if (counter >= 3) {
        if (colors[i - 1] === 'A') canRemoveA += counter - 2
        else canRemoveB += counter - 2
      }
      counter = 0
    }
    counter++
  }
  return canRemoveA > canRemoveB
}
