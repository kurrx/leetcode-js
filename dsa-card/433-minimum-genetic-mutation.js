/**
 * https://leetcode.com/problems/minimum-genetic-mutation
 *
 * TC: O(n)
 * SC: O(n)
 *
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
function minMutation(startGene, endGene, bank) {
  let steps = 0
  const queue = [startGene],
    seen = new Set()
  seen.add(startGene)

  while (queue.length) {
    const currentGenes = queue.length
    steps++

    for (let i = 0; i < currentGenes; i++) {
      const gene = queue.shift()
      const mutations = bank.filter(mutation => {
        if (seen.has(mutation)) return false
        let diff = 0
        for (let i = 0; i < 8; i++) {
          if (gene[i] !== mutation[i]) diff++
          if (diff > 1) return false
        }
        return diff === 1
      })
      for (const mutation of mutations) {
        if (mutation === endGene) return steps
        seen.add(mutation)
        queue.push(mutation)
      }
    }
  }

  return -1
}
