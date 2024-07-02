/**
 * @param {number[]} ratings
 * @return {number}
 */
function candy(ratings) {
  const leftToRight = new Array(ratings.length).fill(1)
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      leftToRight[i] = leftToRight[i - 1] + 1
    }
  }
  let sum = leftToRight.at(-1)
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      leftToRight[i] = Math.max(leftToRight[i], leftToRight[i + 1] + 1)
    }
    sum += leftToRight[i]
  }
  return sum
}
