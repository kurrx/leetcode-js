const A_CODE = 'a'.charCodeAt(0)
/**
 * @param {string[]} ideas
 * @return {number}
 */
function distinctNames(ideas) {
  const groups = new Array(26)
  for (let i = 0; i < 26; i++) {
    groups[i] = new Set()
  }
  for (let i = 0; i < ideas.length; i++) {
    groups[ideas[i].charCodeAt(0) - A_CODE].add(ideas[i].slice(1))
  }
  let count = 0
  for (let i = 0; i < 26; i++) {
    for (let j = i + 1; j < 26; j++) {
      let mutual = 0
      for (const idea of groups[i]) {
        if (groups[j].has(idea)) {
          mutual++
        }
      }
      count += 2 * (groups[i].size - mutual) * (groups[j].size - mutual)
    }
  }
  return count
}
